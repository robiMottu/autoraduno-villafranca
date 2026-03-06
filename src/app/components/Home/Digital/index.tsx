"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const Digital = () => {
  return (
    <section className="relative bg-cover bg-center overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="rounded-3xl bg-[url('/images/digital/bg.png')] bg-no-repeat bg-cover bg-right-top lg:pb-44 pb-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
            {/* COLUMN-1 */}
            <div className="pt-24 lg:pl-24">
              <p className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start uppercase mt-5"></p>
              <h2 className="text-white mb-8 leading-tight text-center lg:text-start lg:w-full">
                Sostieni la raccolta fondi in sua memoria
              </h2>
              <div className="text-center lg:text-start">
                <Link
                  href="https://gofund.me/042e3d481"
                  className="text-xl font-semibold text-white bg-deep-slate/80 hover:bg-deep-slate py-4 px-12 rounded-full"
                >
                  Donazione
                </Link>
              </div>
            </div>
          </div>

          {/* COLUMN-2 */}
          {/* <div className='absolute -bottom-16 -right-20 xl:block hidden'>
            <Image
              src='/images/digital/girldoodle.svg'
              alt='doodle'
              width={815}
              height={691}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Digital;
