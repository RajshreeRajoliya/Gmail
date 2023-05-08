import React from 'react'
import { Dialog, styled, Typography, Box, InputBase, TextField, Button } from '@mui/material'; 
import { Close, DeleteOutline } from '@mui/icons-material';

const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0',
}
const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background: #f2f6fc;
    & > p {
        font-size: 14px;
        font-weight: 500;
    }
`

const ComposeMail = () => {
  return (
    <Dialog
     open={true}
     PaperProps={{ sx: dialogStyle }}
    >
<Header><Typography>New Message</Typography>
<Close fontSize="small" />
</Header>
<Box></Box>
<Box></Box>
<Box></Box>
    </Dialog>
  )
}

export default ComposeMail
