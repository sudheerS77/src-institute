import React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const Register = () => {
    const [values, setValues] = React.useState({
        name: "",
        institution: "",
        statDentalCouncilNumber: "",
        state: "",
        number: "",
        password: '',
        address: "",
        showPassword: false,

      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const registrationType = [
        { value : "" }
    ]
    const [currency, setCurrency] = React.useState('EUR');

  const handleChanges = (event) => {
    setCurrency(event.target.value);
  };


  return (
    <div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 bg-gray-50 border rounded-md py-10 mx-4 md:mx-20 lg:mx-52 shadow-xl">
            <div className="flex flex-col items-center gap-5 w-72">                
                <TextField
                    required
                    id="outlined-required"
                    label="Your name"  
                    fullWidth
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Institution"                             
                    fullWidth
                />
                <TextField
                    required
                    id="outlined-required"
                    label="State Dental Council Number"                             
                    fullWidth
                />
                <TextField
                    required
                    id="outlined-required"
                    label="State of Registration"                             
                    fullWidth
                />
                
            </div>
            <div className="flex flex-col items-center gap-3 w-72">                
                <TextField
                    required
                    id="outlined-required"
                    label="Mobile Number"  
                    fullWidth
                />
                <TextField
                    id="Type of Registration"
                    select
                    fullWidth
                    label="Type Of Registration"
                    //value={currency}
                    onChange={handleChanges}
                    //helperText="Type of Registration"
                >
         
                    <MenuItem key={"Postgraduate"} value={"Postgraduate"}>Postgraduate</MenuItem>         
                    <MenuItem key={"Faculty"} value={"Faculty"}>Faculty</MenuItem>
                    <MenuItem key={"International"} value={"International"}>International</MenuItem>     
                </TextField>
                <FormControl sx={{ m: 1, width: '33ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '33ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>                                
            </div>
            <div className="flex flex-col items-center gap-6 w-72">                                
                <TextField
                    id="outlined-multiline-static"
                    label="address"
                    multiline
                    rows={7}
                    fullWidth
                    //defaultValue="address"
                />
                
                <Button variant="outlined" fullWidth className="h-14" >Register</Button>
                
            </div>
        </div>
    </div>
  )
}

export default Register;