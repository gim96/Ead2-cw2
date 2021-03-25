package com.weddingBack.wedding.service;

import com.weddingBack.wedding.Repository.BuzRepository;
import com.weddingBack.wedding.model.Buz;
import com.weddingBack.wedding.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class BusinessService {
    @Autowired
    private BuzRepository buzRepository;

    public List<Buz> listAllBusinesses(){
        return  buzRepository.findAll();
    }

    public void saveBusiness(Buz buz) {
        buzRepository.save(buz);
    }

    public Buz getBusiness(Integer id) {
        return buzRepository.findById(id).get();
    }

    public void deleteBusiness(Integer id) {
        buzRepository.deleteById(id);
    }
}
