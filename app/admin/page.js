"use client"
import data from "../api.json";
import Nav_bar_component from '../components/nav';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import RenderUsers from '../components/renderUsers/page'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: 300,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: 300,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: 300,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: 300,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { text: 'Galeria de Anúncios', content: 'Conteúdo do Carrousel', icon: <CollectionsRoundedIcon/> },
    { text: 'Categorias', content: 'Conteúdo das Categorias', icon: <CategoryRoundedIcon/> },
    { text: 'Todos os Produtos', content: 'Conteúdo dos Produtos', icon: <ShoppingCartRoundedIcon/> },
    { text: 'Itens Promocionais', content: 'Conteúdo dos Itens Promocionais', icon: <AttachMoneyRoundedIcon/> },
    { text: 'Em Destaque', content: 'Conteúdo de Todos os Itens em Destaque', icon: <StarRoundedIcon/> },
    { text: 'Banner de Promoções', content: 'Conteúdo dos Banners', icon: <LocalOfferRoundedIcon/> },
    { text: 'Lista de Usuários', content: <RenderUsers/>, icon: <PersonSearchRoundedIcon/> },
    { text: 'Informações de Contato', content: 'Conteúdo do Nav', icon: <SettingsRoundedIcon/> }
  ];

  return (
    <main>
      <Box className="transition-all duration-200 ease-in h-screen" sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar open={open}>
          <Toolbar className="bg-[#420D09]">
            <IconButton 
              className="hover:bg-[#270f0d] transition-all duration-500 ease-in rounded-3xl"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon/>
            </IconButton>
            <Typography className="relative w-screen" noWrap component="div">
              <Nav_bar_component data={data.nav_bar}></Nav_bar_component>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader className="h-[5.4rem] bg-[#420D09]">
            <IconButton className="hover:bg-[#270f0d] transition-all duration-500 ease-in"
              onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon className="text-white"/> : <ChevronLeftIcon className="text-white"/>}
            </IconButton>
          </DrawerHeader>
          <List className="bg-[#420D09] h-full text-white ">
            {menuItems.map((item) => (
              <ListItem className="hover:bg-[#270f0d] transition-all duration-500 ease-in" key={item.text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => setSelectedMenuItem(item)}
                >
                  <ListItemIcon className="text-white"
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}><span className="font-signika font-semibold text-[0.95rem]" >{item.text}</span></ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box className="mt-10" component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {selectedMenuItem && (
            <Typography paragraph>
              {selectedMenuItem.content}
            </Typography>
          )}
        </Box>
      </Box>
    </main>
  );
}

