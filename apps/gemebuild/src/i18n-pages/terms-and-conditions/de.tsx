import {
  TermsAndConditions,
  ITermsAndConditionsProps,
} from './components'
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
  currentTabId: 'terms-and-conditions',
}

// 静态页面的内容 配置文件 De版
const termsAndConditionsProps: ITermsAndConditionsProps = {
  title: 'Allgemeine Geschäftsbedingungen des ROKH Shops',
  forward: {
    description: `
        <p class="mb-5">Über den ROKH SRL Online Shop möchte ROKH SRL dem Endverbraucher Zubehör und Ersatzteile für ROKH SRL Geräte und bestimmte ROKH SRL Geräte anbieten. Wir danken Ihnen für Ihr Vertrauen in uns und schätzen Ihre Rechte. Die folgenden allgemeinen Verkaufsbedingungen zeigen Ihre rechtliche Situation deutlich auf. Indem Sie den Zugang zum ROKH SRL Online Shop ermöglichen, akzeptieren Sie die rechtliche Verpflichtung und stimmen zu, die folgenden Bedingungen einzuhalten.</p>
        <p class="mb-5"><b>Nummer der Organisation</b>: <a class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150">0719-978-144</a>.</p>
        <p class="mb-5"><b>Name des Unternehmens</b>: ROKH SRL</p>
        <p class="mb-5"><b>E-mail</b>: <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a></p>
        <p class="mb-5"><b>Arbeitszeit</b>: 9.00 bis 17.00 Uhr (CET) werktags</p>
        `,
    imgSrc: '/assets/images/terms-and-conditions/general-terms.png',
  },
  items: [
    {
      name: 'Auf unserer Website angebotene Produkte',
      svgSrc: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
          />
        </svg>
      ),
      description: `
          <p class="mb-5">Alle im Online-Shop von ROKH SRL verkauften Produkte werden so vollständig und genau wie möglich beschrieben. Angebote und Preise gelten ab dem Datum ihrer Veröffentlichung auf der Website. Die genannten Preise verstehen sich inklusive Mehrwertsteuer und können Recyclingbeiträge enthalten. Wir bieten unsere Produkte im Online-Shop an, solange der Vorrat reicht. In der Regel sind alle angebotenen Produkte immer auf Lager und werden sofort versendet. Es kann jedoch vorkommen, dass ein Artikel nicht mehr verfügbar ist. Wir sorgen dann dafür, dass das Produkt so schnell wie möglich geliefert wird. Sie können Ihre Bestellung jederzeit nach eigenem Ermessen stornieren. Weitere Informationen zu Garantien finden Sie unter <a href="#warranty">„Garantien“ weiter unten.</a> </p>
          `,
    },
    {
      name: 'Vereinbarung zwischen Ihnen und ROKH SRL',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M196.143311 347.799764l164.601373 71.178972c4.448686 2.224343 8.897372 2.224343 13.346057 2.224343 13.346057 0 26.692115-8.897372 33.365143-22.243429 6.673029-17.794743 0-37.813829-17.794743-46.7112L222.835426 281.069478c-17.794743-6.673029-37.813829 0-46.7112 17.794743C169.451197 318.883307 178.348568 338.902393 196.143311 347.799764zM196.143311 512.401137l164.601373 71.178972c4.448686 2.224343 8.897372 2.224343 13.346057 2.224343 13.346057 0 26.692115-8.897372 33.365143-22.243429 6.673029-17.794743 0-37.813829-17.794743-46.7112L222.835426 445.670851c-17.794743-6.673029-37.813829 0-46.7112 17.794743C169.451197 483.48468 178.348568 503.503766 196.143311 512.401137zM196.143311 677.00251l164.601373 71.178972c4.448686 2.224343 8.897372 2.224343 13.346057 2.224343 13.346057 0 26.692115-8.897372 33.365143-22.243429 6.673029-17.794743 0-37.813829-17.794743-46.7112L222.835426 612.496567c-17.794743-6.673029-37.813829 0-46.7112 17.794743C169.451197 648.086053 178.348568 668.105139 196.143311 677.00251zM965.765947 9.699647C956.868576 0.802275 943.522518-1.422067 932.400804 0.802275L512 85.327305 91.599196 5.250961C78.253139 3.026618 67.131424 5.250961 58.234053 14.148333 47.112338 20.821361 42.663653 31.943076 42.663653 45.289133l0 856.372008c0 20.019086 13.346057 37.813829 33.365143 40.038172L503.102628 1023.999999c2.224343 0 4.448686 0 8.897372 0 0 0 0 0 0 0 0 0 0 0 0 0 2.224343 0 4.448686 0 8.897372 0l429.298176-86.749372c20.019086-4.448686 33.365143-20.019086 33.365143-40.038172L983.56069 40.840447C981.336347 27.49439 976.887662 16.372676 965.765947 9.699647zM469.737485 935.026284 124.964339 868.295998 124.964339 94.224676l344.773146 66.730286L469.737485 935.026284zM899.035661 863.847312l-344.773146 68.954629L554.262515 160.954963l344.773146-68.954629L899.035661 863.847312zM638.787544 418.978737c4.448686 0 8.897372 0 15.5704-2.224343l164.601373-73.403315c17.794743-8.897372 26.692115-28.916457 17.794743-46.7112-8.897372-17.794743-28.916457-26.692115-46.7112-17.794743L623.217144 352.24845c-17.794743 8.897372-26.692115 28.916457-17.794743 46.7112C612.09543 412.305708 625.441487 418.978737 638.787544 418.978737zM638.787544 585.804452c4.448686 0 8.897372 0 15.5704-2.224343l164.601373-73.403315c17.794743-8.897372 26.692115-28.916457 17.794743-46.7112-8.897372-17.794743-28.916457-26.692115-46.7112-17.794743L623.217144 516.849823c-17.794743 8.897372-26.692115 28.916457-17.794743 46.7112C612.09543 576.907081 625.441487 585.804452 638.787544 585.804452zM638.787544 750.405825c4.448686 0 8.897372 0 15.5704-2.224343l164.601373-73.403315c17.794743-8.897372 26.692115-28.916457 17.794743-46.7112-8.897372-17.794743-28.916457-26.692115-46.7112-17.794743L623.217144 681.451196c-17.794743 8.897372-26.692115 28.916457-17.794743 46.7112C612.09543 741.508454 625.441487 750.405825 638.787544 750.405825z"
            fill="#000"
            p-id="23326"
          ></path>
        </svg>
      ),
      description: `
          <p class="mb-5">Ein verbindlicher Vertrag zwischen Ihnen und ROKH SRL kommt zustande, wenn ROKH SRL Ihre Bestellung im Online-Shop erhält. Unsere Bestellbestätigung ist eine Zusammenfassung Ihrer Bestellung und enthält einen Link zu diesen Allgemeinen Geschäftsbedingungen. ROKH SRL kann jedoch beschließen, die Gültigkeit der Vereinbarung von anderen Bedingungen abhängig zu machen, wie z. B. Großbestellungen, Bestellungen von Minderjährigen, unvollständige oder ungenaue Bestellungen oder nicht bezahlte frühere Bestellungen. Gemäß dem Trade Practices Act liegt die Verantwortung für Verluste/Schäden beim Verkäufer. Er hat uns jedoch innerhalb einer akzeptablen Frist (10 Tage nach Auftragserteilung) darauf aufmerksam gemacht. ROKH SRL behält sich das Recht vor, Ihre Anfrage abzulehnen, wenn sie nicht innerhalb dieser Frist geliefert wird.</p>
          `,
    },
    {
      name: 'Ihr Recht, die Ware innerhalb von 30 Tagen nach Erhalt zurückzugeben',
      svgSrc: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
          />
        </svg>
      ),
      description: `
          <p class="mb-5">Das belgische Gesetz über Handelspraktiken sowie Verbraucherinformation und -schutz ermöglicht es dem Käufer, den Verkäufer innerhalb von 30 Tagen nach Erhalt des Produkts darüber zu informieren, dass er den Kauf abbrechen wird. Die Nachverfolgung der Ware muss innerhalb einer angemessenen Frist (7 Tage) nach Erhalt der Ware und ohne Öffnung zur Nutzung erfolgen. Wir empfehlen Ihnen, die Ware möglichst in der Originalverpackung und im Originalzustand aufzubewahren, damit Sie nicht für eine etwaige Wertminderung der Ware durch deren Entsorgung verantwortlich gemacht werden müssen.</p>
          <p class="mb-5">Sie können ein Widerrufsformular an <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 Transition Easy-In-Out Duration-150 Underline">info@ senden. geme.bio</a>, um uns mitzuteilen, dass Sie Ihren Kauf abbrechen. Anschließend müssen Sie die Ware ausreichend frankiert und mit einer Rechnungskopie auf dem normalen Postweg an die von uns angegebene Adresse zurücksenden.</p>
          <p class="mb-5">Damit wir eine Rückerstattung veranlassen können, teilen Sie uns bitte auch Ihre Kontonummer mit. Nach Erhalt Ihrer Rücksendung erstellen wir eine Gutschrift und erstatten Ihnen den gezahlten Betrag innerhalb von 14 Tagen. Von der Widerrufsbelehrung gibt es keine Ausnahmen.</p>
          <p class="mb-5">Wenn Sie ein Produkt erhalten, das nicht Ihrer Bestellung entspricht oder beschädigt ist, müssen Sie uns auf die gleiche Weise informieren und das Produkt auf die gleiche Weise zurücksenden. Allerdings erstatten wir Ihnen in diesem Fall auch die Versandkosten für den postalischen Versand.</p>
          `,
    },
    {
      name: 'Lieferungen',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2848"
          width="200"
          height="200"
        >
          <path
            d="M937.6 160H432c-51.2 0-89.6 38.4-89.6 89.6v-4.8H132.8c-20.8 0-38.4 12.8-46.4 30.4L4.8 438.4C0 448 0 456 0 465.6v252.8c0 25.6 17.6 43.2 43.2 43.2h33.6c12.8 59.2 68.8 102.4 128 102.4 64 0 115.2-43.2 128-102.4H662.4c12.8 59.2 68.8 102.4 128 102.4s115.2-43.2 128-102.4h46.4c30.4 0 56-25.6 56-56V251.2c6.4-51.2-32-91.2-83.2-91.2z m-784 172.8h188.8v86.4H112l41.6-86.4z m180.8 342.4c-20.8-46.4-68.8-81.6-124.8-81.6s-102.4 33.6-124.8 81.6V504h257.6v171.2h-8z m-124.8 102.4c-25.6 0-46.4-20.8-46.4-46.4 0-25.6 20.8-46.4 46.4-46.4s46.4 20.8 46.4 46.4c1.6 25.6-20.8 46.4-46.4 46.4z m587.2 0c-25.6 0-46.4-20.8-46.4-46.4 0-25.6 20.8-46.4 46.4-46.4s46.4 20.8 46.4 46.4c0 25.6-20.8 46.4-46.4 46.4z m145.6-102.4h-25.6c-20.8-46.4-68.8-81.6-124.8-81.6s-102.4 33.6-124.8 81.6h-240V251.2s0-4.8 4.8-4.8h510.4s4.8 0 4.8 4.8v424h-4.8z"
            p-id="2849"
            fill="#000000"
          ></path>
        </svg>
      ),
      description: `
          <p class="mb-5">Wir liefern Zubehör und Kleingeräte per Kurierdienst. Die endgültige Lieferzeit beträgt grundsätzlich 30 Tage. Bei Bestellungen bis 50 Euro fällt eine Versandkostenpauschale von 5 Euro an. Ab 50 € erfolgt die Lieferung versandkostenfrei. ROKH SRL bietet Lieferungen nur in Belgien an. Für Lieferungen in andere Länder/Regionen besuchen Sie bitte unsere internationale Website www.geme.bio. Der Lieferort ist derjenige, den Sie in Ihrer Bestellung angeben. Wenn Sie zum Zeitpunkt der Zustellung nicht anwesend sind, wird Ihr Paket erneut angezeigt. Das Paket wird dann vom Versanddienstleister an uns zurückgesendet.</p>
          <p class="mb-5">Bei der Anlieferung der Neugeräte nehmen wir Ihre Altgeräte auf Wunsch kostenfrei mit. Dies sollte im E-Mail-Kontakt vereinbart werden.</p>
          `,
    },
    {
      name: 'Zahlung',
      svgSrc: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
          />
        </svg>
      ),
      description: `<p>Sie können online mit Visa, Mastercard oder Bancontact bezahlen. Die Bestellung bei ROKH SRL ist 100 % sicher. Für alle Online-Zahlungen arbeitet ROKH SRL mit Strips zusammen, einem der weltweiten Marktführer für Online-Zahlungen. Sie können bei der Bestellung Ihre Zahlungsdaten eingeben und Ihre Daten werden sicher über Strips versendet.</p>`,
    },
    {
      name: 'Haftungsausschluss und Haftungsbeschränkung',
      svgSrc: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
          />
        </svg>
      ),
      description: `<p>ROKH SRL ist nicht verantwortlich für technische Mängel der Website und ROKH SRL übernimmt keine Garantie für die Ergebnisse, die durch die Nutzung der Website erzielt werden können. Diese Website wird von ROKH SRL „wie besehen“ und „wie verfügbar“ bereitgestellt. ROKH SRL gibt keine Zusicherungen oder Gewährleistungen, weder ausdrücklich noch stillschweigend, hinsichtlich des Betriebs der Website, der Informationen, Inhalte, Materialien oder Produkte, die auf der Website erscheinen. Alle Angebote gelten solange der Vorrat reicht. ROKH SRL haftet nicht für Schäden, die aus der Nutzung dieser Website entstehen.</p>`,
    },
    {
      name: 'Anti-Fälschungen',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="25937"
        >
          <path
            d="M877.784064 200.920064L544.934912 62.90432a72.94976 72.94976 0 0 0-54.157312-0.684032L147.142656 194.235392C118.951936 205.0816 100.352 232.1664 100.352 262.370304v263.498752c0 102.391808 75.122688 288.413696 369.232896 434.177024a72.349696 72.349696 0 0 0 61.146112 1.44384c298.288128-130.952192 392.17152-342.572032 392.17152-448.381952V268.295168c-0.059392-29.507584-17.856512-56.08448-45.11744-67.375104z m-327.9872 298.668032v210.783232c0 21.116928-17.09056 38.207488-38.207488 38.207488-21.115904 0-38.206464-17.09056-38.206464-38.207488V499.58912c-40.030208-15.343616-68.43904-54.08256-68.43904-99.505152 0-58.943488 47.777792-106.72128 106.72128-106.72128 58.944512 0 106.72128 47.777792 106.72128 106.72128-0.075776 45.422592-28.55936 84.161536-68.589568 99.505152z"
            fill="#000"
            p-id="25938"
          ></path>
        </svg>
      ),
      description: `<p>Der Unternehmer wird nur Produkte anbieten, die er beim Originalhersteller und seinem Großhändler erworben hat oder die er zu irgendeinem Zeitpunkt selbst hergestellt hat. Bei Zweifeln an der Echtheit der Produkte oder bei Verdacht auf einen Verstoß können Verbraucher jederzeit Beschwerden über <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent" einreichen -9 Übergangsdauer – 150 Unterstreichen Sie „info@geme.bio“, um eine Beschwerde einzureichen.</p>`,
    },
    {
      name: 'Entschädigungsklausel',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="24821"
        >
          <path
            d="M515.916 178.078c13.445 13.438 13.445 35.317 0 48.754L445.707 297h71.577C536.378 297 552 313.104 552 332.787s-15.448 35.787-34.716 35.787H443v14.851h74.284c19.094 0 34.716 16.105 34.716 35.788C552 438.896 536.552 455 517.284 455H443v51.578C443 526.06 428.092 542 409.5 542c-18.425 0-33.5-15.94-33.5-35.422V455h-82.284C274.622 455 259 438.896 259 419.213s15.622-35.787 34.716-35.787l82.284-0.001v-14.851h-82.284c-19.094 0-34.716-16.104-34.716-35.787S274.622 297 293.716 297h77.842l-69.322-69.282c-13.648-13.64-13.648-35.848 0-49.488s35.869-13.64 49.517 0l57.614 57.581 57.767-57.733c13.445-13.437 35.337-13.437 48.782 0zM791 246c19.683 0 35.677 15.797 36 35.405V528c0 19.683-15.797 35.677-35.405 35.995L791 564H620.999L621 724c0 19.683-15.797 35.677-35.405 36H292.15c-19.881 0-36-16.118-36-36 0-19.683 15.798-35.677 35.405-35.995l0.596-0.005H549V528c0-19.683 15.797-35.677 35.405-35.995L585 492h170V282c0-19.683 15.797-35.677 35.405-36H791z"
            fill="#000"
            p-id="24822"
          ></path>
          <path
            d="M153 156.42c-19.683 0-35.677 15.797-36 35.405V896.42c0 19.684 15.797 35.677 35.405 36H870.5c19.882 0 36-16.118 36-36 0-19.683-15.797-35.677-35.405-35.995l-0.595-0.005H189v-668c0-19.683-15.797-35.677-35.405-36H153z"
            fill="#000"
            p-id="24823"
          ></path>
        </svg>
      ),
      description: `<p>Bei Nichtzahlung am Fälligkeitstag erhöht sich der vereinbarte Preis um eine Entschädigung in Höhe von 15 %. Darüber hinaus werden Verzugszinsen in Höhe von 1 % pro Monat berechnet.</p>`,
    },
    {
      name: 'Beschwerden',
      svgSrc: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      ),
      description: `
          <p class="md-5">Wenn Sie Beschwerden haben, können Sie jederzeit eine E-Mail an senden <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a>.</p>
          <p class="md-5">Zur außergerichtlichen Beilegung verbraucherrechtlicher Streitigkeiten hat die EU eine Online-Plattform („ODR-Plattform“) geschaffen, auf der Sie sich selbst informieren können. Sie finden es unter <a href="http://ec.europa.eu/consumers/odr/" target="_blank" class="underline">http://ec.europa.eu/consumers/odr/</a></p>
          `,
    },
    {
      name: 'Anwendbare Gesetzgebung und Gerichtsstand',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="26537"
          width="200"
          height="200"
        >
          <path
            d="M1023.48146 958.64c-22.92-171.49-134.8-315.57-288.82-387.29L512.00146 881.47 289.34146 571.35C135.32146 643.07 23.44146 787.15 0.52146 958.64c-4.6 34.47 21.8 65.36 56.82 65.36h909.3c35.04 0 61.44-30.88 56.84-65.36zM512.00146 483.56c126.61 0 229.25-130.33 229.25-256C741.25146 101.88 638.61146 0 512.00146 0S282.75146 101.88 282.75146 227.56c0 125.67 102.64 256 229.25 256z"
            p-id="26538"
          ></path>
          <path
            d="M447.52146 669.57L512.00146 769.88l64.48-100.31L538.65146 540h-53.3z"
            p-id="26539"
          ></path>
        </svg>
      ),
      description: `
            <p class="md-5">Es gilt belgisches Recht und die Gerichte der Wallonischen Region sind zuständig.</p>
          `,
    },
    {
      name: 'Sprache der Vereinbarung',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M511.786667 85.333333C276.053333 85.333333 85.333333 276.266667 85.333333 512s190.72 426.666667 426.453334 426.666667C747.52 938.666667 938.666667 747.733333 938.666667 512S747.52 85.333333 511.786667 85.333333z m295.466666 256h-125.866666c-13.866667-53.333333-33.28-104.533333-58.88-151.893333 78.506667 26.88 143.786667 81.28 184.746666 151.893333zM512 172.16c35.626667 51.2 63.36 108.16 81.493333 169.173333h-162.986666c18.133333-61.013333 45.866667-117.973333 81.493333-169.173333zM181.76 597.333333C174.72 570.026667 170.666667 541.44 170.666667 512s4.053333-58.026667 11.093333-85.333333h144c-3.413333 27.946667-5.76 56.32-5.76 85.333333 0 29.013333 2.346667 57.386667 5.973333 85.333333H181.76z m34.773333 85.333334h125.866667c13.866667 53.333333 33.28 104.533333 58.88 152.106666A342.058667 342.058667 0 0 1 216.533333 682.666667z m125.866667-341.333334h-125.866667c40.96-70.613333 106.24-125.226667 184.746667-152.106666-25.6 47.573333-45.013333 98.773333-58.88 152.106666zM512 851.84c-35.413333-51.2-63.146667-108.16-81.493333-169.173333h162.986666c-18.346667 61.013333-46.08 117.973333-81.493333 169.173333zM611.84 597.333333h-199.68c-4.053333-27.946667-6.826667-56.32-6.826667-85.333333 0-29.013333 2.773333-57.386667 6.826667-85.333333h199.68c4.053333 27.946667 6.826667 56.32 6.826667 85.333333 0 29.013333-2.773333 57.386667-6.826667 85.333333z m10.88 237.226667c25.6-47.573333 45.013333-98.56 58.88-151.893333h125.866667a343.189333 343.189333 0 0 1-184.746667 151.893333zM698.026667 597.333333c3.413333-27.946667 5.973333-56.32 5.973333-85.333333 0-29.013333-2.346667-57.386667-5.973333-85.333333h144c7.04 27.306667 11.306667 55.893333 11.306666 85.333333s-4.053333 58.026667-11.306666 85.333333h-144z"
            p-id="24381"
          ></path>
        </svg>
      ),
      description: `
            <p class="md-5">ROKH SRL ist in mehreren Sprachen verfügbar. Sie können Ihre Wahl treffen, indem Sie bei Ihrem ersten Besuch auf eine Sprache klicken. Die von Ihnen gewählte Sprache ist auch die Sprache, die Sie für Ihre Transaktionen und die anschließende Kommunikation mit ROKH SRL verwenden.</p>
          `,
    },
  ],
}
function TermsAndConditionsPageDe() {
  return (
    <>
      <link rel="canonical" href="https://www.geme.bio/de/terms-and-conditions" />
      <h1 className="sr-only">Allgemeine Geschäftsbedingungen von GEME</h1>
      <SiteHelpTabs {...siteHelpTabsProps} />
      <TermsAndConditions {...termsAndConditionsProps} />
    </>
  )
}

export { TermsAndConditionsPageDe }
