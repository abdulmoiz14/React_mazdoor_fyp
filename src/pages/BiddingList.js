import React from 'react';
import Bidprofile from './modules/components/Bidprofile2';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AppAppBar from "./modules/views/AppAppBar";
import Grid from '@mui/material/Grid';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AcceptedReq from './modules/components/AcceptedReq';

export default function BiddingList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const bidProfileData = {
    title: 'Cleaner',
    duration: '3 hrs',
    price: '900',
    rating:4.4,
    profileImage: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp',
    username: 'Laiba',
    phoneNumber: '1234567890',
  };

  return (
    <div>
      <AppAppBar />
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Taskers" value="1" />
            <Tab label="Accepted" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div class="tabpanel" style={{paddingTop:30}}>
        <Grid container justifyContent="space-evenly" alignItems="center" spacing={{ xs: 2, md: 3 }}  columns={{ xs: 4, sm: 8, md: 12, lg:12}}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item style={{paddingTop:"10px"}} Spacing={5} xs={12} sm={12} md={6} lg={4} key={index}>
            <Bidprofile data={bidProfileData} />
          </Grid>
        ))}
        </Grid>
        </div>
        </TabPanel>
        <TabPanel value="2"><div class="tabpanel" style={{paddingTop:30}}>
        <Grid container justifyContent="space-evenly" alignItems="center" spacing={{ xs: 2, md: 3 }}  columns={{ xs: 4, sm: 8, md: 12, lg:12}}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item style={{paddingTop:"10px"}} Spacing={5} xs={12} sm={12} md={6} lg={4} key={index}>
            <AcceptedReq />
          </Grid>
        ))}
        </Grid>
        </div>
        </TabPanel>
        <TabPanel value="3">
        </TabPanel>
      </TabContext>
    </Box>
    </div>
  );
}