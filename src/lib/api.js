import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export function getAllStudents() {
    return axios.get(`${baseUrl}/`);
}

export function getStudentInfo(student_id) {
    return axios.get(`${baseUrl}/student/?id=${student_id}`);
}


export function postNewStudent(student) {
    console.log('FROM POST',student)
    return axios.post(`${baseUrl}/add_student`, student);
}

export function removeStudent(student_id){
    axios.delete(`${baseUrl}/remove/${student_id}`)
}