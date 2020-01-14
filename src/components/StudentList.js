import React from 'react';
import StudentContext from '../context/StudentContext';

const StudentList = props => {
    return (
        <StudentContext.Consumer>
            {({ students }) => (
                <div className='tableDiv'>
                    
                    <table className='table'>
                        <tr>
                            <td>Student ID:</td>
                            <td>First Name:</td>
                            <td>Last Name:</td>
                            <td>Created:</td>
                            <td>Updated:</td>
                        </tr>
                    {students.map((student) => {
                        return (
                            // <div>{student.first_name}</div>
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.first_name}</td>
                                    <td>{student.last_name}</td>
                                    <td>{student.created_time}</td>
                                    <td>{student.last_updated}</td>
                                </tr>
                        )

                    })}
                    </table>
                </div>
            )}
        </StudentContext.Consumer>
    )
}

export default StudentList;