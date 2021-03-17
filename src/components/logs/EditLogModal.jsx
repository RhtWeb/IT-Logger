import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import TechSelectionOp from '../techs/TechSelectionOp';
import { clearCurrent, updateLog } from '../../action/LogAction';
import M from 'materialize-css/dist/js/materialize.min.js';

function EditLogModal({ current, updateLog }) {

  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if(current) {
      setMessage(current.message)
      setAttention(current.attention)
      setTech(current.tech)
    }
  }, [current])

  const onSubmit = () => {
    if(message === '' || tech === ''){
      M.toast({ html: `Please Enter a Message and Tech` });
    }
    else{
      // console.log(message, tech, attention);
      const newCurrent = {
        id: current.id,
        message,
        tech,
        attention,
        date : new Date().toLocaleDateString()
      }
      
      updateLog(newCurrent)
      clearCurrent()
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return <div id="edit-log-modal" className="modal" style={modalStyle}>
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

const mapStateToProps = (state) => ({
  current : state.log.current
})

export default connect(mapStateToProps, { updateLog, clearCurrent })(EditLogModal)