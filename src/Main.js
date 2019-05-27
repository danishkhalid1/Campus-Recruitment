import React, { Component } from 'react';
import Student from './student/Student';
import StudentHome from './student/StudentHome';
import Companyregister from './company/companyregister';
import CompanyHome from './company/CompanyHome';
import CompanyPostNewVacancy from './company/CompanyPostNewVacancy';
import Studentregister from './student/studentregister';
import FindCompanies from './student/FindCompanies';
import Home from './Home';
import AdminHome from './admin/AdminHome';
import AdminSignin from './admin/adminsignin';
import Company from './company/Company';
import { Router, Route } from "react-router-dom";
import history from './history';

class Main extends Component {

    render() {        
        return (
            <Router history={history}>
            <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/student" component={Student} />
                    {/* <Route exact path="/adminsignin" component={AdminSignin} /> */}
                    <Route exact path="/studentregister" component={Studentregister} />
                    <Route exact path="/studenthome" component={StudentHome} />
                    <Route exact path="/findcompanies" component={FindCompanies} />
                    <Route exact path="/companyregister" component={Companyregister} />
                    <Route exact path="/company" component={Company} />
                    <Route exact path="/companyhome" component={CompanyHome} />
                    <Route exact path="/companypostnewvacancy" component={CompanyPostNewVacancy} />
                    <Route exact path="/admin" component={AdminHome} />
                    <Route exact path="/adminsignin" component={AdminSignin} />

            </div>
        </Router>
        
        );
    }
}


export default Main;

