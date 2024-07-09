/* eslint-disable react/no-unescaped-entities */
import {
  ExaminingReport,
  IExaminingReportProps,
  IInlinePalyerType,
  InlinePlayer,
  type IOxygenCycleProps,
  IUseCompostContrastProps,
  ReviewsScoreHeader,
  ScrollTriggeredAnimatedOxygenCycle,
  SvgFoodWaste,
  SvgMicrobe,
  SvgOxygen,
  SvgTemperature,
  SvgWaterDrop,
  SvgWood,
  UseCompostContrast,
} from 'ui'

import { ShortVideo, IShortVideoProps } from 'ui/src/how-it-works/ShortVideo'
import { ILinkComponent } from '../../contexts/link-context'
import { FC } from 'react'

export interface IPdpIntroProps {
  ReviewsComponent: FC<{}>
  PrefetchLink?: ILinkComponent
}

// page静态页面的内容 配置文件 De版
// 短视频工作过程section
const shortVideoProps: IShortVideoProps = {
  title: 'Komposthaufen in einer Box',
  description: (
    <>
      <ul className="list-disc ml-4 mt-4">
        <li className="mt-4">
          <a href="product/geme">GEME Komposter</a> zersetzt schnell
          Lebensmittelabfälle und Tierkot mithilfe spezieller Mikroben.
        </li>
        <li className="mt-4">
          Der Mischer vergrößert die Oberfläche der Lebensmittelabfälle, damit
          sich Mikroben anheften können.
        </li>
        <li className="mt-4">
          Er schafft eine <strong>ideale Umgebung für Mikroben</strong>, um zu
          gedeihen und Abfälle zu zersetzen.
        </li>
        <li className="mt-4">
          Ähnlich wie beim Kompostieren im Freien, jedoch in einem ordentlichen
          und praktischen Behälter.
        </li>
      </ul>
    </>
  ),
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
  videoSrcUrl:
    'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
}

// 图文section
const imageTextProps: IShortVideoProps = {
  title: 'Mikroben, nicht dehydrieren',
  description: (
    <>
      <p>
        Viele Lebensmitteldehydratoren werden irreführend als Komposter
        vermarktet. Tatsächlich sind es einfach Brotbackmaschinen, die
        Lebensmittel kochen und dehydrieren, aber nicht wirklich kompostieren.
      </p>
      <p>
        Diese Dehydratoren verwenden Elektrizität, um Lebensmittelabfälle zu
        erhitzen und zu trocknen.
      </p>
      <hr className="mt-4 mb-4" />
      <p>
        Im Gegensatz dazu nutzt der GEME Komposter{' '}
        <a href="/geme-kobold">GEME Kobold</a>, um den Kompostierungsprozess zu
        beschleunigen.
      </p>
      <p>
        Er verwendet Elektrizität, um{' '}
        <strong>die optimale Umgebung zu simulieren und zu erhalten</strong>,
        damit Mikroben gedeihen und organische Abfälle effektiv zersetzen
        können.
      </p>
    </>
  ),
  imageUrl: '/assets/images/how-it-works/geme-vs-dehydrators.png',
  isReverse: true,
}

// 工作原理图
const gemeComposterImageProps: IExaminingReportProps = {
  title: `Wie der GEME Komposter funktioniert`,
  description: `Verstehen Sie vollständig, wie die Maschine funktioniert und warum der GEME Komposter der beste Heimkomposter mit seinen Feature-Subsystemen ist.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/how-geme-composter-works.jpg',
    alt: 'GEME Komposter Arbeitsdarstellung',
  },
}

// Kobold工作过程大图section
const gemeKoboldImageProps: IExaminingReportProps = {
  title: `Wie der GEME Kobold funktioniert`,
  description: `GEME hat winzige Zersetzer namens Kobold, die Ihre Lebensmittelabfälle fressen. Diese Zersetzer vermehren sich schnell und zersetzen die Abfälle in nährstoffreichen Kompost. Während sie arbeiten, schrumpft die Menge der Lebensmittelabfälle. Kobold hält den Kompost auch gesund, indem er das Gleichgewicht von Säuregehalt und Feuchtigkeit aufrechterhält.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/how-geme-kobold-works.png',
    alt: 'Wie der GEME Kobold funktioniert',
  },
}

