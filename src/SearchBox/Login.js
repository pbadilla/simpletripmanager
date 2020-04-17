/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Button, Input } from 'pcln-design-system';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push('/home');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box mt={3} mb={3}>
        <Input
          id="emailuser"
          name="emailuser"
          placeholder="Email/User"
          defaultValue=""
          onChange={e => setEmail(e.target.value)}
        />
      </Box>
      <Box mt={3} mb={3}>
        <Input
          id="email"
          name="email"
          placeholder="hello@example.es"
          defaultValue=""
          onChange={e => setPassword(e.target.value)}
        />
      </Box>

      <Button primary type="submit" disabled={!validateForm()}>
        Login
      </Button>
    </form>
  );
};

export default Login;
