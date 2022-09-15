package com.example.MathForKids.Service;

import com.example.MathForKids.Model.Account;
import com.example.MathForKids.Repository.AccountRepositoryImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    private AccountRepositoryImpl accountRepository;

    private Logger logger = LoggerFactory.getLogger(AccountService.class);

    public boolean sign_up(Account account){
        logger.info("Sign up request received");
        return this.accountRepository.sign_up(account);
    }

    public String login(Account account){
        logger.info("Login request received ");
        return this.accountRepository.login(account);
    }


}
