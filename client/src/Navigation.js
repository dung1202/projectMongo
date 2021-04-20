import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Route, useHistory, useParams
} from "react-router-dom";
import CreateSchoolScreen from "./CreateSchoolScreen";
import CreateStudentScreen from "./CreateStudentScreen";
import LoginScreen from "./LoginScreen";
import Main from "./Main";
import SchoolManagement from './SchoolManagement'
import StudentManagement from './StudentManagement'
const keyStorage = 'accessToken'
export default function Navigation() {
    const [token, setToken] = useState('')

    const loginSucess = (token) => {
        setToken(token)
        localStorage.setItem(keyStorage, token)
    }

    useEffect(() => {
        let token = localStorage.getItem(keyStorage)
        setToken(token)
    }, [])

    return (
        <Router>
            {!token ? <LoginScreen setToken={loginSucess} /> :
                (<><Route exact path="/" component={Main} />
                    <Route path="/student-management" component={StudentManagement} />
                    <Route path="/student-management/create" component={CreateStudentScreen} />
                    <Route path="/student-management/edit/:id" component={CreateStudentScreen} />
                    <Route path="/school-management" component={SchoolManagement} />
                    <Route path="/school-management/create" component={CreateSchoolScreen} /></>)}
        </Router>
    );
}

