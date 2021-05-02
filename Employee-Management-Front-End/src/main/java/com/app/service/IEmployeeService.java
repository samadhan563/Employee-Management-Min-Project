package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Employee;

public interface IEmployeeService {

	List<Employee> getAllEmployee();

	Employee addNewEmployee(Employee employee);

	Employee getEmployeeById(int id);

	Employee updateEmployeeById(int id, Employee employee);

	

}
