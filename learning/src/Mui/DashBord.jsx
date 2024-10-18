import { AppBar, Box, Drawer, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { BarChart, PieChart } from '@mui/x-charts';
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import WindowIcon from '@mui/icons-material/Window';
import BugReportIcon from '@mui/icons-material/BugReport';

export const DashBord = () => {

    const drawerwidth = 240;

    const data = [
        { id: 0, value: 35, },
        { id: 1, value: 30, },
        { id: 2, value: 35, },
    ]

    return (
        <div>
            <>
                <h1>Welcome to DashBord</h1>
            </>

            <Box sx={ { display: "flex" } }>
                <MenuIcon />
                <AppBar
                    position="fixed"
                    sx={ { width: `calc(100% - ${drawerwidth}px)`, ml: `${drawerwidth}px` } }
                ></AppBar>

                <Toolbar>
                    <Typography variant="h5" noWrap sx={ { marginTop: "-35px" } }>
                        Click Here
                    </Typography>
                </Toolbar>

                <Drawer sx={ {
                    width: "drawerwidth", flexShrink: 0, '& .MuiDrawer-paper': {
                        width: drawerwidth,
                        boxSizing: 'border-box',
                    },
                } } variant='temporary' anchor='left'></Drawer>

            </Box>

            <Box sx={ { flexGrow: 1, marginTop: "-100px" } }>
                <Grid container spacing={ { xs: 2, md: 3 } } columns={ { xs: 4, sm: 8, md: 12 } }>
                    <Grid item xs={ 2 } sx={ { backgroundColor: "#FF4C4C", height: "200px", margin: "25px", marginLeft: "320px", borderRadius: "20px" } }><AdbOutlinedIcon sx={{fontSize:90,color:"#F3FEB8"}}></AdbOutlinedIcon>
                    <Typography sx={{margin:3}}>714K
                        <br></br>Weekly Sales</Typography>
                    </Grid>

                    <Grid item xs={ 2 } sx={ { backgroundColor: "#FFB22C", height: "200px", margin: "25px", borderRadius: "20px" } }><AppleIcon sx={{fontSize:90,color:"#F3FEB8"}}></AppleIcon>
                    <Typography sx={{margin:3}}>1.3m
                        <br></br>New Users</Typography>
                    </Grid>

                    <Grid item xs={ 2 } sx={ { backgroundColor: "#FFDE4D", height: "200px", margin: "25px", borderRadius: "20px" } }><WindowIcon sx={{fontSize:90,color:"#F3FEB8"}}></WindowIcon>
                    <Typography sx={{margin:3}}>1.72m
                        <br></br>Item Order</Typography>
                    </Grid>

                    <Grid item xs={ 2 } sx={ { backgroundColor: "#F3FEB8", height: "200px", margin: "25px", borderRadius: "20px" } }><BugReportIcon sx={{fontSize:90,color:"#FF4C4C"}}></BugReportIcon>
                    <Typography sx={{margin:3}}>100
                        <br></br>Bug Report</Typography>
                    </Grid>
                </Grid>

                <div>
                    <BarChart
                        series={ [
                            { data: [35, 44, 99] },
                            { data: [51, 6, 67] },
                            { data: [15, 25, 19] },
                        ] }
                        height={ 450 }
                        xAxis={ [{ data: ['Q1', 'Q2', 'Q3'], scaleType: 'band' }] }
                        width={ 900 }
                        margin={ { left: 320 } }
                    />
                </div>

                <div style={{marginTop:-450,}}>
                <PieChart
                        series={ [
                            {
                                data,
                                highlightScope: { faded: 'global', highlighted: 'item' },
                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            },
                        ] }
                        height={ 500 }
                        margin={ { left: 1100, top: 50 } }
                    />
                </div>
            </Box>
        </div>
    )
}
