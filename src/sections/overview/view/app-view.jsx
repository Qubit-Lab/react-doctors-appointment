import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import styles from './styles.module.scss';
import AppWidgetSummary from '../app-widget-summary';

// ----------------------------------------------------------------------

export default function AppView() {



  return (
    <Container maxWidth="xl">
    <h1>This is Doctors Dashboard</h1>
    </Container>
  );
}
