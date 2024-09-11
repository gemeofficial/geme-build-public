/* eslint-disable react/no-unescaped-entities */
import {
  IInlinePalyerType,
  InlinePlayer,
  type IOxygenCycleProps,
  ReviewsScoreHeader,
  ScrollTriggeredAnimatedOxygenCycle,
  SvgFoodWaste,
  SvgMicrobe,
  SvgOxygen,
  SvgTemperature,
  SvgWaterDrop,
  SvgWood,
} from 'ui'

import {
  ShortVideo,
  IShortVideoProps,
  IUseCompostContrastProps,
  UseCompostContrast,
  IExaminingReportProps,
  ExaminingReport,
} from './components'
import { IHowItWorksProps } from './en'

// page静态页面的内容 配置文件 De版
// 短视频工作过程section
const shortVideoProps: IShortVideoProps = {
  title: 'Komposthaufen in einer Box',
  description: (
    <>
      <ul className="list-disc ml-4 mt-4">
        <li className="mt-4">
          <a href="product/geme">GEME Komposter</a> zersetzt Essensreste und
          Tierabfälle schnell mithilfe spezieller Mikroben.
        </li>

        <li className="mt-4">
          Der Mixer vergrößert die Oberfläche der Lebensmittelabfälle, an denen
          sich Mikroben anheften können.
        </li>

        <li className="mt-4">
          Er schafft <strong>eine ideale Umgebung für Mikroben</strong>, um zu
          gedeihen und Abfälle zu zersetzen.
        </li>

        <li className="mt-4">
          Ähnlich wie beim Outdoor-Kompostieren, aber in einem sauberen und
          praktischen Behälter.
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
  title: 'Mikroben, nicht Dehydration',
  description: (
    <>
      <p>
        Viele Lebensmittel-Dehydratoren werden irreführend als Komposter
        vermarktet. Sie sind jedoch einfach Brotmaschinen, die Lebensmittel
        kochen und dehydrieren, nicht wirklich kompostieren.
      </p>
      <p>
        Diese Dehydratoren verwenden Strom, um Lebensmittelreste zu erhitzen und
        zu trocknen.
      </p>
      <hr className="mt-4 mb-4" />
      <p>
        Im Gegensatz dazu nutzt der GEME Komposter{' '}
        <a href="/geme-kobold">GEME Kobold</a>, um den Kompostierungsprozess zu
        beschleunigen.
      </p>
      <p>
        Er verwendet Strom, um{' '}
        <strong>
          die optimale Umgebung zu simulieren und aufrechtzuerhalten
        </strong>
        , damit Mikroben gedeihen und organische Abfälle effektiv zersetzen.
      </p>
    </>
  ),
  imageUrl: '/assets/images/how-it-works/geme-vs-dehydrators.png',
  isReverse: true,
}

// 工作原理图
const gemeComposterImageProps: IExaminingReportProps = {
  title: `Wie der GEME Komposter funktioniert`,
  description: `Völliges Verständnis dafür, wie die Maschine funktioniert und warum der GEME Komposter mit seinen speziellen Untersystemen der beste Heimkomposter ist.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/how-geme-composter-works.jpg',
    alt: 'GEME Komposter Arbeitsdiagramm',
  },
}

// Kobold工作过程大图section
const gemeKoboldImageProps: IExaminingReportProps = {
  title: `Wie der GEME Kobold funktioniert`,
  description: `GEME hat winzige Zersetzer namens Kobold, die Ihre Essensreste fressen. Diese Zersetzer vermehren sich schnell und zersetzen die Reste zu nährstoffreichem Kompost. Während sie arbeiten, verringert sich die Menge an Lebensmittelabfällen. Kobold hält den Kompost auch gesund, indem es seine Säure und Feuchtigkeit ausgleicht.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/how-geme-kobold-works.png',
    alt: 'Wie der GEME Kobold funktioniert',
  },
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
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Nährstoffe (Lebensmittelabfälle)
          </h3>
          <p className="hidden md:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Mikroorganismen benötigen C, N, Phosphor (P) und Kalium (K) als
            Hauptnährstoffe. Das C:N-Verhältnis der Rohmaterialien ist wichtig.
            Das optimale C:N-Verhältnis der Rohmaterialien liegt zwischen 25:1
            und 30:1.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Ist das Verhältnis zu hoch, wird das Wachstum der Mikroorganismen
            eingeschränkt, was zu einer längeren Kompostierungszeit führt. Ein
            geringeres C:N-Verhältnis führt zu einer unzureichenden Nutzung von
            N und kann Geruchsprobleme verursachen.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Der GEME Komposter und der GEME Kobold kümmern sich automatisch um
            das C:N-Verhältnis für Sie.
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
            Bei der aeroben Kompostierung wird organisches Material unter
            Verwendung von Sauerstoff (O₂) abgebaut, wobei aerobe Mikroben das
            Material in Wasserdampf, Wärme und nährstoffreichen Humus umwandeln.
            Der GEME Komposter vereinfacht diesen Prozess mit einem effizienten
            Belüftungssystem, das den Sauerstofffluss für eine effektive
            Zersetzung optimiert.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Baut Bioabfälle mit Sauerstoff (O₂) zu wertvollen Nährstoffen ab.
            Der GEME Komposter vereinfacht dies mit einem effizienten Luftsystem
            für eine schnellere Zersetzung.
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
            Braune Materialien im Kompost: Sicherstellung optimaler Bedingungen
          </h3>
          <p className="hidden lg:block  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Braune Materialien, reich an Kohlenstoff, spielen eine entscheidende
            Rolle bei der Kompostierung, indem sie das
            Kohlenstoff-Stickstoff-Verhältnis (C:N) ausbalancieren, das für die
            mikrobielle Aktivität unerlässlich ist. Ihre Struktur erhöht die
            Porosität und fördert die aerobe Zersetzung. Der GEME Kobold
            Starter, der sorgfältig kuratierte braune Materialien enthält, sorgt
            für ein ausgewogenes C:N-Verhältnis und optimale
            Kompostierungsbedingungen.
          </p>
          <p className="lg:hidden  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Braune Materialien, reich an Kohlenstoff, balancieren das
            C:N-Verhältnis für Mikroben. Ihre Struktur fördert den Luftfluss.
            Der GEME Kobold Starter liefert diese braunen Materialien für
            perfekte Bedingungen.
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
            Feuchtigkeit: Das Geheimnis für
            <br />
            schnelles Kompostieren
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Feuchtigkeit ist in der Kompostierung entscheidend und beeinflusst,
            wie Mikroben Materialien abbauen. Der optimale Bereich? 40-60%. Dies
            fördert das mikrobielle Wachstum und beschleunigt die Zersetzung. Zu
            viel Feuchtigkeit (&gt;70%) erzeugt Gerüche und verlangsamt die
            Zersetzung. Trockenheit (&lt;30%) hemmt Mikroben und verzögert den
            Prozess.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Der GEME Komposter vereinfacht das Feuchtigkeitsmanagement. Seine
            intelligente Ein-Tasten-Steuerung passt sich automatisch an und
            sorgt für den perfekten Bereich von 40-60% für effizienten,
            hochwertigen Kompost.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Die richtige Feuchtigkeit (40-60%) fördert Mikroben, die Abfälle
            abbauen. Zu nass (über 70%) erzeugt Gerüche und verlangsamt den
            Abbau. Zu trocken (unter 30%) macht Mikroben träge. GEME verwaltet
            die Feuchtigkeit für perfektes Kompostieren.
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
            Kompostierung:
            <br />
            Ein Temperaturtanz
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Die Kompostierung verwandelt Abfall durch temperaturgesteuerte
            Veränderungen, die durch mikrobielle Aktivität angetrieben werden,
            in nährstoffreichen Boden. Anfangs erwärmen Mikroben den Kompost auf
            40-50°C. Während der Spitzenzersetzung steigen die Temperaturen auf
            50-65°C für einen schnellen Abbau. Mit der Reifung des Komposts
            kühlt er auf 30-40°C ab.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Der GEME Komposter optimiert diesen Prozess, indem er die Temperatur
            in jeder Phase regelt und so eine effiziente Kompostierung und
            hochwertigen Kompost gewährleistet.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Die Kompostierung verwandelt Abfall durch temperaturgesteuerte
            Veränderungen, die durch mikrobielle Aktivität angetrieben werden,
            in nährstoffreichen Boden. Anfangs erwärmen Mikroben den Kompost auf
            40-50°C. Während der Spitzenzersetzung steigen die Temperaturen auf
            50-65°C für einen schnellen Abbau. Mit der Reifung des Komposts
            kühlt er auf 30-40°C ab. Der GEME Komposter verbessert diesen
            Prozess, indem er die Temperatur in jeder Phase regelt und so eine
            effiziente Kompostierung und hochwertigen Kompost gewährleistet.
          </p>
        </>
      ),
    },
    {
      minProgress: 100,
      content: (
        <>
          <SvgMicrobe className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Mikroben
            <br />
            (GEME Kobold)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Kompostierung ist ein natürlicher Prozess, der von Mikroben
            angetrieben wird, die organische Abfälle in nährstoffreiche
            Bodenverbesserungsmittel umwandeln. Pilze bearbeiten harte
            Materialien wie Zellulose, während andere Mikroben andere organische
            Stoffe zersetzen. GEME Kobold, ein einzigartiges hitzebeständiges
            Mikrobenteam, beschleunigt die Kompostierung.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Natürliche Recycler: Mikroben zersetzen Abfälle in nährstoffreiche
            Bodenverbesserungsmittel. Pilze bearbeiten harte Materialien,
            während andere Mikroben andere organische Stoffe zersetzen. GEME
            Kobold, ein einzigartiges hitzebeständiges Mikrobenteam,
            beschleunigt die Kompostierung.
          </p>
        </>
      ),
    },
  ],
}

