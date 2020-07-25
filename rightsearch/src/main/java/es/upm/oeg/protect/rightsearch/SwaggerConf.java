package es.upm.oeg.pal.dm;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 *
 * Describe the published method in OpenAPI
 * @author vroddon
 */
@Configuration
@EnableSwagger2
public class SwaggerConf {
    
    	@Bean
	    public Docket api() {
	 		return new Docket(DocumentationType.SWAGGER_2)
                     
	          .select()
	          .apis(RequestHandlerSelectors.basePackage("es.upm.oeg.protect.rightsearch"))         
	          .paths(PathSelectors.any())
	          .build()
                  .useDefaultResponseMessages(false)
	          .apiInfo(apiEndPointsInfo());
	    }
	 	private ApiInfo apiEndPointsInfo() {
	        return new ApiInfoBuilder().title("Ontology Rights Search REST API")
	            .description("This is the documentation for the Ontology Rights Search")
	            .contact(new Contact("Victor Rodriguez and Beatriz Esteves", "http://www.oeg-upm.net/", "vrodriguez@fi.upm.es, besteves@fi.upm.es "))
	            .license("Apache 2.0")
	            .licenseUrl("http://www.apache.org/licenses/LICENSE-2.0.html")
	            .version("1.0.0")
	            .build();
	    }
    
}
