interface Props {
  children: React.ReactNode;
}

const ContentPadding = (props: Props) => {
  const { children } = props;

  return (
    <div className="w-full px-9 md:px-16 lg:px-24 xl:px-28 2xl:px-32">
      {children}
    </div>
  );
};

export default ContentPadding;
