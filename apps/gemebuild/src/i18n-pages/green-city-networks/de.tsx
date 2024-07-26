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
        GCN-Intelligente Verwaltungsplattform
      </strong>
      <strong className="flex-1 text-left lg:text-right">
        GCN-Intelligente Verwaltungs-APP
      </strong>
    </>
  ),
  subDescription2: (
    <>
      <p className="mt-4 text-lg text-gray-500">
        GreenCityNetworks (GCN) ist unsere Abfallmanagement-Plattform und die
        gemeinsame Plattform, die alle unsere Lösungen kombiniert.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        GCN bietet eine Überwachungsumgebung, ein intelligentes Dashboard, ein
        Analyse- und Kontrollzentrum in einem umfassenden und einfachen Paket.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        Basierend auf mobilem Internet, Big Data, IoT, Cloud-Computing und
        künstlicher Intelligenz kann GCN überall dort eingesetzt werden, wo Sie
        einen Desktop oder ein mobiles Endgerät mit Internetverbindung haben.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        Es gibt Ihnen die vollständige Kontrolle und Einblick in Ihre
        Abfallmanagement-Operationen und beweist Kostensenkungsvorteile in all
        Ihren Betriebsabteilungen.
      </p>
    </>
  ),
}

// 第2部分配置文件 De版
const gcnIntelligentManagementAppProps: IAlternativeSideBySideWithImagesProps =
  {
    textAndImageblocks: [
      {
        name: 'GCN Intelligente Verwaltungs-APP',
        LeftBlock: () => (
          <>
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    <span className="text-emerald-600">GCN</span> Intelligente
                    Verwaltungs-APP
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Das Betriebspersonal kann dies jederzeit und überall über
                    die Sortier-Manager-APP einfach erledigen.
                  </p>
                  <div className="mt-4 text-lg prose text-gray-500">
                    <ul>
                      <li>Geräteaktivierung, Inspektion und Überwachung</li>
                      <li>Müllbeseitigung</li>
                      <li>Fehlerbericht</li>
                      <li>Datenerfassung und -analyse</li>
                    </ul>
                  </div>
                  <p className="mt-4 text-lg text-gray-500">
                    Gleichzeitig integriert es sich mit anderen Systemen, um
                    verschiedene Arten von Abfallmanagement-Datenberichten zu
                    erhalten, die die Effizienz der Betriebsleiter umfassend
                    verbessern können. Lassen Sie die Sonne helfen, den Müll zu
                    komprimieren!
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
      <span className="text-emerald-600">GCN</span> maßgeschneiderte Entwicklung
    </>
  ),
  subTitle: 'Intelligente Entwicklung von Verwaltungsplattform/APP',
  description: (
    <>
      <p className="mt-3 text-lg text-gray-500">
        Erfüllen Sie Ihre individuellen Funktionsanforderungen
        <br></br>
        Erstellen Sie ein reibungsloses Benutzererlebnis durch native oder
        HTML5-Apps, die auf IOS/ANDROID entwickelt wurden
      </p>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
        Visuelle benutzerdefinierte Zuordnung
      </h3>
      <p className="mt-3 text-lg text-gray-500">
        Benutzerdefinierte Vorlagen ermöglichen es Ihnen, eine personalisierte
        Verwaltungsplattform durch Ziehen und Ablegen frei zu erstellen
      </p>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
        Branchenstandardisierte Vorlagen
      </h3>
      <p className="mt-3 text-lg text-gray-500">
        Branchenstandardisierte Vorlagen Professionelle Vorlage für die
        intelligente Abfallwirtschaft, umfassende Unterstützung, sicher und
        stabil und kurze Lieferzeiten
      </p>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
        Leistungsstarke Datenanalysefunktion
      </h3>
      <p className="mt-3 text-lg text-gray-500">
        Machen Sie Abfallmanagement-Operationen genauer
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
