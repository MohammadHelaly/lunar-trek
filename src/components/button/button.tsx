import { forwardRef } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  link: string;
  newTab?: boolean;
  text: string;
  onClick?: never;
  active?: boolean;
  strongText?: boolean;
}

interface ClickButtonProps {
  link?: never;
  newTab?: never;
  text: string;
  onClick: () => void;
  active?: boolean;
  strongText?: boolean;
}

type Props = LinkButtonProps | ClickButtonProps;

interface LinkProps {
  link?: string;
  newTab?: boolean;
  children: React.ReactNode;
}

const OptionalLink = (props: LinkProps) => {
  const { link, newTab, children } = props;

  return link ? (
    <Link to={link} target={newTab ? "_blank" : "_self"}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  );
};

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { link, newTab, text, active = false, strongText, onClick } = props;

  const buttonClasses =
    "w-full border-2 border-gray bg-blue rounded-none backdrop-blur-sm bg-muted max-md:px-6 text-white transition-colors duration-[200ms] hover:border-blue hover:bg-white hover:text-blue" +
    (active ? " !border-white !bg-white !text-blue" : "") +
    (strongText ? " p-3" : " !p-1 lg:!p-2.5");

  const textClasses =
    "font-futura font-normal text-center" +
    (strongText
      ? " text-[calc(1.3rem_+_0.6vw)] xl:text-[1.75rem]"
      : " text-[0.5rem] lg:text-xl");

  return (
    <OptionalLink link={link} newTab={newTab}>
      <button ref={ref} className={buttonClasses} onClick={onClick}>
        <p className={textClasses}>{text}</p>
      </button>
    </OptionalLink>
  );
});

export default Button;
