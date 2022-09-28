package com.example.MathForKids.Repository;

import com.example.MathForKids.Model.Operation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Repository
public class OperationRepositoryImpl implements OperationRepository {

    private String[] Operators = {"+","-","/","*"};
    private String[] HiddenPos = {"left","operator","right","answer"};
    private Logger logger = LoggerFactory.getLogger(OperationRepositoryImpl.class);
    private Random rn = new Random();


    public Operation generate_expression(int id){

        String operator = this.Operators[rn.nextInt(this.Operators.length)];

        if (operator.equals("+") || operator.equals("-")){

            Integer left = rn.nextInt(99);
            Integer right = rn.nextInt(99);
            Integer answer = (operator.equals("+")) ? left + right : left - right;
            int hidden = rn.nextInt(4);
            return new Operation(id,left,operator,right,answer,this.HiddenPos[hidden]);

        } else {
            Integer left = rn.nextInt(9);
            Integer right = rn.nextInt(9);
            while (left * right == 0){
                left = rn.nextInt(9);
                right = rn.nextInt(9);
            }
            int hidden = rn.nextInt(4);
            return (operator.equals("*")) ? new Operation(id,left,operator,right,left*right, this.HiddenPos[hidden])
            : new Operation(id,left * right,operator,right,left, this.HiddenPos[hidden]);
        }


    }

    @Override
    public List<Operation> generate_operations() {

        List<Operation> operationList = new ArrayList<Operation>();

        for (int i = 0; i < 20 ; i++) {
            operationList.add(generate_expression(i));
        }

        logger.info("Operations list generated");
        return operationList;
    }

}
