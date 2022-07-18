import React, {useState} from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';
import { Button } from '@mui/material';



    const CssTextFieldDesktop = styled(TextField)({
      '& label.Mui-focused': {
        color: 'white',
      },
      '& label': {
        color: 'white',
        
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomColor:'white',
          
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
        '& fieldset': {
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomColor:'white',
        },
        '& input:valid': {
          color: 'white'
        },
        
      },
    });

    const CssTextField = styled(TextField)({
      '& label.Mui-focused': {
        color: '#271AC1',
        marginTop: '-5px',
      },
      '& label': {
          color: 'black', 
          marginTop:'-5px'
       },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
          backgroundColor: 'white'
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
          
        },
        '& fieldset': {
          borderColor: 'white',
          borderRadius: '200px',
          
        },
        '& input:valid': {
          color: 'black'
        },
      },
    });
  




const DesktopForm = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
      
    const handleChange = event => {
        setEmail(event.target.value);
        setEmailError(!email.includes('@') ? 'Invalid Email' : '');
    }
   
      return (
        <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
     >
      <CssTextFieldDesktop
        label="First Name." 
        id="custom-css-standard-input1" 
        style={{marginTop: "40px", marginLeft:"500px", position:'absolute'}}
    />
      <CssTextFieldDesktop
       label="Last Name." 
       id="custom-css-standard-input2" 
       style={{marginTop: "40px", marginLeft:"750px"}}
    />
    <CssTextField
        label="Enter your email address..." 
        id="custom-css-standard-input-ghh" 
        value={email}
        onChange={handleChange}
        style={{
            marginTop: "30px", 
            marginLeft:"500px",
            position:'absolute', 
            width: '460px',
            backgroundColor: 'white',
            borderRadius: '200px',
        }}
    />
    <Button 
         variant="contained"
         style={{
            marginTop: "30px", 
            marginLeft:"800px",
            position:'absolute', 
            width: '200px',
            height:'53px',
            backgroundColor:'#271AC1',
            borderRadius: '200px',
      }}
         >JOIN OUR WAITING LIST</Button>
    <div style={{marginTop:'100px', 
                 marginLeft: '600px',
                 color:'red',
                 position: 'absolute'}}>
                {emailError}
    </div>
      </Box>
      )

}



export default DesktopForm;

