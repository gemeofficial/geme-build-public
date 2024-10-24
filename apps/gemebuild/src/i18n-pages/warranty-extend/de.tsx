import { IWarrantyExtendProps, WarrantyExtend } from './components'
import { SiteHelpTabs } from '../../components/tabs'
import { ETabsId } from '../../components/tabs/type'
import { getWarrantyTabsTextInfo } from '../../helpers/warranty-tabs-text-info'

// 静态页面的navBar内容 配置文件 De版
const tabs = getWarrantyTabsTextInfo('de', ETabsId.WarrantyExtend)

// 静态页面的内容 配置文件 De版
const warrantyExtendProps: IWarrantyExtendProps = {
  title: 'Verlängerte Garantie',
  forward: {
    title: 'Die folgenden Vertragsbedingungen gelten',
    imgSrc: '/assets/images/warranty-extend/1.png',
  },
  items: [
    {
      name: 'Dauer und Beginn der Garantie',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1110 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M594.701017 945.23878h346.094644a401.234441 401.234441 0 0 0-190.93261-267.802034L555.389831 563.807458l-194.473221 113.629288a401.234441 401.234441 0 0 0-190.93261 267.802034h346.077288v-39.397966A39.345898 39.345898 0 0 1 555.389831 866.460203a39.345898 39.345898 0 0 1 39.311186 39.397966v39.380611zM819.373559 315.079593a448.650847 448.650847 0 0 0 122.289899-236.318373H169.133559a448.650847 448.650847 0 0 0 122.289899 236.318373h527.932745z m-104.690983 78.761221H396.114441c11.073085 6.022508 22.475932 11.628475 34.156474 16.731118L555.389831 465.416678l125.118915-54.844746c11.680542-5.12 23.08339-10.70861 34.156474-16.731118z m-624.64 551.397966a480.030373 480.030373 0 0 1 231.267797-335.837288l157.071186-91.77817-79.611661-34.885424C231.649627 409.495864 116.128542 255.861153 89.452475 78.76122H39.311186A39.345898 39.345898 0 0 1 0 39.397966 39.345898 39.345898 0 0 1 39.311186 0h1032.157289A39.345898 39.345898 0 0 1 1110.779661 39.397966a39.345898 39.345898 0 0 1-39.311186 39.363254h-50.141289c-26.676068 177.099932-142.197153 330.752-309.300067 403.976678l-79.594305 34.885424 157.05383 91.77817a480.030373 480.030373 0 0 1 231.250441 335.837288h50.73139A39.345898 39.345898 0 0 1 1110.779661 984.602034 39.345898 39.345898 0 0 1 1071.468475 1024H39.311186A39.345898 39.345898 0 0 1 0 984.602034a39.345898 39.345898 0 0 1 39.311186-39.363254h50.73139z m426.053424-275.698983A39.345898 39.345898 0 0 1 555.389831 630.141831a39.345898 39.345898 0 0 1 39.311186 39.397966v78.76122A39.345898 39.345898 0 0 1 555.389831 787.698983a39.345898 39.345898 0 0 1-39.311187-39.397966v-78.76122z"></path>
        </svg>
      ),
      description: `
        <ul class="my-5 list-inside list-decimal">
        <li class="mb-5">ROKH SRL bietet eine Garantiezeit von 2 Jahren ab Kaufdatum des Geräts. Durch Verlängerung der Garantiezeit übernimmt ROKH SRL die Reparaturkosten für ein weiteres oder zwei Jahre unmittelbar nach Ablauf der Garantiezeit. Das Ablaufdatum ist auf der Vorderseite des Garantiedokuments angegeben.</li>
        <li class="mb-5">Der zweijährige Garantieverlängerungsvertrag wird automatisch um 12 Monate auf 3 Jahre ab Kaufdatum des Geräts verlängert. Danach wird der Vertrag automatisch gekündigt. Es kann auch schriftlich bis zu einem Monat vor Ablauf des jährlichen Deckungszeitraums ab dem ersten Tag der Gültigkeit/Erneuerung gekündigt werden. Die automatische Verlängerung tritt in Kraft, wenn der Kunde die zu Beginn der Verlängerung erhaltene Rechnung innerhalb der angegebenen Zahlungsfrist bezahlt.</li>
        <li class="mb-5">Die bestehende zweijährige Garantie kann um maximal 3 Jahre verlängert werden.</li>
        <li class="mb-5">ROKH SRL hat das Recht, die Preise jederzeit anzupassen. Beim Kauf einer verlängerten Garantie gilt der zum Zeitpunkt der Vertragsunterzeichnung gültige Preis. Eine Preisänderung für eine zweijährige Garantieverlängerung kann auf der jährlichen Rechnung angegeben werden. Eine vorherige schriftliche Information wird nicht bereitgestellt. Wenn die Rechnung innerhalb der Zahlungsfrist bezahlt wird, wird davon ausgegangen, dass die Preisänderung akzeptiert wurde. Bei Zahlungsverweigerung wird die Garantiezeit nicht verlängert.
        <p class="mt-2">Alle Preise verstehen sich inklusive gesetzlicher Mehrwertsteuer.</p>
        </li>
        <li class="mb-5">Die Policendokumente werden per E-Mail bereitgestellt.</li>
        <li class="mb-5">Gerätereparaturen oder Ersatzteilversorgung verlängern die Vertragslaufzeit nicht.</li>
      </ul>
      `,
    },
    {
      name: 'Bedingungen',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M771.068 205.745c-1.405 0-2.78 0.105-4.13 0.302L255.414 206.047c-1.347-0.197-2.722-0.302-4.125-0.302-15.862 0-28.72 12.862-28.72 28.725s12.857 28.722 28.72 28.722l0 0.297 519.779 0 0-0.297c15.865 0 28.72-12.86 28.72-28.722S786.933 205.745 771.068 205.745zM771.068 429.009c-1.405 0-2.78 0.105-4.13 0.297L255.414 429.306c-1.347-0.193-2.722-0.297-4.125-0.297-15.862 0-28.72 12.857-28.72 28.72 0 15.865 12.857 28.722 28.72 28.722l0 0.297 519.779 0 0-0.297c15.865 0 28.72-12.857 28.72-28.722C799.788 441.866 786.933 429.009 771.068 429.009zM498.219 646.043c-1.402 0-2.777 0.105-4.125 0.295L254.754 646.338c-1.345-0.19-2.722-0.295-4.122-0.295-15.865 0-28.722 12.855-28.722 28.72 0 15.86 12.857 28.725 28.722 28.725l0 0.29 247.587 0 0-0.29c15.865 0 28.73-12.865 28.73-28.725C526.949 658.898 514.084 646.043 498.219 646.043zM944.318 92.895c0-44.557-36.245-80.81-80.81-80.81L159.3 12.085c-44.562 0-80.81 36.252-80.81 80.81l0 845.153c0 44.55 36.252 80.805 80.81 80.805l464.214 0c7.74 0.33 15.6-2.43 21.51-8.35l0.215 0.21 290.589-290.594-0.21-0.21c5.575-5.58 8.385-12.89 8.405-20.2l0.295 0L944.318 350.954l0.065 0 0-57.447-0.065 0L944.318 92.895zM624.868 949.848 624.868 711.893l237.944 0L624.868 949.848zM888.218 655.583c-2.2-0.535-4.495-0.83-6.86-0.83l0-0.305L595.839 654.448c-15.855 0-28.72 12.865-28.72 28.725 0 0.045 0.01 0.08 0.01 0.13 0 0.055-0.01 0.115-0.01 0.175 0 1.4 0.105 2.77 0.3 4.12l0 273.954L147.332 961.552c-6.365 0-11.545-5.175-11.545-11.54L135.787 80.925c0-6.365 5.18-11.542 11.545-11.542l729.341 0c6.37 0 11.545 5.18 11.545 11.542"
            fill="#2c2c2c"
          ></path>
        </svg>
      ),
      description: `
        <ul class="my-5 list-inside list-decimal">
        <li class="mb-5">Die Geräte werden bei autorisierten Fachhändlern oder direkt im ROKH SRL Online-Shop in EU-Ländern, Großbritannien, der Schweiz, Norwegen oder den USA gekauft.</li>
        <li class="mb-5">Zum Zeitpunkt des Kaufs der erweiterten Garantie befindet sich das Gerät in dem oben angegebenen Land.</li>
        <li class="mb-5">Das Policendokument gilt in jedem Fall für ein bestimmtes ROKH SRL Gerät und ist nicht übertragbar.</li>
        <li class="mb-5">Wenn sich das Eigentum am Gerät ändert oder der Eigentümer an eine andere Adresse umzieht, muss ROKH SRL benachrichtigt werden, damit das Policendokument gültig bleibt.</li>
        <li class="mb-5">Das Policendokument muss innerhalb der zweijährigen Garantiezeit des Geräts registriert und unterschrieben werden. Eine zweijährige Garantieverlängerung kann auch direkt nach einem Servicebesuch durch einen ROKH SRL Techniker für Geräte bis zu 3 Jahren erworben werden.</li>
        <li class="mb-5">Der Service unter der erweiterten Garantie wird nur in der EU, Großbritannien, der Schweiz, Norwegen und den USA verfügbar sein.</li>
        <li class="mb-5">Der Service unter der erweiterten Garantie darf nur von ROKH SRL Kundenservice oder einem von ROKH SRL autorisierten Serviceagenten durchgeführt werden, kontaktieren Sie <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> für Verträge mit dem ROKH SRL Kundenservice.</li>
        <li class="mb-5">Auf Verlangen von ROKH SRL müssen Kaufbeleg und Policendokumente vorgelegt werden.</li>
        <li class="mb-5">Wenn der Kunde keinen Anspruch auf Leistungen aus der erweiterten Garantie hat, werden die Kosten für Reparaturen und andere erbrachte Dienstleistungen (z. B. Geräteinspektion) nach den aktuellen Sätzen berechnet.</li>
        <li class="mb-5">Geräte mit Policendokumentation sind nur für den nicht kommerziellen Gebrauch bestimmt.</li>
      </ul>
      `,
    },
    {
      name: 'Deckung',
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
        <ul class="my-5 list-inside list-decimal">
        <li class="mb-5">Mängel am Gerät werden innerhalb einer angemessenen Zeit kostenlos durch Reparatur oder Austausch der relevanten Teile behoben. Alle Reise-, Eingriffs-, Arbeits- und Ersatzteilkosten werden von ROKH SRL übernommen. Die ersetzten Teile oder Geräte gehen in das Eigentum von ROKH SRL über.</li>
        <li class="mb-5">Wenn das Gerät nicht wirtschaftlich repariert werden kann oder irreparabel ist, erhält der Kunde ein neues identisches oder gleichwertiges Gerät. Bei Ersatzgeräten kann die Kommunikation (Verbindung) mit anderen Geräten und bestehenden Haussystemen nicht garantiert werden. Der aktuelle Marktwert des Geräts kann auf Anfrage ebenfalls erstattet werden. Erstattet ROKH SRL den aktuellen Marktwert des Geräts, wird das Policendokument ungültig. Wenn das Gerät ersetzt wird, wird der verbleibende Garantiezeitraum, der durch das Policendokument gewährt wird, auf das neue Gerät übertragen.</li>
        <li class="mb-5">Die erweiterte Garantie deckt keine weiteren Schadensersatzansprüche gegen ROKH SRL ab, außer bei grober oder vorsätzlicher Fahrlässigkeit von autorisierten technischen Servicemitarbeitern von ROKH SRL oder bei tödlichen Verletzungen, Personenschäden oder Schäden an der Gesundheit des Geräts.</li>
        <li class="mb-5">Die Versorgung mit Verbrauchsmaterialien und Zubehör ist durch diesen Vertrag nicht abgedeckt.</li>
      </ul>
      `,
    },
    {
      name: 'Einschränkungen',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0zM128 566.848 128 457.152l768 0 0 109.696L128 566.848z"
            fill="#000"
          ></path>
        </svg>
      ),
      description: `
      <p class="mb-5">Garantieverlängerungen decken nicht die Reparaturkosten, wenn der Defekt verursacht wurde durch:</p>
        <ul class="my-5 list-inside list-decimal">
        <li class="mb-5">Unsachgemäße Installation, wie z. B. Nichteinhaltung geltender Sicherheitsvorschriften und schriftlicher Gebrauchsanweisungen und Installationsanweisungen.</li>
        <li class="mb-5">Unsachgemäße Verwendung und Handhabung, wie die Verwendung ungeeigneter Reinigungsmittel oder Chemikalien und Schäden durch Aufnahme von Flüssigkeiten, Staub oder Toner.</li>
        <li class="mb-5">In anderen EU-Mitgliedstaaten, Großbritannien, der Schweiz, Norwegen oder den USA gekaufte Geräte funktionieren möglicherweise nicht oder sind aufgrund unterschiedlicher technischer Spezifikationen eingeschränkt nutzbar.</li>
        <li class="mb-5">Externe Faktoren wie Transportschäden, Stöße und Stürze, raue Umgebungsbedingungen oder Naturphänomene.</li>
        <li class="mb-5">Reparaturen oder Änderungen, die nicht von einem geschulten und autorisierten Serviceagenten von ROKH SRL durchgeführt wurden.</li>
        <li class="mb-5">Schäden, die durch nicht standardmäßige Teile verursacht wurden, und das Versäumnis, Original-Ersatzteile von ROKH SRL oder von ROKH SRL autorisierte Teile zu verwenden.</li>
        <li class="mb-5">Gehäuseschäden und defekte Glühbirnen.</li>
        <li class="mb-5">Schwankungen der Strombedingungen, die die vom Hersteller angegebenen Toleranzen überschreiten.</li>
        <li class="mb-5">Nichteinhaltung der Reinigungs- und Wartungsanweisungen.</li>
        <li class="mb-5">Natürlicher und gebrauchsbedingter Verschleiß, der gemäß Benutzerhandbuch regelmäßig während der Lebensdauer des Produkts ausgetauscht werden muss.</li>
      </ul>
      `,
    },
    {
      name: 'Datenschutz',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="18850"
        >
          <path
            d="M876.8 97.6L532.8 3.2c-12.8-4.8-30.4-4.8-46.4 0L144 97.6c-33.6 8-60.8 43.2-60.8 81.6v248c0 262.4 155.2 492.8 395.2 592 9.6 4.8 22.4 4.8 33.6 4.8 12.8 0 20.8 0 33.6-4.8 240-94.4 395.2-329.6 395.2-592V179.2c0-38.4-24-73.6-64-81.6z m-20.8 329.6c0 222.4-137.6 428.8-342.4 515.2-209.6-86.4-342.4-288-342.4-515.2V179.2L512 84.8l342.4 94.4v248z"
            p-id="18851"
          ></path>
          <path
            d="M368 457.6c-17.6-17.6-46.4-12.8-60.8 4.8-17.6 17.6-12.8 46.4 4.8 60.8l128 107.2c8 8 17.6 8 25.6 8s20.8-4.8 25.6-8L748.8 416c17.6-17.6 20.8-43.2 4.8-60.8s-43.2-20.8-60.8-4.8L470.4 544 368 457.6z"
            p-id="18852"
          ></path>
        </svg>
      ),
      description: `
      <p>Im Rahmen seiner Kundenserviceleistung erhebt und verarbeitet ROKH SRL personenbezogene Daten. Weitere Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in unserer Datenschutzerklärung unter der folgenden Adresse: <a href="/privacy-policy" target="_blank" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">Datenschutzrichtlinie</a>.<p>
      `,
    },
    {
      name: 'Widerrufsrecht',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="20115"
        >
          <path
            d="M624 288H236.8l105.6-105.6c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0l-160 160c-3.2 3.2-6.4 6.4-6.4 9.6-3.2 9.6-3.2 16 0 25.6 3.2 3.2 3.2 6.4 6.4 9.6l160 160c6.4 6.4 12.8 9.6 22.4 9.6s16-3.2 22.4-9.6c12.8-12.8 12.8-32 0-44.8L236.8 352h387.2c115.2 0 208 92.8 208 208S739.2 768 624 768H252.8c-19.2 0-32 12.8-32 32s12.8 32 32 32h371.2c150.4 0 272-121.6 272-272S774.4 288 624 288z"
            p-id="20116"
          ></path>
        </svg>
      ),
      description: `
      <p class="mb-5">Sie haben das Recht, innerhalb von 30 Tagen ohne Angabe von Gründen von diesem Vertrag zurückzutreten. Einzelheiten finden Sie in den <a href="/return-policy" target="_blank" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">Rückgabebedingungen</a>.<p>
      <p class="mb-5">Wenn Sie während der Rückgabefrist mit der Erbringung von Dienstleistungen beginnen möchten, müssen Sie uns einen Betrag zahlen, der dem auf Grundlage der Gesamtabdeckung des Vertrags gewährten Betrag entspricht, bevor Sie uns über Ihren Rücktritt von diesem Vertrag benachrichtigen.</p>
      `,
    },
  ],
}

function WarrantyExtendPageDe() {
  return (
    <>
      <h1 className="sr-only">Verlängern Sie Ihre GEME Produktgarantie</h1>
      <SiteHelpTabs {...tabs} />
      <WarrantyExtend {...warrantyExtendProps} />
    </>
  )
}

export { WarrantyExtendPageDe }
