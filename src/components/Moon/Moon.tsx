import "./moon.scss";

interface MoonProps {
  href?: string;
  children?: JSX.Element;
  onClick?: () => void;
  classes?: string;
}
const Moon = ({ href, onClick, children, classes }: MoonProps) => {
  return (
    <li className={"moon circle " + classes} onClick={onClick}>
      <span className="dynamic-backgrnd"></span>
      {children}
    </li>
  );
};

export default Moon;
