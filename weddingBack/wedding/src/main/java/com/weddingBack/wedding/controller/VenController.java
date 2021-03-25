package com.weddingBack.wedding.controller;

import com.weddingBack.wedding.model.*;
import com.weddingBack.wedding.service.PostService;
import com.weddingBack.wedding.service.VenService;
import com.weddingBack.wedding.service.VenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ComponentScan
@RequestMapping("/venderD")
public class VenController {
    @Autowired
    VenService venService;

    @GetMapping("")
    public List<VenderD> listAll(){
        return  venService.listAllVen();
    }

    @PostMapping("/details")
    public List<VenderD> getVen(@RequestBody Vender vender){

        System.out.println(vender.getId());
        return venService.VenId(vender.getId());

    }

    @PostMapping("/details/customer/")
    public List<Customer> getCus(@RequestBody Vender vender){

        System.out.println(vender.getId());
        return venService.CusId(vender.getId());

    }


}
