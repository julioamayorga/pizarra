import React from 'react';
import CourseProfileStyles from "./courseProfile.styles";
import { withStyles } from "@material-ui/styles";
import DashboardSidebar from "../../Components/DashboardSidebar/dashboardSidebar";
import DashboardHeader from '../../Components/DashboardHeader/dashboardHeader';

import { Box, Typography } from '@material-ui/core';
import { ArrowDropDown } from "@material-ui/icons/ArrowDropDown";

const CourseProfile = ({ classes }) => {
    return (
         <Box>
            <DashboardHeader/>
            <Box style={{display: 'flex', flexDirection: "row"}}>
                <DashboardSidebar />
                <Box>
                    <ArrowDropDown fontSize="default" color="action"></ArrowDropDown>
                    <Typography variant="h1" >Volver</Typography>
                   
                </Box>
            </Box>
        </Box>
    )
}

export default withStyles(CourseProfileStyles)(CourseProfile);
