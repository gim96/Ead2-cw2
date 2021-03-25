package com.weddingBack.wedding.service;


import com.weddingBack.wedding.Repository.BusinessRepositoty;
import com.weddingBack.wedding.Repository.VenderRepository;
import com.weddingBack.wedding.model.Customer;
import com.weddingBack.wedding.model.Feed;
import com.weddingBack.wedding.model.Ven;
import com.weddingBack.wedding.model.VenderD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class VenService {

    @Autowired
    private VenderRepository venderRepository;

    public List<VenderD> listAllVen(){
        return  venderRepository.findPhoto();
    }

    public List<VenderD> VenId(int id) {

        return venderRepository.findById(id);

    }

    public List<Customer> CusId(int id) {

        return venderRepository.findByCusId(id);

    }
}
