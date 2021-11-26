package com.example.demo;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface EmployeeRepository extends CrudRepository<Employee, Integer> {
    @Modifying
    @Transactional
    @Query(value = "update employees set employee_name='testupdate' where employee_id != ?1", nativeQuery = true)
    public void update(int id);
}
