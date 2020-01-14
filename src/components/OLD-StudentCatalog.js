import React from 'react'
import { getAllStudents, postNewStudent } from '../lib/api';
import StudentContext from '../context/StudentContext';
import StudentList from './StudentList';
import CreateStudent from './CreateStudent';

class StudentCatalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
            addStudent: this.addStudentInfo.bind(this),
            loading: true,
            disableButton: true,
            updatingStudentFeed: ' '
        }
    }
// ADD NEW STUDENT

    addStudentInfo(student){
        let newStudent = {
            id: '',
            first_name:' ',
            last_name: ' ',
            'created-time': new Date().toISOString(),
            'last-updated-time': new Date().toISOString()  
        }

        postNewStudent(newStudent).catch(()=> alert('fill in all the details'))

        this.setState({students: newStudent})
    }

    handleData() {
        getAllStudents().then(response => {

            this.setState({
                students: response.data,
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
        const { students } = this.state
        return (

            <div>
                <StudentContext.Provider>
                    <CreateStudent/>
                    <StudentList/>
                </StudentContext.Provider>
            </div>
        )
    }
}

export default StudentCatalog