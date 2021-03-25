package com.weddingBack.wedding.service;

import com.weddingBack.wedding.Repository.ImageRepository;
import com.weddingBack.wedding.Repository.PhotoRepository;
import com.weddingBack.wedding.model.Image;
import com.weddingBack.wedding.model.Vender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
@Transactional
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;
//    private PhotoRepository photoRepository;

    public List<Image> listAllUser(){
        return  imageRepository.findAll();
    }

    public List<Image> listPhoto(int p_id){
        return  imageRepository.findPhoto(p_id);
    }
//    public List<Image> deletePhoto(int p_id){
//        return  imageRepository.deleteMyPhoto(p_id);
//    }
    public void saveImage(Image image) {
        imageRepository.save(image);
    }

    public Image getImage(Integer id) {
        return imageRepository.findById(id).get();
    }

    public void deleteImage(Integer id) {
        imageRepository.deleteById(id);
    }

//    public void saveImage(MultipartFile imageFile) throws Exception{
//        String folder="/uploads/";
//        byte[] bytes=imageFile.getBytes();
//        Path path=Paths.get(folder+imageFile.getOriginalFilename());
//        Files.write(path,bytes);
//    }

}
