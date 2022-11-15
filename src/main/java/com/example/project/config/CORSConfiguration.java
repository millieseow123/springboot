package main.java.com.example.project.config;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class CORSConfiguration implements WebMvcConfigurer{
    private String path;
    private String origins;
    
    public CORSConfiguration(String path, String origins) {
        this.path = path;
        this.origins = origins;
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping(path).allowedOrigins(origins).allowedMethods("*");
        WebMvcConfigurer.super.addCorsMappings(registry);
    }
}
