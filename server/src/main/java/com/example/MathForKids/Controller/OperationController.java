package com.example.MathForKids.Controller;

import com.example.MathForKids.Model.Operation;
import com.example.MathForKids.Service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class OperationController {

    @Autowired
    private OperationService operationService;

    @RequestMapping(value = "/get_operations", method = RequestMethod.GET)
    @ResponseBody
    public List<Operation> generate_operations(){
        return operationService.generate_operations();
    }

}
