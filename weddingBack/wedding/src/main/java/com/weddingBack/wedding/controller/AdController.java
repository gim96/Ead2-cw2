package com.weddingBack.wedding.controller;

import com.weddingBack.wedding.model.Ad;
import com.weddingBack.wedding.model.Login;
import com.weddingBack.wedding.model.Success;
import com.weddingBack.wedding.model.Vender;
import com.weddingBack.wedding.service.AdService;
import com.weddingBack.wedding.service.VenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ComponentScan
@RequestMapping("/ad")
public class AdController {

    @Autowired
    AdService adService;

    @GetMapping("")
    public List<Ad> list(){
        return  adService.listAllAds();
    }

    @GetMapping("/{p_id}")
    public ResponseEntity<Ad> get (@PathVariable Integer p_id){
        try{
            Ad ad =adService.getAd(p_id);
            return  new ResponseEntity<Ad>(ad, HttpStatus.OK);
        }catch(Exception e){
            return  new ResponseEntity<Ad>(HttpStatus.NOT_FOUND);

        }
    }

//    @GetMapping("/")
//    public List<Success> add(@RequestBody Login login){
//
//        System.out.println(login.getUsername());
//        return adService.listAllAds(login.getUsername(),login.getPassword());
//
//
//
//
//    }

    @PostMapping("/")
    public void add(@RequestBody Ad ad){
        adService.saveAd(ad);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Ad ad,@PathVariable Integer id){
        try{
            Ad existAd=adService.getAd(id);
            ad.setId(id);
            adService.saveAd(ad);
            return  new ResponseEntity<>(HttpStatus.OK);
        }catch(Exception e){
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id){
        try{
            adService.deleteAd(id);
            return  new ResponseEntity<>(HttpStatus.OK);
        }catch(Exception e){
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


//    public List add(@RequestBody Ad ad){
//        return  adService.getUserAd(ad);
//    }
//    @GetMapping("/my")
//    public List<Ad> list(Ad ad){
//        return  adService.getUserAd(ad);
//    }

}
