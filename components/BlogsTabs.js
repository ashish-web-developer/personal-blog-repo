import * as React from 'react';
import { useEffect ,useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import {
  Tabs,
  Tab,
  Typography,
  Box,
  useTheme,
  Grid
} from "@mui/material";


import {
  makeStyles
} from "@mui/styles";
import BlogsCard from './BlogsCard';

const useStyles = makeStyles((theme)=>({
  tabStyle:{
    textTransform:"Capitalize",
    fontFamily: "'Poppins', sans-serif",
    fontWeight:"700",
    color:theme.palette.secondary.main,
  },
  tabSelectedStyle:{
    color: `${theme.palette.secondary.dark} !important`,
    fontFamily: "'Poppins', sans-serif",
    fontWeight:"700",
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
        <Box py={3}>
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
  const tabPanelsArr = ["India","Beauty","Food","Lifestyle","Travel"];
  const [data,setData] = useState();

  async function fetcher(query){
    const url = `https://newsapi.org/v2/everything?q=${query}&from=2022-07-30&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_BLOG_API_KEY}`;
    const req = new Request(url);
    console.log("value of url",url)
    const response = await fetch(req);
    const data = await response.json();
    setData(data);
    return data;

  }

  useEffect(()=>{
    (async function(){
      switch(value){
        case 0:
          await fetcher("japan")
          break;
        case 1:
          await fetcher("beauty")
          break;
        case 2:
          await fetcher("Food")
          break;
        case 3:
          await fetcher("Lifestyle")
          break;
        case 4:
          await fetcher("Travel")
          break;
      }
    }())
  },[value])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box pt={2} sx={{ width: '100%'}}>
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
            label="India" {...a11yProps(0)} />
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
      {/*<TabPanel value={value} index={0}>
        <Grid spacing = {3} container>
          {
            data?.articles?.map(({author,title,url, urlToImage},i)=>(
              <Grid key = {i} item xs = {4}>
                <BlogsCard {...{author,title,url,urlToImage}} />
              </Grid>
            ))
          }
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid spacing = {3} container>
          {
            data?.articles?.map(({author,title,url, urlToImage},i)=>(
              <Grid key = {i} item xs = {4}>
                <BlogsCard {...{author,title,url,urlToImage}} />
              </Grid>
            ))
          }
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Food
      </TabPanel>
      <TabPanel value={value} index={3}>
        Lifestyle
      </TabPanel>
      <TabPanel value={value} index={4}>
        Travel
        </TabPanel>*/}
        {
          tabPanelsArr.map((panels,index)=>{
            return(
              <TabPanel key = {index} value={value} index={index}>
                <Grid spacing = {3} container>
                  {
                    data?.articles?.map(({author,title,url, urlToImage},i)=>(
                      <Grid key = {i} item xs = {{xs:1,md:4}}>
                        <BlogsCard {...{author,title,url,urlToImage}} />
                      </Grid>
                    ))
                  }
                </Grid>
              </TabPanel>
            )
          })
        }
    </Box>
  );
}

