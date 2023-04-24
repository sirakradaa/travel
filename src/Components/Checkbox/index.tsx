import * as React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import _ from 'lodash';

const CheckboxComponent = ({labels} : {labels?: Array<string>}) => {
    
    return(
    <>
    {labels?.map(label => (
    <FormControlLabel
        label={_.capitalize(label)}
        control={
        <Checkbox
        name="label"
        value="label"
        />
        }
    />))}
    </>
    )
}

export default CheckboxComponent;
