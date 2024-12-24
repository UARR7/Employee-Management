package com.employeemgmt.employeemgmt.repository;

import com.employeemgmt.employeemgmt.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
}
