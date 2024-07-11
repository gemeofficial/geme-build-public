import { ICompareSectionProps } from 'ui'
import CompareSection from 'ui/src/compare-section/CompareSection'

const compareSectionProps: ICompareSectionProps = {
  title: 'Vergleichen wir',
  description: 'Entdecken Sie, was GEME anders macht.',
  compareList: [
    {
      imgUrl: '/assets/images/compare-section/compare-section-geme.png',
      devicename: 'GEME',
      compareItems: [
        {
          title: 'Echter Kompost',
          desc: 'Hochaktive Mikroben beschleunigen den Kompostierungsprozess',
        },
        {
          title: 'Kein Filterwechsel erforderlich',
          desc: 'Keine Kosten, industrieller Filter, kein Kohlenstoffmaterial',
        },
        {
          title: '19L super großes Volumen',
          desc: 'Dauert Monate, um es zu füllen',
        },
        {
          title: 'Auch für Haustierkot & Suppe',
          desc: 'Unterstützt Bioabfall, einschließlich Katzenstreu und Flüssigabfall',
        },
        {
          title: 'Keine Reinigung erforderlich',
          desc: 'Einfach reduzieren, wenn voll, keine Entleerung und Reinigung notwendig',
        },
        {
          title: 'Kein Abonnement',
          desc: 'Hoher Preis, aber keine versteckten Kosten, kostenloser Test, kostenlose Rückgabe',
        },
        {
          title: 'Kontinuierliche Kompostierung',
          desc: 'Jederzeit hinzufügen, kein Warten auf abgeschlossenen Zyklus notwendig',
        },
      ],
    },
    {
      imgUrl: '/assets/images/compare-section/compare-section-lomi.png',
      devicename: 'Marke 1', // Lomi
      compareItems: [
        {
          title: 'Kein echter Kompost',
          desc: 'Trocknen und Kochen, immer noch trockener Abfall',
        },
        {
          title: 'Kohlenstofffilter regelmäßig wechseln',
          desc: 'Bis zu 240 $/Jahr für Filterwechsel',
        },
        {
          title: '3L kleines Volumen',
          desc: 'Begrenzte Menge an Lebensmittelabfällen',
        },
        {
          title: 'Begrenzte Lebensmittelreste',
          desc: 'Kann kein Fleisch und keine Suppe verarbeiten',
        },
        {
          title: 'Täglich leeren',
          desc: 'Nach jedem Gebrauch reinigen',
        },
        {
          title: 'Abonnement erforderlich',
          desc: 'Hohe versteckte Abonnementkosten',
        },
        {
          title: 'Zyklusbasierter manueller Start',
          desc: 'Deckel abdrehen, Knopf drücken, bis der Zyklus endet',
        },
      ],
    },
    {
      imgUrl: '/assets/images/compare-section/compare-section-mill.png',
      devicename: 'Marke 2', // Mill
      compareItems: [
        {
          title: 'Kein echter Kompost',
          desc: 'Trocknen und mahlen, immer noch trockener Abfall',
        },
        {
          title: 'Kohlenstoffgeruchsfilter',
          desc: '60 $+ für jeden Filterwechsel',
        },
        {
          title: '6,5L Volumen',
          desc: 'Hoch und groß, aber begrenzte Kapazität',
        },
        {
          title: 'Begrenzte Lebensmittelreste',
          desc: 'Kann kein Fleisch und keine Suppe verarbeiten',
        },
        {
          title: 'Wöchentlich leeren',
          desc: 'Laufen und leeren, wenn voll',
        },
        {
          title: 'Abonnement erforderlich',
          desc: 'Standardmäßig Abonnement, Schwierigkeiten bei der Kündigung und Rückgabe, keine Rückerstattung möglich',
        },
        {
          title: 'Kontinuierliches Zerkleinern',
          desc: 'Automatischer Neustart bei Zugabe von Abfall, kontinuierliches Zerkleinern',
        },
      ],
    },
    {
      imgUrl: '/assets/images/compare-section/compare-section-reencle.png',
      devicename: 'Marke 3', // Reencle
      compareItems: [
        {
          title: 'Echter Kompost',
          desc: 'Wenig Wartung, Mikroben beteiligt',
        },
        {
          title: 'Kohlenstofffilter regelmäßig wechseln',
          desc: 'Kosten 35 $+ für jeden Filterwechsel',
        },
        {
          title: '6L Volumen',
          desc: '14L Außenvolumen, 6L Innenvolumen',
        },
        {
          title: 'Nur Lebensmittelabfälle',
          desc: 'Kann keinen Haustierkot verarbeiten',
        },
        {
          title: 'Nach Bedarf reinigen',
          desc: 'Entleeren, reinigen und Kompoststarter zurücksetzen, wenn voll',
        },
        {
          title: 'Abonnement angeboten',
          desc: 'Sieht erschwinglich aus, aber Schwierigkeiten bei der Kündigung oder Rückerstattung',
        },
        {
          title: 'Kontinuierliche Kompostierung',
          desc: 'Jederzeit hinzufügen, kein Warten auf abgeschlossenen Zyklus notwendig',
        },
      ],
    },
  ],
  buttonText: 'Jetzt kaufen',
}

export default function Compare() {
  return <CompareSection locale="de" {...compareSectionProps} />
}
