package com.example.MathForKids.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Account {

    @Id
    public String id;

    private String email;
    private String password;

    public Account(String email,String password){
        this.email = email;
        this.password = password;
    }

    @Override
    public String toString(){
        return String.format("Account[id=%s, email='%s']", this.id,this.email);
    }

    public String getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
