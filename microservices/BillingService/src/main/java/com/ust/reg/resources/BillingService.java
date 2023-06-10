package com.ust.reg.resources;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/billingservice")
public class BillingService {
	@Value("Account")
	String str;
	@GetMapping
	public String Billing() {
		return "Billing Information "+str;	}

}
