import reports from "../data/initial-reports.json"
const initialState = {};
reports.forEach(report => initialState[report.id] = report);

const DELETE_REPORT = "reports/DELETE_REPORT"
export const removeReport = (id) => {
    return {
        type: DELETE_REPORT,
        id
    }
}
const ADD_REPORT = "reports/ADD_REPORT"
export const addReport = (report) => {
    return {
        type: ADD_REPORT,
        report
    }
}
const UPDATE_REPORT = "reports/UPDATE_REPORT"
export const updateReport = (report) => {
    return {
        type: UPDATE_REPORT,
        report
    }
}
const RESET_REPORT = "reports/RESET_REPORT"
export const resetReport = () => {
    return {
        type: RESET_REPORT,
        
    }
}
export default function reportsReducer ( state = initialState,action) {
    switch (action.type) {
        case DELETE_REPORT:{
            const newState = {...state};
            delete newState[action.id]
            return newState
        }
        case ADD_REPORT:{
            const newState = {...state};
            newState[action.report.id] = action.report
            return newState
        }
        case UPDATE_REPORT:{
            const newState = { ...state };
            newState[action.report.id] = { ...action.report }
            return newState
        }
        case RESET_REPORT:{

            return initialState
        }

        default:
            return state
    }
}
