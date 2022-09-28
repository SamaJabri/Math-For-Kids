package com.example.MathForKids.Controller;

import com.example.MathForKids.Model.ExperienceHistory;
import com.example.MathForKids.Service.ExperienceService;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
public class ExperienceController {

    public static class IncreaseExperienceRequest{
        public Integer amount;
        public String accountID;
        @JsonFormat(pattern="dd-MM-yyyy")
        public Date date;
    }

    public static class ExperienceHistoryRequest{
        public String accountID;
        @JsonFormat(pattern="dd-MM-yyyy")
        public Date date;
    }


    @Autowired
    private ExperienceService experienceService;

    @RequestMapping(value = "/increaseExperience", method = RequestMethod.POST)
    @ResponseBody
    public boolean increase_Experience(@RequestBody IncreaseExperienceRequest experienceRequest){
        return this.experienceService.increase_Experience(experienceRequest.amount, experienceRequest.accountID,experienceRequest.date);
    }

    @RequestMapping(value = "/getExperienceHistory", method = RequestMethod.GET)
    @ResponseBody
    public List<ExperienceHistory> get_experienceHistory(@RequestBody ExperienceHistoryRequest experienceRequest){
        return this.experienceService.get_experienceHistory(experienceRequest.accountID,experienceRequest.date);
    }


}
