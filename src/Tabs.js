import React from 'react';
import NextLaunch from './Launches/NextLaunch';
import PastLaunch from './Launches/PastLaunch';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const TabPanel = ({ children, value, index, ...other }) => (
  <Typography
    component="div"
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && <Box p={3}>{children}</Box>}
  </Typography>
);

const a11yProps = index => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const TopTabs = ({
  nextLaunch,
  pastLaunch,
  pastLaunchOffset,
  setPastLaunchOffset,
  lastLaunchID
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          aria-label="simple tabs example"
        >
          <Tab label="Next Launch" {...a11yProps(0)} />
          <Tab label="Past Launches" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <NextLaunch nextLaunch={nextLaunch} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PastLaunch
          pastLaunch={pastLaunch}
          pastLaunchOffset={pastLaunchOffset}
          setPastLaunchOffset={setPastLaunchOffset}
          lastLaunchID={lastLaunchID}
        />
      </TabPanel>
    </div>
  );
};

export default TopTabs;
