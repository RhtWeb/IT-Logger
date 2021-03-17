import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Loader from '../layout/Loader';
import { getLogs } from '../../action/LogAction';

const Logs = ({ log : {logs, loading}, getLogs }) => {

  // const [logs, setLogs] = useState([]);
  // const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  // const getLogs = async () => {
  //   setLoading(true);
  //   const res = await fetch('./logs');
  //   const data = await res.json();
  //   // console.log(data);
  //   setLogs(data);
  //   setLoading(false);
  // };

  if(loading || logs === null) {
    return <Loader />;
  }


  return (
    <Fragment>

      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && logs.length === 0 
          ? (<li key="none" className="collection-item">No Logs Found</li>) 
          : (logs.map(
            log => (<li key={log.id} className="collection-item"><LogItem log={log} /></li>)
          ))
        }       
      </ul> 
    </Fragment> 
  )
}

const mapStateToProps = (state) => ({
  log : state.log
})

export default connect(
  mapStateToProps,
  { getLogs }
)(Logs)
