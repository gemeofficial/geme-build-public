/* eslint-disable react/no-unescaped-entities */
import { PdpUserStoryTeamSections } from 'ui'
import type { IPdpUserStoryTeamSectionsProps } from 'ui'

const pdpUserStoryTeamSectionsProps: IPdpUserStoryTeamSectionsProps = {
  title: 'Lernen Sie die Kundengeschichten von GEME kennen',
  description: (
    <>Wie das Leben unserer Kunden durch die Nutzung von GEME verändert wird</>
  ),
  people: [
    {
      id: 1,
      name: 'Alex Egertson',
      role: 'Direktor für Nachhaltigkeit',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-llc.jpg',
        alt: 'Alex Egertson',
      },
      bio: (
        <>
          Alex arbeitet in lutherischen Exerzitien, Camps und Konferenzen, auch
          bekannt als{' '}
          <a className="text-emerald-600" href="https://lrcchome.com/">
            LRCC
          </a>{' '}
          ist eine Camp-Schule, in der Kinder lernen und ein grünes Leben
          führen.
          <br />
          Mit GEME können mehr Kinder das Kompostieren lernen, indem sie es ganz
          einfach selbst durchführen ihr tägliches Leben.
        </>
      ),
      quote:
        'Es freut mich, dass ich Ihnen helfen konnte. Scheint bisher ein tolles Produkt zu sein.',
    },
    {
      id: 2,
      name: 'Regenwald-Gasthaus',
      role: 'Bill, Boss',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-rainforest.jpg', // 'https://images.squarespace-cdn.com/content/v1/55390e7ee4b0a048151b9185/1549219762523-XL1GYVWNFYNJ44ZJXXMD/RFI-from-treehouse-suite-headerjpg.jpg',
        alt: 'Regenwald-Gasthaus',
      },
      bio: (
        <>
          Bill ist der Besitzer von{' '}
          <a className="text-emerald-600" href="https://www.rainforestinn.com/">
            Regenwald-Gasthaus
          </a>{' '}
          befindet sich in Puerto Rico. Er will GEME dringend und hat sogar ein
          Vielfaches bezahlt Zeit und zusätzliche Versandkosten, ich möchte
          einfach den GEME-Komposter verwenden. Lasst uns Überprüfen Sie seine{' '}
          <a
            className="text-emerald-600"
            href="https://www.tiktok.com/@rainforestinn/video/7309861665711901998"
          >
            vlog
          </a>{' '}
          um zu sehen, wie es weitergeht.
        </>
      ),
      quote:
        'Suchen Sie nach einem sauberen, einfachen Komposter, der in die Küche gestellt werden kann, da unsere großen Kompostbehälter zu weit entfernt sind. Es funktioniert sehr effizient. Ruhig und sauber.',
    },
    {
      id: 3,
      name: 'DAS E. Angeles Delgado',
      role: 'Finanz-CEO',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-angelita.jpeg',
        alt: 'Leonard Krasner',
      },
      bio: (
        <>
          Angelita lebt in Mexiko 🇲🇽, sie hat uns im April kontaktiert und eine
          Einheit gekauft. Zu diesem Zeitpunkt waren wir nicht in der Lage, von
          den USA nach Mexiko zu versenden. Allerdings leitete ihre Angelita
          eine Spedition. Sie verschiffte unsere Einheit problemlos von Texas
          nach Mexiko. Nach Monaten des täglichen Gebrauchs beschließt sie, drei
          weitere als Weihnachtsgeschenk für ihre Tochter zu kaufen. Übrigens
          ist sie auch eine großartige Helferin bei einer unserer
          Kickstarter-Lösungen für unseren Versand nach Mexiko.
        </>
      ),
      quote:
        'Ich habe im Internet nachgeschaut und bin auf Deinen gestoßen und in der Werbung steht, dass es sich um einen Biokomposter handelt. Ich habe mir Videos angeschaut und schließlich habe ich Deinen gefunden, der mir sehr gut gefallen hat. Ich möchte meine Komposter kaufen! Ich bin jetzt bereit für zwei weitere. Vielleicht die drei.',
    },
    {
      id: 4,
      name: 'Wassil Borukow',
      role: 'Leitender IT-Support-Ingenieur',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-vasil.png',
        alt: 'Vasil Software-Ingenieur',
      },
      bio: (
        <>
          Herr Vasil kommt aus Bulgarien🇧🇬 und ist ebenfalls ein
          Zero-Waste-Held. Er liebt die Einheit sehr. Dies löst nicht nur die
          tägliche Lebensmittelverschwendung, sondern kann auch den
          CO2-Fußabdruck reduzieren. Vasil begann GEME seit der
          Crowdfunding-Phase im Juli 2022 zu verfolgen und schaffte es, die
          Zahlung für 499 € zur Unterstützung von GEME zu tätigen. Vor der
          Umsetzung hat er viel dazu beigetragen, das Produkt und die Idee von
          GEME in seinen Kreisen bekannt zu machen. Er ist voller Begeisterung,
          unsere Erde gemeinsam besser zu machen.
        </>
      ),
      quote: `Ich wollte mich immer mehr und mehr in alles um mich herum einbringen, um ein besseres, nachhaltigeres Leben zu führen, und deshalb wollte ich unbedingt so viel GEME bekommen. Es vereint alles, was Sie für ein einfacheres, stressfreies Leben brauchen. Ich kann es meiner gesamten Umgebung nur wärmstens empfehlen!`,
    },
  ],
}

function UserStory(): JSX.Element {
  return (
    <>
      <PdpUserStoryTeamSections {...pdpUserStoryTeamSectionsProps} />
    </>
  )
}

export default UserStory
