import * as React from "react";
import { useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

import MenuIcon from "@mui/icons-material/Menu";

import navbarList from "./navList";
import MainPage from "./pages/MainPage";
import Shipment from "./pages/Shipment";
import AppBar from "./components/AppBar";

import InstructionHistory from "./pages/InstructionHistory";

const drawerWidthOpen = 270;
const paddingIconButton = 10;
const marginIconButton = 14;
const iconFontSize = 20;
const drawerWidthClose =
  (paddingIconButton + marginIconButton) * 2 + iconFontSize;

export default function SideNavbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const refFocus = useRef();

  function toogleOpen() {
    setOpen(!open);
  }

  const drawerContent = (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "42px",
          width: "auto",
          backgroundColor: "transparent",
          margin: "14px 14px",
          padding: "12px 0px",
          borderBottom: "1px solid lightgray",
          alignItems: "flex-end",
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            display: open ? "none" : { xs: "none", sm: "initial" },
            marginBottom: "9px",
          }}
        ></Box>
        <Typography
          variant="h1"
          noWrap={true}
          gutterBottom
          sx={{
            display: { xs: "none", sm: "initial" },
            fontSize: "18px",
            fontWeight: 600,
            color: "lightgray",
            width: "154px",
            marginLeft: open ? "0px" : "8px",
            paddingBottom: "3px",
          }}
        >
          Menu
        </Typography>

        <Button
          onClick={toogleOpen}
          sx={{
            minWidth: "initial",
            padding: "10px",
            color: "gray",
            borderRadius: "8px",
            backgroundColor: open ? "transparent" : "transparent",
            "&:hover": {
              backgroundColor: "#26284687",
            },
          }}
        >
          <MenuIcon
            sx={{ fontSize: "20px", color: open ? "lightgray" : "lightGray" }}
          ></MenuIcon>
        </Button>
      </Box>

      <List dense={true}>
        {navbarList.map((key, index) => (
          <>
            {index === 0 ? (
              <>
                <Divider variant="middle" light={true} />
              </>
            ) : (
              <Tooltip
              // 작은 화면에서의 아이콘 툴팁
                title={open ? key.desc : ""}
                placement={"right"}
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: "gray",
                      color: "white",
                      marginLeft: "22px !important",
                      boxShadow: "0px 0px 22px -2px rgba(0,0,0,0.20)",
                    },
                  },
                }}
              >
                {/* 메뉴 리스트 */}
                <ListItemButton
                  sx={{
                    margin: "0px 1px",
                    padding: "10px 0px 10px 0px",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#26284687",
                    },
                  }}
                >
                  {/* 리스트 아이콘 */}
                  <ListItem button component="a" href={key.path}>
                    <ListItemIcon sx={{ minWidth: "46px" }} >
                      <Badge
                        badgeContent={key.badge}
                        color="secondary"
                        variant="dot"
                      >
                        <key.icon
                          sx={{ fontSize: "30px", color: "lightgray" }}
                        />
                      </Badge>
                    </ListItemIcon>
                  </ListItem>

                  {/* 리스트 텍스트 */}
                  <ListItem button component="a" href={key.path}>
                    <ListItemText
                      primary={key.desc}
                      primaryTypographyProps={{
                        variant: "body2",
                        fontsize: "1em"
                      }}
                      sx={{                        
                        p:1,
                        display: "inline",
                        margin: "0px",
                        overflowX: "hidden",
                        color: "lightgray",
                        whiteSpace: "nowrap",
                        width: "250px",
                      }}
                    />
                   </ListItem>
                  {key.badge !== 0 ? (
                    <Chip
                      label={key.badge}
                      color={"secondary"}
                      size="small"
                      sx={{ height: "auto" }}
                    />
                  ) : (
                    <></>
                  )}
                </ListItemButton>
              </Tooltip>
            )}
          </>
        ))}
        <Divider variant="middle" light={true} />
      </List>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          alignContents: "center",
          margin: "14px 14px",
          padding: "12px 4px",
          borderTop: "1px solid lightgray",
        }}
      >
      </Box>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open
            ? { xs: "0px", sm: drawerWidthClose }
            : { xs: drawerWidthClose, sm: drawerWidthOpen },
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: open
              ? theme.transitions.duration.leavingScreen
              : theme.transitions.duration.enteringScreen,
          }),
          "& .MuiDrawer-paper": {
            justifyContent: "space-between",
            overflowX: "hidden",
            width: open
              ? { xs: "0px", sm: drawerWidthClose}
              : { xs: drawerWidthClose, sm: drawerWidthOpen },
            borderRight: "0px",
            borderRadius: "0px 16px 16px 0px",
            boxShadow: theme.shadows[8],
            backgroundColor: open ? "#11101D" : "#11101D",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: open
                ? theme.transitions.duration.leavingScreen
                : theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <div>
        <Router>
        <AppBar />
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/shipment" element={<Shipment />}></Route>
            <Route path="/instruction/history" element={<InstructionHistory />}></Route>

          </Routes>
        </Router>
      </div>
    </Box>
  );
}
