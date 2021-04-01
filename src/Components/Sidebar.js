import '../App.css';
// import { Content } from "./Content";
// import AddSales from './AddSales';

import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';

import {Link} from 'react-router-dom';


const drawerWidth = 190;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
      backgroundColor:'#ffa500',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#ffa500',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerListText:{
      color: '#ffffff',
  },
  content: {
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  link: {
      textDecoration:'none',
  }
}));

const　Sidebar= (props)=> {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

//   const clickHandler = () => {
//       console.log("OK")
//   }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            ヘッダーメニュー
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.drawerList}>
          
          <Link to={"/home"} className={classes.link}>
            <ListItem button >
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText className={classes.drawerListText} primary={"Home"} />
            </ListItem>
          </Link>
          <Link to={"/add"} className={classes.link}>
            <ListItem button>
                <ListItemIcon><ReceiptIcon /></ListItemIcon>
                <ListItemText className={classes.drawerListText} primary={"売上管理"} />
            </ListItem>
          </Link>
          <ListItem button>
              <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
              <ListItemText className={classes.drawerListText} primary={"経費管理"} />
          </ListItem>
          <Link to={"/allSales"} className={classes.link}>
          <ListItem button>
          <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
              <ListItemText className={classes.drawerListText} primary={"売上一覧"} />
          </ListItem>
          </Link>
          <ListItem button>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
              <ListItemText className={classes.drawerListText} primary={"人事管理"} />
          </ListItem>
          <ListItem button>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText className={classes.drawerListText} primary={"バージョン"} />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
          <div className={classes.drawerHeader} /> 
            { props.children }
          {/* <Content /> */}
        {/* <BrowserRouter>
            <Switch>
                    <Route exact path={"/"} component={Content} />
                    <Route exact path={"/add"} component={AddSales} />
            </Switch>
            
        </BrowserRouter> */}
        </main>
    </div>
  );
          }
export default Sidebar;