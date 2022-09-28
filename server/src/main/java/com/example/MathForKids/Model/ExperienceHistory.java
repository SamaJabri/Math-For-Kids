package com.example.MathForKids.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
public class ExperienceHistory {

    @Id
    public String id;
    public Integer Experience;
    @JsonFormat(pattern="dd-MM-yyyy")
    public Date date;
    @DBRef
    public Player player;

    public ExperienceHistory(Integer Experience, Date date, Player player) {
        this.Experience = Experience;
        this.date = date;
        this.player = player;
    }

    public Integer getExperience() {
        return Experience;
    }

    public void setExperience(Integer Experience) {
        this.Experience = Experience;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }
}
