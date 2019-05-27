import * as firebase from 'firebase';
import '../../firebase/firebaseconfig';
import history from '../../history';


export class CampusActions {

    static STUDENT_DATA = 'STUDENT_DATA';
    static COMPANY_DATA = 'COMPANY_DATA';
    static VACANCY_DATA = 'VACANCY_DATA';

    static COMPANY_SIGNUP = 'COMPANY_SIGNUP';
    static COMPANY_SIGNIN = 'COMPANY_SIGNIN';

    static FILTER_STUDENTS = 'FILTER_STUDENTS';
    static POST_NEW_VACANCY = 'POST_NEW_VACANCY';

    static ERROR_COMPANY_SIGNUP = 'ERROR_COMPANY_SIGNUP';
    static ERROR_STUDENT_SIGNUP = 'ERROR_STUDENT_SIGNUP';

    static ERROR_COMPANY_SIGNIN = 'ERROR_COMPANY_SIGNIN';
    static ERROR_STUDENT_SIGNIN = 'ERROR_STUDENT_SIGNIN';
    static ERROR_ADMIN_SIGNIN = 'ERROR_ADMIN_SIGNIN';

    static ADMIN_COMPANY_DELETE_DATA = 'ADMIN_COMPANY_DELETE_DATA';
    static ADMIN_STUDENT_DELETE_DATA = 'ADMIN_STUDENT_DELETE_DATA';
    static ADMIN_COMPANY_VACANCY_DELETE_DATA = 'ADMIN_COMPANY_VACANCY_DELETE_DATA';
    static NULL = 'NULL';

    //--------------------------------------ADMIN DELETE DataBase------------------------------------------

    static adminDeleteStudent(data){
        return dispatch=> {
            firebase.database().ref().child('students/' + data).remove();
        }
    }

    static adminDeleteCompany(data){
        return dispatch=> {
            firebase.database().ref().child('CompanyData/' + data).remove();
        }
    }
    static adminDeletePostVacancy(data){
        return dispatch=> {
            firebase.database().ref().child('CompanyPostData/' + data).remove();
        }
    }

    //--------------------------------------SIGN IN------------------------------------------

    static companysignin(data){
        return dispatch=> {
            firebase.auth().signInWithEmailAndPassword(data.email, data.pass)
        .then((res) => {

             history.push('/companyhome');            
             localStorage.setItem("CompanyID", JSON.stringify(res.user.uid));
            console.log(res.user.uid);
            dispatch({ type: CampusActions.COMPANY_SIGNIN, payload: res.user.uid });

        })
        .catch((error) => {
            dispatch({ type: CampusActions.ERROR_COMPANY_SIGNIN, payload: error.message });
        })
        }
    }

    static studentsignin(data){
        return dispatch=> {
            firebase.auth().signInWithEmailAndPassword(data.email, data.pass)
        .then((res) => {

             history.push('/studenthome');            
          
        })
        .catch((error) => {
            dispatch({ type: CampusActions.ERROR_STUDENT_SIGNIN, payload: error.message });
        })
        }
    }

    static adminsignin(data){
        return dispatch=> {
            firebase.auth().signInWithEmailAndPassword(data.email, data.pass)
        .then((res) => {

             history.push('/admin');            
          
        })
        .catch((error) => {
            dispatch({ type: CampusActions.ERROR_ADMIN_SIGNIN, payload: error.message });
        })
        }
    }

    //--------------------------------------SIGN UP------------------------------------------

    static companysignup(data) {
        return dispatch => {

            firebase.auth().createUserWithEmailAndPassword(data.email, data.pass)
                .then((res) => {
                    console.log(res.user.uid);
                    if (res) {

                        firebase.database().ref().child('CompanyData').child(res.user.uid).set({
                            Name: data.companyname,
                            Email: data.email,
                            Contact: data.contact,
                            Establish: data.establish,
                            Id: res.user.uid,
                        });

                    dispatch({ type: CampusActions.COMPANY_SIGNUP, payload: res.user.uid });
                    history.push('/companyhome');    

                    }
                })
                .catch((error) => {
                    dispatch({ type: CampusActions.ERROR_COMPANY_SIGNUP, payload: error.message });

                })
        }
    }


    static studentsignup(data) {
        return dispatch => {

            firebase.auth().createUserWithEmailAndPassword(data.email, data.pass)
                .then((res) => {
                    if (res) {

                        firebase.database().ref().child('students').child(res.user.uid).set({
                            Name: data.name,
                            Gender: data.gender,
                            Email: data.email,
                            Contact: data.contact,
                            City: data.city,
                            Address: data.address,
                            Age: data.age,
                            School: data.school,
                            Hsc: data.hsc,
                            Uni: data.uni,
                            Dept: data.dept,
                            id: res.user.uid,
                        });
                        history.push('/studenthome');

                    }
                })
                .catch((error) => {
                    dispatch({ type: CampusActions.ERROR_STUDENT_SIGNUP, payload: error.message });

                })
        }
    }

    //--------------------------------------POST VACANCY------------------------------------------

    static postnewvacancy(data) {

        return dispatch => {

            const ref = firebase.database().ref().child('CompanyPostData').push();
            firebase.database().ref().child('CompanyPostData').child(ref.key).set({
                
                CompanyName: data.compname,
                Email: data.email,
                Salary: data.salary,
                JobProfile: data.jobprofile,
                Bond: data.bond,
                Criteria: data.criteria,
                id: ref.key,
            });
            dispatch({ type: CampusActions.POST_NEW_VACANCY, payload: data });

        }
    }

    //--------------------------------------FETCHING DATA------------------------------------------

    static studentdata() {
        return dispatch => {
            firebase.database().ref().child('students').on("value", snap => {
                let dbdata = snap.val();
                let dataarr = [];
                for (var key in dbdata) {
                    dataarr.push(dbdata[key])
                }

                dispatch({ type: CampusActions.STUDENT_DATA, payload: dataarr });
            })
        }

    }

    static companydata() {

        return dispatch => {
            firebase.database().ref().child('CompanyData').on("value", snap => {
                let dbdata = snap.val();
                let dataarr = [];
                for (var key in dbdata) {
                    dataarr.push(dbdata[key])
                }

                dispatch({ type: CampusActions.COMPANY_DATA, payload: dataarr });
            })
        }

    }

    static vacancydata() {

        return dispatch => {
            firebase.database().ref().child('CompanyPostData').on("value", snap => {
                let dbdata = snap.val();
                let dataarr = [];
                for (var key in dbdata) {
                    dataarr.push(dbdata[key])
                }

                dispatch({ type: CampusActions.VACANCY_DATA, payload: dataarr });
            })
        }

    }

    //--------------------------------------SIGN OUT------------------------------------------

    static signout() {
        return dispatch => {
            firebase.auth().signOut().then(function () {
                localStorage.clear()

                history.push('/');

                window.location.reload('');

            }).catch(function (error) {
                alert(error.msg)
            });
        }
    }

    //--------------------------------------FILTERING DATA------------------------------------------

    static filterstudentdata(studentdataFilter) {
        return dispatch => {
                    // console.log(studentdataFilter.dept)

            firebase.database().ref('/').child('students').orderByChild('Dept').equalTo(studentdataFilter.dept).on("value", snap => {
                    let dbdata = snap.val();
                    let dataarr = [];
                        for (var key in dbdata) {
                            dataarr.push(dbdata[key])
                        }

                    dispatch({ type: CampusActions.FILTER_STUDENTS, payload: dataarr });
                });
        }
    }

}