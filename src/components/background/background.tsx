const Background = () => {
  return (
    <div className="fixed top-0 -z-10 h-screen w-full overflow-hidden bg-muted">
      <img
        src="/assets/images/background-image.jpg"
        className="h-screen w-full object-cover object-center brightness-[0.8]"
      />
    </div>
  );
};

export default Background;
