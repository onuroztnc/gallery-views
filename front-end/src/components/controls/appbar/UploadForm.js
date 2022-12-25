import React, { useState } from 'react'
import { Grid } from '@mui/material';
import Controls from '../Controls';
import { Form } from '../Form';

export default function UploadForm(props) {

    const { uploadFile } = props
    const [fileUrl, setFileUrl] = useState('');
    const [file, setFile] = useState();
    const [errors, setErrors] = useState({});

    const handleUploadFile = e => {
        e.preventDefault()
        setFile(e.currentTarget.files[0]);
    }

    const handleInputChange = e => {
        const { value } = e.target
        setFileUrl(value)
    }



    const handleSubmit = e => {
        e.preventDefault()
        if (fileUrl !== '' || file ) {
            uploadFile(file, fileUrl);
        }
        else
        {
            // Set errors
            let temp = { ...errors }
            temp.fileUrl = 'Please select file or enter url';
            temp.file = 'Please select file or enter url';
            setErrors({
                ...temp
            })
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container gap={2}>
                <Grid item xs={12}>
                        <Controls.Input
                            type="file"
                            fullWidth
                            name="uploadFile"
                            onChange={handleUploadFile}
                            error={errors.uploadFile}
                        />
                </Grid>
                <Grid item xs={12}>
                    <Controls.Input
                        name="fileUrl"
                        label="url"
                        value={fileUrl}
                        onChange={handleInputChange}
                        error={errors.fileUrl}
                    />
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
            >
                <Controls.Button
                    type="submit"
                    text="Upload" />

            </Grid>
        </Form>
    )
}