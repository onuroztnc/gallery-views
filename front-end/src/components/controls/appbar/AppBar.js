import * as React from 'react';
import {AppBar as MuiAppBar}  from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Popup from '../Popup';
import UploadForm from './UploadForm';
import * as apiService from '../../../services/APIServices';
import UploadIcon from '@mui/icons-material/Upload';
import IconButton from '@mui/material/IconButton';

export default function AppBar({updateImageList, setNotify}) {

  const [openPopup, setOpenPopup] = React.useState(false);


  const uploadFile = (file, fileUrl) => {

    const newFileInformation = new FormData()
    newFileInformation.append('picture', file)
    newFileInformation.append('picture_url', JSON.stringify({fileUrl
    }));
    apiService.uploadFile(newFileInformation)
    .then((response) => {
      setNotify({
        isOpen: true,
        message: response.message + ' Unique Id: ' + response.unique_id,
        type: 'success'
      })
      updateImageList()
    })
    .catch((error) => {
      setNotify({
        isOpen: true,
        message: error.message,
        type: 'error'
      })
    })
    setOpenPopup(false);

}

  return (
    <div>
    <Box sx={{ flexGrow: 1}}>
      <MuiAppBar sx={{ alignItems: "center" }} >
        <Toolbar sx={{ width:'100vw'}}>
            <div style={{flexGrow: 10}}>
                <img style={{ width: "auto", height: "40px" }} src={'/logmeal-logo.svg'} />
            </div>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => { setOpenPopup(true);}}
          >
            <UploadIcon />
          </IconButton>
        
        </Toolbar>
        
      </MuiAppBar>
    </Box>
    <Popup
    title="File Information"
    openPopup={openPopup}
    setOpenPopup={setOpenPopup}
  >
    <UploadForm uploadFile={uploadFile}/>
  </Popup>
        
  </div>
  );
}