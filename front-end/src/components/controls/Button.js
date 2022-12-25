import {Button as MuiButton} from "@mui/material";


export default function Button(props) {

    const { text, size, color, variant, onClick, disabled, startIcon, endIcon, ...other } = props
    //const classes = useStyles();

    return (
        <MuiButton
            variant={variant || "contained"}
            disabled={disabled}
            startIcon={startIcon}
            endIcon={endIcon}
            size={size || "medium"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            //classes={{ root: classes.root, label: classes.label }}
            >
            {text}
        </MuiButton>
    )
}