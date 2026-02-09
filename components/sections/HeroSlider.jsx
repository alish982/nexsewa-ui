"use client";

import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

export const HeroSlider = ({ banners }) => {
  if (!banners || banners.length < 3) return null;

  return (
    <div>
      <div className="flex">
        <Image
          src={"/logo/store.svg"}
          height={76}
          width={76}
          alt="store image"
        />
        <span className="pt-5 px-2 text-2xl">Rice Spice Dice</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:h-[520px]">
        <Link
          href={banners[0]?.cta?.link || "#"}
          className="relative lg:col-span-7 rounded-2xl overflow-hidden block h-[300px] lg:h-auto"
        >
          <Image
            src={banners[0].image}
            alt={banners[0].title}
            fill
            priority
            sizes="(max-width:1024px) 100vw, 70vw"
            className="object-cover hover:scale-[1.03] transition-transform duration-500"
          />
        </Link>

        <div className="lg:col-span-3 grid grid-rows-2 gap-6">
          {[banners[1], banners[2]].map((banner) => (
            <Link
              key={banner.id}
              href={banner?.cta?.link || "#"}
              className="relative rounded-2xl overflow-hidden block h-[200px] lg:h-auto"
            >
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                sizes="(max-width:1024px) 100vw, 30vw"
                className="object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

HeroSlider.propTypes = {
  banners: PropTypes.array.isRequired,
};
