import React from 'react'
import MasonryImageList from '../../components/controls/MasonryImageList/MasonryImageList'
import FormDialog from '../../components/controls/FormDialog'
import * as apiService from '../../services/APIServices';

function Gallery(props) {

  const [openDialog, setOpenDialog] = React.useState(false);
  const [imageInformation, setImageInformation] = React.useState({});

  const handleInfoButton = (unique_id) =>
  {
    apiService.getAnalyseImage(unique_id)
    .then((response) => {
      console.log(response); // JSON data parsed by `data.json()` call
      setImageInformation(response.image_information)
      setOpenDialog(true)
    })
    .catch((error) => {
      console.log('Message : ',error);
    })

  }


  return (
    <div>

    
    <MasonryImageList
     imageList={props.uniqueIds}
     handleInfoButton={handleInfoButton}
     />
     <FormDialog
     open={openDialog}
     setOpen={setOpenDialog}
     values={imageInformation}
     ></FormDialog>
     </div>
  )
}

export default Gallery