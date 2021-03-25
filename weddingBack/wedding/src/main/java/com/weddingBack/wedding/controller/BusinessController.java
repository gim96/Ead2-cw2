package com.weddingBack.wedding.controller;

import com.weddingBack.wedding.model.Ad;
import com.weddingBack.wedding.model.Business;
import com.weddingBack.wedding.model.Buz;
import com.weddingBack.wedding.model.Post;
import com.weddingBack.wedding.service.AdService;
import com.weddingBack.wedding.service.BusinessService;
import com.weddingBack.wedding.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ComponentScan
@RequestMapping("/business")
public class BusinessController {
    @Autowired
     BusinessService businessService;

    @GetMapping("")
    public List<Buz> list(){
        return  businessService.listAllBusinesses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Buz> get (@PathVariable Integer id){
        try{
            Buz buz =businessService.getBusiness(id);
            return  new ResponseEntity<Buz>(buz, HttpStatus.OK);
        }catch(Exception e){
            return  new ResponseEntity<Buz>(HttpStatus.NOT_FOUND);

        }
    }

    @PostMapping("/")
    public void add(@RequestBody Buz buz){
        businessService.saveBusiness(buz);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Buz buz,@PathVariable Integer id){
        try{
            Buz existBusiness=businessService.getBusiness(id);
            buz.setId(id);
            businessService.saveBusiness(buz);
            return  new ResponseEntity<>(HttpStatus.OK);
        }catch(Exception e){
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@RequestBody Business business,@PathVariable Integer id){
        try{
            businessService.deleteBusiness(id);
            return  new ResponseEntity<>(HttpStatus.OK);
        }catch(Exception e){
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
