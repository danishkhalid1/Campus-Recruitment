import { CampusActions } from '../action/campusaction';

const INITIAL_STATE = {
    data: [],
    studentdataredux: [],
    filterstudentdataredux: [],
    postnewvacancydataredux: [],
    errorcompanysignin:[],
    errorstudentsignin:[],
    errorcompanysignup: [],
    errorstudentsignup:[],
    companydataredux:[],
    vacancydataredux:[],
    companysignupdata:[],
    erroradminsignin:[],
    companysignin:[],

};


export function CampusReducer(state = INITIAL_STATE, action) {
    // console.log('TODO REDUCER PURE FUNCTION',action)

    switch (action.type) {
        case CampusActions.COMPANY_SIGNIN:
            return ({
                ...state,
                companysignin: action.payload
            })

        case CampusActions.COMPANY_SIGNUP:
            return ({
                ...state,
                companysignupdata: action.payload
            })

        case CampusActions.STUDENT_DATA:
            return ({
                ...state,
                studentdataredux: action.payload
            })

        case CampusActions.COMPANY_DATA:
            return ({
                ...state,
                companydataredux: action.payload
            })

        case CampusActions.VACANCY_DATA:
            return ({
                ...state,
                vacancydataredux: action.payload
            })
    
        case CampusActions.FILTER_STUDENTS:
            return ({
                ...state,
                filterstudentdataredux: action.payload
            })

        case CampusActions.POST_NEW_VACANCY:
            return ({
                ...state,
                postnewvacancydataredux: action.payload
            })
        case CampusActions.ERROR_COMPANY_SIGNIN:
        return ({
            ...state,
            errorcompanysignin: action.payload
        })

        case CampusActions.ERROR_STUDENT_SIGNIN:
        return ({
            ...state,
            errorstudentsignin: action.payload
        })

        case CampusActions.ERROR_ADMIN_SIGNIN:
        return ({
            ...state,
            erroradminsignin: action.payload
        })
        case CampusActions.ERROR_COMPANY_SIGNUP:
            return ({
                ...state,
                errorcompanysignup: action.payload
            })

        case CampusActions.ERROR_STUDENT_SIGNUP:
        return ({
            ...state,
            errorstudentsignup: action.payload
        })
        default:
            // console.log('default reducer')

            return state;
    }

}