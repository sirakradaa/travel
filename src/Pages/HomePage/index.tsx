import * as React from 'react';
import Grid from '@mui/material/Grid';
import TitleBarImageListComponent from './../../Components/TitleBarImageList/index';
import CheckboxComponent from './../../Components/Checkbox/index';


const HomePage = () => {

    const labels = ["humid", "tropical", "dry", "cold", "hot"]


    return(
        <>
        <Grid container justifyContent={'center'} padding={1}>
            <CheckboxComponent labels={labels}/>
            <TitleBarImageListComponent/>
        </Grid>
        
        </>
    )

}

export default HomePage;