import React, { useState, useEffect } from 'react'
import './App.css';
import Gallery from './pages/Gallery/Gallery';
import AppBar from './components/controls/appbar/AppBar';
import * as apiService from './services/APIServices';
import Notification from './components/controls/Notification';

function App() {

  const [uniqueIds, setUniqueIds] = useState([])
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })

  const getImageList = () =>
  {
    /* Get Image Id List */
    apiService.getImageIdList()
        .then((response) => {
          setUniqueIds(response.unique_ids);
        })
        .catch((error) => {
            
        });
  }

  useEffect(() => {
    /* Get Image Id List */
    getImageList()
}, []);


  return (
    <div className="App">
      <header className="App-header">
        <Notification
          notify={notify}
          setNotify={setNotify}
        />
        <AppBar updateImageList={getImageList} setNotify={setNotify}/>
        <Gallery uniqueIds={uniqueIds}/>
      </header>
    </div>
  );
}

export default App;
