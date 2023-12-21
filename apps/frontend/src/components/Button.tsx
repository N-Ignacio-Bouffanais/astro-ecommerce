type Props = {
  text: string;
  title: string;
  color: "dark" | "blue" | "red";
  size: "sm" | "md" | "lg";
};

const sizes = {
  sm: "px-3 py-1 rounded-sm text-sm",
  md: "px-4 py-2 rounded-md text-base",
  lg: "px-5 py-3 rounded-lg text-lg",
};

const colors = {
  dark: "bg-black hover:bg-black text-white dark: ",
  blue: "bg-blue-600 hover:bg-blue-700 text-white dark: ",
  red: "bg-red-600 hover:bg-red-700 text-black dark: ",
};

const Button = (props:Props) => {
  let colorClasses = colors[props.color];
  let sizeClasses = sizes[props.size];
  return (
    <button class={`font-bold ${sizeClasses} ${colorClasses}`}>
      {props.text}
    </button>
  )
}

export default Button