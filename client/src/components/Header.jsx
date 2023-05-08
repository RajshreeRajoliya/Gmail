import React from 'react'
import { AppBar, Toolbar, Box, InputBase, styled } from '@mui/material';
import { Menu as MenuIcon, Tune, HelpOutlineOutlined, SettingsOutlined, 
    AppsOutlined, AccountCircleOutlined, Search } from '@mui/icons-material'

    const StyledAppBar = styled(AppBar)`
    background: #f5F5F5;
    box-shadow: none;
`

const Header = () => {
  return (
   <StyledAppBar>
    <Toolbar>
    <MenuIcon color="action"/>
    </Toolbar>
   </StyledAppBar>
  )
}

export default Header
