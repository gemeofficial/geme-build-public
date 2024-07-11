/* eslint-disable react/no-unescaped-entities */
import { PdpUserStoryTeamSections } from 'ui'
import type { IPdpUserStoryTeamSectionsProps } from 'ui'

const pdpUserStoryTeamSectionsProps: IPdpUserStoryTeamSectionsProps = {
  title: 'Erleben Sie die Kundenberichte von GEME',
  description: (
    <>
      Wie sich das Leben unserer Kunden nach der Nutzung von GEME verändert hat
    </>
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
          Alex arbeitet bei Lutheran Retreats, Camps & Conferences, auch bekannt
          als{' '}
          <a
            className="text-emerald-600"
            href="https://lrcchome.com/"
            target="_blank"
          >
            LRCC
          </a>{' '}
          einer Campschule, in der Kinder ein umweltbewusstes Leben lernen und
          leben.
          <br />
          Mit GEME können mehr Kinder durch den einfachen täglichen Einsatz
          Kompostieren lernen.
        </>
      ),
      quote:
        'Freue mich zu helfen. Scheint bisher ein großartiges Produkt zu sein.',
    },
    {
      id: 2,
      name: 'Rainforest Inn',
      role: 'Bill, Chef',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-rainforest.jpg', // 'https://images.squarespace-cdn.com/content/v1/55390e7ee4b0a048151b9185/1549219762523-XL1GYVWNFYNJ44ZJXXMD/RFI-from-treehouse-suite-headerjpg.jpg',
        alt: 'Rainforest Inn',
      },
      bio: (
        <>
          Bill ist der Besitzer des{' '}
          <a
            className="text-emerald-600"
            href="https://www.rainforestinn.com/"
            target="_blank"
          >
            Rainforest Inn
          </a>{' '}
          in Puerto Rico. Er wollte GEME unbedingt haben und zahlte sogar
          mehrfach sowie zusätzliche Versandkosten, nur um den GEME-Komposter
          nutzen zu können. Lassen Sie uns seinen{' '}
          <a
            className="text-emerald-600"
            href="https://www.tiktok.com/@rainforestinn/video/7309861665711901998"
            target="_blank"
          >
            vlog
          </a>{' '}
          ansehen, um zu sehen, wie es läuft. Bill ist der Bill ist der Besitzer
          des
        </>
      ),
      quote:
        'Auf der Suche nach einem sauberen, einfachen Komposter, der in der Küche stehen kann, da unsere großen Kompostbehälter zu weit entfernt sind. Er funktioniert sehr effizient. Leise und sauber.',
    },
    {
      id: 3,
      name: 'LAE. Angeles Delgado',
      role: 'Finanz-CEO',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-angelita.jpeg',
        alt: 'Leonard Krasner',
      },
      bio: (
        <>
          Mexikanische Kundin Angelita (kontaktiert im April) kaufte eine
          Einheit trotz anfänglicher US-Mexiko-Versandprobleme. Ihre
          Speditionsfirma ermöglichte die Abholung in Texas. Begeistert vom
          Produkt, kaufte sie 3 weitere für ihre Töchter zu Weihnachten!
          Angelita wurde sogar zur Heldin, indem sie uns half, ein
          Erfüllungsproblem für eine andere Kickstarter-Kampagne in Mexiko zu
          lösen.
        </>
      ),
      quote:
        'Ich ging ins Internet, suchte mehr und fand Ihres, und die Werbung sagt, dass es ein Bio-Komposter ist, und sah Videos, und schließlich fand ich Ihres, ich liebte es. Ich möchte meine Komposter kaufen! Ich bin bereit für zwei weitere jetzt. Vielleicht sogar drei.',
      mobileQuote:
        'Ich möchte meine Komposter kaufen! Ich bin bereit für 2 weitere. Vielleicht drei.',
    },
    {
      id: 4,
      name: 'Vasil Borukov',
      role: 'Senior IT-Support-Ingenieur',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-vasil.png',
        alt: 'Vasil Software-Ingenieur',
      },
      bio: (
        <>
          Der bulgarische Zero-Waste-Verfechter Vasil liebt GEME für die
          Bekämpfung von Lebensmittelabfällen und die Reduzierung des
          CO2-Fußabdrucks. Seit der Crowdfunding-Kampagne im Juli 2022 verfolgt
          er GEME. Er kaufte eine Einheit für 499 € in Raten und fördert aktiv
          GEME in seinem Netzwerk. Ein echter Nachhaltigkeitschampion!
        </>
      ),
      quote: `Ich wollte mich immer mehr und mehr in alles um mich herum einbringen, um ein besser nachhaltiges Leben zu führen, und deshalb wollte ich unbedingt GEME haben. Es vereint alles, was man für ein einfacheres, sorgenfreies Leben braucht. Ich empfehle es total allen in meinem Umfeld!`,
      mobileQuote:
        'Es vereint alles, was Sie für ein leichteres, sorgenfreies Leben brauchen.',
    },
  ],
  locale:'de'
}

function UserStory(): JSX.Element {
  return (
    <>
      <PdpUserStoryTeamSections {...pdpUserStoryTeamSectionsProps} />
    </>
  )
}

export default UserStory
