import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Controls from './Controls';

export default function FormDialog({open, setOpen, values}) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Information</DialogTitle>
        <DialogContent>
          <Controls.Input
            value={values.height}
            disabled
            autoFocus
            margin="dense"
            id="height"
            label="Height"
            fullWidth
            variant="standard"
          />

        <Controls.Input
            value={values.width}
            disabled
            autoFocus
            margin="dense"
            id="width"
            label="Width"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
    </>
  );
}