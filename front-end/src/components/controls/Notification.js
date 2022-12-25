import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

/**
 * the function used to inform the user of the request results.
 * @param {
 *    notify: {
 *       isOpen: true or false,
 *       message: information message,
 *       type: 'success' or 'error'
 *       }
 * } props 
 * @returns 
 */
export default function Notification(props) {

    const { notify, setNotify } = props;
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <Snackbar
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}>
            <Alert
                severity={notify.type}
                onClose={handleClose}>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}
