package com.weddingBack.wedding.controller;

import com.weddingBack.wedding.Repository.VenderRepository;
import com.weddingBack.wedding.model.Ven;
import com.weddingBack.wedding.model.Vender;
import com.weddingBack.wedding.service.VenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ComponentScan
@RequestMapping("/venders")
public class VenderController {
    @Autowired
    VenderService venderService;

    @GetMapping("")
    public List<Ven> list(){
        return  venderService.listAllUser();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ven> get (@PathVariable Integer id){
        try{
            Ven user =venderService.getUser(id);
            return  new ResponseEntity<Ven>(user, HttpStatus.OK);
        }catch(Exception e){
            return  new ResponseEntity<Ven>(HttpStatus.NOT_FOUND);

        }
    }

    @PostMapping("/")
    public void add(@RequestBody Ven user){
        venderService.saveUser(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Ven user,@PathVariable Integer id){
        try{
            Ven existUser=venderService.getUser(id);
            user.setId(id);
            venderService.saveUser(user);
            return  new ResponseEntity<>(HttpStatus.OK);
        }catch(Exception e){
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id){
        try{
            venderService.deleteUser(id);
            return  new ResponseEntity<>(HttpStatus.OK);
        }catch(Exception e){
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
