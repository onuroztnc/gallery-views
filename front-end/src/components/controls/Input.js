import React from 'react'
import { TextField } from '@mui/material';

/**
 * the function that takes input from the user
 * @param {
 *      name : name of text field components
 *      label : label of text field components
 *      value : input from user
 *      onChange : function to be called when value changes
 *      
 * } props 
 * @returns 
 */
export default function Input(props) {

    const { name, label, value,error=null, onChange, ...other } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && {error:true,helperText:error})}
        />
    )
}
