import heroBg from '../assets/heroBg.jpg';

const Hero = () => {
  return (
    <div className="relative -top-[4rem] w-full overflow-hidden h-max">
      <img
        src={heroBg}
        className="w-full min-[600px]:h-[80vh] h-[40vh] object-cover object-center"
      />
    </div>
  );
};

export default Hero;
