import React from 'react';
import PublicHeaderStyles from "./publicHeader.styles";
import { withStyles } from "@material-ui/styles";
import { Box, Button, Typography, Paper } from '@material-ui/core';


const PublicHeader = ({ classes }) => {
    return (
        <Paper square variant="outlined" className={classes.wrapper}>
            <Typography>PIZARRA</Typography>
            <Box>
                <Button variant="text" style={{ marginLeft: 16 }}>Cursos</Button>
                <Button variant="text" style={{ marginLeft: 16 }}>Ingresar</Button>
                <Button variant="contained" color="primary" style={{ marginLeft: 16 }}>Registrarme</Button>
            </Box>
        </Paper>
    )
};

export default withStyles(PublicHeaderStyles)(PublicHeader);