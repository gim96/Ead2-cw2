package com.weddingBack.wedding.Repository;

import com.weddingBack.wedding.model.Ad;
import com.weddingBack.wedding.model.Vender;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AdRepository extends JpaRepository<Ad,Integer> {
//
//    @Query("SELECT COUNT(*) FROM Ad u WHERE u.ad_id = ?1 ")
//    List<Ad> findbyAdId(int id);
}
