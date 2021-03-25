package com.weddingBack.wedding.service;

import com.weddingBack.wedding.Repository.AdRepository;
import com.weddingBack.wedding.Repository.AuthRepository;
import com.weddingBack.wedding.Repository.ImageRepository;
import com.weddingBack.wedding.Repository.VenderRepository;
import com.weddingBack.wedding.model.Ad;
import com.weddingBack.wedding.model.Image;
import com.weddingBack.wedding.model.Vender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class AdService {

    @Autowired
    private AdRepository adRepository;

    public List<Ad> listAllAds(){
        return  adRepository.findAll();
    }

    public void saveAd(Ad ad) {
        adRepository.save(ad);
    }

    public Ad getAd(Integer p_id) {
        return adRepository.findById(p_id).get();
    }

    public void deleteAd(Integer id) {
        adRepository.deleteById(id);
    }

//    public List getUserAd(Ad ad){
//        return adRepository.findbyAdId(ad.getId());
//    }
}
