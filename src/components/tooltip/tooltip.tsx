interface Props {
  active?: boolean;
  payload?: { name: string; value: string }[];
  label?: string;
}

const Tooltip = (props: Props) => {
  const { active, payload, label } = props;

  if (!active || !payload || !payload?.length) {
    return null;
  }

  return (
    <div className="flex flex-col items-start rounded-none border-none bg-black/80">
      <div className="w-full bg-gray px-1 pb-1 pt-2 md:px-2 md:pb-2 md:pt-4">
        <p className="text-start font-futura text-xl font-light text-black md:text-[2rem]">
          {label}
        </p>
      </div>
      <div className="flex w-full flex-col items-start gap-0.5 p-2 md:p-4">
        {payload.map((entry, index) => (
          <p
            key={index}
            className="text-start font-futura text-[0.6rem] font-light text-white md:text-base"
          >
            {`${entry.name}s: ${entry.value}`}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tooltip;
