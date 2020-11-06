import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    position: "relative"
  },
  nav: {
      background: "#fff",
      height: "10vh !important",
      minHeight: 20
  }
}));

export default function FullWidthTabs({projects}) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

//   console.log(projects)

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="static"  >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
            {projects && Object.keys(projects)?.map((project, index) => {
                return ( <Tab key={index} label={project} {...a11yProps(index)} />)
            })}
          {/* <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
         
          {projects && Object.keys(projects)?.map((project, index) => {
               
              return (
                <TabPanel value={value} index={index} key={index} dir={theme.direction}>
                  <div  id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                    {projects[project].map((e, i) => {
                          var projectImage = 'images/portfolio/'+e.image;
                       return(
                        <div key={i} className="columns portfolio-item">
                        <div className="item-wrap">
                        <div title={e.title}>
                           <img alt={e.title} src={projectImage} />
                           <div className="overlay">
                               <div className="portfolio-item-meta">
                               <h5>{e.title}</h5>
                               <p>{e.category}</p>
                            </div>
                            </div>
                            <div className="links__container">
                               <a className="link-icon" href={e.github}> <i className="fa fa-github" ></i> Github </a>
                               <a href={e.url} className="link-icon"><i className="fa fa-link">View</i></a>
                            </div>
                         </div>
                        </div>
                      </div>
                       )
                    })}
                  </div>
              </TabPanel>
            )}

        )}
        {/* <TabPanel value={value} index={0} dir={theme.direction}>
          Item One 
          <div>Hello</div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel> */}
       
      </SwipeableViews>
    </div>
  );
}