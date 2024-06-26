import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },
}));

function MainContent() {
    const classes = useStyles();
  
    return (
      <main className={classes.fullWidth}>
        <div className={classes.toolbar} />
        <div className={classes.title}>
          <Typography variant='h6'>About Me</Typography>
        </div>
        <div className={classes.content}>
          <Typography paragraph>
          I am a passionate and dedicated individual with a strong background in computer science and cybersecurity. I have a keen interest in software development and web development, with hands-on experience in creating innovative projects. I am currently pursuing a BTech in Computer Science and Engineering with a specialization in Cybersecurity at Amrita Vishwa Vidyapeetham, expected to graduate in 4th May 2024.
          </Typography>
        </div>
        
      </main>
    );
  }
  
  export default MainContent;