// 证书及测试报告
const examiningReportProps: IExaminingReportProps = {
  title: `Zertifikate und Testbericht`,
  description: `Sowohl GEME Kobold als auch GEME Komposter sind gut zertifiziert und haben alle von autorisierten Organisationen durchgeführten Tests bestanden.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/certificates-and-test-report.jpeg',
    alt: 'Zertifikate und Testbericht für GEME',
  },
  downloadHref: (
    <>
      Laden Sie den Bericht zum Salzgehalt-Test{' '}
      <a href="#" target="_blank">
        HIER
      </a>
      herunter
    </>
  ),
}

// before vs after
const useCompostContrastProps: IUseCompostContrastProps = {
  title: 'Vor und nach der Anwendung von GEME-Kompost',
  description:
    'Sehen Sie, wie GEME-Kompost dazu beitragen kann, die Erde grüner zu machen, indem er Deponieabfälle reduziert, die Bodengesundheit verbessert und das Pflanzenwachstum fördert.',
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
  title: 'Sehen heißt glauben',
  description: (
    <>
      <strong>Zerlegen Sie 2 kg Abfall in 7 Stunden</strong>! Dieses
      ungeschnittene 7-Stunden-Video mag langweilig erscheinen, bietet aber
      einen tiefen Einblick in die reale Leistung des GEME Komposters. Wenn Sie
      die ersten 3 Minuten mit den letzten 10 Minuten vergleichen, werden Sie
      erstaunt sein.
    </>
  ),

  type: 'youtube',
  videoSrcUrlOrVidioId: 'asNRoqkC_BA',
  mixpanelFrom: 'Produktseite Inline-Player',
}

function HowItWorksDe({ ReviewsComponent }: IHowItWorksProps) {
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
