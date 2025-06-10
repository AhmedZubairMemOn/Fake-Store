import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1976d2',
        color: 'white',
        textAlign: 'center',
        py: 2,
        position: 'positive',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Ahmed Zubair Memon. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;