import React from 'react';
import Bidprofile from './modules/components/Bidprofile2';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AppAppBar from "./modules/views/AppAppBar";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



export default function BiddingList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
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
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid container justifyContent="space-evenly" alignItems="center" spacing={{ xs: 2, md: 3 }}  columns={{ xs: 4, sm: 8, md: 12, lg:12}}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item style={{paddingTop:"10px"}} Spacing={2} xs={12} sm={12} md={6} lg={4} key={index}>
            <Bidprofile data={bidProfileData} />
          </Grid>
        ))}
      </Grid>
          
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}