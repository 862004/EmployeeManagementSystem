//package com.gokul.ems_backend.service;
//
//public interface EmployeeService {
//}
package com.gokul.ems_backend.service;

import com.gokul.ems_backend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeId(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeId,EmployeeDto updateEmployee);

    void deleteEmployee(Long employeeId);
}
