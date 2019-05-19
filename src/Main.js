import React, { Component } from 'react';
import Student from './student/Student';
import StudentHome from './student/StudentHome';
import Companyregister from './company/companyregister';
import CompanyHome from './company/CompanyHome';
import CompanyPostNewVacancy from './company/CompanyPostNewVacancy';
import Studentregister from './student/studentregister';
import FindCompanies from './student/FindCompanies';
import Home from './Home';
import Admin from './admin/Admin';
import Company from './company/Company';
import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {
// #80deea Main color
// #006064 Text color

    render() {        
        return (
            <Router>
            <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/student" component={Student} />
                    <Route exact path="/studentregister" component={Studentregister} />
                    <Route exact path="/studenthome" component={StudentHome} />
                    <Route exact path="/findcompanies" component={FindCompanies} />
                    <Route exact path="/companyregister" component={Companyregister} />
                    <Route exact path="/company" component={Company} />
                    <Route exact path="/companyhome" component={CompanyHome} />
                    <Route exact path="/companypostnewvacancy" component={CompanyPostNewVacancy} />
                    <Route exact path="/admin" component={Admin} />
            </div>
        </Router>
        
        );
    }
}


export default Main;

