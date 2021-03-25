package com.weddingBack.wedding.Repository;

import com.weddingBack.wedding.model.Business;
import com.weddingBack.wedding.model.Feed;
import com.weddingBack.wedding.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BusinessRepositoty extends JpaRepository<Business,Integer> {

    @Query("SELECT new com.weddingBack.wedding.model.Feed(p.id,b.business_name,a.title,p.photo,b.category,a.price) FROM Business b JOIN b.profiles p JOIN b.ads a WHERE a.state=1")
    public List<Feed> findPhoto();

    @Query("SELECT new com.weddingBack.wedding.model.Feed(p.id,b.business_name,a.title,p.photo,b.category,a.price) FROM Business b JOIN b.profiles p JOIN b.ads a WHERE a.state=1 AND b.category='decoration'" )
    public List<Feed> findDecoration();

    @Query("SELECT new com.weddingBack.wedding.model.Feed(p.id,b.business_name,a.title,p.photo,b.category,a.price) FROM Business b JOIN b.profiles p JOIN b.ads a WHERE a.state=1 AND b.category='catering'")
    public List<Feed> findCatering();

    @Query("SELECT new com.weddingBack.wedding.model.Feed(p.id,b.business_name,a.title,p.photo,b.category,a.price) FROM Business b JOIN b.profiles p JOIN b.ads a WHERE a.state=1 AND b.category='photography'")
    public List<Feed> findPhotography();

    @Query("SELECT new com.weddingBack.wedding.model.Feed(p.id,b.business_name,a.title,p.photo,b.category,a.price) FROM Business b JOIN b.profiles p JOIN b.ads a WHERE a.state=1 AND b.category='entertaining '")
    public List<Feed> findEntertaining();

    @Query("SELECT new com.weddingBack.wedding.model.Feed(p.id,b.business_name,a.title,p.photo,b.category,a.price) FROM Business b JOIN b.profiles p JOIN b.ads a WHERE a.state=1 AND b.category='venue'")
    public List<Feed> findVenue();

    @Query("SELECT new com.weddingBack.wedding.model.Feed(p.id,b.business_name,a.title,p.photo,b.category,a.price) FROM Business b JOIN b.profiles p JOIN b.ads a WHERE a.state=1 AND b.category='dressing'")
    public List<Feed> findDressing();

    @Query("SELECT new com.weddingBack.wedding.model.Feed(p.id,b.business_name,a.title,p.photo,b.category,a.price) FROM Business b JOIN b.profiles p JOIN b.ads a WHERE a.state=1 AND b.category='cards'")
    public List<Feed> findCards();

    @Query("SELECT new com.weddingBack.wedding.model.Feed(p.id,b.business_name,a.title,p.photo,b.category,a.price) FROM Business b JOIN b.profiles p JOIN b.ads a WHERE a.state=1 AND b.category='drinks'")
    public List<Feed> findDrinks();

    @Query("SELECT new com.weddingBack.wedding.model.Feed(p.id,b.business_name,a.title,p.photo,b.category,a.price) FROM Business b JOIN b.profiles p JOIN b.ads a WHERE a.state=1 AND b.category='cakes'")
    public List<Feed> findCakes();

    @Query("SELECT new com.weddingBack.wedding.model.Feed(p.id,b.business_name,a.title,p.photo,b.category,a.price) FROM Business b JOIN b.profiles p JOIN b.ads a WHERE a.state=1 AND b.category='transport'")
    public List<Feed> findTransport();


}
