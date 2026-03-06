"use client";
import React from "react";
import { Icon } from "@iconify/react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const FAQ = () => {
  return (
    <section
      id="FAQ"
      className="relative py-1 bg-cover bg-center overflow-hidde dark:bg-darkmode"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative rounded-2xl py-24 bg-faq-bg bg-no-repeat bg-cover bg-primary">
          <p className="text-lg font-normal text-white text-center mb-6">FAQ</p>
          <h2 className="text-white text-center max-w-3xl mx-auto">
            Domande Frequenti
          </h2>
          <div className="w-full px-4 pt-16">
            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5">
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className="flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer">
                      <span className="text-black">
                        La prenotazione al raduno è obbligatoria?
                      </span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className="text-base text-black/50 font-normal text-left pt-4 mt-6 border-t border-border">
                      <div className="lg:max-w-70%">
                        No, la prenotazione al raduno è caldamente consigliata,
                        in quanto ci permette di organizzare meglio gli spazi e
                        lo svolgimento della giornata. Se però arrivate quel
                        giorno lì senza esservi prenotati, non vi mandiamo
                        via🙃.
                      </div>
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </div>
            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5">
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer">
                      <span className="text-black">
                        La prenotazione del pranzo è obbligatoria?
                      </span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className="text-base text-black/50 pt-4 mt-6 text-left border-t border-border">
                      <div className="lg:max-w-70%">
                        No, non è obbligatorio prenotare il pranzo, ma è
                        consigliato se si ha in mente di mangiare lì il giorno
                        del raduno, in quanto garantiamo il servizio
                        ristorazione fino ad esaurimento scorte (per chi è
                        sprovvisto di prenotazione ovviamente)
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5">
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer">
                      <span className="text-black">
                        Dove si tiene l'evento?
                      </span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className="text-base text-black/50 pt-4 mt-6 text-left border-t border-border">
                      <div className="lg:max-w-70%">
                        L'evento si svolge nel parcheggio del PalaBus Company a
                        Villafranca Piemonte, Via Brigata Taurinense 11
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5">
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer">
                      <span className="text-black">
                        Sono minorenne, posso esporre un mio veicolo?
                      </span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className="text-base text-black/50 pt-4 mt-6 text-left border-t border-border">
                      <div className="lg:max-w-70%">
                        No, per esporre devi avere almeno 18 anni compiuti e
                        devi essere provvisto di patente di guida.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5">
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer">
                      <span className="text-black">
                        Posso fare bornout, drift o partenze nell'area
                        dell'esposizione?
                      </span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className="text-base text-black/50 pt-4 mt-6 text-left border-t border-border">
                      <div className="lg:max-w-70%">
                        No, è severamente vietato qualsiasi comportamento non
                        autorizzato dallo staff che possa generare una
                        situazione potenzialmente pericolosa. Questo è un raduno
                        di macchine STATICO
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white">
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer">
                      <span className="text-black">
                        Posso esporre la mia moto?
                      </span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className="text-base text-black/50 pt-4 mt-6 font-normal text-left border-t border-border">
                      <div className="lg:max-w-70%">
                        No, questo è un raduno STATICO di autoveicoli.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
