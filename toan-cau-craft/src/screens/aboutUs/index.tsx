import { TopBanner } from "@/components/TopBanner";
import {
  cormorantMedium,
  cormorantRegular,
  cormorantSemiBold,
  latoRegular,
  leagueSpartanMedium,
  leagueSpartanRegular,
} from "@/fonts";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const AboutUs = (): React.JSX.Element => {
  return (
    <div>
      <TopBanner
        src="/images/about-us.png"
        h1="Handicraft"
        h2="MADE WITH LOVE"
        description="Lorem ipsum dolor sit amet consectetur. Tempor faucibus sit iaculis arcu felis. Volutpat sollicitudin tortor aliquam maecenas porttitor ac et blandit. Pretium urna at ac purus aliquet mauris. Sit feugiat mattis turpis congue justo."
      />

      <div className="grid grid-cols-5 m-20">
        <div className="col-span-1"></div>
        <div className="col-span-4">
          <p
            className={twMerge(
              cormorantSemiBold.className,
              "text-textPrimary text-5xl"
            )}
          >
            ABOUT US
          </p>
        </div>
        <div className="col-span-1 mt-7">
          <p
            className={twMerge(
              leagueSpartanMedium.className,
              "text-textPrimary text-sm"
            )}
          >
            OUR STORY
          </p>
          <p
            className={twMerge(
              leagueSpartanMedium.className,
              "text-textSecondary text-sm"
            )}
          >
            MISSION
          </p>
          <p
            className={twMerge(
              leagueSpartanMedium.className,
              "text-textSecondary text-sm"
            )}
          >
            VISION
          </p>
        </div>
        <div className="col-span-4">
          <p
            className={twMerge(
              latoRegular.className,
              "text-textSecondary text-base mt-7"
            )}
          >
            Founded with a passion for preserving traditional Vietnamese
            craftsmanship, Global Handicrafts CO.,LTD began as a small workshop
            nestled at Duyen Thai Vilage. What started as a family endeavor has
            grown into a thriving business, dedicated to creating handcrafted
            masterpieces from the rich natural resources of our land. <br />
            <br />
            From the very beginning, we have believed in the power of art to
            tell stories, and every piece we produce is a testament to this
            belief. Our journey has been one of continuous learning, innovation,
            and a deep respect for the artisans who bring these stories to life.
            As we continue to grow, our commitment remains the same: to offer
            beautiful, sustainable, and meaningful products that honor our
            heritage and inspire a global audience.
          </p>
        </div>
      </div>

      <div className="relative w-full h-[34rem] overflow-hidden flex items-center p-20">
        <Image
          className="opacity"
          alt="background"
          src={"/images/about_us_1.png"}
          width={2080}
          height={1}
        />
      </div>

      <div className="flex justify-center m-20">
        <p
          className={twMerge(
            cormorantMedium.className,
            "text-textPrimary text-4xl text-center max-w-screen-sm"
          )}
        >
          "Crafting the essence of nature into timeless art, one handcrafted
          piece at a time."
        </p>
      </div>
      <div className="h-96 m-24">
        <div className="grid grid-cols-2 gap-16">
          <div className="col-span-1 h-96">
            <div className="relative w-full h-full">
              <Image
                fill
                objectFit="contain"
                src={"/images/about_us_2.png"}
                alt="product_link_image"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="mt-8">
              <h2
                className={twMerge(
                  cormorantRegular.className,
                  "text-textPrimary text-4xl"
                )}
              >
                Mission to the Community
              </h2>
              <p
                className={twMerge(
                  latoRegular.className,
                  "max-w-screen-sm mt-6 text-textSecondary"
                )}
              >
                At Global Handicrafts CO.,LTD, we believe in the power of
                community and the importance of giving back. Our commitment goes
                beyond creating beautiful handcrafted products; it extends to
                supporting the artisans and communities who bring these
                creations to life. By sourcing materials locally and employing
                skilled craftsmen from rural areas, we help to sustain
                traditional craftsmanship and provide meaningful employment
                opportunities. 
                <br/><br/>
                Through our efforts, we aim to make a positive
                impact that resonates far beyond the beautiful items we create,
                fostering a future where traditional Vietnamese craftsmanship
                continue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
