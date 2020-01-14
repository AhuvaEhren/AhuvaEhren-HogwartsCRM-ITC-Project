import React from 'react';
import StudentContext from '../context/StudentContext';
import { Link } from "react-router-dom";
import { getStudentId } from './StudentInfo';

const StudentList = props => {
    return (
        <StudentContext.Consumer>

{/* {getStudentId = () => {
    console.log(this.student.id)
} 
} */}
            {({ students }) => (
                <div className='tableDiv'>

                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>Student ID:</td>
                                <td>First Name:</td>
                                <td>Last Name:</td>
                                <td>Created:</td>
                                <td>Updated:</td>

                            </tr>
                            {students.map((student) => {
                                return (
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.first_name}</td>
                                        <td>{student.last_name}</td>
                                        <td>{student.created_time}</td>
                                        <td>{student.last_updated}</td>
                                        <Link to='/student'>
                                            <td><button type='button'>Student Info</button></td>
                                        </Link>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </StudentContext.Consumer>
    )
}

export default StudentList;