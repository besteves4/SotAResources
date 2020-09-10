package es.upm.oeg.protect.rightsearch;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Represents a search result
 *
 * @author vroddon
 */
public class SearchResult {

    public String ontologyname = "";
    public String element = "";
    public String elementdescription = "";

    public String toJSON() {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.writeValueAsString(this);
        } catch (Exception e) {
            return "";
        }

    }
}
