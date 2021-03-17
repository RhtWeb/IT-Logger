import React, {useState} from 'react';
import { connect } from 'react-redux';
import TechSelectionOp from '../techs/TechSelectionOp';
import { addLog } from '../../action/LogAction';
import M from 'materialize-css/dist/js/materialize.min.js';

function AddLogModal({ addLog }) {

  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if(message === '' || tech === ''){
      M.toast({ html: `Please Enter a Message and Tech` });
    }
    else{
      console.log(message, tech, attention);
      const newLog = {
        message,
        tech,
        attention,
        date : new Date().toLocaleDateString()
      }
      addLog(newLog);
      M.toast({ html: `A Log is added By ${tech}` });
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return <div id="add-log-modal" className="modal" style={modalStyle}>
    <div className="modal-content">
      <h4>Enter System Log</h4>
      <div className="row">
        <input type="text" name='message' value={message} onChange={e => setMessage(e.target.value)} />
        <label htmlFor="message" className="active">
          Log Message
        </label>
      </div>
    </div>

    <div className="modal-content row">
      <div className="input-field">
        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
          <option value="" disabled>Select Technician</option>
          <TechSelectionOp />
        </select>
      </div>
    </div>

    <div className="modal-content row">
      <div className="input-field">
        <p>
          <label>
            <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)} />
            <span>Needs Attention</span>
          </label>
        </p>
      </div>
    </div>

    <div className="modal-footer">
      <a href="#!" onClick={onSubmit} className="modal-close waves-effects waves-green btn">Enter</a>
    </div>

  </div>;
}

const modalStyle = {
  width : '75%',
  height : '75%'
};

const mapStateToProps = state => ({
  tech : state.tech
})

export default connect(mapStateToProps, { addLog })(AddLogModal)