package com.weddingBack.wedding.controller;

import com.weddingBack.wedding.model.Feed;
import com.weddingBack.wedding.model.Post;
import com.weddingBack.wedding.model.Profile;
import com.weddingBack.wedding.service.PostService;
import com.weddingBack.wedding.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@ComponentScan
@RequestMapping("/posts")
public class PostController {

    @Autowired
    PostService postService;

    @GetMapping("")
    public List<Feed> list(){
        return  postService.listAllPosts();
    }

    @GetMapping("/decoration")
    public List<Feed> listDecorations(){
        return  postService.listAllDecorations();
    }
    @GetMapping("/catering")
    public List<Feed> listCatering(){
        return  postService.listAllCatering();
    }
    @GetMapping("/photography")
    public List<Feed> listPhotography(){
        return  postService.listAllPhotography();
    }
    @GetMapping("/entertaining ")
    public List<Feed> listEntertaining(){
        return  postService.listAllEntertaing();
    }
    @GetMapping("/venue")
    public List<Feed> listVenue(){
        return  postService.listAllVenues();
    }
    @GetMapping("/dressing")
    public List<Feed> listDressing(){
        return  postService.listAllDressing();
    }
    @GetMapping("/cards")
    public List<Feed> listCards(){
        return  postService.listAllCards();
    }
    @GetMapping("/drinks")
    public List<Feed> listDrinks(){
        return  postService.listAllDrinks();
    }
    @GetMapping("/cakes")
    public List<Feed> listCakes(){
        return  postService.listAllCakes();
    }
    @GetMapping("/transport")
    public List<Feed> listTransport(){
        return  postService.listAllTransports();
    }

}
