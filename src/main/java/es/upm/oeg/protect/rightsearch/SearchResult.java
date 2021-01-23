package es.upm.oeg.protect.rightsearch;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Represents a search result
 *
 * @author vroddon
 */
public class SearchResult {

    public String element = "";
    public String elementdescription = "";
    public String ontologyname = "";

    public String getOntologyname() {
        return ontologyname;
    }

    public void setOntologyname(String ontologyname) {
        this.ontologyname = ontologyname;
    }

    public String getElement() {
        return element;
    }

    public void setElement(String element) {
        this.element = element;
    }

    public String getElementdescription() {
        return elementdescription;
    }

    public void setElementdescription(String elementdescription) {
        this.elementdescription = elementdescription;
    }

    public String toJSON() {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.writeValueAsString(this);
        } catch (Exception e) {
            return "";
        }

    }
}
