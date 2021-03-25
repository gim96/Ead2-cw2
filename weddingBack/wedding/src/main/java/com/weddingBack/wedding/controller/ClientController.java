package com.weddingBack.wedding.controller;

import com.weddingBack.wedding.model.Buz;
import com.weddingBack.wedding.model.Client;
import com.weddingBack.wedding.service.BusinessService;
import com.weddingBack.wedding.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@ComponentScan
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    ClientService clientService;


    @GetMapping("")
    public List<Client> list(){
        return  clientService.listAllClients();
    }
    @GetMapping("/customers")
    public List<Client> listCus(){
        return  clientService.listAllCustomers();
    }

}
