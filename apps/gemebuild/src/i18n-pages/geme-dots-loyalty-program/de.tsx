import { GemeDotsLoyaltyProgram } from './components'
import type { IGemeDotsProps } from './components'
import { ISiteHelpTabsProps, SiteHelpTabs } from '../../components/tabs'
import s from './components/index.module.css'
import cn from 'clsx'

// Navbar内容 配置文件 De版
const siteHelpTabsProps: ISiteHelpTabsProps = {
  tabs: [
    {
      title: 'Bedingungen und Konditionen der Dienstleistungsvereinbarung',
      id: 'terms-and-conditions',
    },
    {
      title: 'Garantie',
      id: 'warranty',
    },
    {
      title: 'Garantieverlängerung',
      id: 'warranty-extend',
    },
    {
      title: 'Rückgaberecht',
      id: 'return-policy',
    },
    {
      title: 'Datenschutzrichtlinie',
      id: 'privacy-policy',
    },
    {
      title: 'GEME Dots-Treueprogramm',
      id: 'geme-dots-loyalty-program',
    },
  ],
  currentTabId: 'geme-dots-loyalty-program',
}

// 静态页面的内容 配置文件 De版
const gemeDotsProps: IGemeDotsProps = {
  title: 'GEME Dots Kundenbindungsprogramm',
  forward: {
    title: 'GEME Dots Erklärung',
    description: `
        <p class="mb-10">Willkommen beim GEME Dots-Treueprogramm.</p>
        <p class="mb-5">Sammeln Sie Ihre GEME Dots - Umweltfreundlichkeit zahlt sich immer aus!</p>
        <ul class="mx-2 my-5 list-inside list-disc">
            <li class="mb-5 ${cn(s.textIndented)}">Entdecken Sie unser GEME Dots Treueprogramm!</li>
            <li class="mb-5 ${cn(s.textIndented)}">Sammeln Sie Ihre GEME Dots bei jedem Einkauf und sparen Sie Geld.</li>
            <li class="mb-5 ${cn(s.textIndented)}">Genießen Sie außergewöhnliche Vorteile und werden Sie für Ihre Umweltfreundlichkeit belohnt.</li>
            <li class="mb-5 ${cn(s.textIndented)}">Umweltfreundlich zahlt sich immer aus: Sobald Sie 1.000 GEME Dots gesammelt haben, können Sie diese sofort bei Ihrem nächsten Einkauf einlösen oder weiter sammeln. Du kannst bis zu 40.000 GEME Dots pro Einkauf einlösen und erhältst sofort 40€ Cashback!</li>
        </ul>
        `,
    imgSrc: '/assets/images/geme-dots-loyalty-program/image.png',
  },
  subTitle: `<p class="mb-5">So funktioniert das GEME Dots Treueprogramm</p>`,
  enrollment: {
    title: 'Anspruchsberechtigung und Einschreibung',
    questionsAndAnswers: [
      {
        question: 'Wie kann ich am GEME Dots-Treueprogramm teilnehmen? ',
        answer:
          'Sie können sich ganz einfach anmelden unter <a href="https://www.geme.bio/signup" class="underline">https://www.geme.bio/signup</a>. Sie können die Daten aus Ihrem Kundenkonto verwenden, wenn Sie bereits Kunde sind.',
      },
      {
        question: 'Lohnt sich die Teilnahme am GEME Dots Treueprogramm?',
        answer:
          'Die Teilnahme am GEME Dots Treueprogramm ist völlig kostenlos.',
      },
      {
        question:
          'Muss ich Mitglied im GEME Dots Treueprogramm sein, um Sonderangebote zu erhalten?',
        answer:
          'Nein, alle unsere Kunden haben Anspruch auf unsere Sonderangebote. Um bei Ihren Einkäufen GEME Dots zu verdienen und exklusive GEME Dots Aktionen zu erhalten, müssen Sie Mitglied im GEME Dots Treueprogramm sein.',
      },
      {
        question: 'Wie kann ich GEME Dots verdienen? ',
        answer: `
            <p>Für jeden Einkauf, den Sie über Ihr Kundenkonto tätigen, erhalten Sie GEME Dots. Für jeden Einkauf im Wert von 1 Euro erhalten Sie 10 GEME Dots oder zusätzlich 10 "GEME Dots" als Belohnung für die Weiterempfehlung zur Registrierung und weitere 100 "GEME Dots" als Belohnung für die Weiterempfehlung zum Kauf. " als Belohnung.
            <br /> <br />
            Außerdem veranstalten wir regelmäßig Aktionen, bei denen Sie noch mehr GEME Dots verdienen können! Mehr Informationen finden Sie unter <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a>.
            </p>`,
      },
      {
        question: 'Wann werden meine GEME Dots verfügbar sein? ',
        answer: `
            <p>
            Sie können GEME Dots verdienen bei <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a>
            <br />
            GEME Dots, die Sie beim Einkaufen auf der Website verdient haben, werden Ihrem Konto innerhalb von 14 Werktagen nach dem Versanddatum gutgeschrieben. Bis dahin gelten diese GEME Dots als "GEME Dots in Erwartung einer Bestätigung". Wenn die Bestellung nicht storniert oder geändert wird (ausgenommen Garantieansprüche), werden Ihre GEME Dots erst danach gutgeschrieben.
            </p>
            `,
      },
      {
        question: 'Wie viele GEME Dots kann ich pro Bestellung verwenden? ',
        answer: `<p>
        Der Wert der Geme Dots, die Sie einlösen, darf den Wert Ihrer Bestellung nicht überschreiten. Darüber hinaus können Sie pro Einkauf bis zu 40.000 GEME Dots einlösen, was einer sofortigen Ermäßigung von 40 € entspricht.
            </p>`,
      },
      {
        question:
          'Sind bestimmte Produkte aus diesem Sortiment vom GEME Dots Treueprogramm ausgeschlossen? ',
        answer: 'Ja, aus rechtlichen Gründen gilt der Rabatt nicht für Bücher.',
      },
      {
        question: 'Wie löse ich meine GEME Dots ein? ',
        answer:
          'Die bei einer Bestellung gesammelten GEME Dots können in einen Gutschein umgewandelt werden. Die GEME Dots werden in einen Betrag umgewandelt, der von Ihrem Rechnungsbetrag abgezogen wird. Sie können bei jeder Bestellung auf Warenkorbebene entscheiden, ob Sie Ihre GEME Dots eintauschen oder weiter sammeln möchten.',
      },
      {
        question: 'Werden meine GEME Dots verfallen? ',
        answer:
          'Ja, Ihre GEME Dots verfallen, wenn Sie Ihre GEME Dots drei Jahre lang nicht benutzt haben oder wenn Sie 12 Monate lang keine Bestellung über ein verbundenes Konto aufgegeben haben.',
      },
    ],
  },
  conditions: {
    title: 'Bedingungen für die Teilnahme am GEME Dots Treueprogramm',
    items: [
      {
        label: 'Zuständigkeiten',
        description: `
          <p>
          Der Verwalter des Treueprogramms GEME Dots ist
          ROKH SRL<br /><br />
          Boulevard Louis Schmidt 29，<br /><br />
          1040 Etterbeek, <br /><br />
          Brüssel, <br /><br />
          Belgien <br /><br />
          (Nachstehend als "ROKH" bezeichnet)
          </p>
          `,
      },
      {
        label: 'Zuschussfähigkeit',
        description: `<p class="mb-5">Teilnahmeberechtigt sind nur natürliche Personen über 18 Jahren.</p>`,
      },
      {
        label: 'Berechtigung zur Mitgliedschaft',
        description: `
            <ul class="m-5 ml-0 list-inside list-decimal">
                <li class="mb-5 ${cn(s.textIndented)}">Die Teilnahme am GEME Dots Treueprogramm ist kostenlos. Es ist nur über die Website verfügbar <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> bei der Online-Registrierung auf der Website oder zum Zeitpunkt des Kaufs</li>
                <li class="${cn(s.textIndented)}">Wenn Sie teilnahmeberechtigt sind (siehe 2. Teilnahmeberechtigung), nehmen Sie unmittelbar nach der Verifizierung Ihrer Anmeldung am GEME Dots Treueprogramm teil. </li>
            </ul>`,
      },
      {
        label: 'GEME Dots Kundenbindungsprogramm',
        description: `
              <p class="mb-5">
              Als Mitglied des Treueprogramms der Grünen Medaille kommen Sie in den Genuss verschiedener Vorteile. Das GEME Dots Treueprogramm behält sich das Recht vor, den Inhalt dieser Vorteile zu ändern, zu ergänzen oder einzuschränken.
              </p>
              <ul class="m-5 ml-0 list-inside list-decimal">
              <li class="mb-5">
                <span class="font-bold">GEME-Punkte sammeln</span>
                <p class="mt-2 ml-5">Als Mitglied des Programms können Sie bei Ihren Einkäufen auf der <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> "GEME Dots" verdienen oder zusätzlich 10 "GEME Dots" als Belohnung für die Empfehlung anderer zur Anmeldung und weitere 100 "GEME Dots" als Belohnung für die Empfehlung anderer zum Kauf erhalten. <p class="mt-2 ml-5">
              <li class="mb-5">
                 <span class="font-bold">Bestätigung von GEME Dots abwarten</span>
                 <p class="mt-2 ml-5">Die GEME Dots, die Sie bei Ihren Einkäufen im <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> Website wird Ihrem Konto innerhalb von 15 Tagen nach Versand Ihrer Bestellung gutgeschrieben. Bis dahin gelten die GEME Dots als "GEME Dots in Erwartung einer Bestätigung". Wenn die Bestellung nicht storniert oder geändert wird (mit Ausnahme von Garantieansprüchen), werden Ihre GEME Dots erst danach gutgeschrieben. <p class="mt-2 ml-5">
              </li>
              <li class="mb-5">
                <span class="font-bold">Gültigkeit und Verfall von GEME Dots</span>
                <p class="mt-2 ml-5">Verdiente GEME Dots sind ab dem Datum der Gutschrift 12 Monate lang gültig und verfallen, wenn innerhalb dieses Zeitraums keine Bestellung auf dem zugehörigen Konto aufgegeben wird. Darüber hinaus verfallen alle ungenutzten GEME Dots nach 3 Jahren. <p class="mt-2 ml-5">
              </li>
              <li class="mb-5">
                <span class="mb-5 font-bold">GEME Dots Mengenmitteilung</span>
                <p class="mt-2 ml-5">Sie werden in regelmäßigen Abständen über Ihren aktuellen GEME Dots-Betrag informiert. Die Benachrichtigungen werden elektronisch (per E-Mail) oder per Post verschickt. <p class="mt-2 ml-5">
              </li>
              <li class="mb-5">
                Es gelten die Bedingungen des GEME Dots Treueprogramms zum Zeitpunkt der Transaktion.</p>
              </li>
              <li class="mb-5">
                Sie werden informiert, wenn die Bedingungen und Vorteile des GEME Dots Treueprogramms geändert, ergänzt oder eingeschränkt werden.
              </li>
              <li class="mb-5">
                 <span class="font-bold">Physische Boni und Prämien können nicht gegen andere Produkte oder Geld umgetauscht werden.</span>
                 <p class="mt-2 ml-5">Etwaige Gewährleistungsansprüche für Sachprämien und Boni müssen dem geltenden Recht entsprechen. Dies schließt keine Barzahlungen für "Mehrwert"-Dienstleistungen ein.</p>
              </li>
              <li>
                Die Stornierung eines Vertrages (z. B. Umtausch) bedeutet nicht, dass der Kauf als Teil der Leistungen des Plans betrachtet wird.
              </li>
              </ul>
              `,
      },
      {
        label: 'Terminierung',
        description: `
              <p>
                Sie können Ihre Teilnahme am GEME Dots Treueprogramm jederzeit ohne Einhaltung einer Frist durch schriftliche Mitteilung (z.B. per E-Mail) kündigen. Das GEME Dots Treueprogramm kann ohne Angabe von Gründen, jedoch mit einer Frist von 4 Wochen gekündigt werden. Das Recht beider Parteien, aus wichtigem Grund außerordentlich zu kündigen, bleibt unberührt.
              </p>`,
      },
      {
        label: 'Änderung der Teilnahmebedingungen',
        description: `
              <p>
                ROKH behält sich das Recht vor, die Teilnahmebedingungen jederzeit zu ändern oder zu streichen, indem Sie mindestens 30 Tage vorher per E-Mail informiert werden. Wenn Sie der Änderung nicht vor Ablauf dieser Frist widersprechen, tritt sie ab dem angegebenen Datum in Kraft. Wenn Sie die neuen Teilnahmebedingungen nicht akzeptieren, können Sie der Änderung schriftlich (z.B. per E-Mail) widersprechen oder Ihre Teilnahme am GEME Dots Treueprogramm kündigen. Wenn Sie der Änderung widersprechen, gelten die bisherigen Bedingungen weiter. FARMALINE behält sich in diesem Fall das Recht vor, Ihre Teilnahme an dem Programm zu beenden.
              </p>`,
      },
    ],
  },
}

function GemeDotsLoyaltyProgramPageDe() {
  return (
    <>
      <h1 className="sr-only">Details zum GEME Dots-Treueprogramm</h1>
      <SiteHelpTabs {...siteHelpTabsProps} />
      <GemeDotsLoyaltyProgram {...gemeDotsProps} />
    </>
  )
}

export { GemeDotsLoyaltyProgramPageDe }
