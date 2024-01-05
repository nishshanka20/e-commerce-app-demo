import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IconButton } from "@mui/material";
function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-[100] w-full p-3 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      {/* <IconButton
        sx={{
          padding: "4px",
          borderRadius: "5px",
        }}
      >
        <div>
          <HomeIcon />
          <p className="text-xs">Home</p>
        </div>
      </IconButton> */}
      <FooterIcon Icon={HomeIcon} name="Home" />
      {/* <IconButton>
        <div>
          <AppsIcon />
          <p className="text-xs">Category</p>
        </div>
      </IconButton> */}
      <FooterIcon Icon={AppsIcon} name="Category" />
      {/* <IconButton>
        <div>
          <AccountCircleOutlinedIcon />
          <p className="text-xs">Profile</p>
        </div>
      </IconButton> */}
      <FooterIcon Icon={AccountCircleOutlinedIcon} name="profile" />
    </footer>
  );
}

export default Footer;

const FooterIcon = ({ Icon, name }) => (
  <IconButton
    sx={{
      padding: "4px",
      borderRadius: "5px",
    }}
  >
    <div className="text-gray-700 hover:text-[#c82196] transition-all duration-300">
      <Icon />
      <p className="text-xs font-semibold">{name}</p>
    </div>
  </IconButton>
);
