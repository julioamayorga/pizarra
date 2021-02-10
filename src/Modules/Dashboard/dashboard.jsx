import React from 'react';
import { withStyles } from "@material-ui/styles";
import DashboardStyles from "./dashboard.styles";
import DashboardHeader from "../../Components/DashboardHeader/dashboardHeader";
import DashboardSidebar from "../../Components/DashboardSidebar/dashboardSidebar";
import { Box } from "@material-ui/core";
import DashboardBody from '../../Components/DashboardBody/dashboardBody';

const Dashboard = ({classes}) => {
    return (
        <Box>
            <DashboardHeader />
            <Box style={{display: 'flex', flexDirection: "row"}}>
                <DashboardSidebar />
                <DashboardBody />
            </Box>

        </Box>
    )
}

export default withStyles(DashboardStyles)(Dashboard);
