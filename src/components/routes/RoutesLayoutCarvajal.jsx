import React, {useState} from "react"
import { Box, Grid } from '@material-ui/core';
import { NavBarCarvajal } from "./NavbarCarvajal";
import {Routes, Route} from 'react-router-dom';
import {HomeCarvajal} from '../components/about/AboutCarvajal';
import {AboutCarvajal} from '../components/about/AboutCarvajal';
import './routesLayoutCarvajal.css';
export const RoutesLayoutCarvajal = () =>{
    const [darkMode, setDarkMode] = useState(true);
    function handleClick(){
        setDarkMode(!darkMode);

    }
    return(
        <Grid container spacing={1} className={`content ${darkMode? 'dark' : 'light'}`}>
            <Grid item xs={11} component={'header'} className={`${darkMode? 'dark' : 'light'}`}>
                <NavbarCarvajal darkMode={darkMode} handleClick={handleClick}/>

            </Grid>
            <Grid item xs={11} className={`container-content ${darkMode? 'dark' : 'light'}`}>
                <Routes>
                    <Route exact path={'/'} element={<HomeCarvajal/>}/>
                    <Route exact path={'/about'} element={<AboutCarvajal/>}/>
                </Routes>
            </Grid>
            <Grid item xs={11} component={'footer'}>
                <Box className={`${darkMode? 'dark': 'light'} text-footer`}
                >
                    <p>template created with &hearts; by <a target={'_blank'} href={'https://es.reactjs.org/'}>react js</a></p>
                    <p>&copy; 2022</p>
                </Box>
            </Grid>
        </Grid>
    )
}