package com.weddingBack.wedding.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


public class Photo {
   private int p_id;


    public int getP_id() {
        return p_id;
    }

    public void setP_id(int p_id) {
        this.p_id = p_id;
    }
}
