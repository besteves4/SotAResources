package es.upm.oeg.protect.rightsearch;

import java.util.ArrayList;
import java.util.List;

/**
 * Finds the rights in a collection of ontologies
 * @author vroddon
 */
public class RightsFinder {
    
    public static List<String> models = null;
    
    public static void init()
    {
        models = new ArrayList();
    }
    
    
    public static String find(String text)
    {
        if (models==null)
            init();
        return "";
    }
    
}
