package es.upm.oeg.protect.rightsearch;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * Event logger
 * @author vroddon
 */
public class Historial {
    
    public String text = "";
    public Date date = new Date();
    
    public static List<Historial> log = new ArrayList();
    
    public static void add(String s)
    {
        System.out.println(s);
        Historial h = new Historial();
        h.text = s;
        h.date= new Date();
        log.add(h);
        if (log.size()>100000)
            log.clear();
    }
    
}
    