/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import GcnCustomizedDevelopment, {
  IGcnCustomizedDevelopmentProps,
} from './components/GcnCustomizedDevelopment'
import GcnIntelligentManagementApp from './components/GcnIntelligentManagementApp'
import HeroSection, { IGCNHeroSectionProps } from './components/HeroSection'
import { IAlternativeSideBySideWithImagesProps } from '../../components/feature-sections'

// 第1部分配置文件 De版
const gcnHeroSectionMessagesObj: IGCNHeroSectionProps = {
  title: 'Intelligente Gesamtlösung zur Abfalltrennung',
  description:
    'KI-Intelligente Recycling-Management-Plattform + Big-Data-Management-System',
  subDescription1: (
    <>
      <strong className="flex-1 text-left ">
        GCN Intelligent Management Terminal Platform
      </strong>
      <strong className="flex-1 text-left lg:text-right">
        GCN Intelligent Management APP
      </strong>
    </>
  ),
  subDescription2: (
    <>
      <p className="mt-4 text-lg text-gray-500">
        GreenCityNetworks (GCN) ist unsere Abfallmanagement-Plattform und
        umfasst alle unserer Lösungen auf einen Blick.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        GCN bietet Überwachungsservice, ein intelligentes Dashboard, ein
        Analyse- und Kontrollzentrum.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        GCN basiert auf mobilem Internet, Big Data, IoT, Cloud Computing und AI.
        Es ist überall einsetzbar, wo Sie einen Computer oder ein mobiles
        Endgerät mit Internetanschluss haben.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        Es bietet die vollständige Kontrolle und Einsicht der
        Entsorgungsvorgänge sowie Kostensenkungsvorteile in allen
        Betriebsabteilungen.
      </p>
    </>
  ),
}

// 第2部分配置文件 De版
const gcnIntelligentManagementAppProps: IAlternativeSideBySideWithImagesProps =
  {
    textAndImageblocks: [
      {
        name: 'GCN Intelligent Management APP',
        LeftBlock: () => (
          <>
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    <span className="text-emerald-600">GCN</span> Intelligent
                    Management APP
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Der Benutzer kann sich über die Sorting Manager APP
                    jederzeit und überall leicht die Aufgaben erledigen.
                  </p>
                  <div className="mt-4 text-lg prose text-gray-500">
                    <ul>
                      <li>
                        Aktivierung, Inspektion und Überwachung der Geräte
                      </li>
                      <li>Abfallsbeseitigung</li>
                      <li>Störungsmeldungen</li>
                      <li>Datenerfassung und –analyse</li>
                    </ul>
                  </div>
                  <p className="mt-4 text-lg text-gray-500">
                    Gleichzeitig kann es mit anderen Systemen integriert werden,
                    um verschiedene Arten von Abfallmanagement-Datenberichten zu
                    erhalten, die die Effektivität umfassend verbessert werden
                    können.
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
              alt="ein Bildschirm der GCN Intelligente Verwaltungs-APP"
            />
          </>
        ),
      },
    ],
  }

// 第3部分配置文件 De版
const gcnCustomizedDevelopmentProps: IGcnCustomizedDevelopmentProps = {
  title: (
    <>
      <span className="text-emerald-600">GCN</span> Kundenspezifische
      Entwicklungen
    </>
  ),
  subTitle: 'Intelligente Entwicklung einer Management-Plattform ',
  description: (
    <>
      <p className="mt-3 text-lg text-gray-500">
        Individuelle Funktionalitätsanforderungen werden erfüllt
        <br></br>
        Angenehme Benutzererfahrung durch native oder HTML5-Apps, die auf
        IOS/ANDROID entwickelt wurden.
      </p>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
        Visuelle kundenspezifische Zusammenstellung
      </h3>
      <p className="mt-3 text-lg text-gray-500">
        Durch benutzerdefinierte Vorlagen, ist die Erstellung einer
        personalisierten Managementplattform durch einfaches Drag & Drop
        möglich.
      </p>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
        Industriestandardisierte Vorlagen
      </h3>
      <p className="mt-3 text-lg text-gray-500">
        Professionelle Vorlagen mit umfassender Unterstützung, Sicherheit,
        Stabilität, und kurzeren Lieferzyklus für die intelligente
        Abfallwirtschaft.
      </p>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
        Leistungsstarke Datenanalysefunktion
      </h3>
      <p className="mt-3 text-lg text-gray-500">
        Präzisere Abläufe in der Abfallwirtschaft.
      </p>
    </>
  ),
  imageAlt: 'GEME green city network',
}

export function GreenCityNetworksPageDe() {
  return (
    <>
      <HeroSection {...gcnHeroSectionMessagesObj} />
      <GcnIntelligentManagementApp {...gcnIntelligentManagementAppProps} />
      <GcnCustomizedDevelopment {...gcnCustomizedDevelopmentProps} />
    </>
  )
}
