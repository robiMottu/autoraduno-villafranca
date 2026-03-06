"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { footerlinks } from "@/app/types/footerlinks";

const footer = () => {
  // fetch data

  const [footerlinks, setFooterLinks] = useState<footerlinks[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFooterLinks(data.FooterLinksData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-black" id="first-section">
      <div className="container mx-auto max-w-2xl pt-12 lg:pt-20 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="col-span-4">
            <h4 className="text-white text-3xl leading-9 mb-4 lg:mb-20">
              Autoraduno Villafranca
            </h4>
            <div className="flex items-center gap-4">
              <div className="footer-icons">
                <Link href="https://www.facebook.com/profile.php?id=61582529481306">
                  <Image
                    src={"/images/footer/vec.svg"}
                    alt="facebook"
                    width={15}
                    height={20}
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://www.instagram.com/autoraduno.villafranca.222/">
                  <Image
                    src={"/images/footer/instagram.svg"}
                    alt="instagram"
                    width={25}
                    height={20}
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="mailto:info@autoradunovillafranca.com">
                  <Image
                    src={"/images/footer/mail.svg"}
                    alt="mail"
                    width={25}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* All Rights Reserved */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-t border-white/30">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <p className="text-center md:text-start text-white text-lg">
                @2026 - All Rights Reserved by{" "}
                <Link
                  href="https://getnextjstemplates.com/"
                  target="_blank"
                  className="hover:text-white/60 hover:underline"
                >
                  {" "}
                  Autoraduno Villafranca
                </Link>
              </p>
            </div>
            {/* <div className="flex justify-center md:justify-end">
              <Link href="">
                <p className="text-base text-white pr-6 hover:text-white/60 hover:underline">
                  Privacy policy
                </p>
              </Link>
              <Link href="">
                <p className="text-base text-white pl-6 border-solid border-l border-footer hover:text-white/60 hover:underline">
                  Terms & conditions
                </p>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
