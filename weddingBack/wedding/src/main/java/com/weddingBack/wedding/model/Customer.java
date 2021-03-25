package com.weddingBack.wedding.model;

public class Customer  {

    private int id;
    private String username;
    private String email;
    private String phone;

    private String photo;

    public Customer(int id,String username,String email,String phone,String photo){
        this.id=id;
        this.username=username;
        this.email=email;
        this.phone=phone;
        this.photo=photo;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }



    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}
