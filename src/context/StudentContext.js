import React from 'react';

const StudentContext = React.createContext({
    students:[],
    // addStudent: (newStudent) => { }
})

export default StudentContext;