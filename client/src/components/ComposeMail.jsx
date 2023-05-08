import React from 'react'
import { Dialog, styled, Typography, Box, InputBase, TextField, Button } from '@mui/material'; 

const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0',
}

const ComposeMail = () => {
  return (
    <Dialog
     open={true}
     PaperProps={{ sx: dialogStyle }}
    >

    </Dialog>
  )
}

export default ComposeMail