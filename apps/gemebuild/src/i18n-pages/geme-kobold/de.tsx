/* eslint-disable react/no-unescaped-entities */
import { IGridWithOffsetIconsLiteProps } from '../../components/feature-sections'
import EnjoyYourLife, { IEnjoyYourLifeProps } from './components/EnjoyYourLife'
import Features from './components/Features'
import FeaturesWithIcons, { FeatureIcon } from './components/FeaturesWithIcons'
import HeroSection, { IHeroSectionProps } from './components/HeroSection'

// kobold页第一部分配置项 De
const heroSectionProps: IHeroSectionProps = {
  title: 'GEME KOBOLD',
  description: `Die magische Kraft, Bioabfälle in einen hochaktiven organischen Kompost umzuwandeln.`,
  highlights: [
    {
      id: 1,
      title: 'Schädlingsabwehr',
      description: `Hält die Pflanzen frei von Krankheiten und Schädlingen.`,
      iconPath: '/assets/images/geme-kobold/highlight-icon-1.svg',
    },
    {
      id: 2,
      title: 'Blüten- und Fruchtschub',
      description: `Blumen riecht besser, Früchte werden süßer und ernten mehr.`,
      iconPath: '/assets/images/geme-kobold/highlight-icon-2.svg',
    },
    {
      id: 3,
      title: 'Land- und Flussrevitalisierung',
      description: `Das Land wird fruchtbarer, die Flüsse werden klarer und die Umwelt wird besser.`,
      iconPath: '/assets/images/geme-kobold/highlight-icon-3.svg',
    },
  ],
}

// kobold页第二部分配置项 De
const featuresProps = {
  section1Title: 'Natürliche Mikrobiota',
  section1Description: (
    <>
      GEME-Kobold ist die weltweit einzige bekannte hochtemperaturbeständige
      zusammengesetzte Mikrobiota, eine bestehende Gemeinschaft mit
      jahrzehntelangem evolutionärem Erfolg. Es handelt sich nicht um eine
      künstlich entwickelte Mikrobe, sondern um einen Praktiker der natürlichen
      Kreislaufgesetze.
    </>
  ),
  section2Title: 'Einzigartig in der Welt',
  section2Description: (
    <>
      Im Kreislaufsystem des hocheffizienten Bioabfallverwerters wird der
      Bioabfall durch die Wirkung von GEME-Kobold schnell auf 75℃ erhitzt,
      fermentiert und getrocknet.
      <br />
      <br />
      Diese aerobe Hochtemperaturbelastung tötet potenzielle Krankheitserreger
      ab und neutralisiert die Schädlichkeit der Gärungsprodukte.
    </>
  ),
  section3Title: 'Komplexe Mikrobiota',
  section3Description: (
    <>
      GEME-Kobold trägt wesentlich zum Recycling organischer Stoffe bei. Es
      besteht aus 46 komplexen, hitzetoleranten aeroben Bacillus-Bakterien.
      <br />
      <br />
      Innerhalb von 6-8 Stunden kann es verschiedene Bioabfälle zersetzen und
      einen hochaktiven organischen Dünger erzeugen. Außerdem aktiviert es die
      Mikroorganismen in Boden und Wasser und verjüngt sie.
    </>
  ),
}

// kobold页第三部分配置项 De
const featuresWithIconsProps: IGridWithOffsetIconsLiteProps = {
  title: 'Ernährungsphysiologische Vorteile',
  description: 'Reich an den nützlichen Mikrobiota von GEME-Kobold',
  features: [
    {
      icon: FeatureIcon(1, 'Umweltfreundlich'),
      name: 'Umweltfreundlich',
      description:
        'Landwirtschaftliche Methoden, die aus dem natürlichen Kreislaufsystem abgeleitet sind.',
    },
    {
      icon: FeatureIcon(2, 'Sicherheit'),
      name: 'Sicherheit',
      description:
        'Durch die Verwendung der ursprünglichen Mikroorganismen im Boden wird das Ökosystem nicht zerstört. Keine Notwendigkeit für Pestizide.',
    },
    {
      icon: FeatureIcon(3, 'Starke Krankheitsresistenz'),
      name: 'Starke Krankheitsresistenz',
      description:
        'Böden, die reich an nützlichen Mikroorganismen sind, machen es Krankheitserregern schwer, einzudringen.',
    },
    {
      icon: FeatureIcon(4, 'Verbesserung der Erntequalität'),
      name: 'Verbesserung der Erntequalität',
      description:
        'Die Praxis hat gezeigt, dass der Ertrag um 20%-30% höher ist als bei chemischen Kulturen.',
    },
    {
      icon: FeatureIcon(5, 'Hitze- und Kältebeständig'),
      name: 'Hitze- und Kältebeständig',
      description:
        'Mikroben produzieren organische Inhaltsstoffe, die die Wurzeln aktivieren, und die Pflanzen sind auch bei kaltem oder heißem Wetter gesund.',
    },
    {
      icon: FeatureIcon(6, 'Höhere Erträge'),
      name: 'Höhere Erträge',
      description:
        'Es schmeckt besser und hat einen höheren Nährwert als chemische Pflanzen.',
    },
    {
      icon: FeatureIcon(7, 'Resistenz gegen Pflanzenerkrankungen'),
      name: 'Resistenz gegen Pflanzenerkrankungen',
      description:
        'Selbst bei kontinuierlicher Bepflanzung wird der Boden gesund, sodass Krankheiten und Ertragsrückgang leicht überwunden werden können. Nematodenbakterien (Wurzelknoten) verschwinden.',
    },
    {
      icon: FeatureIcon(8, 'Hygiene'),
      name: 'Hygiene',
      description:
        'GEME-Kobold ist ein bei 80°C aktiviertes Bakterium. Die hohen Temperaturen verhindern das Eindringen von Krankheitserregern und schaffen so einen sehr sicheren mikrobiellen Boden.',
    },
    {
      icon: FeatureIcon(9, 'Bodenpilz-Balance'),
      name: 'Bodenpilz-Balance',
      description:
        'GEME-Kobold enthält mehr als 46 identifizierte Bodenbakterien, die den Boden schneller in einen guten Zustand versetzen als ein einzelnes Bodenbakterium.',
    },
  ],
}

// kobold页第四部分配置项 De
const enjoyYourLifeProps: IEnjoyYourLifeProps = {
  title: 'Probieren Sie Kobold aus',
  description: (
    <>
      Mithilfe von Kobold, zahlen Sie nicht mehr zusätzliche Kosten für Dünger,
      sorgen Sie sich nicht mehr an das Umdrehen des Haufens, verschwenden Sie
      keine Lebensmittelabfälle mehr. Sie könnten einfach Obst, Gemüse und
      Blumen auf dem Balkon und im Garten ernten!
    </>
  ),
}

export function GemeKoboldPageDe() {
  return (
    <>
      <HeroSection {...heroSectionProps} />
      <Features {...featuresProps} />
      <FeaturesWithIcons {...featuresWithIconsProps} />
      <EnjoyYourLife {...enjoyYourLifeProps} />
    </>
  )
}
