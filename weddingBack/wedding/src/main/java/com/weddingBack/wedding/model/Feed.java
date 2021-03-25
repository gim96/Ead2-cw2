package com.weddingBack.wedding.model;

public class Feed {
    private int id;
    private String business_name;
    private String title;

    private String photo;
    private String category;
    private String price;

    public Feed(int id,String business_name,String title,String photo,String category,String price){
        this.id=id;
        this.business_name=business_name;
        this.title=title;
        this.photo=photo;
        this.category=category;
        this.price=price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBusiness_name() {
        return business_name;
    }

    public void setBusiness_name(String business_name) {
        this.business_name = business_name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
