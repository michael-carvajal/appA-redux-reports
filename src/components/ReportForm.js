import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { addReport, updateReport } from '../store/reports';

const ReportForm = ({ report, formType }) => {
  const history = useHistory();
  const [understanding, setUnderstanding] = useState(report.understanding);
  const [improvement, setImprovement] = useState(report.improvement);
  const dispatch = useDispatch();
const {reportId} =useParams()
  const handleSubmit = (e) => {
    e.preventDefault();
    report = { ...report, understanding, improvement };
    if (formType === "Update Report") {
      console.log(report);
      report.id = reportId
      dispatch(updateReport(report))

    } else {
      dispatch(addReport(report))
    }
    history.push(`/reports/${report.id}`);
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2>{formType}</h2>
      <label>
        Understanding {formType === "Update Report" ? <p>Update Report #1</p> : null}
        <input
          type="text"
          value={understanding}
          onChange={e => setUnderstanding(e.target.value)}
        />
      </label>
      <label>
        Improvement
        <textarea
          value={improvement}
          onChange={e => setImprovement(e.target.value)}
        />
      </label>
      <input type="submit" value={formType} />
    </form>
  );
}

export default ReportForm;
