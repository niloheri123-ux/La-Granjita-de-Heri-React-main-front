import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from '../components/atoms/Button.jsx'; 
import { useNavigate } from 'react-router-dom';

import RegisterForm from "../components/molecules/RegisterForm.jsx"

export default function Registrar() {
  return (
    <div className="login-page-body login-page-background">
      <RegisterForm />
    </div>
  );
}