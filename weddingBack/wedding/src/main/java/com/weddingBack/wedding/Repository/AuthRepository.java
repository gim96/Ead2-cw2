package com.weddingBack.wedding.Repository;

import com.weddingBack.wedding.model.Success;
import com.weddingBack.wedding.model.Vender;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

public interface  AuthRepository extends JpaRepository <Vender,Integer>{
    @Query("SELECT u.id,u.username ,u.type FROM Vender u WHERE u.username = ?1 AND u.password = ?2 ")
    List validateUser(String username, String password);



}
