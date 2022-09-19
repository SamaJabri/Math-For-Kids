package com.example.MathForKids.Controller;

import com.example.MathForKids.Model.Account;
import com.example.MathForKids.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AccountController {

    @Autowired
    private AccountService accountService;

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    @ResponseBody
    public boolean sign_up(@RequestBody Account account){
        return this.accountService.sign_up(account);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public String login(@RequestBody Account account){
        return this.accountService.login(account);
    }



}
