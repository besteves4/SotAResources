package es.upm.oeg.protect.rightsearch;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.List;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.ExampleProperty;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.logging.Level;
import javax.annotation.PostConstruct;
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
public class RightSearchController {

    @Autowired
    ServletContext context;

    static Logger logger = Logger.getLogger(Controller.class);

     
    @ApiOperation(value = "Finds references to rights in a collection of ontologies")
    @RequestMapping(
            value = "/rights",
            consumes = "text/plain;charset=UTF-8",
            produces= "application/json;charset=UTF-8",
            method = RequestMethod.GET)
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
    
    
    @PostConstruct
    public void initIt() {
	  logger.info("Init Models" );
          try{
           
          }catch(Exception e){
          logger.error("Unable to start service at deploy time. "+e);
          }
    }
    
    @RequestMapping(value ="/status", method = RequestMethod.GET)
    @ResponseBody
    public String status() {
        return "version 1.0";
    }
  
}
