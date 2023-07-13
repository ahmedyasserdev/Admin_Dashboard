// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";

import { styled, useTheme } from "@mui/material/styles";
import {
    BarChartOutlined,
    CalendarTodayOutlined,
    ContactsOutlined,
    HelpOutlineOutlined,
    HomeOutlined,
    MapOutlined,
    PeopleOutline,
    PersonOutlined,
    PieChartOutlined,
    ReceiptOutlined,
    TimerOutlined,
} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { Tooltip, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(
    // @ts-ignore
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
        }),
    })
);

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Array1 = [
    { text: "Dashboard", icon: <HomeOutlined />, path: "/" },

    { text: "Manage Team", icon: <PeopleOutline />, path: "/team" },

    {
        text: "Contact Information",
        icon: <ContactsOutlined />,
        path: "/contacts",
    },

    { text: "Invoices Balances", icon: <ReceiptOutlined />, path: "/invoices" },
];

const Array2 = [
    { text: "Profile Form", icon: <PersonOutlined />, path: "/form" },
    { text: "Calendar", icon: <CalendarTodayOutlined />, path: "/calendar" },
    { text: "FAQ Page", icon: <HelpOutlineOutlined />, path: "/faq" },
];

const Array3 = [
    { text: "Bar Chart", icon: <BarChartOutlined />, path: "/bar" },
    { text: "Pie Chart", icon: <PieChartOutlined />, path: "/pie" },
    { text: "Line Chart", icon: <TimerOutlined />, path: "/line" },
    { text: "Geography Chart", icon: <MapOutlined />, path: "/geography" },
];

// eslint-disable-next-line react/prop-types
const SideBar = ({ open, handleDrawerClose }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton>
            </DrawerHeader>

            <Divider />

            <Avatar
                sx={{
                    mx: "auto",
                    my: "15px",
                    width: open ? 55 : 25,
                    height: open ? 55 : 25,
                    transition: ".5s",
                }}
                alt="Ahmed Yasser "
                src="AhmedYasser"
            />

            <Typography
                align="center"
                sx={{ fontSize: open ? 17 : 0, transition: ".5s" }}
            >
                Ahmed Yasser
            </Typography>
            <Typography
                sx={{
                    my: "15px",
                    fontSize: open ? 15 : 0,
                    transition: ".5s",
                    color: theme.palette.info.main,
                }}
                align="center"
            >
                Admin
            </Typography>

            <Divider />
            <List>
                {Array1.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
                       
                    <Tooltip title= { open ? null  : item.text  } placement="left" >
                    <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        backgroundColor:
                            pathname == item.path
                                ? theme.palette.mode === "light"
                                    ? grey[300]
                                    : grey[600]
                                : null,
                    }}
                    onClick={() => {
                        navigate(item.path);
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                        }}
                    >
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={item.text}
                        sx={{ opacity: open ? 1 : 0 }}
                    />
                </ListItemButton>
                    </Tooltip>
                    
                  
                    </ListItem>
                ))}
            </List>

            <Divider />

            <List>
                {Array2.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: "block" }}>

                    <Tooltip title= { open ? null  : item.text  } placement="left" >

                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                                backgroundColor:
                                pathname == item.path
                                    ? theme.palette.mode === "light"
                                        ? grey[300]
                                        : grey[600]
                                    : null,
                            }}
                            onClick={() => {
                                navigate(item.path);
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </Tooltip>

                    </ListItem>
                ))}
            </List>

            <Divider />

            <List>
                {Array3.map((item) => (
                    <ListItem key={item.paht} disablePadding sx={{ display: "block" }}>
                    <Tooltip title= { open ? null  : item.text  } placement="left" >
             
                    <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                                backgroundColor:
                                pathname == item.path
                                    ? theme.palette.mode === "light"
                                        ? grey[300]
                                        : grey[600]
                                    : null,
                            }}
                            onClick={() => {
                                navigate(item.path);
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </Tooltip>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default SideBar;
