package com.weddingBack.wedding.controller;

import com.weddingBack.wedding.model.Profile;
import com.weddingBack.wedding.model.Vender;
import com.weddingBack.wedding.service.ProfileService;
import com.weddingBack.wedding.service.VenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ComponentScan
@RequestMapping("/profiles")
public class ProfileImgController {

    @Autowired
    ProfileService profileService;

    @GetMapping("")
    public List<Profile> list(){
        return  profileService.listAllProfiles();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Profile> get (@PathVariable Integer id){
        try{
            Profile profile =profileService.getProfile(id);
            return  new ResponseEntity<Profile>(profile, HttpStatus.OK);
        }catch(Exception e){
            return  new ResponseEntity<Profile>(HttpStatus.NOT_FOUND);

        }
    }

    @PostMapping("/")
    public void add(@RequestBody Profile profile){
        profileService.saveProfile(profile);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Profile profile,@PathVariable Integer id){
        try{
            Profile existProfile=profileService.getProfile(id);
            profile.setId(id);
            profileService.saveProfile(profile);
            return  new ResponseEntity<>(HttpStatus.OK);
        }catch(Exception e){
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id){
        try{
            profileService.deleteProfile(id);
            return  new ResponseEntity<>(HttpStatus.OK);
        }catch(Exception e){
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
