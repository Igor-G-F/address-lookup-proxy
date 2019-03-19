package com.igor.demo.addresslookupproxy.controller;

import com.igor.demo.addresslookupproxy.service.AddressLookupService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddressLookupController {

    private AddressLookupService addressLookupService;

    public AddressLookupController() {
        addressLookupService = new AddressLookupService();
    }

    @GetMapping("/address/{postcode}/{house}")
    public String lookupAddress(@PathVariable String postcode, @PathVariable String house) {
        return addressLookupService.retrieveAddress(postcode, house);
    }
}
