import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBIcon} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  title: {
    flexGrow: 1,
    marginLeft: 10,
  },
  footer: {
    marginLeft: 20,
    fontSize: 17,
  },
}));

 function App() {
    return (
      <MDBFooter className='bg-light text-center text-white'>
        <MDBContainer className='p-4 pb-0'>
          <section className='mb-4'>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#3b5998' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>
  
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#55acee' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='twitter' />
            </MDBBtn>
  
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#dd4b39' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='google' />
            </MDBBtn>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#ac2bac' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='instagram' />
            </MDBBtn>
  
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#0082ca' }}
              href='https://www.linkedin.com/in/hemanth-pulakandam-861729203'
              role='button'
              target="_blank"
            >
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>
  
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#333333' }}
              href='https://github.com/hemanthgithub642'
              role='button'
              target="_blank"
            >
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>
        </MDBContainer>
  
        <div className='text-center p-3' style={{ backgroundColor: '#2D68C4' }}>
        <h3>Hemanth</h3> <a href>hemanthp347804@gmail.com</a> 
        </div>
      </MDBFooter>
    );
  }

  function Footer() {
    const classes = useStyles();
    return (
      <AppBar position='fixed' className={classes.appBar}>
        {/* <Typography variant='h6' className={classes.footer}> */}
          {App()}
        {/* </Typography> */}
      </AppBar>
    );
  }
  
  export default Footer;