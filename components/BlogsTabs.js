import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Tabs,
  Tab,
  Typography,
  Box,
  useTheme
} from "@mui/material";


import {
  makeStyles
} from "@mui/styles";

const useStyles = makeStyles((theme)=>({
  tabStyle:{
    textTransform:"Capitalize",
    fontFamily: "'Poppins', sans-serif",
    fontWeight:"700",
    color:"#87959c",
  },
  tabSelectedStyle:{
    color: "#384555 !important",
  },
  indicator:{
    border:"1px solid #384555"
  }
}))


function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box pt={2} sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          classes = {{
            indicator:classes.indicator
          }}
          aria-label="basic tabs example">
          <Tab
            classes = {{
              root:classes.tabStyle,
              selected:classes.tabSelectedStyle
            }}
            label="Japan" {...a11yProps(0)} />
          <Tab 
            classes = {{
              root:classes.tabStyle,
              selected:classes.tabSelectedStyle
            }}
            label="Beauty"
            {...a11yProps(1)} />
          <Tab 
            classes = {{
              root:classes.tabStyle,
              selected:classes.tabSelectedStyle
            }}
            label="Food"
            {...a11yProps(2)} />
          <Tab 
            classes = {{
              root:classes.tabStyle,
              selected:classes.tabSelectedStyle
            }}
            label="Lifestyle" 
            {...a11yProps(3)} />
          <Tab 
            classes = {{
              root:classes.tabStyle,
              selected:classes.tabSelectedStyle
            }}
            label="Travel" 
            {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Japan
      </TabPanel>
      <TabPanel value={value} index={1}>
        Beauty
      </TabPanel>
      <TabPanel value={value} index={2}>
        Food
      </TabPanel>
      <TabPanel value={value} index={3}>
        Lifestyle
      </TabPanel>
      <TabPanel value={value} index={4}>
        Travel
      </TabPanel>
    </Box>
  );
}