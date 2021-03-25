package com.weddingBack.wedding.service;

import com.weddingBack.wedding.Repository.AuthRepository;
import com.weddingBack.wedding.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.query.QueryUtils;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class AuthService {
    @Autowired
    private AuthRepository authRepository;

//    @PersistenceContext
//    private EntityManager entityManager;

    public List LoginUser(String username,String password) {

           return authRepository.validateUser(username,password);
//        List query = entityManager.createNativeQuery(
//                "SELECT id,type FROM ven_d  WHERE username ='"+username+"' AND password ='"+password+"' ").getResultList();
////        if(query.size()>0){
////            lst=query;
////            System.out.println(lst);
////        }else{
//            System.out.println(query);
////        }
//        return query;
    }






}
