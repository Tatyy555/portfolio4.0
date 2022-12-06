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
      "Thank you for visiting.",
      "I'm Tatsuya Yamaguchi.",
      "Guy-who-loves-Manga.js",
      "<ButLoves-To-CodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col w-screen h-[80%] text-center snap-center relative">
      <canvas className=" w-screen  h-full absolute fluid-image" />
      <div className=" flex flex-col w-screen items-center">
        <h1 className="font-Pacifico  mt-40 md:mt-48 text-6xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl text-slate-100 leading-relaxed lg:pb-8 lg:leading-loose z-10">
          <span className="mr-3 overflow-hidden text-ellipsis">{text}</span>
          <Cursor cursorColor="#FFFFFF" />
        </h1>
        <p className="text-slate-400 absolute text-3xl lg:text-5xl font-bold font-Arial bottom-[10rem] sm:bottom-[16rem]  z-10">
          a web developer
        </p>
      </div>
    </div>
  );
}

export default Hero;
