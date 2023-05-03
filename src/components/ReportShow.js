import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
const ReportShow = () => {
  const { reportId } = useParams();
  // console.log(reportId);
  const reports = useSelector(state => Object.keys(state.reports).map(key => state.reports[key])); // populate from Redux store
  const report = reports.find(report => {
    return report.id === parseInt(reportId)
  })
  return (
    <section>
      ID: {report.id}
      <br/>
      Understanding: {report.understanding}
      <br/>
      Improvement: {report.improvement}
      <br/>
      <Link to="/">Back to Report Index</Link>
    </section>
  );
}

export default ReportShow;
