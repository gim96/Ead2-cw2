package com.weddingBack.wedding.model;


import javax.persistence.*;

@Entity
@Table(name="profile_img")
public class Profile {

    @Id
    private int id;
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String photo;
    @Column(columnDefinition="LONGBLOB")

//    @OneToOne(fetch=FetchType.LAZY, mappedBy="profile_img")
//    private Business business;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

//    public Business getBusiness() {
//        return business;
//    }
//
//    public void setBusiness(Business business) {
//        this.business = business;
//    }
}
