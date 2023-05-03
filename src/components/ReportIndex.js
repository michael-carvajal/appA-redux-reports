import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReportIndexItem from './ReportIndexItem';

const ReportIndex = () => {
  const reports = useSelector(state => Object.keys(state.reports).map(key => state.reports[key])); // populate from Redux store
  // console.log(reports);
  const resetData = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <ul>
        {
          reports.map(report => (
            <ReportIndexItem
              report={report}
              key={report.id}
            />
          ))
        }
      </ul>
      <Link to="/reports/new">New Report</Link>
      <button onClick={resetData}>Reset Data</button>
    </section>
  );
}

export default ReportIndex;
