import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { getTechs } from '../../action/TechAction'
import TechItem from './TechItem';

const TechList = ({ tech : {techs, loading}, getTechs }) => {
  // const [techs, setTechs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(()=>{
    getTechs();
    // eslint-disable-next-line
  }, []);

  // const getList = async () => {
  //   setLoading(true);
  //   const res = await fetch('./techs');
  //   const data = await res.json();
  //   setTechs(data);
  //   setLoading(false);
  // }
  
  return (
    <Fragment>
      <div id="tech-list-modal" className="modal">
        <div className="modal-content">
          <h4>Technicial List</h4>
          <ul className="collection">
            {!loading && techs !== null && techs.map(
              (tech) => <TechItem tech={tech} key={tech.id} />
            )}
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  tech : state.tech
})

export default connect(mapStateToProps, { getTechs })(TechList)
