import "@styles/components/Button.scss";
const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
