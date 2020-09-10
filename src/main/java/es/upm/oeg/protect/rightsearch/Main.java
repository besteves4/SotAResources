package es.upm.oeg.protect.rightsearch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * Project initializer
 * @author vroddon
 */
@SpringBootApplication
public class Main extends SpringBootServletInitializer{ 
    

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
    
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Main.class);
    }
}
