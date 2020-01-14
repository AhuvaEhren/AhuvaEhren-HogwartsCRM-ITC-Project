import React from 'react'
import { getAllStudents } from '../lib/api';
import StudentContext from '../context/StudentContext';
import StudentList from './StudentList';

class StudentCatalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
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

            this.setState({
                students: response.data.student_list,
                laoding: false,
                disableButton: false
            })
            console.log('this.state.student', this.state.students)

            console.log('response', response.data)

        })
    }

    componentDidMount() {
        this.handleData()
    }


    render() {
        return (

            <div className='holdsTableDiv'>
               <span className='holdbtns'> 
                   <button type='submit' className='btn'> Add A New Student </button>
                    <button type='submit' className='btn'> Update Existing Student </button>
                </span>
                <StudentContext.Provider value={this.state}>
                    <StudentList />
                </StudentContext.Provider>
            </div>
        )
    }
}

export default StudentCatalog