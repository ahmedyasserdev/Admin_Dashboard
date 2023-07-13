/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
import React from "react";
import { Box, MenuItem, Stack, TextField, Button,  Snackbar, Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../../Header"


const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const Form = () => {
  // eslint-disable-next-line no-unused-vars


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
   handleClick()
  };

  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const regNumber =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;



  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const handleClick = () => {
    setOpen(true);
  };







  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
        <Header title={"Create User"} subTitle={"Create a New User Profile"}/>

      <Stack direction="row" sx={{ gap: 2 }}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName)
              ? "This Field Is Required && min 3 Charachters "
              : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />

        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            Boolean(errors.lastName)
              ? "This Field Is Required && min 3 Charachters "
              : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        label="Email"
        variant="filled"
        error={Boolean(errors.email)}
        helperText={Boolean(errors.email) ? "Add a Valid Email " : null}
        {...register("email", { required: true, pattern: regEmail })}
      />

      <TextField label="Contact Number" variant="filled"

        error={Boolean(errors.contactNumber)}
        helperText={Boolean(errors.contactNumber) ? "Add a Valid Phone Number " : null}
        {...register("contactNumber", { required: true, pattern: regNumber })}
      />






      <TextField label="Adress 1" variant="filled" />



      <TextField label="Adress 2" variant="filled" />

      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "end" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize", }}
          variant="contained"

      

        >
          Create New User
        </Button>
      </Box>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}    anchorOrigin={{ vertical : "top" , horizontal : "right" }}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' ,}}>
            Account Created Successfully
        </Alert>
      </Snackbar>

    </Box>
  );
};

export default Form;
