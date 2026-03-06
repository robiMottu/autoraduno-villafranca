"use client";
import React from "react";
import Link from "next/link";

const Beliefs = () => {
  return (
    <section className="bg-cover bg-center overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* COLUMN-1 (Viola) */}
          <div className="bg-purple pt-10 px-6 sm:px-12 lg:px-24 pb-16 md:pb-24 lg:pb-32 rounded-3xl bg-no-repeat bg-right-bottom">
            <p className="text-lg font-normal text-white tracking-widest mb-4 text-center sm:text-start uppercase">
              Stupore
            </p>
            <h3 className="text-white mb-4 text-center sm:text-start">
              Oltre{" "}
              <span className="text-white/60">ogni nostra aspettativa</span>
            </h3>
            {/* Modificato il mb-16 in mb-8 lg:mb-12 */}
            <p className="text-lg text-white/75 pt-2 mb-8 lg:mb-12 text-center sm:text-start">
              Lo scorso anno siete stati numerosissimi, oltre 100 macchine hanno
              preso parte all'evento. C'erano auto di tutti i tipi: dalle
              giapponesi alle americane, dalle auto più comuni alle supercar
              passando anche per le auto storiche!
            </p>
            <div className="text-center sm:text-start">
              <Link
                href="https://drive.google.com/drive/folders/1gcaJEBCZduGKBCRCgceFas1SvJOoRGN2?usp=sharing"
                className="inline-block text-xl py-4 px-10 sm:px-14 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode"
              >
                Foto 2025
              </Link>
            </div>
          </div>

          {/* COLUMN-2 (Verde) */}
          <div>
            <div className="bg-[#D6FFEB] pt-10 px-6 sm:px-12 lg:px-24 pb-16 md:pb-24 lg:pb-32 rounded-3xl bg-no-repeat bg-bottom">
              <p className="text-lg font-normal text-primary tracking-widest mb-4 text-center sm:text-start uppercase">
                Ringraziamenti
              </p>
              <h3 className="text-black mb-4 text-center sm:text-start">
                <span className="text-primary">Abbiamo</span> donato 700€ in
                beneficienza
              </h3>
              {/* Modificato il mb-16 in mb-8 lg:mb-12 */}
              <p className="pt-2 mb-8 lg:mb-12 text-center sm:text-start text-black/75 text-lg">
                Oltre a coprire le spese di gestione, siamo riusciti a donare
                700€ all'associazione "ASD TP Racing Team" di Macello, che a sua
                volta li ha donati interamente all'ospedale Agnelli di Pinerolo.
              </p>
              <div className="text-center sm:text-start">
                <Link
                  href="https://www.facebook.com/share/p/1FiokMz8nj/?mibextid=WC7FNe"
                  className="inline-block text-xl py-4 px-10 sm:px-14 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode"
                >
                  Ringraziamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Beliefs;
