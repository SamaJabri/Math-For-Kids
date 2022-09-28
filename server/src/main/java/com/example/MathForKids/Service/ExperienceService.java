package com.example.MathForKids.Service;

import com.example.MathForKids.Model.ExperienceHistory;
import com.example.MathForKids.Repository.ExperienceRepositoryImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ExperienceService {

    @Autowired
    private ExperienceRepositoryImpl experienceRepository;
    private Logger logger = LoggerFactory.getLogger(ExperienceService.class);

    public boolean increase_Experience(Integer amount, String accountID, Date date){
        logger.info("Increase experience request received");
        return experienceRepository.increase_Experience(amount, accountID, date);
    }

    public List<ExperienceHistory> get_experienceHistory(String accountId, Date date){
        logger.info("Experience history request received");
        return experienceRepository.get_experienceHistory(accountId,date);
    }

}
