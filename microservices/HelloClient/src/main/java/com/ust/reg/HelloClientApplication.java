package com.ust.reg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
// commented as client is before the gateway @EnableEurekaClient
@SpringBootApplication
public class HelloClientApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloClientApplication.class, args);
	}
	@Bean
	public RestTemplate makeTemplate(){
		return new RestTemplate();
	}
}
