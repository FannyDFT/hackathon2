import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

type Props = {};

function MiniCaroussel({}: Props) {
  return (
    <div className=" flex flex-col items-center mt-12">
      <div>
        <h1 className="font-Quicksand font-semibold text-lg mb-4">
          Discover our vehicles
        </h1>
        <hr className="border-1 border-black" />
      </div>

      <div className="w-auto h-64">
        <Carousel
          infiniteLoop
          autoPlay
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          <div>
            <Image src="/assets/bmw.png" width={70} height={60} alt="bmw" />
          </div>
          <div>
            <Image src="/assets/peugeot.png" width={70} height={60} alt="bmw" />
          </div>
          <div>
            <Image src="/assets/porshe.png" width={70} height={60} alt="bmw" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default MiniCaroussel;
