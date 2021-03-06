package es.upm.oeg.protect.rightsearch;

import org.apache.jena.rdf.model.Property;
import org.apache.jena.rdf.model.RDFNode;
import org.apache.jena.rdf.model.Resource;
import org.apache.jena.rdf.model.Statement;
import org.apache.jena.rdf.model.StmtIterator;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;
import org.apache.jena.ontology.Individual;
import org.apache.jena.ontology.OntClass;
import org.apache.jena.ontology.OntModel;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.rdf.model.ResIterator;
import org.apache.jena.util.iterator.ExtendedIterator;
import org.json.JSONObject;
import org.json.JSONArray;
/**
 *
 * @author vroddon
 */
public class RightsFinder {

    //Main for testing purposes
    public static void main(String args[]) {
        String searchterm = "access";
        String find = RightsFinder.find(searchterm);
        System.out.println("===================================");
        System.out.println("Searching for: " + searchterm);
        System.out.println("Found: " + find);
    }

    public static List<Model> models = null;
    public static Map<Model, String> modelnames = new HashMap();
    public static boolean initialized = false;

    public static void init() {
        if (initialized) {
            return;
        }
        initialized = true;

        models = new ArrayList();
        try {
            /*
            RightsFinder rf = new RightsFinder();
            String[] ontologynames = rf.getResourceListing(RightsFainder.class, "ontologies/");
            for (String ontologyname : ontologynames) {
                System.out.println("Trying to read " + ontologyname);
                Model model = readEntry(ontologyname);
                if (model != null) {
                    models.add(model);
                }
            }*/

            String uri = "http://cosasbuenas.es/static/def/odrl.ttl";
            String base = "http://cosasbuenas.es/static/def/";
            String ontos[] = {"odrl.ttl", "air.ttl", "cloud.ttl", "dpo.ttl", "dpv-gdpr.ttl", "dpv.ttl", "func.ttl", "gconsent.ttl", "gdprov.ttl", "gdprtext.ttl", "p3p.ttl", "ppo.ttl", "splog.ttl"};

            for (String onto : ontos) {
                String uonto = base + onto;
                Model omodel = readModel(uonto);
                if (omodel != null) {
                    modelnames.put(omodel, onto.replace(".ttl", ""));
                    models.add(omodel);
                }
            }
            for (Model m : modelnames.keySet()) {
                System.out.println("CArgado: " + modelnames.get(m));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * Gets the first value of a property
     */
    public static String getFirstPropertyValue(Model model, String sujeto, String predicado) {
        String value = "";
        Resource resource = model.getResource(sujeto);
        Property property = model.getProperty(predicado);

        StmtIterator it = resource.listProperties(property);
        if (it.hasNext()) {
            Statement stmt2 = it.nextStatement();
            RDFNode nodo = stmt2.getObject();
            if (nodo.isLiteral()) {
                value = nodo.asLiteral().getLexicalForm();
            } else {
                value = nodo.toString();
            }
            return value;
        }
        return "";
    }

    public static String find(String text) {
        JSONObject obj = new JSONObject();
        JSONArray jarr = new JSONArray();
        ObjectMapper mapper = new ObjectMapper();

        if (models == null) {
            init();
        }
        Set<String> elements = new HashSet();
        for (Model model : models) {
            List<SearchResult> results = findElementInModel(model, text);
            for (SearchResult sr : results) {
                if (sr.element == null) {
                    sr.element = "";
                }
                if (elements.contains(sr.element)) {
                    continue;
                }
                elements.add(sr.element);

                JSONObject jsr = new JSONObject(sr);
                jarr.put(jsr);
//                String result = sr.element;
//                return result;
            }
        }
        return jarr.toString();
    }

    public static String getDescription(Model model, String name) {
        String desc = getFirstPropertyValue(model, name, "http://www.w3.org/2004/02/skos/core#definition");
        if (desc.isEmpty()) {
            desc = getFirstPropertyValue(model, name, "http://www.w3.org/2000/01/rdf-schema#comment");
            if (desc.isEmpty()) {
                desc = getFirstPropertyValue(model, name, "http://www.w3.org/2000/01/rdf-schema#label");
                if (desc.isEmpty()) {
                    desc = "";
                }
            }
        }
        return desc;
    }

    private static boolean inList(List<SearchResult> list, String element) {
        for (SearchResult sr : list) {
            if (sr.element != null && sr.element.equals(element)) {
                return true;
            }
        }
        return false;
    }

    static List<SearchResult> findElementInModel(Model model, String text) {
        List<SearchResult> list = new ArrayList();
        OntModel omodel = (OntModel) model;
        ExtendedIterator classes = omodel.listClasses();
        String ontologyname = modelnames.get(model);
        if (ontologyname == null) {
            ontologyname = "n/a";
        }

        //LOOKING THROUGH THE RDFS:CLASSES
        ResIterator rdfsclases = model.listResourcesWithProperty(model.createProperty("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), model.createResource("http://www.w3.org/2000/01/rdf-schema#Class"));
        while (rdfsclases.hasNext()) {
            Resource next = rdfsclases.next();
            try {
                String name = next.getLocalName().toLowerCase();
                String sear = text.toLowerCase();

                if (name.contains(sear)) {
                    SearchResult sr = new SearchResult();
                    sr.ontologyname = ontologyname;
                    sr.element = next.toString();
                    sr.elementdescription = getDescription(model, next.getURI());
                    if (!inList(list, sr.element)) {
                        list.add(sr);
                    }
                }
            } catch (Exception e) {

            }

        }

        //LOOKING THROUGH THE CLASSES
        while (classes.hasNext()) {
            try {
                OntClass next = (OntClass) classes.next();
                //        System.out.println("Clase: " + next.getURI());
                String name = next.getLocalName().toLowerCase();
                String sear = text.toLowerCase();

                if (name.contains(sear)) {
                    SearchResult sr = new SearchResult();
                    sr.ontologyname = ontologyname;
                    sr.element = next.toString();
                    sr.elementdescription = getDescription(model, next.getURI());
                    if (!inList(list, sr.element)) {
                        list.add(sr);
                    }
                }
            } catch (Exception e2) {
                //anonymousclases etc.
            }
        }

        //LOOKING THROUGH THE INDIVIDUALS
        ExtendedIterator individuals = omodel.listIndividuals();
        while (individuals.hasNext()) {
            Individual next = (Individual) individuals.next();
            System.out.println("Indi: " + next);
            String name = next.getLocalName().toLowerCase();
            String sear = text.toLowerCase();

            if (name.contains(sear)) {
                SearchResult sr = new SearchResult();
                sr.ontologyname = ontologyname;
                sr.element = next.toString();
                sr.elementdescription = getDescription(model, next.getURI());
                if (!inList(list, sr.element)) {
                    list.add(sr);
                }
                list.add(sr);
            }
        }

        return list;
    }

    private static Model readModel(String uri) {
        try {
            String ontotext = new Scanner(new URL(uri).openStream(), "UTF-8").useDelimiter("\\A").next();
            StringReader reader = new StringReader(ontotext);
            Model model = ModelFactory.createDefaultModel();
            model.read(reader, null, "TURTLE");
            OntModel omodel = ModelFactory.createOntologyModel();
            omodel.addSubModel(model);
            return omodel;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

    /**
     * List directory contents for a resource folder. Not recursive. This is
     * basically a brute-force implementation. Works for regular files and also
     * JARs.
     *
     * @author Greg Briggs
     * @param clazz Any java class that lives in the same place as the resources
     * you want.
     * @param path Should end with "/", but not start with one.
     * @return Just the name of each member item, not the full paths.
     * @throws URISyntaxException
     * @throws IOException
     */
    private String[] getResourceListing(Class clazz, String path) throws URISyntaxException, IOException {
        URL dirURL = clazz.getClassLoader().getResource(path);
        if (dirURL != null && dirURL.getProtocol().equals("file")) {
            /* A file path: easy enough */
            return new File(dirURL.toURI()).list();
        }

        if (dirURL == null) {
            /* 
         * In case of a jar file, we can't actually find a directory.
         * Have to assume the same jar as clazz.
             */
            String me = clazz.getName().replace(".", "/") + ".class";
            dirURL = clazz.getClassLoader().getResource(me);
        }

        if (dirURL.getProtocol().equals("jar")) {
            /* A JAR path */
            String jarPath = dirURL.getPath().substring(5, dirURL.getPath().indexOf("!")); //strip out only the JAR file
            JarFile jar = new JarFile(URLDecoder.decode(jarPath, "UTF-8"));
            Enumeration<JarEntry> entries = jar.entries(); //gives ALL entries in jar
            Set<String> result = new HashSet<String>(); //avoid duplicates in case it is a subdirectory
            while (entries.hasMoreElements()) {
                String name = entries.nextElement().getName();
                if (name.startsWith(path)) { //filter according to the path
                    String entry = name.substring(path.length());
                    int checkSubdir = entry.indexOf("/");
                    if (checkSubdir >= 0) {
                        // if it is a subdirectory, we just return the directory name
                        entry = entry.substring(0, checkSubdir);
                    }
                    result.add(entry);
                }
            }
            return result.toArray(new String[result.size()]);
        }

        throw new UnsupportedOperationException("Cannot list files for URL " + dirURL);
    }

    private static Model readEntry(String ontologyname) {
        String ontotext = "";
        try {
            InputStream is = RightsFinder.class.getResourceAsStream("/ontologies/" + ontologyname);
            BufferedReader br = new BufferedReader(new InputStreamReader(is));
            String strLine;
            while ((strLine = br.readLine()) != null) {
                ontotext += strLine + "\n";
            }
            if (ontologyname.endsWith(".ttl")) {
                System.out.println("Reading... " + ontologyname);
                StringReader reader = new StringReader(ontotext);
                Model model = ModelFactory.createDefaultModel();
                model.read(reader, null, "TURTLE");
                OntModel omodel = ModelFactory.createOntologyModel();
                omodel.addSubModel(model);
                return omodel;
            } else {
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
