package com.weddingBack.wedding.service;

import com.weddingBack.wedding.Repository.BusinessRepositoty;
import com.weddingBack.wedding.model.Feed;
import com.weddingBack.wedding.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class PostService {

    @Autowired
    private BusinessRepositoty businessRepositoty;

    public List<Feed> listAllPosts(){
        return  businessRepositoty.findPhoto();
    }

    public List<Feed> listAllDecorations(){
        return  businessRepositoty.findDecoration();
    }

    public List<Feed> listAllCatering(){
        return  businessRepositoty.findCatering();
    }

    public List<Feed> listAllPhotography(){
        return  businessRepositoty.findPhotography();
    }

    public List<Feed> listAllEntertaing(){
        return  businessRepositoty.findEntertaining();
    }

    public List<Feed> listAllVenues(){
        return  businessRepositoty.findVenue();
    }

    public List<Feed> listAllDressing(){
        return  businessRepositoty.findDressing();
    }

    public List<Feed> listAllCards(){
        return  businessRepositoty.findCards();
    }

    public List<Feed> listAllDrinks(){
        return businessRepositoty.findDrinks();
    }

    public List<Feed> listAllCakes(){
        return  businessRepositoty.findCakes();
    }

    public List<Feed> listAllTransports(){
        return  businessRepositoty.findTransport();
    }
}
