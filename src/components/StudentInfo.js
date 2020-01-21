import React from 'react';
import StudentContext from '../context/StudentContext';
import { Link } from "react-router-dom";
import { getStudentInfo, removeStudent } from '../lib/api';


class StudentInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            student: [],
            skills:[],
            desiredskills: [],
            courses: []
        }
    }

    async handleData(id) {
        const response = await getStudentInfo(id)
        const data = response.data
        this.setState({
            student: data,
            skills: data.skills,
            desiredskills: data.desired_skills,
            courses: data.enrolled_courses
        })
    }

    handleremoveStudent(){
        const { student } = this.state
        console.log('studnet ',student.id)
        console.log('in removeStudent function')
        removeStudent().then((data) =>{
            console.log('data',data)
        }).catch((err) => {
            console.log(err)
        })
        console.log('end of removeStudent function')
        
    }

    componentDidMount() {
        const url = window.location
        const id = new URLSearchParams(url.search).get('id')
        this.handleData(id).then( )
    }

    render() {
        const { student, skills, desiredskills,courses } = this.state
        return (
            <div>
                <span>
                <Link to={`/`}>
                    <button type='button'>Return to Student Catalog</button>
                </Link>

                {/* <td><button type='button' >Remove</button></td> */}
                {/* onClick={e => this.removeMovie(e, movie)} */}
                <td><button type='button' onClick={() => this.handleremoveStudent()}>Remove</button></td>
                </span>
                <h1>Student Info Page</h1>
                <h2>First: {student.first_name}</h2>
                <h2>Last: {student.last_name}</h2>
                <h2>ID: {student.id}</h2>
                <h2>Skills:</h2>
                {skills.map(skill => Object.entries(skill).map(([key, val]) => 
                                   <span key={key}> {key==='skill_level' && `Level: ${val}`} {key!=='skill_level' && `${val}`} <br/></span>) )}
                <h2>Desired Skills:</h2>
                {desiredskills.map(skill => Object.entries(skill).map(([key, val]) => 
                                   <span key={key}> {key==='skill_level' && `Level: ${val}`} {key!=='skill_level' && `${val}`} <br/></span>) )}
                <h2>Courses: {courses.course_name}</h2>
                {courses.map(course => Object.entries(course).map(([key, val]) => 
                                   <span key={key}> {key==='course_level' && `Level: ${val}`} {key!=='course_level' && `${val}`} <br/></span>) )}
            </div>
        )
    }
}

export default StudentInfo;