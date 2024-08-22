import { ButtonApp } from "@/components";
import { TopBanner } from "@/components/TopBanner";
import { cormorantRegular, cormorantSemiBold, latoRegular } from "@/fonts";
import { Icons } from "@/icons";
import { cn, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const ContactUs = (): React.JSX.Element => {
  const classInput = {
    label: cn("", latoRegular.className),
  };
  return (
    <div>
      <TopBanner
        src="/images/contact-us.png"
        h1="Handicraft"
        h2="MADE WITH LOVE"
        description="Lorem ipsum dolor sit amet consectetur. Tempor faucibus sit iaculis arcu felis. Volutpat sollicitudin tortor aliquam maecenas porttitor ac et blandit. Pretium urna at ac purus aliquet mauris. Sit feugiat mattis turpis congue justo."
      />
      <div className="flex justify-center -translate-y-10">
        <div className="grid grid-cols-5 bg-themeWhite rounded-3xl overflow-hidden shadow-lg w-2/3">
          <div className="col-span-2 bg-[url('/images/contact_us_side.png')]">

            <div className="pt-32 px-10 pb-11 bg-blurEffect">
              <div>
                <Image
                  src="/images/logo.svg"
                  className="size-16"
                  width={200}
                  height={200}
                  alt="logo"
                />
                <p
                  className={twMerge(
                    latoRegular.className,
                    "text-themeWhite mt-6 text-sm"
                  )}
                >
                  Crafting the essence of nature into timeless art, one
                  handcrafted piece at a time.
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <div className="flex gap-3">
                  <Image src={Icons.Phone} alt="phone icon" />
                  <p
                    className={twMerge(
                      latoRegular.className,
                      "text-themeWhite text-sm"
                    )}
                  >
                    0865 953 118
                  </p>
                </div>
                <div className="flex gap-3">
                  <Image src={Icons.Mail1} alt="phone icon" />
                  <p
                    className={twMerge(
                      latoRegular.className,
                      "text-themeWhite text-sm"
                    )}
                  >
                    myngheviet.2021@gmail.com
                  </p>
                </div>
                <div className="flex gap-3">
                  <Image src={Icons.MarkerPin} alt="phone icon" />
                  <p
                    className={twMerge(
                      latoRegular.className,
                      "text-themeWhite text-sm"
                    )}
                  >
                    556E3, 147 Tan Mai, Tan Mai Street, Tan Mai Ward, Hoang Mai
                    District, Hanoi City, Vietnam
                  </p>
                </div>
              </div>

              <div
                className="text-themeWhite flex flex-row items-center mt-10"
              >
                <div
                  style={{ height: 1 }}
                  className="bg-themeWhite w-10 mr-1"
                ></div>
                <p className={twMerge(latoRegular.className, "text-base")}>
                  CONTACT NOW
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 bg-themeWhite">
            <div className="m-11">
              <h1
                className={twMerge(
                  cormorantSemiBold.className,
                  "text-textPrimary text-6xl my-3"
                )}
              >
                Contact us
              </h1>
              <div className="grid grid-cols-2 gap-6">
                <InputItem label="Name" placeHolder="Enter your name" />
                <InputItem label="Email" placeHolder="Enter your email" />
                <AreaInputItem
                  label="Message"
                  placeHolder="Enter your message"
                />
              </div>
              <ButtonApp title="SEND MESSAGE" className="mt-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputItem = ({
  label,
  placeHolder,
}: {
  label: string;
  placeHolder: string;
}) => {
  return (
    <Input
      classNames={{
        label: "text-textSecondary mb-5",
        base: "bg-black flex gap-5",
        input: "placeholder:text-textTertiary",
        description: "text-textTertiary",
      }}
      className={twMerge("col-span-1 mt-10", latoRegular.className)}
      type="text"
      variant={"underlined"}
      label={label}
      placeholder={placeHolder}
    />
  );
};

const AreaInputItem = ({
  label,
  placeHolder,
}: {
  label: string;
  placeHolder: string;
}) => {
  return (
    <Textarea
      classNames={{
        label: "text-textSecondary mb-5",
        base: "bg-black flex gap-5",
        input: "placeholder:text-textTertiary",
        description: "text-textTertiary",
      }}
      className={twMerge("col-span-2", latoRegular.className)}
      type="text"
      variant={"underlined"}
      label={label}
      placeholder={placeHolder}
    />
  );
};
