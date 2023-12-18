type Props = {
  text: string;
  color: 'indigo' | 'cyan' | 'red'
  size: 'sm' | 'md' | 'lg'
};

const sizes = {
  sm: "px-3 py-1 rounded-sm text-sm",
  md: "px-4 py-2 rounded-md text-base",
  lg: "px-5 py-3 rounded-lg text-lg",
};

const colors = {
  indigo: "bg-indigo-500 hover:bg-indigo-600 text-white",
  cyan: "bg-cyan-600 hover:bg-cyan-700 text-white",
  red: "bg-red-600 hover:bg-red-700 text-black",
};

const Button = (props:Props) => {
  let colorClasses = colors[props.color];
  let sizeClasses = sizes[props.size];
  return (
    <button className={`font-bold ${sizeClasses} ${colorClasses}`}>
      {props.text}
    </button>
  )
}

export default Button