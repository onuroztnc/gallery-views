import React from 'react'
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Controls from './Controls';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        position: 'absolute',
        "@media screen and (max-width: 768px)": {
            position: 'absolute',
        }
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))

export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Controls.ActionButton
                        color={{
                            main: "#3a2b58",
                            light: "#3a2b5826"
                        }}
                        onClick={() => { setOpenPopup(false) }}>
                        <CloseIcon />
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog >
    )
}