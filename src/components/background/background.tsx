const Background = () => {
  return (
    <div className="fixed top-0 -z-10 h-screen w-full overflow-hidden bg-space">
      <img
        src={import.meta.env.BASE_URL + "assets/images/background-image.jpg"}
        alt="Background Image of the Moon"
        className="h-screen w-full object-cover object-center brightness-[0.8]"
      />
    </div>
  );
};

export default Background;
