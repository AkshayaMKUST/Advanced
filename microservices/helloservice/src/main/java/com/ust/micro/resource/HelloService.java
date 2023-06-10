package com.ust.micro.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/service")
public class HelloService {
	@Value("name")
	String str;
	
	@Autowired
	Environment environment;
	
	@GetMapping
	public String Welcome() {
		String port=environment.getProperty("server.port");
		return "Programming Microservice @ "+port;	}
	
	@GetMapping("/status")
	public String status() {
		return "Up and Running->>";
	}
}
;