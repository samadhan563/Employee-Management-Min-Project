package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IEmployeeDao;
import com.app.exception.ResourceNotFoundException;
import com.app.pojos.Employee;
@Service
@Transactional
public class EmployeeServiceImpl implements IEmployeeService {
	@Autowired
	private IEmployeeDao employeeDao;

	@Override
	public List<Employee> getAllEmployee() {
		return employeeDao.findAll();
	}

	@Override
	public Employee addNewEmployee(Employee employee) {
		return employeeDao.save(employee);
	}

	@Override
	public Employee getEmployeeById(int id) {
		
		Optional<Employee> optionalEmployee=employeeDao.findById(id);
		Employee employee=optionalEmployee.orElseThrow(()->new ResourceNotFoundException("Sorry employee not found with id : "+ id));
		return employee ;
	}

	@Override
	public Employee updateEmployeeById(int id,Employee e) {

		Optional<Employee> optionalEmployee=employeeDao.findById(id);
		Employee employee=optionalEmployee.orElseThrow(()->new ResourceNotFoundException("Sorry employee not found with id : "+ id));
		employee.setFirstName(e.getFirstName());
		employee.setLastName(e.getLastName());
		employee.setMiddleName(e.getMiddleName());
		employee.setEmailId(e.getEmailId());
		employee.setSalary(e.getSalary());
		return employeeDao.save(employee) ;	
	}
	
}
