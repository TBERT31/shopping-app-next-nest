import React from 'react'
import { Button, Stack, TextField } from '@mui/material'

export default function Login() {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
        <TextField label="Email" variant="outlined" type="email" />
        <TextField label="Password" variant="outlined" type="password" />
        <Button variant="contained" color="primary">Login</Button>
    </Stack>
  )
}
//#A3BE07