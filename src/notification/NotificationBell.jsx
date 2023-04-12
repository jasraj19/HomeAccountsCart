import { Badge } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../components/BasicMenu';
import Avatar from '@mui/material/Avatar';

const notifications = [
  {
      id: 0,
      label: 'Order Placed Successfully',
      avatar: 'https://www.example.com/images/img123.jpg',
      date:'04-04-2023',
  },
  {
      id: 1,
      label: 'Second notification',
      avatar: 'https://www.example.com/images/img123.jpg',
      date:'04-04-2023',
  },
];

const NotificationBell = ({ iconColor }) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const newNotifications = `You have ${notifications.length} new notifications!`;
  const noNotifications = 'No new notifications';

  const handleOpen = (event) => {
      setAnchorEl(event.currentTarget)
      setOpen(true);
  };
  
  const handleClose = () => {
      setOpen(false);
  };

  return (
      <div>
          <Tooltip title={notifications.length ? newNotifications : noNotifications}>
              <IconButton color={iconColor} onClick={notifications.length ? handleOpen : null} anchorEl={anchorEl} >
                  <Badge badgeContent={notifications.length} color="error" >
                      <NotificationsIcon />
                  </Badge>
              </IconButton>
          </Tooltip>
          <BasicMenu open={open} anchorEl={anchorEl} handleClose={handleClose} menuItems={notifications} />
      </div>
  )
}

export default NotificationBell