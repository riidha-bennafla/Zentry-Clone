import { useState, useRef } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 4;
    const tiltY = (relativeX - 0.5) * -4;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = (event) => {
    setTransformStyle("");
    event.currentTarget.style.cursor = "grab";
  };

  return (
    <div
      className={`cursor-grab ${className}`}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
      onMouseDown={(e) => (e.currentTarget.style.cursor = "grabbing")}
      onMouseUp={(e) => (e.currentTarget.style.cursor = "grab")}
    >
      {children}
    </div>
  );
};
const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
  containerClass,
  customClass,
  logo,
}) => {
  return (
    <div className={`relative size-full ${containerClass} `}>
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute top-0 left-0 size-full object-cover object-center"
      />
      <div className="relative z-10  flex size-full flex-col p-5 text-blue-50 justify-between">
        <div>
          <h1 className={`bento-title special-font select-none ${customClass}`}>
            {title}
          </h1>
          {description && (
            <p className="font-circular-web text-xs mt-3 max-w-64 md:text-base select-none">
              {description}
            </p>
          )}
        </div>
        {logo && (
          <div className=" absolute bottom-5 right-5 w-20 ">
            <img
              src={logo}
              alt="bento card logo"
              className="w-full"
              draggable="false"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Dive into the 'Game of Games' Universe
          </p>
          <p className="font-circular-web text-lg text-blue-50 opacity-50 max-w-md">
            Immerse yourself in a rich and ever-expanding ecosystem where a
            vibrant array of products converge into an interconnected universe.
          </p>
        </div>
        <div className="grid h-[220vh] grid-cols-1 grid-rows-7 gap-5 md:h-[280vh] md:gap-7 lg:grid-cols-4 lg:grid-rows-5">
          <BentoTilt className="bento-tilt_1 row-span-2 lg:col-span-4">
            <BentoCard
              src="/videos/feature-1.mp4"
              title={
                <>
                  radi<b>a</b>nt
                </>
              }
              description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-36 sm:ms-52 md:ms-72 lg:ms-0 lg:col-end-5 lg:col-span-2">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to your identity, Web3 engagement and social interaction"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 me-16 sm:me-20 md:me-24 lg:me-0 lg:col-end-5 lg:col-span-2">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  Az<b>u</b>l
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive. "
            />
          </BentoTilt>

          <BentoTilt className=" bento-tilt_1 row-span-2 ms-20 sm:ms-40 md:ms-40 lg:ms-0 lg:col-span-2 lg:row-start-3">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  zeg<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 hidden lg:col-end-5 lg:col-span-2 lg:block">
            <BentoCard src="/videos/feature-5.mp4" />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 lg:row-start-5 lg:col-span-2">
            <BentoCard
              containerClass="bg-violet-300"
              customClass={"text-black !text-[3.25rem]/[0.85]"}
              title={
                <>
                  m<b>o</b>re <br /> co<b>m</b>ing <br /> s<b>o</b>on{" "}
                </>
              }
              logo={"/img/zentry-logo.png"}
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
