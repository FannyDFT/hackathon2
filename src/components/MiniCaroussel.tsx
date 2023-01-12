import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type Props = {};

function MiniCaroussel({}: Props) {
  return (
    <div className=" flex flex-col items-center mt-12 bg-white w-full">
      <div>
        <h1 className="font-Quicksand font-semibold text-lg my-4">
          Discover our vehicles
        </h1>
        <hr className="border-1 border-black" />
      </div>

      <div className="w-auto h-64 lg:h-auto">
        <Carousel
          infiniteLoop
          autoPlay
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          renderIndicator={(clickHandler, isSelected) => {
            return (
              <button type="button" onClick={clickHandler}>
                <li
                  className={
                    isSelected
                      ? "bg-blackColor h-2 w-2 rounded-md inline-block m-2 transition-all"
                      : "bg-blackColor h-2 w-2 rounded-md inline-block m-2 transition-all"
                  }
                />
              </button>
            );
          }}
        >
          <div>
            <Image
              src="/assets/fiat.png"
              width={1000}
              height={1000}
              quality={100}
              alt="fiat"
              className="pb-10"
            />
          </div>
          <div>
            <Image
              src="/assets/peugeot.png"
              width={1000}
              height={1000}
              quality={100}
              alt="peugeot"
              className="pb-10"
            />
          </div>
          <div>
            <Image
              src="/assets/range.png"
              width={1000}
              height={1000}
              quality={100}
              alt="range"
              className="pb-10"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default MiniCaroussel;
