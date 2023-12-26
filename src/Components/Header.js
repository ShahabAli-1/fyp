// import Logo from "./Logo";
// import UserButton from "./UserButton";
import { MessageSquareIcon } from "lucide-react";
import { InfoIcon } from "lucide-react";
import { PowerIcon } from "lucide-react";
import feedback from "../images/feedback.png";
import Logo from "./Logo";
import UserAvatar from "./UserAvatar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="flex flex-col sm:flex-row items-center p-5 pt-2 bg-white w-full ">
        <Logo />
        <div className="flex-1 flex items-center justify-end space-x-4">
          <img src={feedback} alt="fb" className="w-6 h-6 object-contain" />
          <PowerIcon />
          <MessageSquareIcon className="text-black " />
          <InfoIcon />
          <UserAvatar
            size="large"
            image={
              "https://cdn.pixabay.com/photo/2015/07/08/07/41/tree-835455_640.jpg"
            }
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
