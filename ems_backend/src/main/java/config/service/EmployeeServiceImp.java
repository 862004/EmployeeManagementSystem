package com.gokul.ems_backend.service;

import com.gokul.ems_backend.dto.EmployeeDto;
import com.gokul.ems_backend.entity.Employee;
import com.gokul.ems_backend.mapper.EmployeeMapper;
import com.gokul.ems_backend.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImp implements EmployeeService {

    private final EmployeeRepository employeeRepository;


    public EmployeeServiceImp(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee =
                EmployeeMapper.mapToEmployee(employeeDto);

        Employee createdEmployee =
                employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(createdEmployee);
    }


    @Override
    public EmployeeDto getEmployeeId(Long employeeId) {

        Employee employee =
                employeeRepository.findById(employeeId)
                        .orElseThrow();

        return EmployeeMapper.mapToEmployeeDto(employee);
    }


    @Override
    public List<EmployeeDto> getAllEmployees() {

        List<Employee> employees =
                employeeRepository.findAll();

        return employees.stream()
                .map(EmployeeMapper::mapToEmployeeDto)
                .collect(Collectors.toList());
    }


    @Override
    public EmployeeDto updateEmployee(
            Long employeeId,
            EmployeeDto updateEmployee) {

        Employee employee =
                employeeRepository.findById(employeeId)
                        .orElseThrow();

        employee.setFirstName(updateEmployee.getFirstName());
        employee.setLastName(updateEmployee.getLastName());
        employee.setEmail(updateEmployee.getEmail());

        Employee updatedEmployee =
                employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(updatedEmployee);
    }


    @Override
    public void deleteEmployee(Long employeeId) {

        Employee employee =
                employeeRepository.findById(employeeId)
                        .orElseThrow();

        employeeRepository.deleteById(employeeId);
    }
}