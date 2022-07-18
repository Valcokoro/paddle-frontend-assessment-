import React, {useState, useEffect} from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';
import { Button } from '@mui/material';

const CssTextFieldMobile = styled(TextField)({
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
      color: 'white',
      marginTop: '-5px',
    },
    '& label': {
        color: 'black', 
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

const MobileForm = () => {
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
      <CssTextFieldMobile
        label="First Name." 
        id="custom-css-standard-input1" 
        style={{marginTop: "20px", marginLeft:"40px", position:'absolute', width: '120px'}}
    />
      <CssTextFieldMobile
       label="Last Name." 
       id="custom-css-standard-input2" 
       style={{marginTop: "20px", marginLeft:"170px",position:'absolute', width: '120px'}}
    />
    <CssTextField
        label="Enter your email address..." 
        id="custom-css-standard-input-ghh" 
        value={email}
        onChange={handleChange}
        style={{
            marginTop: "100px", 
            marginLeft:"20px",
            position:'absolute', 
            width: '280px',
            backgroundColor: 'white',
            borderRadius: '200px',
        }}
    />
    <Button 
         variant="contained"
         style={{
            marginTop: "170px", 
            marginLeft:"80px",
            position:'absolute', 
            width: '150px',
            height:'53px',
            backgroundColor:'#271AC1',
            borderRadius: '200px',
      }}
         >JOIN OUR WAITING LIST</Button>
    <div style={{marginTop:'150px', 
                 marginLeft: '40px',
                 color:'red',
                 position: 'absolute'}}>
                {emailError}
    </div>
     
    </Box>
      )

}



export default MobileForm;