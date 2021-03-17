import React, {Fragment} from 'react'

const Loader = () => {
  return (
    <Fragment>
        <h1>Loading...</h1>
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
    </Fragment>
  )
}

export default Loader
