package es.upm.oeg.protect.rightsearch;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import javax.servlet.ServletContext;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
        

/**
 * Controller for the REST API service
 * @author vroddon
 */
@Controller
@Api(tags = "RightsSearch", value = "RightsSearch")
public class RightSearchController {

    @Autowired
    ServletContext context;

    static Logger logger = Logger.getLogger(Controller.class);

     
    @ApiOperation(value = "Finds references to rights in a collection of ontologies")
    @RequestMapping(
            value = "/rights",
            consumes = "text/plain;charset=UTF-8",
            produces= "application/json;charset=UTF-8",
            method = RequestMethod.POST)
    @ResponseBody
    public String getRights(@RequestBody String text) throws Exception {
        try {
            
            String json = RightsFinder.find(text);
            return json;
                
        } catch (Exception e) {
            logger.error("Error in REST service",e);
            logger.error(e.getCause().toString());
        }
        return "";
    }
    
    @RequestMapping(value ="/status", method = RequestMethod.GET)
    @ResponseBody
    public String status() {
        return "version 1.0";
    }
  
}
