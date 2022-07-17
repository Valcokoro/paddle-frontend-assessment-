import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';



const DesktopForm = () => {
    const CssTextField = styled(TextField)({
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

      return (
        <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
     >
      <CssTextField
        label="First Name." 
        id="custom-css-standard-input1" 
        style={{marginTop: "40px", marginLeft:"500px", position:'absolute'}}
    />
      <CssTextField
       label="Last Name." 
       id="custom-css-standard-input2" 
       style={{marginTop: "40px", marginLeft:"750px"}}
    />
      </Box>
      )

}



export default DesktopForm;

