package com.weddingBack.wedding.service;

import com.weddingBack.wedding.Repository.BuzRepository;
import com.weddingBack.wedding.Repository.ClientRepository;
import com.weddingBack.wedding.Repository.CustomerRepository;
import com.weddingBack.wedding.model.Buz;
import com.weddingBack.wedding.model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private CustomerRepository customerRepository;

    public List<Client> listAllClients(){
        return  clientRepository.findAll();
    }

    public List<Client> listAllCustomers(){
        return  customerRepository.findAll();
    }
}
