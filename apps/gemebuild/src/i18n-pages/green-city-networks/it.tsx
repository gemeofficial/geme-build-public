/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import GcnCustomizedDevelopment, {
  IGcnCustomizedDevelopmentProps,
} from './components/GcnCustomizedDevelopment'
import GcnIntelligentManagementApp from './components/GcnIntelligentManagementApp'
import HeroSection, { IGCNHeroSectionProps } from './components/HeroSection'
import { IAlternativeSideBySideWithImagesProps } from '../../components/feature-sections'

// 第1部分配置文件 It版
const gcnHeroSectionMessagesObj: IGCNHeroSectionProps = {
  title: 'Soluzione Totale per la Separazione Intelligente dei Rifiuti',
  description:
    'Piattaforma di Gestione del Riciclaggio Intelligente AI + Sistema di Gestione dei Big Data',
  subDescription1: (
    <>
      <strong className="flex-1 text-left ">
        Piattaforma Terminale di Gestione Intelligente GCN
      </strong>
      <strong className="flex-1 text-left lg:text-right">
        App di Gestione Intelligente GCN
      </strong>
    </>
  ),
  subDescription2: (
    <>
      <p className="mt-4 text-lg text-gray-500">
        GreenCityNetworks (GCN) è la nostra piattaforma di gestione dei rifiuti
        e la piattaforma comune che combina tutte le nostre soluzioni.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        GCN fornisce un ambiente di monitoraggio, una dashboard intelligente, un
        centro di analisi e controllo in un pacchetto completo e semplice.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        Basato su internet mobile, big data, IoT, cloud computing e intelligenza
        artificiale, GCN può essere utilizzato ovunque tu abbia un terminale
        desktop o mobile con connessione internet.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        Ti offre il pieno controllo e una visione approfondita delle tue
        operazioni di gestione dei rifiuti, dimostrando vantaggi di riduzione
        dei costi in tutti i tuoi reparti operativi.
      </p>
    </>
  ),
}

// 第2部分配置文件 It版
const gcnIntelligentManagementAppProps: IAlternativeSideBySideWithImagesProps =
  {
    textAndImageblocks: [
      {
        name: 'App di Gestione Intelligente GCN',
        LeftBlock: () => (
          <>
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    <span className="text-emerald-600">GCN</span> App di
                    Gestione Intelligente
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Il personale operativo può completarlo facilmente tramite
                    l'App Sorting Manager in qualsiasi momento e ovunque.
                  </p>
                  <div className="mt-4 text-lg prose text-gray-500">
                    <ul>
                      <li>
                        Attivazione, ispezione e monitoraggio delle
                        apparecchiature
                      </li>
                      <li>Rimozione dei rifiuti</li>
                      <li>Rapporto guasti</li>
                      <li>Acquisizione e analisi dei dati</li>
                    </ul>
                  </div>
                  <p className="mt-4 text-lg text-gray-500">
                    Allo stesso tempo, si integra con altri sistemi per ottenere
                    vari tipi di report sui dati di gestione dei rifiuti, che
                    possono migliorare complessivamente l'efficacia dei
                    responsabili operativi. Lascia che il sole ti aiuti a
                    comprimere i rifiuti!
                  </p>
                </div>
              </div>
            </div>
          </>
        ),
        RightBlock: () => (
          <>
            <Image
              className="relative mx-auto"
              width={490}
              height={490}
              src="/assets/images/green-city-networks/s2-1.png"
              alt="uno schermo dell'app di gestione intelligente GCN"
            />
          </>
        ),
      },
    ],
  }

// 第3部分配置文件 It版
const gcnCustomizedDevelopmentProps: IGcnCustomizedDevelopmentProps = {
  title: (
    <>
      <span className="text-emerald-600">GCN</span> Sviluppo Personalizzato
    </>
  ),
  subTitle: 'Sviluppo intelligente di piattaforme di gestione/APP',
  description: (
    <>
      <p className="mt-3 text-lg text-gray-500">
        Soddisfa le tue esigenze individuali di funzionalità
        <br></br>
        Crea un'esperienza utente fluida attraverso app native o HTML5
        sviluppate su IOS/ANDROID
      </p>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
        Configurazione personalizzata visiva
      </h3>
      <p className="mt-3 text-lg text-gray-500">
        I modelli personalizzati ti consentono di costruire una piattaforma di
        gestione personalizzata trascinando e rilasciando liberamente
      </p>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
        Modelli standardizzati del settore
      </h3>
      <p className="mt-3 text-lg text-gray-500">
        Modelli professionali standardizzati per l'industria della gestione
        intelligente dei rifiuti, supporto completo, sicuro e stabile, e tempi
        di consegna brevi
      </p>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
        Potente funzione di analisi dei dati
      </h3>
      <p className="mt-3 text-lg text-gray-500">
        Rendi le operazioni di gestione dei rifiuti più accurate
      </p>
    </>
  ),
  imageAlt: 'Rete GEME green city',
}

export function GreenCityNetworksPageIt() {
  return (
    <>
      <HeroSection {...gcnHeroSectionMessagesObj} />
      <GcnIntelligentManagementApp {...gcnIntelligentManagementAppProps} />
      <GcnCustomizedDevelopment {...gcnCustomizedDevelopmentProps} />
    </>
  )
}
