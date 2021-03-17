import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { deleteLog, setCurrent } from '../../action/LogAction'
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  // const currentLog = () => {
  //   setCurrent(log)
  // }
  const onDelete = () => {
    deleteLog(log.id)
    M.toast({ html : 'Log Deleted' })
  }
  return (
    <Fragment> 
        <a href="#edit-log-modal" className={`modal-trigger text-lighten-1 ${log.attention ? "red-text" : "blue-text"}`} onClick={() => setCurrent(log)} >{log.message}</a>
        <br/>
        <span className="grey-text">
          ID {" "}
          <span className="black-text">#{log.id}</span> {" "}
          last updated by {" "}
          <span className="black-text">{log.tech}</span> {" "}
           on {log.date}
        </span> 
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
    </Fragment>
  )
}

export default connect(null, { deleteLog, setCurrent })(LogItem)
