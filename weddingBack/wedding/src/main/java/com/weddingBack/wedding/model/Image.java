package com.weddingBack.wedding.model;

import javax.persistence.*;

@Entity
@Table(name="img")
public class Image {

    @Id
    private int id;
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private int p_id;

//    @Column(columnDefinition="LONGBLOB")
    private String photo;
    @Column(columnDefinition="LONGBLOB")

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

    public int getP_id() {
        return p_id;
    }

    public void setP_id(int p_id) {
        this.p_id = p_id;
    }
}
