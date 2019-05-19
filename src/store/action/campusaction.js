// import { createAction } from 'redux-actions';
import * as firebase from 'firebase';
import '../../firebase/firebaseconfig';

export class CampusActions {

    static STUDENT_DATA = 'STUDENT_DATA';
    static COMPANY_DATA = 'COMPANY_DATA';
    static VACANCY_DATA = 'VACANCY_DATA';
    static FILTER_STUDENTS = 'FILTER_STUDENTS';
    static NULL = 'NULL';

    static studentdata() {
        // console.log('studentdata action')
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
        // console.log('companydata action')
        return dispatch => {
            firebase.database().ref().child('companydata').on("value", snap => {
                let dbdata = snap.val();
                let dataarr = [];
                for (var key in dbdata) {
                    dataarr.push(dbdata[key])
                }

                dispatch({ type: CampusActions.STUDENT_DATA, payload: dataarr });
            })
        }
    }

    static CompanypostNewVacancy() {
        // console.log('companydata action')
        return dispatch => {
            firebase.database().ref().child('companydata').on("value", snap => {
                let dbdata = snap.val();
                let dataarr = [];
                for (var key in dbdata) {
                    dataarr.push(dbdata[key])
                }

                dispatch({ type: CampusActions.STUDENT_DATA, payload: dataarr });
            })
        }
    }

    static filterstudentdata(studentdataFilter) {
        console.log(studentdataFilter.dept);

        // return dispatch =>
        // ({ type: CampusActions.FILTER_STUDENTS, payload: studentdataFilter });

        return dispatch => {
            firebase.database().ref().child('students').orderByChild(studentdataFilter.dept && studentdataFilter.ssc && studentdataFilter.hsc  )
            .on("value", snap => {
                let dbdata = snap.val();
                let dataarr = [];
                for (var key in dbdata) {
                    dataarr.push(dbdata[key])
                }

                dispatch({ type: CampusActions.FILTER_STUDENTS, payload: studentdataFilter  });
            })
        }
    }

}