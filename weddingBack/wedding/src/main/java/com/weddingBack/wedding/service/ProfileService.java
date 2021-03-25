package com.weddingBack.wedding.service;

import com.weddingBack.wedding.Repository.ProfileRepository;
import com.weddingBack.wedding.Repository.VenderRepository;
import com.weddingBack.wedding.model.Profile;
import com.weddingBack.wedding.model.Vender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public List<Profile> listAllProfiles(){
        return  profileRepository.findAll();
    }

    public void saveProfile(Profile profile) {
        profileRepository.save(profile);
    }

    public Profile getProfile(Integer id) {
        return profileRepository.findById(id).get();
    }

    public void deleteProfile(Integer id) {
        profileRepository.deleteById(id);
    }

}
