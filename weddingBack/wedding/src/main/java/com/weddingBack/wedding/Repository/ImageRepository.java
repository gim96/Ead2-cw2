package com.weddingBack.wedding.Repository;

import com.weddingBack.wedding.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;


public interface ImageRepository extends JpaRepository<Image,Integer> {


    @Query("SELECT u FROM Image u WHERE u.p_id = ?1 ")
    List<Image> findPhoto(int p_id);

//    @Transactional
//    @Modifying
//    @Query("DELETE FROM Image u WHERE u.p_id = ?1 ")
//    List<Image> deleteMyPhoto(int p_id);

}
