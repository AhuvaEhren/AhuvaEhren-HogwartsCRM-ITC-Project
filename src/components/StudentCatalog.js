import React from 'react'
import { getAllStudents } from '../lib/api';
import StudentContext from '../context/StudentContext';
import StudentList from './StudentList';
import StudentInfo from './StudentInfo';
import { Link } from "react-router-dom";

class StudentCatalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
            student_id: [],
            // addStudent: this.addStudentInfo.bind(this),
            loading: true,
            disableButton: true
        }
    }
    // ADD NEW STUDENT

    // addStudentInfo(student){
    //     let newStudent = {
    //         id: '',
    //         first_name:' ',
    //         last_name: ' ',
    //         'created-time': new Date().toISOString(),
    //         'last-updated-time': new Date().toISOString()  
    //     }

    //     postNewStudent(newStudent).catch(()=> alert('fill in all the details'))

    //     this.setState({students: newStudent})
    // }

    handleData() {
        getAllStudents().then(response => {
            const { id } = this.props
            this.setState({
                students: response.data,
                laoding: false,
                disableButton: false,
            })
        })
    }

    componentDidMount() {
        this.handleData()
    }


    render() {
        return (

            <div className='holdsTableDiv'>

               <span className='holdbtns'> 
               <Link to='/add_student'>
                   <button type='submit' className='btn'> Add A New Student </button>
                </Link>
                </span>
                <StudentContext.Provider value={this.state}>
                    <StudentList />
                </StudentContext.Provider>
            </div>
        )
    }
}

export default StudentCatalog