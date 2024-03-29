package com.example.demo;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.criteria.CriteriaBuilder;
import java.nio.charset.StandardCharsets;

@RestController
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping(value="/employee"  )
    public ResponseEntity<Employee> addEmployee(@RequestParam(value="employee")String employee,  @RequestParam(value = "file") String file){
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            Employee employee1= objectMapper.readValue(employee, Employee.class);
            employee1.setAvatar(file.getBytes(StandardCharsets.UTF_8));
            return  new ResponseEntity<>(employeeRepository.save(employee1), HttpStatus.OK);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        //        return new ResponseEntity<>(employeeRepository.save(employee), HttpStatus.OK);
    }
    @GetMapping(value = "/employee")
    public ResponseEntity<Iterable<Employee>> getAll(){
        Iterable<Employee> lst= employeeRepository.findAll();
        return new ResponseEntity<>(employeeRepository.findAll(), HttpStatus.OK);
    }
    @PutMapping (value="/employee/{id}")
    public ResponseEntity<Employee> update(@PathVariable int id){
        employeeRepository.update(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
