package com.example.MathForKids.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Player {

    @Id
    public String id;

    public Integer experience;

    @DBRef
    public Account account;

    public Player(Integer experience, Account account) {
        this.experience = experience;
        this.account = account;
    }

    public Integer getExperience() {
        return experience;
    }

    public void setExperience(Integer experience) {
        this.experience = experience;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
