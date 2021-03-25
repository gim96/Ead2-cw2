package com.weddingBack.wedding.Repository;

import com.weddingBack.wedding.model.Vender;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Vender,Integer> {

    @Query("SELECT u.id,u.username,u.phone FROM Vender u WHERE u.type='C' ")
    List findAll();

}
