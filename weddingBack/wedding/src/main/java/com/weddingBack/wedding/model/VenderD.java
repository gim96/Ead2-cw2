package com.weddingBack.wedding.model;

public class VenderD {

    private int id;
    private String username;
    private String email;
    private String phone;

    private String photo;

    private String business_name;
    private String registration_no;
    private String category;
    private String address_line1;
    private String address_line2;
    private String district;

    public VenderD(int id,String username,String email,String phone,String photo,String business_name,String registration_no,String category,String address_line1,String address_line2,String district){
        this.id=id;
        this.username=username;
        this.email=email;
        this.phone=phone;
        this.photo=photo;
        this.business_name=business_name;
        this.registration_no=registration_no;
        this.category=category;
        this.address_line1=address_line1;
        this.address_line2=address_line2;
        this.district=district;
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

    public String getBusiness_name() {
        return business_name;
    }

    public void setBusiness_name(String business_name) {
        this.business_name = business_name;
    }

    public String getRegistration_no() {
        return registration_no;
    }

    public void setRegistration_no(String registration_no) {
        this.registration_no = registration_no;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getAddress_line1() {
        return address_line1;
    }

    public void setAddress_line1(String address_line1) {
        this.address_line1 = address_line1;
    }

    public String getAddress_line2() {
        return address_line2;
    }

    public void setAddress_line2(String address_line2) {
        this.address_line2 = address_line2;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }
}
