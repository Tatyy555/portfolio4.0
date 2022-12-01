import { useTypewriter, Cursor } from "react-simple-typewriter";
import WebGLFluid from "webgl-fluid";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    WebGLFluid(document.querySelector("canvas"), {
      BLOOM: false,
      SPLAT_RADIUS: 1,
    });
  }, []);
  const [text] = useTypewriter({
    words: [
      "Nice to meet you!",
      "Thank you for visiting.",
      "I'm Tatsuya Yamaguchi.",
      "Guy-who-loves-Manga.tsx",
      "<ButLoves-CodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="font-Poppins flex flex-col w-screen h-screen text-center bg-gray-900">
      <h1 className=" mt-36 md:mt-48 text-5xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl text-white leading-relaxed lg:pb-8 lg:leading-loose z-10">
        <span className="mr-3 overflow-hidden text-ellipsis underline decoration-white decoration-[0.5rem]">
          {text}
        </span>
        <Cursor cursorColor="#FFFFFF" />
      </h1>
      <p className="text-white text-3xl italic lg:text-5xl font-bold font-Arial mt-2  z-10">
        a web developer
      </p>
      <canvas className="h-[70%] sm:h-[80%] w-screen absolute top-0 fluid-image"></canvas>
    </div>
  );
}

export default Hero;
