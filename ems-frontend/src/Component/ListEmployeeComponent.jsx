import React, {useEffect,useState} from 'react'
import {listEmployees,deleteEmployee} from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'
const ListEmployeeComponent = () => {

const [employees, setEmployees] = useState([]);

const navigator = useNavigate();
useEffect(() => {
    getAllEmployees();
}, [])

function getAllEmployees(){
    listEmployees().then((response) => {
        setEmployees(response.data);
    }).catch(error=>{
        console.error(error);
    })
}

function addNewEmployee(){
    navigator('/add-employee');
}

function updateEmployee(id){
    navigator(`/update-employee/${id}`);
}

function removeEmployee(id){
    console.log(id);
    deleteEmployee(id).then((response) => {
        getAllEmployees();
        
    }).catch(error => {
        console.error(error);
    });
}

return (
    <div className="container mt-5">
        <h2 className="text-center mb-4">
            List of Employees
        </h2>
        <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
            Add Employee
        </button>

        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {employees.map((employee,index)=> (
                    <tr key={employee.id}>
                        <td>{index + 1}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button>
                            <button className="btn btn-danger" style={{marginLeft: "10px"}} onClick={() => removeEmployee(employee.id)}>Delete</button>
                            
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)
}

export default ListEmployeeComponent