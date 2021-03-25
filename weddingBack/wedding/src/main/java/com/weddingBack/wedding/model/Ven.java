package com.weddingBack.wedding.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="ven_d")
public class Ven {

    @Id
    // @GeneratedValue(strategy = GenerationType.AUTO)

    private int id;
    private String username;
    private String email;
    private String password;
    private String phone;
    private String type;






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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
