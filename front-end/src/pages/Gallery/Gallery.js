import React from 'react'
import MasonryImageList from '../../components/controls/MasonryImageList/MasonryImageList'
import FormDialog from '../../components/controls/FormDialog'
import * as apiService from '../../services/APIServices';

/**
 * the function that visualizes the pictures as a list.
 * @param {
 *    uniqueIds : array holding unique_ids of images
 * } props 
 * @returns 
 */
function Gallery(props) {

  /**
   * allows the dialog to be opened and closed, showing the height and width of the image.
   */
  const [openDialog, setOpenDialog] = React.useState(false);
  const [imageInformation, setImageInformation] = React.useState({});

  const handleInfoButton = (unique_id) =>
  {
    /**
     * detailed information of the image is requested from the backend
     */
    apiService.getAnalyseImage(unique_id)
    .then((response) => {
      /**
       * If the request is successful,
       * the details of the picture are shown to the user with the dialog.
       */
      setImageInformation(response.image_information)
      setOpenDialog(true)
    })
    .catch((error) => {
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