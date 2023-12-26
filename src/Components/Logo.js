import logoimage from "../logos/ew-log.png";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center w-32 h-14">
        <img src={logoimage} alt="logo" />
      </div>
    </div>
  );
};

export default Logo;