// 证书及测试报告
const examiningReportProps: IExaminingReportProps = {
  title: `Zertifikate und Testbericht`,
  description: `Sowohl GEME Kobold als auch GEME Komposter sind gut zertifiziert und haben alle von autoritativen Organisationen durchgeführten Tests bestanden.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/certificates-and-test-report.jpeg',
    alt: 'Zertifikate und Testbericht für GEME',
  },
  downloadHref: (
    <>
      Salzgehaltsabbau Testbericht herunterladen{' '}
      <a href="#" target="_blank">
        HIER
      </a>
    </>
  ),
}

// before vs after
const useCompostContrastProps: IUseCompostContrastProps = {
  title: 'Vor und nach der Anwendung von GEME Kompost',
  description:
    'Sehen Sie, wie GEME Kompost dazu beitragen kann, die Erde grüner zu machen, indem er Deponieabfälle reduziert, die Bodenqualität verbessert und das Pflanzenwachstum fördert.',
  beforeImage: {
    imageUrl: '/assets/images/how-it-works/used-geme-compost-before.png',
    alt: 'Vor der Kompostnutzung',
  },
  afterImage: {
    imageUrl: '/assets/images/how-it-works/used-geme-compost-after.png',
    alt: 'Nach der Kompostnutzung',
  },
}

// YouTube 视频播放器
const inlinePlayerProps: IInlinePalyerType = {
  title: 'Sehen heißt Glauben',
  description: (
    <>
      <strong>2 kg Abfall in 7 Stunden zersetzen</strong>! Dieses ungeschnittene
      7-stündige Video mag langweilig erscheinen, bietet jedoch einen
      detaillierten Einblick in die reale Leistung des GEME Komposters.
      Vergleichen Sie die ersten 3 Minuten mit den letzten 10 Minuten und Sie
      werden erstaunt sein.
    </>
  ),

  type: 'youtube',
  videoSrcUrlOrVidioId: 'asNRoqkC_BA',
  mixpanelFrom: 'Produktseite Inline-Player',
}

// 滚动圈配置项
const oxygenCycleProps: IOxygenCycleProps = {
  title: 'Wie natürliche Kompostierung funktioniert',
  progresses: [
    {
      minProgress: 12.5,
      content: (
        <>
          <SvgFoodWaste className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className="v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4">
            Nährstoffe (Lebensmittelabfälle)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Mikroorganismen benötigen C, N, Phosphor (P) und Kalium (K) als
            Hauptnährstoffe. Das C ältnis der Rohstoffe ist wichtig. Das
            optimale C ältnis der Rohstoffe liegt zwischen 25:1 und 30:1.
          </p>
          <p className="hidden xl:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Wenn das Verhältnis zu hoch ist, wird das Wachstum der
            Mikroorganismen eingeschränkt, was zu einer längeren
            Kompostierungszeit führt. Ein geringeres C ältnis führt zu einer
            Unterausnutzung von N und kann zu Geruchsproblemen führen.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Der GEME Komposter und der GEME Kobold kümmern sich automatisch um
            das C ältnis für Sie.
          </p>
        </>
      ),
    },
    {
      minProgress: 25,
      content: (
        <>
          <SvgOxygen className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Aerobe Kompostierung:
            <br />
            Natürlicher Nährstoffkreislauf
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Die aerobe Kompostierung zersetzt organisches Material mithilfe von
            Sauerstoff ( O<sub>2</sub> ), wobei aerobe Mikroben die Materialien
            in Wasserdampf, Wärme und nährstoffreichen Humus umwandeln. Der GEME
            Komposter vereinfacht diesen Prozess mit einem effizienten
            Belüftungssystem, das den Sauerstofffluss für eine effektive
            Zersetzung optimiert.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Zersetzt Bioabfall mit Sauerstoff ( O<sub>2</sub> ) zu wertvollen
            Nährstoffen. Der GEME Komposter vereinfacht dies mit einem
            effizienten Belüftungssystem für eine schnellere Zersetzung.
          </p>
        </>
      ),
    },
    {
      minProgress: 40,
      content: (
        <>
          <SvgWood className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Braune Materialien <br className="md:hidden" /> in der
            Kompostierung: Gewährleistung optimaler Bedingungen
          </h3>
          <p className="hidden lg:block  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Braune Materialien, die reich an Kohlenstoff sind, spielen eine
            entscheidende Rolle in der Kompostierung, indem sie das
            Kohlenstoff-Stickstoff-Verhältnis (C:N) ausgleichen, das für die
            mikrobielle Aktivität essentiell ist. Ihre Struktur verbessert die
            Porosität und fördert die aerobe Zersetzung. Der GEME Kobold
            Starter, der sorgfältig ausgewählte braune Materialien enthält,
            sorgt für ein ausgewogenes C:N-Verhältnis und optimale
            Kompostierungsbedingungen.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Braune Materialien, reich an Kohlenstoff, gleichen das
            C:N-Verhältnis für Mikroben aus. Ihre Struktur fördert den
            Luftstrom. Der GEME Kobold Starter bietet diese braunen Materialien
            für perfekte Bedingungen.
          </p>
        </>
      ),
    },
    {
      minProgress: 60,
      content: (
        <>
          <SvgWaterDrop className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Feuchtigkeit: Das Geheimnis
            <br className="hidden md:block" />
            schnellen Kompostierens
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Feuchtigkeit ist entscheidend für die Zersetzung. Der ideale
            Bereich? 40-60%. Dies fördert das mikrobielle Wachstum und
            beschleunigt die Zersetzung. Zu viel Feuchtigkeit (&gt;70%) führt zu
            Gerüchen, zu wenig (&lt;30%) hemmt Mikroben.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Der GEME Komposter vereinfacht die Feuchtigkeitskontrolle. Seine
            One-Touch-Smart-Steuerung hält automatisch 40-60% für effizienten,
            hochwertigen Kompost.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Richtige Feuchtigkeit (40-60%) füttert Mikroben, die Abfall abbauen.
            Zu nass (&gt;70%) erzeugt Gerüche und verlangsamt den Prozess. Zu
            trocken (&lt;30%) macht Mikroben träge. GEME regelt die Feuchtigkeit
            für perfekte Kompostierung.
          </p>
        </>
      ),
    },
    {
      minProgress: 78,
      content: (
        <>
          <SvgTemperature className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Kompostierung: Ein Temperaturtanz
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Kompostierung verwandelt Abfall durch temperaturgesteuerte
            mikrobielle Aktivität in nährstoffreichen Boden. Zunächst erhitzen
            Mikroben den Kompost auf 40-50°C. In der Hauptabbauphase steigen die
            Temperaturen auf 50-65°C für eine schnelle Zersetzung. Wenn der
            Kompost reift, kühlt er auf 30-40°C ab.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Der GEME Komposter optimiert diesen Prozess, indem er die Temperatur
            in jeder Phase reguliert und so für eine effiziente Kompostierung
            und hochwertigen Kompost sorgt.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Kompostierung verwandelt Abfall durch Temperaturschwankungen, die
            durch mikrobielle Aktivität verursacht werden, in nährstoffreichen
            Boden. Der GEME verbessert dies, indem er die Temperaturen
            durchgängig kontrolliert und so eine effiziente und hochwertige
            Kompostierung sicherstellt.
          </p>
        </>
      ),
    },
    {
      minProgress: 100,
      content: (
        <>
          <SvgMicrobe className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4">
            Mikroorganismen
            <br />
            (GEME Kobold)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Mikroorganismen zerlegen organische Abfälle in Kompost, einen
            nährstoffreichen Bodenverbesserer. Pilze zersetzen zähe Stoffe wie
            Cellulose, während andere Mikroben andere organische Materialien
            abbauen. GEME Kobold, ein einzigartiges hitzebeständiges
            Mikrobenteam, beschleunigt die Kompostierung.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Natur's Recycler: Mikroben zersetzen Abfälle in nährstoffreiche
            Bodenverbesserungsmittel. Pilze zerlegen zähe Materialien, während
            andere den Rest übernehmen. GEME Kobold, ein hitzeresistentes
            Mikrobenteam, beschleunigt die Kompostierung.
          </p>
        </>
      ),
    },
  ],
}

function HowItWorksDe({ ReviewsComponent }: IPdpIntroProps) {
  return (
    <>
      <div className="py-8 lg:pt-6 lg:pb-16">
        <ShortVideo {...shortVideoProps} />
        <ShortVideo {...imageTextProps} />
        <ExaminingReport {...gemeComposterImageProps} />
        <ExaminingReport {...gemeKoboldImageProps} />
        <ScrollTriggeredAnimatedOxygenCycle {...oxygenCycleProps} />
        <ExaminingReport {...examiningReportProps} />
        <UseCompostContrast {...useCompostContrastProps} />
        <InlinePlayer {...inlinePlayerProps} />
        <div className="my-4">
          <ReviewsScoreHeader locale="de" />
        </div>
        <ReviewsComponent />
      </div>
    </>
  )
}

export { HowItWorksDe }
