import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeReport } from '../store/reports';
const ReportIndexItem = ({ report }) => {
  const dispatch = useDispatch()

  const deleteReport = (e) => {
    // e.preventDefault();
    dispatch(removeReport(report.id))
  };

  return (
    <li>
      <Link to={`/reports/${report.id}`}>Report #{report.id}</Link>
      <Link to={`/reports/${report.id}/edit`}>Edit</Link>
      <button onClick={deleteReport}>Delete</button>
    </li>
  );
};

export default ReportIndexItem;
