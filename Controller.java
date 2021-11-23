package com.example.demo;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping(value="/employee"  )
    public ResponseEntity<Employee> addEmployee(@RequestParam(value = "employee") String employee,  @RequestParam(value = "file") MultipartFile file){
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            Employee employee1= objectMapper.readValue(employee, Employee.class);
            return  new ResponseEntity<>(HttpStatus.OK);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        //        return new ResponseEntity<>(employeeRepository.save(employee), HttpStatus.OK);
    }
}
