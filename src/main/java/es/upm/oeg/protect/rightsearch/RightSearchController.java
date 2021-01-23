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
import org.springframework.web.bind.annotation.RequestParam;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Controller for the REST API service
 *
 * @author vroddon
 */
@Controller
@Api(tags = "RightsSearch", value = "RightsSearch")
public class RightSearchController {

    @Autowired
    ServletContext context;

    static Logger logger = Logger.getLogger(Controller.class);

    @ApiOperation(value = "Finds references to rights in a collection of ontologies")
    @RequestMapping(value = "/rights",produces = "application/json;charset=UTF-8",method = RequestMethod.GET)
    @ResponseBody
    public String getRights(@RequestParam String text) throws Exception {
        Historial.add("invoked rights " + text);
        try {
            System.out.println("Searching for: " + text);
            String json = RightsFinder.find(text);
            System.out.println("Found: " + json);
            return json;

        } catch (Exception e) {
            logger.error("Error in REST service", e);
            logger.error(e.getCause().toString());
        }
        return "{}";
    }

    @RequestMapping(value = "/status", method = RequestMethod.GET, produces = "text/plain")
    @ResponseBody
    public String status() {
        System.out.println("I have been asked for the status.");

        Historial.add("invoked status");

        String s = "version 1.1\n";
        int conta = 0;
        for (Historial h : Historial.log) {
            try {
                s += new SimpleDateFormat("yyyy-mm-dd hh:mm:ss").format(h.date) + " " + h.text + "\n";
            } catch (Exception exx) {

            }
            conta++;
            if (conta > 1000) {
                break;
            }
        }
        return s;
    }

    @RequestMapping(value = "/deploy", method = RequestMethod.GET)
    @ResponseBody
    public String deploy() {
        Historial.add("invoked deploy ");
        System.out.println("Deploying!");
        ProcessBuilder processBuilder = new ProcessBuilder();
        processBuilder.command("/protect/deploy.sh");
        try {

            Process process = processBuilder.start();

            StringBuilder output = new StringBuilder();

            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                output.append(line + "\n");
            }

            int exitVal = process.waitFor();
            if (exitVal == 0) {
                System.out.println("Success!");
                System.out.println(output);
//                System.exit(0);
            } else {
                //abnormal...
                System.err.println("error " + exitVal);
            }

        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return "Deployed";
    }

}
