package com.igor.demo.addresslookupproxy.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class AddressLookupService {

    private final String getAddressHost = "api.getAddress.io";
    private final String key = "Ft_biuTX30ie06xJ-IQFLA18017";

    public String retrieveAddress(String postcode, String house) {
        Map<String, String> map = new HashMap<>();
        map.put("postcode", postcode);
        map.put("house", house);
        map.put("key", key);

        UriComponents uriComponents = UriComponentsBuilder.newInstance()
            .scheme("https")
            .host(getAddressHost)
            .path("/find/{postcode}/{house}")
            .query("api-key={key}")
            .buildAndExpand(map);

        return new RestTemplate().getForObject(uriComponents.toUriString(), String.class);
    }

}
