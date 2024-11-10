// src/pages/Dashboard.js
import React from 'react';
import { Box, Button, Typography, IconButton, AppBar, Toolbar, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import AddIcon from '@mui/icons-material/Add';

const Dashboard = () => {
  // Sidebar open state
  const [openSidebar, setOpenSidebar] = React.useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Drawer anchor="left" open={openSidebar} onClose={toggleSidebar}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleSidebar}
          onKeyDown={toggleSidebar}
        >
          <List>
            {['Dashboard', 'Profile', 'MR', 'Settings'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Top Bar */}
      <AppBar position="fixed" sx={{ backgroundColor: '#1976d2', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            sx={{ ml: 'auto', backgroundColor: '#fff', color: '#1976d2' }}
          >
            Add Document
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // Adjust for top bar height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Middle Bar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '60%',
            maxWidth: 800,
            height: 60,
            borderRadius: 4,
            border: '2px solid #1976d2',
            padding: 1,
            justifyContent: 'space-between',
            backgroundColor: '#f0f4f8',
          }}
        >
          <Button
            startIcon={<AttachFileIcon />}
            variant="outlined"
            sx={{ color: '#1976d2', borderColor: '#1976d2' }}
          >
            Attach File
          </Button>
          <Button
            endIcon={<MicIcon />}
            variant="contained"
            sx={{ backgroundColor: '#1976d2', color: '#fff' }}
          >
            Start Speaking
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
