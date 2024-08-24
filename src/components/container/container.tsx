interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = (props: Props) => {
  const { children, className } = props;

  const containerClasses =
    "w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px] px-3 mx-auto box-border " +
    className;

  return <div className={containerClasses}>{children}</div>;
};

export default Container;
