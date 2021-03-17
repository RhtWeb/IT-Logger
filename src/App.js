import React, {useEffect, Fragment} from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechList from './components/techs/TechList';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';


function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechList />
        <Logs />
      </div>
    </Fragment>
    </Provider>
  );
}

export default App;