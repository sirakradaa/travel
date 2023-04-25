import React from "react"
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {  Link } from "react-router-dom";
import Input from "@mui/material/Input";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";


const Login = () => {



  return (
    <>
        <Grid item container
            justifyContent="center">     
            <Card style={{minWidth: "20vw", background: 'linear-gradient(to right bottom, #fce9ef, #dcedc8)'}}>   
                <Grid container item
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2} style={{ minHeight: '20vh', minWidth: "45vw" }}>                
                    <Grid item><Typography>Sign In</Typography></Grid>
                        <Grid item><Link to={"/register"}>Sign Up</Link></Grid>
                        <Grid item>
                            <Input type="email" autoFocus id="email" name="email" placeholder="Enter Email" required ></Input>
                        </Grid>
                        <Grid item>
                            <Input type="password" id="password" name="password" placeholder="Enter Password" required></Input>
                        </Grid>
                        <Grid item>
                            <Button style={{minWidth: "20vw", backgroundColor: 'solid blue'}} type="submit">Login</Button>
                    </Grid>
                </Grid>    
            </Card>
      </Grid>
</>
  )
}

export default Login;