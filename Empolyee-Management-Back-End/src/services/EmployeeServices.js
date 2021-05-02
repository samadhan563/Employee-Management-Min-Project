import axios from 'axios';
const EMPLOYEE_BASE_API_URL = 'http://localhost:8080/employee/employees'
class EmployeeService {
    getEmployee() {
        return axios.get(EMPLOYEE_BASE_API_URL);
    }
    createEmployee(employee) {
        return axios.post(EMPLOYEE_BASE_API_URL, employee);
    }
    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_BASE_API_URL + "/" + employeeId);
    }
    updateEmployee(employee, employeeId) {
        return axios.put(EMPLOYEE_BASE_API_URL +"/"+ employeeId, employee);
    }
}
export default new EmployeeService();