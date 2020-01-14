import React from 'react';
import StudentContext from '../context/StudentContext';
import { Link } from "react-router-dom";

class StudentInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            student: [ ]
         }
    }

    render(){
        return(
            <div>
                <Link to={`/`}>
                    <button type='button'>Return to Student Catalog</button>
                </Link>

                <h1>Student Info Page</h1>

            </div>
        )
    }
}

export default StudentInfo;