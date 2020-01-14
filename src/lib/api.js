import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export function getAllStudents() {
    return axios.get(`${baseUrl}/`);
}

export function postNewStudent(student) {
    return axios.post(`${baseUrl}/${student.id}`, student.last_name);
}