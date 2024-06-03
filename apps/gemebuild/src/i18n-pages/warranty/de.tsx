import { Warranty } from './components'
import type { IWarrantyProps } from './components'
import { SiteHelpTabs, ISiteHelpTabsProps } from '../../components/tabs'

// 静态页面的navBar内容 配置文件 De版
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
  currentTabId: 'warranty',
}

// 静态页面的内容 配置文件 De版
const warrantyProps: IWarrantyProps = {
  title: 'Garantie',
  forward: {
    title: 'Foreword',
    description: `
      ROKH SRL Elektrogeräte werden nach sehr hohen Qualitätsstandards hergestellt.
      Qualitätsstandards hergestellt. Dennoch sind Ausfälle immer möglich.
      In solchen Fällen können Reparaturen schnell und professionell durchgeführt werden
      während oder nach der Garantiezeit schnell und professionell durchgeführt werden, ohne
      ohne die Lebensdauer des Geräts zu beeinträchtigen.
      <br />
      <br />
      Die Garantiebedingungen der ROKH SRL werden in Übereinstimmung mit
      der EU-Richtlinie 99/44/EG und der geltenden nationalen Gesetzgebung festgelegt;
      Sie berühren in keiner Weise die Rechte, die sie dem Verbraucher einräumen
      Verbraucher.
    `,
    imgSrc: '/assets/images/warranty/1.png',
  },
  items: [
    {
      name: 'Beginn und Dauer der Garantiezeit',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="20378"
        >
          <path
            d="M7.517207 511.656169c0.056282-235.053434 163.305343-440.231443 392.496256-491.436662 126.33943-28.222785 246.580978-9.896394 359.885534 52.934606 13.846356 7.67582 20.205181 20.566408 17.502629 34.752502-2.462075 12.939707-13.148461 22.941502-26.885324 25.067932-8.172123 1.264806-15.406898-1.38044-22.401196-5.333472-40.857547-23.115464-84.361363-39.08518-130.335441-48.546669-199.99701-41.170678-408.016741 66.872037-489.523079 254.129908-29.605272 68.017116-41.895179 138.92098-36.425607 212.8262 13.375635 180.719968 139.439796 337.214185 312.887127 388.723326 236.71426 70.302159 483.512179-63.98222 551.381939-301.450656 33.527604-117.313869 19.227923-230.181473-39.624463-337.178369-6.91141-12.564154-8.253988-24.797779 0.195451-36.826743 13.514805-19.250436 41.345664-17.502629 53.357232 3.350304 17.764596 30.839379 31.845289 63.333444 42.636053 97.248881 20.950148 65.846684 28.197202 133.242653 21.272489 201.918779C993.245556 767.04986 850.854545 938.514023 653.739165 996.237703c-278.966573 81.693604-569.765635-89.433892-633.957633-373.134279C11.487635 586.443479 7.513114 549.258579 7.517207 511.656169L7.517207 511.656169 7.517207 511.656169z"
            fill="#000"
            p-id="20379"
          ></path>
          <path
            d="M359.77604 660.786675c-13.749142 13.766538-14.376429 33.217543-1.655709 46.066175 11.352559 11.469216 29.727045 12.463869 42.196031 2.217505 2.012843-1.655709 3.843538-3.538593 5.691629-5.385661 50.379411-50.364061 100.67798-100.81408 151.20577-151.032832 8.416693-8.363482 12.526291-17.646915 12.404518-29.618575-0.366344-35.510772-0.1361-71.024613-0.144286-106.536408-0.00921-36.817534 0.096191-73.635067-0.065492-110.449531-0.061398-13.553691-6.768147-23.385617-19.141966-28.566616-12.346189-5.173836-23.995507-2.968611-33.902134 6.178723-7.322779 6.764054-9.924024 15.515369-9.906627 25.356504 0.091074 52.284807 0.065492 104.569614 0.082888 156.855444 0.005117 13.941524-0.182149 27.888164 0.105401 41.824571 0.091074 4.519943-1.295506 7.649214-4.471848 10.813277C454.636524 565.859675 407.194002 613.31243 359.77604 660.786675z"
            fill="#000"
            p-id="20380"
          ></path>
        </svg>
      ),
      description: `
      <ul class="my-5 list-inside list-disc">
        <li class="mb-5">
        Die Garantiezeit für den GEME BIO-WASTE COMPOSTER beginnt mit dem Datum des Kaufs durch den Verbraucher. Die Garantiezeit beträgt 12 Monate, wenn und nur wenn der GEME BIO-WASTE COMPOSTER wie hier beschrieben kostenlos für den Hausgebrauch verwendet wird.
        <br /> <br />
        Die 2-Jahres-Garantiezeit wird während der Reparatur oder des Austauschs ausgesetzt. Am Ende dieser Periode hat der Verbraucher keinen Anspruch auf eine neue 2-Jahres-Garantie, aber die begonnene Garantiezeit wird ab dem Zeitpunkt des Austauschs oder der Fertigstellung der Reparatur wieder aufgenommen.
        </li>
        <li>
        Bei gewerblichen Geräten richtet sich die Garantiezeit nach den Bestimmungen des Kaufvertrags.
        </li>
      </ul>
      `,
    },
    {
      name: 'Inhalt und Geltungsbereich der Garantie',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="16134"
        >
          <path
            d="M112.1 460.3l326.4 217.6c22.3 14.9 47.9 22.3 73.5 22.3s51.2-7.5 73.5-22.3l326.4-217.6c36.9-24.6 59-65.8 59-110.2s-22.1-85.6-59-110.2L585.5 22.3c-44.7-29.7-102.3-29.7-146.9 0L112.1 239.9c-36.9 24.6-59 65.8-59 110.2s22.1 85.6 59 110.2z m49-146.9L487.5 95.8c7.4-5 16-7.5 24.5-7.5s17.1 2.5 24.5 7.5l326.4 217.6c12.5 8.3 19.7 21.7 19.7 36.7s-7.2 28.4-19.7 36.7L536.5 604.5c-14.8 9.9-34.1 9.9-49 0L161.1 386.9c-12.5-8.3-19.7-21.7-19.7-36.7s7.2-28.5 19.7-36.8z"
            p-id="16135"
          ></path>
          <path
            d="M911.9 563.7l-36.1-24.1c-20.4-13.5-47.7-8.1-61.2 12.2-13.5 20.3-8 47.7 12.2 61.2l36.1 24.1c12.5 8.3 19.7 21.7 19.7 36.8 0 15-7.2 28.4-19.7 36.7L536.5 928.2c-14.8 9.9-34.1 9.9-49 0L161.1 710.6c-12.5-8.3-19.6-21.7-19.6-36.7 0-15 7.2-28.5 19.7-36.8l38.1-25.4c20.3-13.5 25.8-40.9 12.2-61.2-13.5-20.3-41-25.7-61.2-12.2l-38.1 25.4c-36.9 24.7-59 65.8-59 110.2 0 44.4 22.1 85.6 59 110.1l326.4 217.6c22.3 14.9 47.9 22.3 73.5 22.3s51.2-7.5 73.5-22.3L911.9 784c36.9-24.6 59-65.7 59-110.1 0-44.4-22.1-85.6-59-110.2z"
            p-id="16136"
          ></path>
        </svg>
      ),
      description: `
      <p class="mb-5">Die ROKH SRL verpflichtet sich, defekte Teile kostenlos zu reparieren oder zu ersetzen, wenn der ursprüngliche Defekt während der Garantiezeit auftritt oder wenn der Fehler bei ordnungsgemäßem Gebrauch auftritt.</p>
      <p class="mb-5">Die ersetzten Teile bleiben Eigentum der ROKH SRL. Tritt derselbe Mangel während der Garantiezeit mehrmals auf oder stehen die Reparaturkosten in keinem Verhältnis zum Wert des Geräts, wird dem Verbraucher nach Rücksprache mit ihm ein gleichwertiges Gerät als Ersatz angeboten. In solchen Fällen behält sich die ROKH SRL das Recht vor, dem Verbraucher einen von der Nutzungsdauer abhängigen Betrag in Rechnung zu stellen.</p>
      <p class="mb-5">Alle Mängel müssen sofort gemeldet werden, um größere Schäden zu vermeiden.</p>
      <p class="mb-5">Bei schwer zu transportierenden Geräten und Einbaugeräten wird die Reparatur beim Verbraucher zu Hause durchgeführt. Leicht zu transportierende Geräte werden entweder direkt oder über einen Einzelhändler an den Kundendienst der ROKH SRL geliefert oder geschickt.</p>
      `,
    },
    {
      name: 'Einschränkung der Garantie',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="20878"
        >
          <path
            d="M491.52 842.565818a46.545455 46.545455 0 0 1 40.96 0l103.330909 50.501818 53.946182-101.655272a46.545455 46.545455 0 0 1 33.047273-24.017455l113.384727-19.874909-16.151273-113.943273a46.545455 46.545455 0 0 1 12.660364-38.865454L912.709818 512l-80.058182-82.711273a46.545455 46.545455 0 0 1-12.567272-38.865454l16.104727-113.943273-113.338182-19.874909a46.545455 46.545455 0 0 1-33.093818-24.017455L635.810909 130.932364l-103.330909 50.501818a46.545455 46.545455 0 0 1-40.96 0L388.189091 130.932364 334.196364 232.587636a46.545455 46.545455 0 0 1-33.047273 24.017455l-113.384727 19.874909 16.151272 113.943273a46.545455 46.545455 0 0 1-12.660363 38.865454L111.290182 512l80.058182 82.711273a46.545455 46.545455 0 0 1 12.567272 38.865454l-16.104727 113.943273 113.338182 19.874909a46.545455 46.545455 0 0 1 33.093818 24.017455l53.946182 101.655272 103.330909-50.501818zM388.654545 996.491636a46.545455 46.545455 0 0 1-61.579636-20.014545l-64.372364-121.297455-135.26109-23.738181a46.545455 46.545455 0 0 1-38.027637-52.363637l19.223273-136.005818-95.511273-98.676364a46.545455 46.545455 0 0 1 0-64.744727l95.511273-98.722909-19.223273-136.005818a46.545455 46.545455 0 0 1 38.027637-52.363637l135.26109-23.738181 64.372364-121.297455A46.545455 46.545455 0 0 1 388.654545 27.461818L512 87.831273 635.392 27.461818a46.545455 46.545455 0 0 1 61.579636 20.014546l64.372364 121.297454 135.261091 23.738182a46.545455 46.545455 0 0 1 38.027636 52.363636l-19.223272 136.005819 95.511272 98.676363a46.545455 46.545455 0 0 1 0 64.744727l-95.511272 98.72291 19.223272 136.005818a46.545455 46.545455 0 0 1-38.027636 52.363636l-135.261091 23.738182-64.372364 121.297454a46.545455 46.545455 0 0 1-61.579636 20.014546L512 936.168727 388.608 996.538182z"
            fill="#000"
          ></path>
          <path
            d="M614.632727 390.656a46.545455 46.545455 0 1 1 74.007273 56.506182l-142.103273 186.181818a46.545455 46.545455 0 0 1-70.330182 4.189091l-90.624-93.090909a46.545455 46.545455 0 0 1 66.653091-64.930909l53.061819 54.458182 109.381818-143.313455z"
            fill="#000"
          ></path>
        </svg>
      ),
      description: `
      <p class="mb-5">Die Garantie gilt nicht in den folgenden Fällen.</p>
      <ul class="my-5 list-inside list-disc">
        <li class="mb-5">Geringfügige Abweichungen von der erwarteten Qualität, die den Wert oder das ordnungsgemäße Funktionieren des Geräts nicht beeinträchtigen.</li>
        <li class="mb-5">Vor der Ausführung des Auftrags vorgenommene Konstruktions- oder Ausführungsänderungen, die den Wert und das gute Funktionieren des Geräts nicht beeinträchtigen.</li>
        <li class="mb-5">Defekte durch unsachgemäße Montage oder Installation.</li>
        <li class="mb-5">Folgen äußerer Faktoren, wie z. B.: Transportschäden; nicht bestimmungsgemäßer Gebrauch, der bestimmte empfindliche Komponenten wie Kunststoffteile oder Gummi beschädigen kann; chemische oder elektrochemische Reaktionen durch Wasser; Witterungsbedingungen; anormale Umweltbelastungen.</li>
        <li class="mb-5">Ungeeignete Einsatz- oder Betriebsbedingungen.</li>
        <li class="mb-5">Reparaturen oder Änderungen, die von nicht fachlich qualifizierten Dritten durchgeführt werden.</li>
        <li class="mb-5">Fehlende Identifikationsnummern der Ausrüstung.</li>
        <li class="mb-5">Außerhalb der Europäischen Union, Norwegens oder der Schweiz, außerhalb der Vereinigten Staaten erworbene Geräte, die aufgrund ihrer technischen Spezifikationen unbrauchbar oder in gewissem Umfang unbrauchbar sind.</li>
        <li class="mb-5">Unvermeidliche Abnutzung durch den Gebrauch von Teilen oder natürliche Prozesse, die laut Gebrauchsanweisung regelmäßig ausgetauscht werden müssen, z. B. UV-Lampen.</li>
        <li class="mb-5">Unzureichende Wartung (z. B. nicht ordnungsgemäße Entsorgung von nicht-biologischen Abfällen oder Überlastung des Betriebs) und/oder unsachgemäße Ausführung (z. B. Verwendung aggressiver Reinigungsmittel).</li>
        <li class="mb-5">Verwendung von nicht-originalem Zubehör oder Teilen.</li>
      </ul>
      `,
    },
  ],
  additionalProvisions: {
    title: 'Zusätzliche Bestimmungen',
    description: `
    Ansprüche auf Rückgängigmachung des Verkaufs, Wertminderung oder Schadenersatz
    sind nicht gedeckt, außer in den gesetzlich vorgesehenen Fällen in diesem
    Bereich vorgesehen sind. Im Falle eines Rechtsbehelfs kann die Entschädigung nicht höher sein als der
    Wert des Geräts nicht überschreiten.
    <br />
    <br />
    Die Garantiebedingungen gelten für Geräte, die in Belgien gekauft und verwendet werden.
    Belgien. Im Falle der Verwendung von in Belgien gekauften Geräten im Ausland
    Belgien gekauften Geräte im Ausland oder im Falle der Nutzung von in Belgien
    im Ausland gekaufte Geräte, muss der Verbraucher sicherstellen, dass die Geräte den
    den technischen Bedingungen des Einsatzortes (elektrische
    Indikatoren, elektrische Frequenz, Installationsnormen, klimatische
    Bedingungen). Mängel, die sich aus der Nichtübereinstimmung des
    Geräte mit diesen Anforderungen nicht übereinstimmen, sowie
    um die Konformität herzustellen, fallen nicht unter die Garantie.
    <br />
    <br />
    Wenn es mehr als 30 Minuten dauert, das Gerät zu erreichen und
    wieder in die ursprüngliche Position zu bringen, um die Reparatur abzuschließen, werden die
    werden die Kosten für die zusätzliche Zeit in Rechnung gestellt. Jede Beschädigung
    Schäden, die durch eine solche Handhabung entstehen, gehen ebenfalls zu Lasten des
    der Verbraucher.
    <br />
    <br />
    Für alle Streitigkeiten oder Meinungsverschiedenheiten sind die Gerichte der Region Wallonien
    zuständig.
    `,
  },
}

function WarrantyPageDe() {
  return (
    <>
      <h1 className="sr-only">GEME Produkt-Garantie-Informationen</h1>
      <SiteHelpTabs {...siteHelpTabsProps} />
      <Warranty {...warrantyProps} />
    </>
  )
}
export { WarrantyPageDe }
