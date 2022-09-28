package com.example.MathForKids.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Operation {


    public Integer id;
    public Integer left;
    public String operator;
    public Integer right;
    public Integer answer;
    public String hidden;

    public Operation(Integer id,Integer left, String operator, Integer right, Integer answer, String hidden) {
        this.id = id;
        this.left = left;
        this.operator = operator;
        this.right = right;
        this.answer = answer;
        this.hidden = hidden;
    }

    public Integer getLeft() {
        return left;
    }

    public void setLeft(Integer left) {
        this.left = left;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }

    public Integer getRight() {
        return right;
    }

    public void setRight(Integer right) {
        this.right = right;
    }

    public Integer getAnswer() {
        return answer;
    }

    public void setAnswer(Integer answer) {
        this.answer = answer;
    }

    public String getHidden() {
        return hidden;
    }

    public void setHidden(String hidden) {
        this.hidden = hidden;
    }
}
