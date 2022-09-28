package com.example.MathForKids.Service;

import com.example.MathForKids.Model.Operation;
import com.example.MathForKids.Repository.OperationRepositoryImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OperationService {

    @Autowired
    private OperationRepositoryImpl operationRepository;
    private Logger logger = LoggerFactory.getLogger(OperationService.class);

    public List<Operation>  generate_operations(){
        logger.info("Generate Operations list request received");
        return operationRepository.generate_operations();
    }


}
