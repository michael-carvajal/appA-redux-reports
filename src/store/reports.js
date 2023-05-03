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
export default function reportsReducer ( state = initialState,action) {
    switch (action.type) {
        case DELETE_REPORT:{
            const newState = {...state};
            delete newState[action.id]
            return newState
        }

        default:
            return state
    }
}
