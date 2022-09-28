package com.example.MathForKids.Repository;

import com.example.MathForKids.Model.Account;
import com.example.MathForKids.Model.ExperienceHistory;
import com.example.MathForKids.Model.Player;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Repository
public class ExperienceRepositoryImpl implements ExperienceRepository {

    private Logger logger = LoggerFactory.getLogger(AccountRepositoryImpl.class);
    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public boolean increase_Experience(Integer amount, String accountID, Date date){

        try{

            Query query = new Query();
            query.addCriteria(Criteria.where("account").is(accountID));
            Player player = mongoTemplate.findOne(query,Player.class);
            query = new Query();
            System.out.println(player.id);
            query.addCriteria(Criteria.where("player").is(player.id));
            query.addCriteria(Criteria.where("date").is(date));
            query.addCriteria(Criteria.where("Experience").gte(0));
            ExperienceHistory experienceHistoryEntry = mongoTemplate.findOne(query,ExperienceHistory.class);
            player.setExperience(player.experience + amount);
            if(experienceHistoryEntry == null)
                mongoTemplate.save(new ExperienceHistory(0,date,player));
            else{
                experienceHistoryEntry.setExperience(experienceHistoryEntry.Experience + amount);
                mongoTemplate.save(experienceHistoryEntry);
            }

            mongoTemplate.save(player);
            logger.info("Experience Increased");
            return true;
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Some error occurred");
            return false;
        }
    }

    @Override
    public List<ExperienceHistory> get_experienceHistory(String accountID, Date date) {

        Query query = new Query();
        query.addCriteria(Criteria.where("account").is(accountID));
        Player player = mongoTemplate.findOne(query,Player.class);
        query = new Query();
        query.addCriteria(Criteria.where("player").is(player.id));
        Calendar cal=Calendar.getInstance();
        cal.setTime(date); //not sure if date.getTime() is needed here
        cal.add(Calendar.DAY_OF_MONTH, -7);
        Date weekDate = cal.getTime();
        query.addCriteria(Criteria.where("date").gte(weekDate));
        List<ExperienceHistory> experienceHistoryEntries = mongoTemplate.find(query,ExperienceHistory.class);
        return experienceHistoryEntries;

    }
}
