import React from 'react'
import { Button, List, ListItem, Box, styled } from '@mui/material';
import { CreateOutlined } from '@mui/icons-material';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import ComposeMail from '../components/ComposeMail';
import { useState } from 'react';

const ComposeButton = styled(Button)`
    background: #c2e7ff;
    color: #001d35;
    border-radius: 16px;
    padding: 15px;
    min-width: 140px;
    text-transform: none;
`
const Container = styled(Box)`
    padding: 8px;
    & > ul {
        padding: 10px 0 0 5px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        & > a {
            text-decoration: none;
            color: inherit;
        }
        & > a > li > svg {
            margin-right: 20px;
        }
    }
`
const SideBarContent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const onComposeClick = () => {
        setOpenDrawer(true);
    }
  return (
   <Container>

    <Box>
        <ComposeButton onClick={() => onComposeClick()}> <CreateOutlined style={{ marginRight: 10 }} />Compose</ComposeButton>
    </Box>

    
    <List>
                {
                   
                    SIDEBAR_DATA.map(data => (
                        <ListItem>
                        <data.icon fontSize="small" />{data.title}
                        </ListItem>
                    ))  
                }
            </List>
<ComposeMail openDrawer={openDrawer}/>

   </Container>
  )
}

export default SideBarContent
