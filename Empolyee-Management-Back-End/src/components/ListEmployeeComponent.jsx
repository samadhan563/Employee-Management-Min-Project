import React, { Component } from 'react'
import EmployeeServices from '../services/EmployeeServices'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employee: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }

    editEmployee(id) {
        this.props.history.push(`/add-update-employee/${id}`);
    }
    addEmployee() {
        this.props.history.push('/add-update-employee/-1')
    }
    componentDidMount() {
        EmployeeServices.getEmployee().then((res) => {
            this.setState({ employee: res.data });
        });
    }
    render() {
        return (
            <div>

                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee} >Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Employee First Name
                               </th>
                                <th>Employee Middle Name
                                </th>
                                <th>Employee Last Name
                            </th>
                                <th> Employee Email id
                            </th>
                                <th>Employee Salary</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.employee.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.middleName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            <td>{employee.salary}</td>
                                            <td>
                                                <button className="btn btn-info" onClick={()=>this.editEmployee(employee.id)} >Update Employee</button>
                                            </td>

                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListEmployeeComponent