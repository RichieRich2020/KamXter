import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MessageIcon from '@mui/icons-material/Message';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DescriptionIcon from '@mui/icons-material/Description';

export const ProfileItems = [
  {
    iconName: <PersonIcon />,
    menuName: 'Profile',
  },
  {
    iconName: <ListAltIcon />,
    menuName: 'Orders',
  },
  {
    iconName: <InventoryIcon />,
    menuName: 'Your Items',
  },
  {
    iconName: <GroupIcon />,
    menuName: 'Groups',
  },
];

export const ShortcutItems = [
  { menuName: 'Events', iconName: <EventIcon /> },
  { menuName: 'Gaming Zone', iconName: <SportsEsportsIcon /> },
  { menuName: 'Messages', iconName: <MessageIcon /> },
];

export const OtherItems = [
  { menuName: 'Funds', iconName: <AccountBalanceIcon /> },
  { menuName: 'Terms and Conditions', iconName: <DescriptionIcon /> },
];
