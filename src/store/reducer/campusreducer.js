import { CampusActions } from '../action/campusaction';

const INITIAL_STATE = {
    data: [],
    //findStudents:[],
};

export function CampusReducer(state = INITIAL_STATE, action) {
    // console.log('TODO REDUCER PURE FUNCTION',action)

    switch (action.type) {
        case CampusActions.STUDENT_DATA:
    // console.log('student reducer')
        return ({
            ...state,
            data: action.payload
        })
           
        case CampusActions.FILTER_STUDENTS:
        console.log(action.payload)
        return ({
            ...state,
            data: action.payload
        })

        case CampusActions.COMPANY_DATA:
        // console.log('INCREMENT_COUNTER reducer', action.payload);

        case CampusActions.VACANCY_DATA:
        // console.log('DECREMENT_COUNTER reducer', action.payload);

        default:
        // console.log('default reducer')

            return state;
    }

}