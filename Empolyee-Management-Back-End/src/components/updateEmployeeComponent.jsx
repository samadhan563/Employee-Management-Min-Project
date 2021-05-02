import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';

class updateEmployeeComponent extends Component {
    constructor(props) {

        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            middleName: '',
            emailId: '',
            salary: ''

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeMiddleNameHandler = this.changeMiddleNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.cancel = this.cancel.bind(this);

    }
    componentDidMount() {
        EmployeeServices.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            console.log(employee)
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                middleName: employee.middleName,
                emailId: employee.emailId,
                salary: employee.salary
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, middleName: this.state.middleName, emailId: this.state.emailId, salary: this.state.salary };
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeServices.updateEmployee(employee, this.state.id).then(res => {
            this.props.history.push('/employee');
        });
    }
    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changeMiddleNameHandler = (event) => {
        this.setState({ middleName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }
    changeEmailIdHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }
    changeSalaryHandler = (event) => {
        this.setState({ salary: event.target.value });
    }

    cancel() {
        this.props.history.push('/employee')
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name : </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Middle Name : </label>
                                        <input placeholder="Middle Name" name="middleName" className="form-control" value={this.state.middleName} onChange={this.changeMiddleNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name : </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Id : </label>
                                        <input placeholder="Email Id" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Salary  : </label>
                                        <input placeholder="Salary" name="salary" className="form-control" value={this.state.salary} onChange={this.changeSalaryHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateEmployee} >Update</button>
                                    <button className="btn btn-dager" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default updateEmployeeComponent;