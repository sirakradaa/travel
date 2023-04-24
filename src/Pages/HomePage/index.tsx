import * as React from 'react';
import Grid from '@mui/material/Grid';
import TitleBarImageList from './../../Components/TitleBarImageList/index';


const HomePage = () => {

    return(
        <><Grid container justifyContent={'center'} padding={1}>
            <TitleBarImageList/>
            </Grid>
        
        </>
    )

}

export default HomePage;