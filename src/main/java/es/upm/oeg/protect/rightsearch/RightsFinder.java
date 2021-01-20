package es.upm.oeg.protect.rightsearch;

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
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;
import org.apache.jena.ontology.Individual;
import org.apache.jena.ontology.OntClass;
import org.apache.jena.ontology.OntModel;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.util.iterator.ExtendedIterator;

/**
 * Finds the rights in a collection of ontologies
 *
 * @author vroddon
 */
public class RightsFinder {

    public static List<Model> models = null;

    //Main for testing purposes
    public static void main(String args[]) {
        String searchterm = "delete";
        String find = RightsFinder.find(searchterm);
        System.out.println("===================================");
        System.out.println("Searching for: " + searchterm);
        System.out.println("Found: " + find);
    }

    public static void init() {
        models = new ArrayList();
        try {
            RightsFinder rf = new RightsFinder();
            String[] ontologynames = rf.getResourceListing(RightsFinder.class, "ontologies/");
            for (String ontologyname : ontologynames) {
                Model model = readEntry(ontologyname);
                models.add(model);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static String find(String text) {
        if (models == null) {
            init();
        }
        for (Model model : models) {
            List<SearchResult> results = findElementInModel(model, text);
            for (SearchResult sr : results) {
                String result = sr.element;
                return result;
            }
        }
        return "";
    }

    static List<SearchResult> findElementInModel(Model model, String text) {
        List<SearchResult> list = new ArrayList();
        OntModel omodel = (OntModel) model;
        ExtendedIterator classes = omodel.listClasses();
        while (classes.hasNext()) {
            try {
                OntClass next = (OntClass) classes.next();
        //        System.out.println("Clase: " + next.getURI());
                String name = next.getLocalName().toLowerCase();
                String sear = text.toLowerCase();

                if (name.contains(sear)) {
                    SearchResult sr = new SearchResult();
                    sr.ontologyname = "this should be the ontology name TO DO";
                    sr.element = next.toString();
                    sr.elementdescription = "this should be the triples describing the element";
                    list.add(sr);
                }
            } catch (Exception e2) {
                //anonymousclases etc.
            }
        }

        ExtendedIterator individuals = omodel.listIndividuals();
        while (individuals.hasNext()) {
            Individual next = (Individual) individuals.next();
            System.out.println("Indi: " + next);
            String name = next.getLocalName().toLowerCase();
            String sear = text.toLowerCase();

            if (name.contains(sear)) {
                SearchResult sr = new SearchResult();
                sr.ontologyname = "this should be the ontology name TO DO";
                sr.element = next.toString();
                sr.elementdescription = "this should be the triples describing the element";
                list.add(sr);
            }
        }

        return list;
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
