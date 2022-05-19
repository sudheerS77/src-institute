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

const Login = () => {
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

      console.log(values);
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
    //const [currency, setCurrency] = React.useState('EUR');

  // const handleChanges = (event) => {
  //   setCurrency(event.target.value);
  // };


  return (
    <>
        <div className="">
                <div className="flex flex-col items-center justify-center gap-4 mx-2">
                    <div className="w-80 md:w-96 px-2 md:px-12 py-5 pb-10 flex flex-col items-end justify-center gap-5 bg-gray-50 border rounded-md shadow-xl">
                    <h2 className="mx-40 text-2xl font-bold text-gray-500">Login</h2>
                        <TextField
                            required
                            id="outlined-required"
                            label="enter your email"  
                            fullWidth
                        />
                        <span className="mx-2 w-full">
                            <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
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
                        </span>
                        <Button variant="outlined" fullWidth className="h-14" >Login</Button>
                        <div className="border-t border-gray-200 w-72 py-2">
                          <a href="#" className="text-md font-gray-400 font-light">forgot Password ? <span className="text-blue-900 font-semibold">click here</span> </a>
                        </div>
                    </div>
                   
                </div>
        </div>
    </>
  )
}

export default Login;