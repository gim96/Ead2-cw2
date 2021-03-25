package com.weddingBack.wedding.Repository;

import com.weddingBack.wedding.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PhotoRepository extends JpaRepository<Image,Integer> {
//        @Query("SELECT u FROM Image u WHERE u.p_id = ?1 ")
//        List<Image> findPhoto(String p_id);
}
