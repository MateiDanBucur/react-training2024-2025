import { Button, Popover } from "@mui/material";
// import { Popover } from '@base-ui-components/react/popover';
import React from "react";
// import { useIntl } from "react-intl";
import { useState } from "react";
import EditPopUp from "./EditPopUp";

const PopUpButton = ({ lable }: { lable: string }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        {lable}
      </Button>
      <Popover
        id={id}
        open={open}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 450, left: 500 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <EditPopUp />
      </Popover>
    </div>
  );
};

export default PopUpButton;
