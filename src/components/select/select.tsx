import { forwardRef } from "react";

interface Props {
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  text: string;
  strongText?: boolean;
  active?: boolean;
}

const Select = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const { options, value, onChange, text, strongText, active = false } = props;

  const selectClasses =
    "w-full border-2 border-gray !h-6 lg:!h-[52px] bg-blue rounded-none backdrop-blur-sm bg-muted max-md:px-6 text-white transition-colors duration-[200ms] hover:border-blue hover:bg-white hover:text-blue !ring-0 !outline-none" +
    (active ? " !border-white !bg-white !text-blue" : "") +
    (strongText ? " p-3" : " !p-1 lg:!p-2.5");

  const textClasses =
    "font-futura font-normal text-center" +
    (strongText
      ? " text-[calc(1.3rem_+_0.6vw)] xl:text-[1.75rem]"
      : " text-[0.5rem] lg:text-xl");

  return (
    <select
      ref={ref}
      value={value}
      onChange={onChange}
      className={selectClasses + " " + textClasses}
    >
      <option key={text} value="">
        {text}
      </option>
      {options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

export default Select;
