package com.employeemgmt.employeemgmt.sevice;

import com.employeemgmt.employeemgmt.dto.EmployeeDto;
import com.employeemgmt.employeemgmt.entity.Employee;
import com.employeemgmt.employeemgmt.exception.ResourceNotFoundException;
import com.employeemgmt.employeemgmt.mapper.EmployeeMapper;
import com.employeemgmt.employeemgmt.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;


    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee createdEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(createdEmployee);

    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(()-> new ResourceNotFoundException("Employee with id " + employeeId + " not found"));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {

        List<Employee> employees = employeeRepository.findAll();
            return employees.stream().map(EmployeeMapper::mapToEmployeeDto).toList();
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployee) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(()-> new ResourceNotFoundException("Employee with id " + employeeId + " not found"));

        employee.setFirstName(updateEmployee.getFirstName());
        employee.setLastName(updateEmployee.getLastName());
        employee.setEmail(updateEmployee.getEmail());

        Employee updatedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(updatedEmployee);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
            Employee employee = employeeRepository.findById(employeeId).orElseThrow(()-> new ResourceNotFoundException("Employee with id " + employeeId + " not found"));
            employeeRepository.deleteById(employeeId);
    }
}


//package com.employeemgmt.employeemgmt.sevice;
//
//import com.employeemgmt.employeemgmt.dto.EmployeeDto;
//import com.employeemgmt.employeemgmt.entity.Employee;
//import com.employeemgmt.employeemgmt.mapper.EmployeeMapper;
//import com.employeemgmt.employeemgmt.repository.EmployeeRepository;
//import org.springframework.stereotype.Service;
//
//@Service
//public class EmployeeServiceImpl implements EmployeeService {
//
//    private final EmployeeRepository employeeRepository;
//
//    // Constructor injection
//    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
//        this.employeeRepository = employeeRepository;
//    }
//
//    @Override
//    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
//        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
//        Employee createdEmployee = employeeRepository.save(employee);
//        return EmployeeMapper.mapToEmployeeDto(createdEmployee);
//    }
//}

