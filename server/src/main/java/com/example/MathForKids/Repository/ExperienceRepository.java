package com.example.MathForKids.Repository;

import com.example.MathForKids.Model.ExperienceHistory;

import java.util.Date;
import java.util.List;

public interface ExperienceRepository {

    public boolean increase_Experience(Integer amount, String accountId, Date date);
    public List<ExperienceHistory> get_experienceHistory(String accountId, Date date);

}
