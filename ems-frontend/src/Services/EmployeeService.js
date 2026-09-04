import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';





const adminAuth = {
    auth: {
        username: "admin",
        password: "admin123"
    }
};



const userAuth = {
    auth: {
        username: "user",
        password: "user123"
    }
};



export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL, adminAuth);
};



export const createEmployee = (employee) => {
    return axios.post(
        REST_API_BASE_URL,
        employee,
        adminAuth
    );
};



export const getEmployeeByAdmin = (employeeId) => {
    return axios.get(
        `${REST_API_BASE_URL}/${employeeId}`,
        adminAuth
    );
};



export const updateEmployee = (employeeId, employee) => {
    return axios.put(
        `${REST_API_BASE_URL}/${employeeId}`,
        employee,
        adminAuth
    );
};



export const deleteEmployee = (employeeId) => {
    return axios.delete(
        `${REST_API_BASE_URL}/${employeeId}`,
        adminAuth
    );
};


export const listEmployeesByUser = () => {
    return axios.get(
        REST_API_BASE_URL,
        userAuth
    );
};



export const getEmployeeByUser = (employeeId) => {
    return axios.get(
        `${REST_API_BASE_URL}/${employeeId}`,
        userAuth
    );
};