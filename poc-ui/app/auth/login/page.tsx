"use client";

import React, { useState } from 'react'
import { Button, Link, Stack, TextField } from '@mui/material'
import NextLink from 'next/link'
import { useFormState } from 'react-dom';
import login from './login';

export default function Login() {
  const [state, formAction] = useFormState(login, {error: ""});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
          <TextField 
            name='email' 
            label="Email" 
            variant="outlined" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={state.error}
            error={!!state.error}
          />
          <TextField 
            name='password' 
            label="Password" 
            variant="outlined" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText={state.error}
            error={!!state.error}
          />
          <Button 
            type='submit' 
            variant="contained" 
            color="primary"
          >
            Login
          </Button>
          <Link component={NextLink} href="/auth/signup" className='self-center'>
              Signup
          </Link>
      </Stack>
    </form>
  )
}