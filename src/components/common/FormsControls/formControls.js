import React from "react"
import styles from "./formControls.module.css"
import {Field} from "react-final-form"
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";


const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error} </span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props} >
        <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={3}
            color="info"
            {...input}
            {...restProps}
        />
    </FormControl>

}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props} >
        <TextField
            id="outlined-textarea"
            multiline
            color="info"
            size="small"
            {...input}
            {...restProps}
        />
    </FormControl>
}

export const CheckboxInput = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props} >
        <Checkbox color="info"  {...input} {...restProps}/>
    </FormControl>
}


export const createField = (placeholder,
                            name,
                            validators,
                            component,
                            label,
                            props) => (

    <Field placeholder={placeholder}
           name={name}
           validators={validators}
           component={component}
           label={label}
           {...props}
    />

)

