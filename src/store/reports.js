import reports from "../data/initial-reports.json"
const initialState = {};
reports.forEach(report => initialState[report.id] = report);


export default function reportsReducer ( state = initialState,action) {
    switch (action.type) {
        case "display":

            break;

        default:
            return state
    }
}
