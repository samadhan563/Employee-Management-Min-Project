package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Employee;
import com.app.service.IEmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/employee")
public class EmployeeController {
	@Autowired
	private IEmployeeService employeeService;

	@GetMapping("/employees")
	public List<Employee> getAllEmployee() {
		return employeeService.getAllEmployee();

	}

	@PostMapping("/employees")
	public Employee addNewEmployee(@RequestBody Employee employee) {
		System.out.println(employee);
		return employeeService.addNewEmployee(employee);

	}

	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
		System.out.println(id);
		return ResponseEntity.ok(employeeService.getEmployeeById(id));

	}
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployeeById(@PathVariable int id, @RequestBody Employee employee ) {
		System.out.println(id);
		return ResponseEntity.ok(employeeService.updateEmployeeById(id,employee));

	}
}
