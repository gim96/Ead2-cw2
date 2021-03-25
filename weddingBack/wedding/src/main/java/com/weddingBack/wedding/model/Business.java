package com.weddingBack.wedding.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="business_d")
public class Business {
    @Id
    private int id;

    @GeneratedValue(strategy = GenerationType.AUTO)
    private String business_name;
    private String registration_no;
    private String category;
    private String address_line1;
    private String address_line2;
    private String district;

 //   @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name="id")
//    private Profile profile;
      @OneToOne(targetEntity = Profile.class,cascade = CascadeType.ALL)
      @JoinColumn(name = "id")
      private List<Profile> profiles;

      @OneToOne(targetEntity = Ad.class,cascade = CascadeType.ALL)
      @JoinColumn(name = "id")
      private List<Ad> ads;


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


//    public Profile getProfile() {
//        return profile;
//    }
//
//    public void setProfile(Profile profile) {
//        this.profile = profile;
//    }
}
