import React from 'react';
import StudentContext from '../context/StudentContext';
import { postNewStudent } from '../lib/api';


class CreateStudent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // student: {
                first_name: ' ',
                last_name: ' ',
                skills: [{'skill' : '',
                           'level': '' }],
                desired_skills: [{'skill' : '',
                                'level': '' }],
                enrolled_courses: [{'skill' : '',
                                'level': '' }],
                "created-time": ' ',
                "last-updated-time": ' '
            // }
        }
    }

    addStudentInfo = (event) => {
        this.setState({
            student: {
                first_name: event.target.value
            }
        })
        // console.log('event',event)
        // console.log('event.target',event.target)
        // console.log('event.target.value',event.target.value)
        console.log('this.state.student.first_name',this.state.student)
    }

    handleFirstName(event) {
        // console.log('%%%%%%%%%%%%%%%%%%', event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log('this.state.student',this.state)
    }
    handleLastName(event) {
            this.setState({
                last_name: event.target.value
    })
    console.log('this.state.student.last_name',this.state.last_name)
    }

    handleSkills(event) {
            this.setState({
                skills: [{'skill': event.target.value}]
    })
    console.log('this.state.student.skills',this.state.skills)
    }
    
    handleSubmit(event) {
        event.preventDefault();
        // const { first_name, last_name} = this.state
        // this.setState({
        //     [first_name]: targetvalue,
        //     [last_name]: value
        //   });
        console.log('STUDENT', this.state);
        const st = this.state
        postNewStudent(st)
        console.log('end of handle submit function')
    }
    

    render() {
        return (
            <div>
                {/* <form onSubmit={(event) => this.handleSubmit(event)}></form> */}
                <form>
                <h1>Create New Student Page</h1>
                <ul className='create-student-form'> 
                <li>
                    <div>
                        <label>First Name:</label>
                        {/* <input type='text' onChange={event => this.addStudentInfo(event)}/> */}
                        <input type='text' name='first_name' onChange={(event) => this.handleFirstName(event)}/>
                    
                        <label>Last Name:</label>
                        <input type='text' name='last_name' onChange={(event) => this.handleFirstName(event)}/>
                        {/* <input type='text' onChange={(event) => this.handleLastName(event)}/> */}
                    </div>
                    </li>
                    <li>
                       <ul> 
                           <label>Courses:</label>
                                <li>
                                    <div>
                                    <input type='checkbox' name='enrolled_courses' value='Alchemy basics'/> Alchemy basics 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li>
                                    <input type='checkbox' name='enrolled_courses' value='Alchemy advanced'/>Alchemy advanced 
                                    <div>
                                        <label>Level: </label> 
                                        <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                        </div>
                                </li>
                                <li>
                                    <input type='checkbox' name='enrolled_courses' value='Magic for day-to-day life'/>Magic for day-to-day life 
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li>
                                    <input type='checkbox' name='enrolled_courses' value='Magic for medical professionals'/>Magic for medical professionals 
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li>
                                    <input type='checkbox' name='enrolled_courses' value='Dating with magic'/>Dating with magic 
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>   
                                </li>
                        </ul>
                    </li>
                    <li>
                        <ul> 
                           <label>Magic Skills:</label>
                                <li> 
                                <div>
                                    <input type='checkbox' onChange={(event) => this.handleSkills(event)}/> Alchemy 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' onChange={(event) => this.handleSkills(event)}/> Animation 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' onChange={(event) => this.handleSkills(event)}/> Conjuror 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' onChange={(event) => this.handleSkills(event)}/> Disintegration 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' onChange={(event) => this.handleSkills(event)}/> Elemental 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' onChange={(event) => this.handleSkills(event)}/> Healing 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' onChange={(event) => this.handleSkills(event)}/> Illusion 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' onChange={(event) => this.handleSkills(event)}/> Immortality 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' onChange={(event) => this.handleSkills(event)}/> Invisibility 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' onChange={(event) => this.handleSkills(event)}/> Invulnerability 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' onChange={(event) => this.handleSkills(event)}/> Necromancer 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' onChange={(event) => this.handleSkills(event)}/> Omnipresent 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' onChange={(event) => this.handleSkills(event)}/> Omniscient 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' onChange={(event) => this.handleSkills(event)}/> Poison 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' value='Possession' onChange={(event) => this.handleSkills(event)}/> Possession 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' value='Self-detonation' onChange={(event) => this.handleSkills(event)}/> Self-detonation 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' value={'Summoning'} onChange={(event) => this.handleSkills(event)}/> Summoning 
                                    </div>
                                    <div>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                                <li> 
                                <div>
                                    <input type='checkbox' value={'Water breathing'} onChange={(event) => this.handleSkills(event)}/> Water breathing 
                                    {/* </div>
                                    <div> */} <br/>
                                    <label>Level: </label> 
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    </select>
                                    </div>
                                </li>
                        </ul>
                    </li>

                    {/* <div>{skillList.map((skill, i)=> <label key={i}><input type="checkbox" name={skill}/>{skill}</label>)}</div> */}
                </ul>
                {/* <StudentContext.Consumer>

                    {context => (


            ) 
            
            }
                </StudentContext.Consumer> */}
                </form>
                {/* <button type='submit' onClick={() => this.addStudentInfo(this.state.student)}> */}
                <button type='submit' onClick={(event) => this.handleSubmit(event)}> Submit </button>
            </div>
            
        )
    }


}

export default CreateStudent;