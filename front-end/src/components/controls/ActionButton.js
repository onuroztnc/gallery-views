import React from 'react'
import { Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';


const useStyles = makeStyles()

export default function ActionButton(props) {

    const { color, children, onClick, ...others } = props;
    const classes = useStyles(useTheme());

    return (
        <Button
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}
            {...others}>
            {children}
        </Button>
    )
} 