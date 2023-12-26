// import { cn } from "@/lib/utils";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import Image from "next/image";

const UserAvatar = ({ size, className, image }) => {
  const avatarSizeClasses = size === "large" ? "h-14 w-14" : "h-10 w-10";
  return (
    <img
      className={`rounded-full ${avatarSizeClasses} object-cover ${className}`}
      src={image}
      alt="S S"
    />
  );
};

export default UserAvatar;
