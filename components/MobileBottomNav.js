import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { AiFillHome } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { RiNotificationBadgeFill } from "react-icons/ri";

const MobileBottomNav = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        backgroundColor: "#f8f8f8",
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<AiFillHome color="#384555" size={20} />}
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: "#384555",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "700",
            fontSize: "0.8rem",
          },
        }}
      />
      <BottomNavigationAction
        label="Notification"
        icon={<RiNotificationBadgeFill color="#384555" size={20} />}
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: "#384555",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "700",
            fontSize: "0.8rem",
          },
        }}
      />
      <BottomNavigationAction
        label="Trending"
        icon={<BsMessenger color="#384555" size={20} />}
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: "#384555",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "700",
            fontSize: "0.8rem",
          },
        }}
      />
    </BottomNavigation>
  );
};

export default MobileBottomNav;
