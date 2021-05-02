package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Employee;

public interface IEmployeeDao extends JpaRepository<Employee, Integer>{

}
