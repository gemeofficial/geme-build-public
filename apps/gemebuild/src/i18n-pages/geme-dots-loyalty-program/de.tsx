import { GemeDotsLoyaltyProgram } from './components'
import type { IGemeDotsProps } from './components'
import { ETabsId, SiteHelpTabs } from '../../components/tabs'
import s from './components/index.module.css'
import cn from 'clsx'
import { getWarrantyTabsTextInfo } from '../../helpers/warranty-tabs-text-info'

// Navbar内容 配置文件 De版
const tabs = getWarrantyTabsTextInfo('de', ETabsId.GemeDotsLoyaltyProgram)

// 静态页面的内容 配置文件 De版
const gemeDotsProps: IGemeDotsProps = {
  title: 'GEME Dots Treueprogramm',
  forward: {
    title: 'GEME Dots Statement',
    description: `
        <p class="mb-10">Willkommen im GEME Dots Treueprogramm.</p>
        <p class="mb-5">Sammeln Sie Ihre GEME Dots - Umweltfreundlichkeit zahlt sich immer aus!</p>
        <ul class="mx-2 my-5 list-inside list-disc">
            <li class="mb-5 ${cn(s.textIndented)}">Entdecken Sie unser GEME Dots Treueprogramm!</li>
            <li class="mb-5 ${cn(s.textIndented)}">Sammeln Sie bei jedem Einkauf Ihre GEME Dots und sparen Sie Geld.</li>
            <li class="mb-5 ${cn(s.textIndented)}">Genießen Sie außergewöhnliche Vorteile und werden Sie für Ihre Umweltfreundlichkeit belohnt.</li>
            <li class="mb-5 ${cn(s.textIndented)}">Umweltfreundlichkeit zahlt sich immer aus: Sobald Sie 1.000 GEME Dots gesammelt haben, können Sie diese bei Ihrem nächsten Einkauf sofort einlösen oder weiter sammeln. Pro Einkauf können Sie bis zu 40.000 GEME Dots einlösen und erhalten sofort 40 € zurück!</li>
        </ul>
        `,
    imgSrc: '/assets/images/geme-dots-loyalty-program/image.png',
  },
  subTitle: `<p class="mb-5">So funktioniert das GEME Dots Treueprogramm</p>`,
  enrollment: {
    title: 'Berechtigung und Anmeldung',
    questionsAndAnswers: [
      {
        question: 'Wie nehme ich am GEME Dots Treueprogramm teil?',
        answer:
          'Sie können sich ganz einfach unter <a href="https://www.geme.bio/signup" class="underline">https://www.geme.bio/signup</a> registrieren. Wenn Sie bereits Kunde sind, können Sie die Daten Ihres Kundenkontos verwenden.',
      },
      {
        question:
          'Ist die Teilnahme am GEME Dots Treueprogramm kostenpflichtig?',
        answer:
          'Die Mitgliedschaft im GEME Dots Treueprogramm ist völlig kostenlos.',
      },
      {
        question:
          'Muss ich Mitglied im GEME Dots Treueprogramm sein, um Sonderangebote zu erhalten?',
        answer:
          'Nein, alle unsere Kunden sind berechtigt, unsere Sonderangebote zu nutzen. Um jedoch GEME Dots bei Ihren Einkäufen zu verdienen und exklusive GEME Dots Aktionen zu erhalten, müssen Sie Mitglied im GEME Dots Treueprogramm sein.',
      },
      {
        question: 'Wie verdiene ich GEME Dots?',
        answer: `
            <p>Für jeden Einkauf, den Sie über Ihr Kundenkonto tätigen, erhalten Sie GEME Dots. Sie erhalten 10 GEME Dots für jeden Einkauf im Wert von 1 Euro oder zusätzliche 10 "GEME Dots" als Belohnung für die Empfehlung anderer zur Registrierung; und weitere 100 "GEME Dots" als Belohnung für die Empfehlung anderer zum Kauf.
            <br /> <br />
            Darüber hinaus veranstalten wir regelmäßig Aktionen, bei denen Sie noch mehr GEME Dots verdienen können! Weitere Informationen finden Sie unter <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a>.
            </p>`,
      },
      {
        question: 'Wann werden meine GEME Dots verfügbar sein?',
        answer: `
            <p>
            Sie können GEME Dots unter <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> verdienen.
            <br />
            Beim Einkauf auf der Website verdiente GEME Dots werden innerhalb von 14 Werktagen ab Versanddatum Ihrem Konto gutgeschrieben. Bis dahin werden diese GEME Dots als "GEME Dots ausstehend" betrachtet. Wenn die Bestellung nicht storniert oder geändert wird (ausgenommen Garantieansprüche), werden Ihre GEME Dots danach gutgeschrieben.
            </p>
            `,
      },
      {
        question:
          'Wie viele Treue-GEME Dots kann ich pro Bestellung verwenden?',
        answer: `<p>
            Der Wert der eingelösten GEME Dots darf den Wert Ihrer Bestellung nicht überschreiten. Darüber hinaus können Sie pro Einkauf bis zu 40.000 GEME Dots einlösen, was einer sofortigen Reduzierung von 40 € entspricht.
            </p>`,
      },
      {
        question:
          'Sind bestimmte Produkte in diesem Sortiment vom GEME Dots Treueprogramm ausgeschlossen?',
        answer: 'Ja, aus rechtlichen Gründen gilt der Rabatt nicht für Bücher.',
      },
      {
        question: 'Wie löse ich meine GEME Dots ein?',
        answer:
          'Beim Bestellen gesammelte GEME Dots können in einen Gutschein umgewandelt werden. GEME Dots werden in einen Betrag umgewandelt, der von Ihrem Rechnungsbetrag abgezogen wird. Sie können bei jeder Bestellung auf Warenkorb-Ebene entscheiden, ob Sie Ihre GEME Dots einlösen oder weiter sammeln möchten.',
      },
      {
        question: 'Verfallen meine GEME Dots?',
        answer:
          'Ja, Ihre GEME Dots verfallen, wenn Ihre GEME Dots drei Jahre lang nicht verwendet wurden oder wenn Sie innerhalb von 12 Monaten keine Bestellung über ein verknüpftes Konto aufgegeben haben.',
      },
    ],
  },
  conditions: {
    title: 'Bedingungen für die Teilnahme am GEME Dots Treueprogramm',
    items: [
      {
        label: 'Verantwortlichkeiten',
        description: `
          <p>
          Der Manager des GEME Dots Treueprogramms ist
          ROKH SRL<br /><br />  Brüssel, Belgien  
          Boulevard Louis Schmidt 29,<br /><br />
          1040 Etterbeek, <br /><br />
          Brüssel, <br /><br />
          Belgien <br /><br />
          (im Folgenden als "ROKH" bezeichnet)
          </p>
          `,
      },
      {
        label: 'Teilnahmeberechtigung',
        description: `<p class="mb-5">Nur natürliche Personen über 18 Jahren sind teilnahmeberechtigt.</p>`,
      },
      {
        label: 'Mitgliedschaftsberechtigung',
        description: `
            <ul class="m-5 ml-0 list-inside list-decimal">
                <li class="mb-5 ${cn(s.textIndented)}">Die Teilnahme am GEME Dots Treueprogramm ist kostenlos. Es ist nur über die Website <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> verfügbar, wenn Sie sich online auf der Website registrieren oder zum Zeitpunkt des Kaufs</li>
                <li class="${cn(s.textIndented)}">Wenn Sie berechtigt sind (siehe 2. Teilnahmeberechtigung), nehmen Sie unmittelbar nach der Überprüfung Ihrer Registrierung am GEME Dots Treueprogramm teil. </li>
            </ul>`,
      },
      {
        label: 'GEME Dots Treueprogramm',
        description: `
              <p class="mb-5">
              Als Mitglied des Green Medal Treueprogramms profitieren Sie von mehreren Vorteilen und das GEME Dots Treueprogramm behält sich das Recht vor, den Inhalt dieser Vorteile zu ändern, zu ergänzen oder zu beschränken.
              </p>
              <ul class="m-5 ml-0 list-inside list-decimal">
              <li class="mb-5">
                <span class="font-bold">GEME Dots verdienen</span>
                <p class="mt-2 ml-5">Als Mitglied des Programms können Sie während Ihrer Einkäufe auf der <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> "GEME Dots" verdienen oder zusätzliche 10 "GEME Dots" als Belohnung für die Empfehlung anderer zur Anmeldung verdienen; und zusätzliche 100 "GEME Dots" als Belohnung für die Empfehlung anderer zum Kauf. <p class="mt-2 ml-5">
              <li class="mb-5">
                 <span class="font-bold">Bestätigung der GEME Dots ausstehend</span>
                 <p class="mt-2 ml-5">Die während Ihrer Einkäufe auf der Website <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> verdienten GEME Dots werden Ihrem Konto innerhalb von 15 Tagen nach dem Versand Ihrer Bestellung gutgeschrieben. Bis dahin werden diese GEME Dots als "GEME Dots ausstehend" betrachtet. Wenn die Bestellung nicht storniert oder geändert wird (außer Garantieansprüche), werden Ihre GEME Dots danach gutgeschrieben. <p class="mt-2 ml-5">
              </li>
              <li class="mb-5">
                <span class="font-bold">Gültigkeit und Ablauf der GEME Dots</span>
                <p class="mt-2 ml-5">Die verdienten GEME Dots sind 12 Monate ab dem Datum der Gutschrift gültig und verfallen, wenn während dieses Zeitraums keine Bestellung auf dem zugehörigen Konto aufgegeben wird. Darüber hinaus verfallen alle ungenutzten GEME Dots nach 3 Jahren. <p class="mt-2 ml-5">
              </li>
              <li class="mb-5">
                <span class="mb-5 font-bold">Benachrichtigung über die Menge der GEME Dots</span>
                <p class="mt-2 ml-5">Sie werden regelmäßig über Ihre aktuelle Menge an GEME Dots benachrichtigt. Benachrichtigungen werden elektronisch (per E-Mail) oder per Post gesendet. <p class="mt-2 ml-5">
              </li>
              <li class="mb-5">
                Die Bedingungen des GEME Dots Treueprogramms gelten zum Zeitpunkt der Transaktion.</p>
              </li>
              <li class="mb-5">
                Sie werden informiert, wenn die Bedingungen und Vorteile des GEME Dots Treueprogramms geändert, ergänzt oder eingeschränkt werden.
              </li>
              <li class="mb-5">
                 <span class="font-bold">Physische Boni und Prämien können nicht gegen andere Produkte oder Geld eingetauscht werden.</span>
                 <p class="mt-2 ml-5">Alle Garantieansprüche für Sachprämien und Prämien müssen den geltenden Gesetzen entsprechen. Dies umfasst keine Barzahlungen für "Mehrwert" -Dienstleistungen.</p>
              </li>
              <li>
                 Die Kündigung eines Vertrags (z. B. Umtausch) bedeutet nicht, dass der Kauf als Teil der Planvorteile betrachtet wird.
              </li>
              </ul>
              `,
      },
      {
        label: 'Kündigung',
        description: `
              <p>
              Sie können Ihre Teilnahme am GEME Dots Treueprogramm jederzeit ohne Angabe von Gründen durch schriftliche Mitteilung (z. B. per E-Mail) kündigen. Das GEME Dots Treueprogramm kann ohne Angabe eines bestimmten Grundes, jedoch mit einer Frist von 4 Wochen, gekündigt werden. Das Recht beider Parteien, aus wichtigem Grund zu kündigen, bleibt unberührt.
              </p>`,
      },
      {
        label: 'Änderung der Teilnahmebedingungen',
        description: `
              <p>
              ROKH behält sich das Recht vor, die Teilnahmebedingungen jederzeit zu ändern oder zu löschen, indem Sie Ihnen mindestens 30 Tage im Voraus per E-Mail Bescheid geben. Wenn Sie der Änderung vor Ablauf dieser Frist nicht widersprechen, tritt die Änderung zum angegebenen Datum in Kraft. Wenn Sie die neuen Teilnahmebedingungen nicht akzeptieren, können Sie der Änderung schriftlich (z. B. per E-Mail) widersprechen oder Ihre Teilnahme am GEME Dots Treueprogramm kündigen. Wenn Sie der Änderung widersprechen, gelten die vorherigen Bedingungen. In diesem Fall behält sich FARMALINE das Recht vor, Ihre Teilnahme am Programm zu kündigen.
              </p>`,
      },
    ],
  },
}

function GemeDotsLoyaltyProgramPageDe() {
  return (
    <>
      <h1 className="sr-only">Details zum GEME Dots-Treueprogramm</h1>
      <SiteHelpTabs {...tabs} />
      <GemeDotsLoyaltyProgram {...gemeDotsProps} />
    </>
  )
}

export { GemeDotsLoyaltyProgramPageDe }
