package com.weddingBack.wedding.controller;

import com.weddingBack.wedding.model.*;
import com.weddingBack.wedding.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ComponentScan
@RequestMapping("/images")

public class ImageController {

    @Autowired
    ImageService imageService;

    @GetMapping("")
    public List<Image> list(){
        return  imageService.listAllUser();
    }

    @PostMapping("/my/")
    public List<Image> get(@RequestBody Photo photo){

        System.out.println(photo.getP_id());
        return imageService.listPhoto(photo.getP_id());
    }
//    @PostMapping("/my/delete/")
//    public List<Image> deletePhoto(@RequestBody Photo photo){
//
//        System.out.println(photo.getP_id());
//        return imageService.deletePhoto(photo.getP_id());
//    }

    @GetMapping("/{id}")
    public ResponseEntity<Image> get (@PathVariable Integer id){

        try{

            Image image =imageService.getImage(id);
            return  new ResponseEntity<Image>(image, HttpStatus.OK);

        }catch(Exception e){

            return  new ResponseEntity<Image>(HttpStatus.NOT_FOUND);

        }
    }

    @PostMapping("/")
    public void add(@RequestBody Image image){
        imageService.saveImage(image);
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Image image,@PathVariable Integer id){
        try{
            Image existUser=imageService.getImage(id);
            image.setId(id);
            imageService.saveImage(image);
            return  new ResponseEntity<>(HttpStatus.OK);
        }catch(Exception e){
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id){
        try{
            imageService.deleteImage(id);
            return  new ResponseEntity<>(HttpStatus.OK);
        }catch(Exception e){
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
