package com.example.MathForKids.Repository;

import com.example.MathForKids.Model.Account;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AccountRepository {

    boolean sign_up(Account account);
    String login(Account account);

}
