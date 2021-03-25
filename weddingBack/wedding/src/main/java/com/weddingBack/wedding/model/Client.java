package com.weddingBack.wedding.model;


import org.springframework.data.annotation.Id;

import javax.persistence.Entity;
import javax.persistence.Table;



public class Client {


    private int id;
    private String username;
    private String phone;

    public Client(int id,String username,String phone){
        this.id=id;
        this.username=username;
        this.phone=phone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

}
