package com.example.MathForKids.Repository;

import com.example.MathForKids.Model.Account;
import com.example.MathForKids.Model.Player;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import  org.springframework.data.mongodb.core.query.Query;

import java.util.ArrayList;
import java.util.List;

@Repository
public class AccountRepositoryImpl implements AccountRepository {

    private Logger logger = LoggerFactory.getLogger(AccountRepositoryImpl.class);
    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public boolean sign_up(Account account) {

        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(account.getEmail()));
        Account temp_account = mongoTemplate.findOne(query,Account.class);

        if(temp_account == null){

            Player player = new Player(0,account);
            mongoTemplate.save(account);
            mongoTemplate.save(player);
            logger.info("New account added");
            return true;

        } else {

            logger.warn("Account with such email already exist");
            return false;

        }

    }

    @Override
    public String login(Account account) {

        Query query = new Query();
        List<Criteria> criteria = new ArrayList<>();
        criteria.add(Criteria.where("email").is(account.getEmail()));
        criteria.add(Criteria.where("password").is(account.getPassword()));
        query.addCriteria(new Criteria().andOperator(criteria.toArray(new Criteria[criteria.size()])));
        Account tempAccount = mongoTemplate.findOne(query,Account.class);

        if(tempAccount == null){
            logger.warn("Wrong credentials");
            return null;
        }
        else{
            logger.info("Login successful");
            return tempAccount.getId();
        }

    }

}
