package com.weddingBack.wedding.controller;

import com.weddingBack.wedding.model.Ad;
import com.weddingBack.wedding.model.Login;
import com.weddingBack.wedding.model.Success;
import com.weddingBack.wedding.model.Vender;
import com.weddingBack.wedding.service.AuthService;
import com.weddingBack.wedding.service.VenderService;
import jdk.nashorn.internal.parser.JSONParser;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@ComponentScan
@RequestMapping("/auth")
//        produces = {MediaType.APPLICATION_ATOM_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})

public class AuthController {
    @Autowired
    AuthService authService;

    @PostMapping("/")
    public List<Success> add(@RequestBody Login login){

        System.out.println(login.getUsername());
        return authService.LoginUser(login.getUsername(),login.getPassword());




    }

}
