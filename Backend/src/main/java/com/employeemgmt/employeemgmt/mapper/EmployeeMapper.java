package com.employeemgmt.employeemgmt.mapper;

import com.employeemgmt.employeemgmt.dto.EmployeeDto;
import com.employeemgmt.employeemgmt.entity.Employee;


public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee) { // Fix typo here
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}
//
////package com.employeemgmt.employeemgmt.mapper;
////
////import com.employeemgmt.employeemgmt.dto.EmployeeDto;
////import com.employeemgmt.employeemgmt.entity.Employee;
////
////public class EmployeeMapper {
////
////    public static EmployeeDto mapToEmployeeDto(Employee employee) { // Fixed typo here
////        return new EmployeeDto(
////                employee.getId(),
////                employee.getFirstName(),
////                employee.getLastName(),
////                employee.getEmail()
////        );
////    }
////
////    public static Employee mapToEmployee(EmployeeDto employeeDto) {
////        return new Employee(
////                employeeDto.getId(),
////                employeeDto.getFirstName(),
////                employeeDto.getLastName(),
////                employeeDto.getEmail()
////        );
////    }
////}
////

//package com.employeemgmt.employeemgmt.mapper;
//
//import com.employeemgmt.employeemgmt.dto.EmployeeDto;
//import com.employeemgmt.employeemgmt.entity.Employee;
//
//public class EmployeeMapper {
//
//    // Converts Employee to EmployeeDto
//    public static EmployeeDto mapToEmployeeDto(Employee employee) {
//        return new EmployeeDto(
//                employee.getId(),
//                employee.getFirstName(),
//                employee.getLastName(),
//                employee.getEmail()
//        );
//    }
//
//    // Converts EmployeeDto to Employee
//    public static Employee mapToEmployee(EmployeeDto employeeDto) {
//        return new Employee(
//                employeeDto.getId(),
//                employeeDto.getFirstName(),
//                employeeDto.getLastName(),
//                employeeDto.getEmail()
//        );
//    }
//}
