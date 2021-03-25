package com.weddingBack.wedding.service;

import com.weddingBack.wedding.Repository.VenRepository;
import com.weddingBack.wedding.Repository.VenderRepository;
import com.weddingBack.wedding.model.Ven;
import com.weddingBack.wedding.model.Vender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class VenderService {

    @Autowired
    private VenRepository venRepository;

    public List<Ven> listAllUser(){
        return  venRepository.findAll();
    }

    public void saveUser(Ven user) {
        venRepository.save(user);
    }

    public Ven getUser(Integer id) {
        return venRepository.findById(id).get();
    }

    public void deleteUser(Integer id) {
        venRepository.deleteById(id);
    }

}
