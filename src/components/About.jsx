import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="flex flex-col items-center relative gap-5 mt-36 mb-8">
        <h2 className="font-general text-sm md:text[10px] uppercase">
          Welcome to Zentry
        </h2>

        <AnimatedTitle
          title="Disc<b>o</b>ver the World's <br /> L<b>a</b>rgest Shared Adventure"
          containerClass={"mt-5 !text-black text-center"}
        />

        <div className="about-subtext">
          <p> The Game of Games Begins, Your life, now an epic MMORPG </p>
          <p>Zentry unites every player from countles games and platforms</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
