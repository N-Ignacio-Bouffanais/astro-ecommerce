
type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
  title: string;
  color: "dark" | "blue" | "red";
  size: "sm" | "md" | "lg";
  disabled?: boolean;
  children?: JSX.Element;
  custom_width?: string;
};

const sizes = {
  sm: "px-3 py-1 rounded-sm text-sm",
  md: "px-4 py-2 rounded-md text-base",
  lg: "px-5 py-3 rounded-lg text-lg",
};

const colors = {
  dark: "bg-black hover:bg-black text-white dark: ",
  blue: "bg-blue-600 hover:bg-blue-700 text-white dark: ",
  red: "bg-red-600 hover:bg-red-700 text-white dark: ",
};

const Button = (props: Props) => {
  let colorClasses = colors[props.color];
  let sizeClasses = sizes[props.size];
  let custom_width = props.custom_width;
  return (
    <button
      className={`font-bold ${sizeClasses} ${colorClasses} ${custom_width} disabled:cursor-not-allowed`}
    >
      {props.text}
    </button>
  );
};

export default Button