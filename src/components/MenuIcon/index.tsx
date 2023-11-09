import "./styles.css";

import { useEffect, useState } from "react";
import menuIcon from "../../assets/Icons/Menu.svg";
import MenuSide from "../MenuSide";

export default function MenuIcon() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isDialogOpen ? "hidden" : "auto";
  }, [isDialogOpen]);

  return (
    <div>
      <div className="ptf-button-section" onClick={handleOpenDialog}>
        <img src={menuIcon} alt="" />
      </div>

      {isDialogOpen && (
        <div className="menu-overlay">
          <div className={"menu-dialog "}>
            <MenuSide handleCloseDialog={handleCloseDialog} />
          </div>
        </div>
      )}

    </div >
  );
}