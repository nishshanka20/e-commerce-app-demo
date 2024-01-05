import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-[100] w-full py-5 px-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      {/*left side of header */}
      <div className="flex items-center">
        <IconButton>
          <MenuIcon
            sx={{
              color: "#c82196",
            }}
          />
          {
            //sx property can be used to add color like things to components taken from mui}
          }
        </IconButton>
        {/*object contain use to prevent damates in aspect ration */}
        <h1 className="ml-2 text-sm font-bold">Logo</h1>
        <div className="overflow-hidden ml-2 flex items-center rounded-full bg-[#f7ebeb]">
          <input
            type="text"
            placeholder="Search"
            className="hidden sm:inline-block ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit"
          />
          <IconButton>
            <SearchIcon className="text-gray-400 " />
          </IconButton>
        </div>
      </div>
      {/*right side of header */}
      <div>
        <IconButton>
          <ShoppingCartRoundedIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
