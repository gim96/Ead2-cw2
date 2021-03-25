package com.weddingBack.wedding.Repository;

import com.weddingBack.wedding.model.Feed;
import com.weddingBack.wedding.model.Vender;
import com.weddingBack.wedding.model.VenderD;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VenderRepository extends JpaRepository<Vender,Integer>{
    @Query("SELECT new com.weddingBack.wedding.model.VenderD(v.id,v.username,v.email,v.phone,p.photo,b.business_name,b.registration_no,b.category,b.address_line1,b.address_line2,b.district) FROM Vender v JOIN v.businesss b JOIN v.profiles p ")
    public List<VenderD> findPhoto();

    @Query("SELECT new com.weddingBack.wedding.model.Customer(v.id,v.username,v.email,v.phone,p.photo) FROM Vender v  JOIN v.profiles p  WHERE v.id=?1")
    List findByCusId(int id);

    @Query("SELECT new com.weddingBack.wedding.model.VenderD(v.id,v.username,v.email,v.phone,p.photo,b.business_name,b.registration_no,b.category,b.address_line1,b.address_line2,b.district) FROM Vender v JOIN v.businesss b JOIN v.profiles p  WHERE v.id=?1  ")
    List findById(int id);
}
