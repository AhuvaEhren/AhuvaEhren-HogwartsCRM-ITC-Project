import React from 'react';
import StudentContext from '../context/StudentContext';

class CreateStudent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            student: {
                id: ' ',
                first_name: ' ',
                last_name: ' ',
                "created-time": ' ',
                "last-updated-time": ' '
            }
        }
    }

    addStudentInfo = (event) => {
        this.setState({
            student: event.target.value
        })
    }

    render(){
        return (
        <StudentContext.Consumer>
            {/* {context => (


            ) 
            
            } */}
        </StudentContext.Consumer>)
    }


}

export default CreateStudent;