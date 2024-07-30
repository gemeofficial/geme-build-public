import { PrivacyPolicy } from './components'
import { SiteHelpTabs, ETabsId } from '../../components/tabs'
import type { IPrivacyPolicyProps } from './components'
import { getWarrantyTabsTextInfo } from '../../helpers/warranty-tabs-text-info'

// 静态页面的navBar内容 配置文件 De版
const tabs = getWarrantyTabsTextInfo('de', ETabsId.PrivacyPolicy)

// 静态页面的内容 配置文件 De版
const privacyPolicyProps: IPrivacyPolicyProps = {
  title: 'Datenschutzerklärung',
  description: `
    <p class="mb-15">
    Bei ROKH fühlen wir uns dem Schutz der Privatsphäre und personenbezogenen Daten unserer Kunden verpflichtet. Deshalb legen wir großen Wert darauf, unsere Kunden darüber zu informieren, wie wir ihre Daten verarbeiten und genau, warum wir sie benötigen.
    <br /> <br />
    Mit dieser Datenschutzerklärung möchten wir Sie über die Datenverarbeitung im Rahmen unserer Website und der damit verbundenen Dienste informieren. Die Verarbeitung personenbezogener Daten erfolgt nur im Rahmen der jeweils geltenden gesetzlichen Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO).
    <br /> <br />
    Diese Website gehört ROKH SRL.
    </p>
    `,
  items: [
    {
      name: 'Datenschutzbeauftragter',
      description: `
      <p class="mb-15">
      Sie können unseren Datenschutzbeauftragten unter Privacy@geme.bio kontaktieren
      </p>
      `,
    },
    {
      name: 'Persönliche Daten',
      description: `
      <p class="mb-15">
      Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen; Als identifizierbar gilt eine natürliche Person, die direkt oder indirekt, insbesondere mittels Identifizierung wie Name, ID-Nummer, Standortkoordinaten, Online-Kennung oder Zuordnung zu einem oder mehreren Merkmalen physischer, physiologischer oder genetischer Natur, identifiziert werden kann , psychologischer, wirtschaftlicher, kultureller oder sozialer Ausdruck der Identität. Dazu gehören alle Informationen, die sich auf Ihre Identität beziehen, wie zum Beispiel Ihr Name, Ihre E-Mail-Adresse oder Postanschrift, Ihre Kundennummer und eine Online-Kennung.
      <br /> <br />
      Die Nutzung unserer Online- und Mobilangebote ist grundsätzlich ohne Offenlegung Ihrer Identität und ohne Angabe personenbezogener Daten möglich. Bei der Nutzung bestimmter Dienste unseres Online-Shops und Anwendungen werden jedoch personenbezogene Daten über Sie erhoben.
      </p>
      `,
    },
    {
      name: 'Speicherung personenbezogener Daten',
      description: `
      <p class="mb-15">
      Ihre Daten werden von uns auf besonders geschützten Servern gespeichert. Sie werden durch technische und organisatorische Maßnahmen geschützt, um Verlust, Zerstörung, Zugriff, Veränderung oder Verbreitung durch unbefugte Personen zu verhindern. Nur eine begrenzte Anzahl berechtigter Personen hat Zugriff auf Ihre Daten. Sie sind für die technische, kaufmännische oder redaktionelle Betreuung des Servers verantwortlich.
      <br /> <br />
      Ihre Daten werden verschlüsselt über das Internet übertragen. Für die Datenübertragung nutzen wir eine SSL-Verschlüsselung (Secure Sockets Layer).
      </p>
      `,
    },
    {
      name: 'Rechtsgrundlage für die Datenverarbeitung',
      description: `
      <p class="mb-15">
      Soweit wir für die Verarbeitung Ihrer Daten eine Einwilligung einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage. 6 Abs. Als Rechtsgrundlage für die Datenverarbeitung dient Art. 6 Abs. 1 lit. a DSGVO.
      <br /> <br />
      Sofern wir Ihre Daten verarbeiten, weil dies für die Erfüllung eines Vertrages oder im Rahmen eines vertragsähnlichen Verhältnisses mit Ihnen erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.
      <br /> <br />
      Sofern wir Ihre Daten zur Erfüllung einer rechtlichen Verpflichtung verarbeiten, dient Art. 6 Abs. 1 c) DSGVO als Rechtsgrundlage für die Datenverarbeitung.
      <br /> <br />
      Kunst. 6 Abs. 1F) DSGVO, sofern die Verarbeitung Ihrer Daten zur Wahrung berechtigter Interessen unseres Unternehmens oder Dritter erforderlich ist und Ihre diesbezüglichen Interessen, Grundrechte und Grundfreiheiten nicht durch die Grundprinzipien des Schutzes personenbezogener Daten zwingend erforderlich sind.
      <br/> <br />
      Im Rahmen dieser Datenschutzerklärung weisen wir Sie stets auf die Rechtsgrundlage für die Verarbeitung Ihrer Daten hin.
      </p>
      `,
    },
    {
      name: 'Datenlöschung und Speicherdauer',
      description: `
      <p class="mb-15">
      Grundsätzlich löschen oder sperren wir Ihre Daten immer dann, wenn die Speicherung ihre Bedeutung verloren hat. Eine Speicherung personenbezogener Daten kann jedoch auch an anderer Stelle erfolgen, wenn dies aufgrund gesetzlicher Vorgaben, denen wir unterliegen (z. B. im Zusammenhang mit gesetzlichen Aufbewahrungs- und Dokumentationspflichten), vorgesehen ist. In diesem Fall werden wir Ihre Daten nach Abschluss des Verfahrens löschen oder sperren.
      </p>
      `,
    },
    {
      name: 'Datenverarbeitung bei allgemeiner Nutzung unserer Angebote',
      description: `
      `,
    },
    {
      name: 'Informationen über das von Ihnen verwendete Kommunikationsgerät',
      description: `
      <p class="mb-15">
      Bei jedem Zugriff auf unser Online- und Mobilangebot erheben wir folgende Informationen über das von Ihnen verwendete Gerät: die IP-Adresse, die Anfrage Ihres Browsers sowie Datum und Uhrzeit dieser Anfrage. Darüber hinaus werden der Status und die Menge der im Rahmen dieser Anfrage übermittelten Daten erfasst. Wir erfassen außerdem Informationen über das Produkt und die Version des verwendeten Browsers sowie über das Betriebssystem des Geräts und den Internetdienstanbieter. Wir verfolgen auch die Website, von der aus auf den Dienst zugegriffen wird.
      <br /> <br />
      Rechtsgrundlage für die Verarbeitung dieser Daten ist Art. Abs. 6 1f Datenschutz-Grundverordnung.
      <br /> <br />
      Wir verarbeiten diese Daten, um Inhalte wie Webseiten auf Ihrem Gerät anzeigen zu können. Darüber hinaus nutzen wir diese Daten für den Betrieb der Online- und Mobildienste, zur Fehlererkennung und -beseitigung, zur Messung der Auslastung der Online- und Mobildienste sowie zur Vornahme von Anpassungen oder Verbesserungen.
      <br /> <br />
      Diese Zwecke stellen auch ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Abs. 6 1f Datenschutz-Grundverordnung.
      <br /> <br />
      Die IP-Adresse Ihres Geräts wird nur für die Dauer der Nutzung der Online- oder Mobildienste gespeichert und danach gelöscht oder gekürzt. Die Daten werden für einen begrenzten Zeitraum gespeichert.
      </p>
      `,
    },
    {
      name: 'Verwendung von Cookies',
      id: 'use-of-cookie',
      description: `
      <p class="mb-15">
      Wir verwenden Cookies, das sind kleine Textdateien, die auf Ihrem Computer gespeichert werden, um bestimmte Parameter und Daten zum Austausch mit unseren Online-Angeboten über Ihren Browser zu speichern. Cookies enthalten normalerweise den Namen der Domain, von der die Cookie-Datei gesendet wird, sowie Informationen über das Alter und die alphanumerische Kennung des Cookies. Je nach Inhalt und Speicherdauer gibt es verschiedene Arten von Cookies. Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“, die gelöscht werden, wenn Sie Ihre Browser-Sitzung beenden. Darüber hinaus gibt es langlebige Cookies, die es uns ermöglichen, Sie als Besucher wiederzuerkennen.
      <br /> <br />
      Über den Einsatz von Cookies informieren wir Sie vorab durch einen entsprechenden Hinweis in einem Banner.
      <br /> <br />
      Einige Cookies sind technisch notwendig, um die Nutzung unserer Online- und Mobilprodukte zu ermöglichen. Mit diesen Cookies erfassen und speichern wir die folgenden Daten.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Spracheinstellungen</li>
        <li class="m-2">Sucheinstellungen</li>
        <li class="m-2">Inhalt von Online-Formularen</li>
        <li class="m-2">Informationen zur Identifizierung oder Authentifizierung von Benutzern</li>
        <li class="m-2">Produkte im Warenkorb</li>
        <li class="m-2">Produkte auf dem Memo</li>
        <li class="m-2">Zum Kauf empfohlene Produkte</li>
      </ul>
      Darüber hinaus verwenden wir auf unseren Webseiten Cookies zur Analyse Ihres Nutzerverhaltens, sogenannte. Analytische Cookies. Diese Cookies ermöglichen uns die Erfassung und Speicherung der folgenden Daten.
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Häufigkeit der Seitenaufrufe</li>
        <li class="m-2">Suche Schlüsselwörter</li>
        <li class="m-2">Nutzung von Webseitenfunktionen</li>
      </ul>
      <p class="mb-15">
      Die über Sie durch Cookies erhobenen Daten werden pseudonymisiert und eine Zuordnung der Daten zu jedem einzelnen Nutzer ist daher nicht mehr möglich.
      <br /> <br />
      Rechtsgrundlage für die Datenverarbeitung unter Einsatz von Cookies ist Art. 6 Abs. 1 lit. f DSGVO. 6 Abs. 1f Datenschutz-Grundverordnung.
      <br /> <br />
      Cookies ermöglichen es uns, Ihren Computer zu erkennen und etwaige Konfigurationen sofort bereitzustellen. Cookies helfen uns, unsere Online-Dienste zu verbessern und Ihnen einen besseren und persönlicheren Service bieten zu können. Die Verwendung von Cookies ist erforderlich, um Ihnen die Nutzung unserer Online-Dienste zu erleichtern, und bestimmte Funktionen können Ihnen nur durch die Verwendung von Cookies bereitgestellt werden. Dabei handelt es sich um Anfragen, Online-Formulare, Kundenkonten, Warenkörbe und Memos.
      <br /> <br />
      Wir verwenden analytische Cookies, um die Qualität unserer Online-Dienste und deren Inhalte zu verbessern und zu optimieren.
      <br /> <br />
      Diese Zwecke stellen auch ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Abs. 6 1f Datenschutz-Grundverordnung.
      <br /> <br />
      Bei den von uns verwendeten technisch notwendigen Cookies handelt es sich um sogenannte Session-Cookies, die nach Ende der Browser-Sitzung automatisch wieder gelöscht werden. Die restlichen Cookies werden auf Ihrem Computer gespeichert. Die meisten Browser sind außerdem so konfiguriert, dass sie Cookies automatisch akzeptieren; Sie können die Speicherung von Cookies jedoch deaktivieren oder Ihren Browser so konfigurieren, dass er Sie sofort benachrichtigt, wenn ein Cookie gesendet wird. Bitte beachten Sie, dass Sie unser Online-Angebot in manchen Fällen nur eingeschränkt oder gar nicht nutzen können, wenn Sie die Speicherung eines Cookies ablehnen.
      <br /> <br />
      Zur Analyse des Nutzerverhaltens zu den oben beschriebenen Zwecken nutzen wir die nachfolgend genannten Programme, die wiederum wie oben beschrieben Cookies verwenden und die gespeicherten Daten löschen, sobald sie für die beschriebenen Zwecke nicht mehr erforderlich sind.
      </p>
      `,
    },
    {
      name: 'Google Analytics',
      description: `
      <p class="mb-15">
      Wir nutzen Google Analytics für statistische Analysen. Google Analytics ist ein Webanalysedienst der Google LLC., 1600 Amphitheatre Parkway, Mountain View, CA 94034, USA („Google“). „Google Analytics verwendet „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Google-Server in den USA und speichert sie dort. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Website wird jedoch Ihre IP-Adresse gespeichert In Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten der Datenschutzerklärung wird die volle IP-Adresse von Google jedoch zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Google Im Auftrag des Betreibers dieser Website wird diese Daten genutzt, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung, der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die IP-Adresse Die im Rahmen von Google Analytics übermittelte IP-Adresse Ihres Browsers wird nicht mit anderen Daten von Google zusammengeführt. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass nicht sämtliche Funktionen dieser Website vollumfänglich genutzt werden können in diesem Fall zur Verfügung. Darüber hinaus <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" class="underline">http://tools.google.com/dlpage/gaoptout? hl=de</a>.
      <br /> <br />
      Weitere Informationen hierzu finden Sie unter <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" class="underline">http://tools.google. com/dlpage/gaoptout?hl=de</a> oder <a href="http://www.google.com/intl/de/analytics/privacyoverview.html" target="_blank" class="underline"> http://www.google.com/intl/de/analytics/privacyoverview.html</a> (zu Googles allgemeiner Informationsanalyse und Datenschutz). Wir weisen Sie darauf hin, dass auf unseren Seiten Google Analytics um den Code „anonymizeIp();“ erweitert wurde. Die IP-Adresse wird durch Entfernen des letzten Oktetts anonymisiert.
      </p>
      `,
    },
    {
      name: 'Retargeting und Remarketing',
      description: `
      <p class="mb-15">
      Unter dem Begriff Retargeting oder Remarketing werden Techniken verstanden, die es ermöglichen, Nutzern, die bestimmte Webseiten zuvor besucht haben, relevante Werbung anzuzeigen, auch wenn sie diese Seiten verlassen haben. Hierzu ist eine erneute Identifizierung des Nutzers nach Verlassen der Website des Unternehmens erforderlich, was durch den Einsatz von Cookies des jeweiligen Dienstleisters erfolgen kann. Darüber hinaus wird das bisherige Verhalten des Nutzers berücksichtigt. Wenn sich ein Nutzer beispielsweise bestimmte Produkte ansieht, kann es sein, dass später auf anderen Internetseiten Werbung für diese oder ähnliche Produkte erscheint. Hierbei handelt es sich um personalisierte Werbung, die auf die Bedürfnisse des einzelnen Nutzers zugeschnitten ist. Für solche personalisierten Anzeigen ist es nicht erforderlich, dass der Nutzer nach seiner Identifizierung identifiziert wird. Eine Zusammenführung der für das Retargeting bzw. Remarketing verwendeten Daten mit anderen Daten erfolgt daher auch nicht.
      <br /> <br />
      Wir verwenden diese Technologie, um Anzeigen im Internet auszuliefern. Zur Darstellung der Werbeanzeigen nutzen wir Drittanbieter. Darüber hinaus nutzen wir einen Dienst von Google, der es uns ermöglicht, Internetnutzern automatisch Produkte anzuzeigen, die sie interessieren. Diese Funktion wird über Cookies realisiert. Weitere Informationen zu dieser Technologie erhalten Sie in der Datenschutzerklärung von Google unter <a href="https://policies.google.com/privacy?hl=de" target="_blank" class="underline">https://policies.google.com/privacy?hl=de</a>. Durch den Besuch der Internetseite <a href="http://www.google.com/policies/privacy/ads/" target="_blank" class="underline">http://www.google.com/policies/privacy/ads/</a> und entsprechender Konfiguration können Sie die Installation der Cookies für Google Remarketing und Google AdWords Conversion Tracking durch eine Einstellung Ihrer Browser-Software blockieren.
      <br /> <br />
      Diese Website verwendet Weiterleitungs-Tags von Google, Appnexus und Performance Profiles, um ROKH-Produkte zu bewerben. Der auf dieser Website implementierte Umleitungs-JavaScript-Code speichert zu Umleitungszwecken ein Cookie auf dem Computer des Benutzers. Wenn der Nutzer Aktionen auf der Google-Suchseite und den Websites von Google Display Network, Appnexus und Performance Profiles ausführt, wird anschließend ein ROKH-Banner oder eine ROKH-Werbung an den Nutzer gesendet. Sämtliche Daten werden bei diesem Vorgang anonym erhoben und können daher nicht einer bestimmten Person zugeordnet werden. Nutzer können der Retargeting-Funktion widersprechen, indem sie die Anzeigeeinstellungen im Google Remarketing-Tab ändern oder das Retargeting deaktivieren.
      </p>
      `,
    },
    {
      name: 'Anmeldung',
      description: `
      <p class="mb-15">
      Sie können sich auch in unseren Online- und Mobildiensten als Benutzer registrieren. Hierzu müssen Sie in die Eingabemaske die erforderlichen Daten wie Name, Anschrift und E-Mail-Adresse eingeben. Darüber hinaus erfassen wir Datum und Uhrzeit der Aufzeichnung sowie die IP-Adresse. Im Rahmen der Registrierung werden wir Sie um Ihre Einwilligung zur Nutzung der Daten bitten.
      <br /> <br />
      Rechtsgrundlage für die Verarbeitung der Registrierungsdaten ist im Falle einer Einwilligung die Kunst. Abs. 6 1 Datenschutz-Grundverordnung. Wenn Sie sich bei uns zur Erfüllung oder Anbahnung eines Vertrages registrieren, ist zusätzliche Rechtsgrundlage für die Datenverarbeitung Art. 6 Abs. 1 lit. b DSGVO. 6 Abs. 1b Datenschutz-Grundverordnung.
      <br /> <br />
      Für die Durchführung bzw. den Abschluss eines Vertrages mit uns über bestimmte Leistungen ist eine Registrierung erforderlich.
      <br /> <br />
      Die Daten werden bei uns solange gespeichert, wie es für die Vertragsabwicklung erforderlich ist. Darüber hinaus speichern wir diese Daten zur Erfüllung unserer nachvertraglichen Pflichten und im Rahmen der gesetzlich vorgeschriebenen handels- und steuerrechtlichen Aufbewahrungsfristen. Diese Aufbewahrungsfrist beträgt in der Regel 10 Jahre bis zum Ende des jeweiligen Kalenderjahres.
      </p>
      `,
    },
    {
      name: 'Bearbeitung von Bestellungen aus unserem Online-Shop',
      description: `
      <p class="mb-15">
      Eine Verarbeitung Ihrer personenbezogenen Daten erfolgt ausschließlich im Rahmen der Auftragserteilung durch unser Unternehmen und verbundene Unternehmen sowie durch mit der Auftragsabwicklung beauftragte Unternehmen.
      <br /> <br />
      Für die Bestellabwicklung arbeiten wir mit verschiedenen Unternehmen zusammen, die für die Zahlungsabwicklung und Logistik zuständig sind. Wir stellen sicher, dass auch unsere Partner bei diesem Prozess die Datenschutzbestimmungen einhalten. Hierzu übermitteln wir Ihre Kontaktdaten (Name und Anschrift) an das jeweilige Versandunternehmen, welches die bestellten Produkte an Sie ausliefert.
      <br /> <br />
      Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1b Datenschutz-Grundverordnung. Die Verarbeitung Ihrer personenbezogenen Daten ist für die Erfüllung des mit Ihnen geschlossenen Vertrages erforderlich.
      <br /> <br />
      Wir bewahren die Daten so lange auf, wie es für die Vertragsabwicklung erforderlich ist. Darüber hinaus speichern wir diese Daten zur Erfüllung unserer nachvertraglichen Pflichten und im Rahmen der gesetzlich vorgeschriebenen handels- und steuerrechtlichen Aufbewahrungsfristen. Diese Aufbewahrungsfrist beträgt in der Regel 10 Jahre bis zum Ende des jeweiligen Kalenderjahres.
      <br /> <br />
      Zahlungsabwicklung bestellen, Paypal, Stripe
      <br /> <br />
      Abhängig von der gewählten Zahlungsart kann die Zahlungsabwicklung im Rahmen einer Bestellung über einen Dienstleister erfolgen.
      <br /> <br />
      Bei Zahlung per Kreditkarte werden die hierfür von Ihnen benötigten Daten wie Name, Adresse und Kaufdaten an das jeweilige Kreditkartenunternehmen übermittelt.
      <br /> <br />
      Bei Zahlung per PayPal werden Sie auf einen Link zur PayPal-Webseite weitergeleitet. Dabei werden Ihre personenbezogenen Daten verarbeitet. Dabei handelt es sich um Ihren Namen, Ihre Adresse, Ihre E-Mail-Adresse, Ihre Telefonnummer und ggf. Ihre Bank- oder Kreditkartendaten. Die allgemeinen Geschäfts- und Nutzungsbedingungen sowie die Datenschutzbestimmungen von PayPal (Europe) S.à rl et Cie, SCA, 22-24 Boulevard Royal, L-2449 Luxembourg finden Sie auf der Website <a href="https://www.paypal.com" target="_blank" class="underline">www.paypal.com</a>.
      <br /> <br />
      Wenn Sie eine Zahlung mit Strip Amount vornehmen, werden Sie zu einem Link zur Webseite von Stripe weitergeleitet, einem Dienst von Stripe Payments Europe, Limited („SPEL“). Dabei werden Ihre personenbezogenen Daten verarbeitet. Dabei handelt es sich um Ihren Namen, Ihre Adresse, Ihre E-Mail-Adresse, Ihre Telefonnummer sowie Ihre Kontodaten bzw. Kreditkartendaten (sofern zutreffend). Die entsprechenden Geschäftsbedingungen und Nutzungsbedingungen sowie die Datenschutzbestimmungen finden Sie unter <a href="https://stripe.com/ie/ssa" target="_blank" class="underline">https://stripe.com/ie/ssa</a>.
      <br /> <br />
      Rechtsgrundlage für die Zahlungsabwicklung ist Art. 6 Abs. 1b Datenschutz-Grundverordnung. Die Verarbeitung Ihrer personenbezogenen Daten ist für die Abwicklung des mit Ihnen geschlossenen Vertrages erforderlich.
      <br /> <br />
      Wir bewahren die Daten so lange auf, wie es für die Vertragsabwicklung erforderlich ist. Darüber hinaus speichern wir die Daten zur Erfüllung unserer nachvertraglichen Pflichten und der gesetzlich vorgeschriebenen handels- und steuerrechtlichen Aufbewahrungsfristen. Diese Aufbewahrungsfrist beträgt in der Regel 10 Jahre bis zum Ende des jeweiligen Kalenderjahres.
      </p>
      `,
    },
    {
      name: 'Zusätzliche Datenverarbeitung bei Nutzung der von ROKH bereitgestellten Anwendung (in Kürze verfügbar)',
      description: `
      <p class="mb-15">
      Bei der Nutzung der Anwendung werden folgende Daten verarbeitet.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">Registrierungsdaten</li>
      <li class="m-2">Kundennummer, Girokonto</li>
      <li class="m-2">Herstellungsnummer des Geräts</li>
      <li class="m-2">Funktionsmerkmale des Gerätes, Grunddaten des Gerätes</li>
      <li class="m-2">Daten zur Gerätenutzung</li>
      <li class="m-2">Daten zum Gerätestatus</li>
      <li class="m-2">Daten zur Anwendungsnutzung</li>
      <li class="m-2">Persönliche Anmeldeinformationen für die Telekommunikation</li>
      </ul>
      <p class="mb-15">
      Um alle Funktionen der geme@mobile-Anwendung nutzen zu können, ist eine bestimmte Systemberechtigung erforderlich. Wenn Sie mit der Nutzung der Anwendung beginnen und/oder erst wenn Sie die entsprechenden Funktionen nutzen, werden Sie aufgefordert, die entsprechenden Berechtigungen zu erteilen. Bitte beachten Sie jedoch, dass die ordnungsgemäße Nutzung der App den Zugriff auf bestimmte Funktionen Ihres Mobilgeräts (Smartphone oder Tablet) sowie den Zugriff auf Ihre persönlichen Daten erfordert.
      <br /> <br />
      Die geme@mobile-App ist in sogenannten App-Stores Dritter erhältlich (Google Play Store und Apple App Store). Für den Download der App ist in der Regel eine vorherige Registrierung im jeweiligen App Store erforderlich. Wir haben keinen Einfluss auf die in diesem Zusammenhang erhobenen, verarbeiteten und genutzten personenbezogenen Daten. In solchen Fällen liegt die alleinige Verantwortung beim Betreiber des jeweiligen App-Stores.
      <br /> <br />
      Rechtsgrundlage für die Datenverarbeitung ist eine Einwilligung. Abs. 6 1 Datenschutz-Grundverordnung. Zusätzliche Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO. Art. 6 Abs. 1 lit. b Datenschutz-Grundverordnung, sofern die Datenverarbeitung für die Durchführung der mit der jeweiligen Anwendung bereitgestellten Dienste erforderlich ist. Die vom Gerät verwendeten Daten werden anonymisiert verwendet, damit unsere Produkte und Anwendungen kontinuierlich verbessert werden können. Rechtsgrundlage hierfür ist Art. Die Optimierung von Produkten und Dienstleistungen dient gemäß Art. 6 Abs. 6 Abs. 1 lit. f DSGVO gleichzeitig unseren berechtigten Interessen.
      <br /> <br />
      Wir verarbeiten Daten zu folgenden Zwecken
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Zur Verbesserung unserer Produkte und Dienstleistungen (z. B. der Programme und anderen Funktionen der verwendeten Heimgeräte und Anwendungen)</li>
        <li class="m-2">Kontaktaufnahme mit Ihnen, um Ihnen gezielte Service- und Produktangebote zuzusenden, die Ihren Anforderungen entsprechen</li>
        <li class="m-2">Unterbrechungen beseitigen oder vermeiden</li>
        <li class="m-2">Sicherstellung und Verbesserung der Benutzerfreundlichkeit der Anwendung</li>
        <li class="m-2">Bereitstellung der von der Anwendung angebotenen Dienste</li>
      </ul>
      <p class="mb-15">Wir bewahren Daten nur so lange auf, wie es zur Erreichung des gewünschten Ziels erforderlich ist.</p>
      `,
    },
    {
      name: 'Zusätzliche Datenverarbeitung bei der Nutzung von GCN',
      description: `
      <p class="mb-15">
      Im Rahmen der Abwicklung des Mietvertrages verarbeiten wir über das GCN-Portal folgende personenbezogene Daten.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">Familienname, Nachname</li>
      <li class="m-2">Adresse</li>
      <li class="m-2">Mail Adresse</li>
      <li class="m-2">IP Adresse</li>
      <li class="m-2">Kundennummer</li>
      <li class="m-2">Herstellungsnummer des Geräts</li>
      <li class="m-2">Funktionsmerkmale der Ausrüstung</li>
      <li class="m-2">Vom Gerät verwendete Daten</li>
      </ul>
      <p class="mb-15">
      Die Datenverarbeitung erfolgt zur Abwicklung des „GCN“-Mietvertrages. Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1b Datenschutz-Grundverordnung. Wir führen Ihre Benutzerstammdaten (Vor- und Nachname, Adresse, E-Mail) mit den verfügbaren Gerätestammdaten (z. B. Gerätefertigungsnummer) zusammen, um Ihr Konto für die Nutzung des Geräts gemäß Mietvertrag zu belasten. Insbesondere benötigen wir Gerätenutzungsdaten (z. B. Grundeinstellungen, Programmauswahl, Programmeinstellungen, Programmnutzung), um Mietpreise und Wartungstermine berechnen zu können.
      <br /> <br />
      Darüber hinaus werden Nutzungsdaten aus Interaktionen mit dem GCN-Portal erfasst und zur kontinuierlichen Optimierung des GCN-Portals und der Produkte verwendet. Rechtsgrundlage für diese Verarbeitung ist Art. Die Optimierung des Dienstes stellt im Sinne des Art. 6 Abs. 1 f DSGVO zugleich unser berechtigtes Interesse dar.
      <br /> <br />
      Wir speichern die Daten nur so lange, wie es für die Vertragsabwicklung und die Zweckerreichung erforderlich ist.
      </p>
      `,
    },
    {
      name: 'Zusätzliche Datenverarbeitung bei Nutzung des von uns bereitgestellten Alexa Skills',
      description: `
      <p class="mb-15">
      Für die Nutzung des ROKH Skills sind folgende Daten erforderlich.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Informationen zur Anmeldung</li>
        <li class="m-2">rokh-Kundennummer</li>
        <li class="m-2">Herstellungsnummer des Geräts</li>
        <li class="m-2">Funktionsmerkmale des Geräts</li>
        <li class="m-2">Persönliche Kennung der Telekommunikation</li>
        <li class="m-2">ROKH Status der Appliance</li>
      </ul>
      <p class="mb-15">
      ROKH nutzt die Skill-Implementierung des Dienstes Amazon Europe Core S.à.rl, sis 5, Rue Plaetis, L-2338 Luxemburg und sammelt anonyme Benutzerstatistiken und Serverprotokolle, um Fehler zu erkennen und das Benutzererlebnis zu verbessern. Dies sind die Anzahl der Funktionsaufrufe sowie die Häufigkeit der Nutzung und Fehlermeldungen. Diese Daten werden von ROKH anonymisiert verarbeitet. Die Datenschutzerklärung von amazon.de finden Sie unter <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=3312401" target="_blank" class="underline">https://www.amazon.de/gp/help/customer/display.html?nodeId=3312401</a>
      <br /> <br />
      ROKH-Skills sind im von Amazon betriebenen Amazon Alexa Skills Store erhältlich. Für die Freischaltung der Alexa-Kenntnisse und die allgemeine Nutzung ist grundsätzlich eine vorherige Registrierung bei Amazon erforderlich. Wir haben keinen Einfluss auf die dabei erhobenen, verarbeiteten und genutzten personenbezogenen Daten. In diesem Fall liegt die alleinige Verantwortung bei Amazon.
      <br /> <br />
      Rechtsgrundlage für die Datenverarbeitung ist eine Einwilligung. Abs. 6 1 Datenschutz-Grundverordnung. Zusätzliche Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO. Art. 6 Abs. 1 lit. b Datenschutz-Grundverordnung, sofern die Datenverarbeitung für die Erbringung der im Rahmen der jeweiligen Anwendung erbrachten Leistungen erforderlich ist. Darüber hinaus werden Gerätenutzungsdaten anonymisiert und genutzt, damit unsere Produkte und Anwendungen kontinuierlich verbessert werden können. Rechtsgrundlage für die Verarbeitung ist Art. Die Optimierung von Produkten und Dienstleistungen dient gemäß Art. 6 Abs. 6 Abs. 1 lit. f DSGVO gleichzeitig unseren berechtigten Interessen.
      <br /> <br />
      Wir verarbeiten Daten zu folgenden Zwecken.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">Sicherstellung der Interaktion von ROKH-Geräten mit Alexa-Terminals</li>
      <li class="m-2">um Ihnen die entsprechenden Dienste im ROKH Alexa Skill zur Verfügung zu stellen</li>
      <li class="m-2">Verbesserung unserer Produkte und Dienstleistungen (z. B. der verwendeten Programme und anderer Funktionen von Haushaltsgeräten und Anwendungen)</li>
      <li class="m-2">Kontaktaufnahme mit Ihnen, um Ihnen gezielte Angebote für auf Ihre Bedürfnisse zugeschnittene Produkte und Dienstleistungen zuzusenden</li>
      <li class="m-2">Sicherstellung und Verbesserung der Benutzerfreundlichkeit der ROKH Alexa-Skills</li>
      <li class="m-2">Stellen Sie die Interaktion von ROKH-Geräten mit Alexa-Terminals sicher</li>
      <li class="m-2">Stellen Sie Ihnen im ROKH Alexa Skill die passenden Dienste zur Verfügung</li>
      </ul>
      <p class="mb-15">
      Wir speichern Daten nur so lange, wie es zur Erreichung des Zwecks erforderlich ist.
      </p>
      `,
    },
    {
      name: 'Bewerbungsportal',
      description: `
      <p class="mb-15">
      Über das Bewerbungsportal können Sie sich bei uns bewerben und alle hierfür notwendigen Informationen und Unterlagen übersenden. Hierzu können Sie das Online-Formular nutzen und uns auf diesem Weg Ihre Bewerbungsunterlagen zukommen lassen. Die Nutzung des Bewerbungsportals ist optional; Sie können uns Ihre Bewerbung auch auf anderem Wege zukommen lassen, beispielsweise per E-Mail oder per Post.
      <br /> <br />
      Wenn eine Bewerbung über das Bewerbungsportal eingeht, werden Ihre Unterlagen elektronisch an unsere zuständigen Mitarbeiter übermittelt. Wenn Sie sich auf ein Stellenangebot bewerben, werden diese Unterlagen sechs Monate nach Abschluss des Einstellungsverfahrens automatisch vernichtet, sofern der Löschung keine sonstigen berechtigten Interessen entgegenstehen. Ein berechtigtes Interesse in diesem Sinne ist beispielsweise eine Beweispflicht in einem Verfahren auf Grundlage des Allgemeinen Gleichbehandlungsgesetzes (AGG). Sofern sich die Bewerbung nicht auf ein Stellenangebot bezieht (Initiativbewerbung), wird die Bewerbung so lange aufbewahrt, bis sie für Sie von Interesse sein könnte. Sie können jederzeit, auch vor Ablauf der angegebenen Aufbewahrungsfrist, die Löschung Ihrer Bewerbung verlangen. Im Falle einer Annahme der Bewerbung werden die übermittelten Daten unter Berücksichtigung der gesetzlichen Vorgaben zur Abwicklung der Stellenausschreibung gespeichert. In allen übrigen Fällen ist Rechtsgrundlage für die Speicherung Ihrer Bewerbungsdaten Ihre Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO. 6 Abs. 1, a) Datenschutz-Grundverordnung.
      </p>
      `,
    },
    {
      name: 'Mit uns kommunizieren',
      description: `
      <p class="mb-15">
      Sie können auf verschiedene Weise mit uns in Kontakt treten, unter anderem über das Kontaktformular auf unserer Webseite. Darüber hinaus informieren wir Sie gerne regelmäßig über unseren E-Mail-Newsletter.
      </p>
      `,
    },
    {
      name: 'Newsletter',
      description: `
      <p class="mb-15">
      Bei Anmeldung zu unserem Newsletter wird Ihre E-Mail-Adresse für eigene Werbezwecke genutzt, bis Sie sich vom Newsletter abmelden. Hierzu erhalten Sie regelmäßig Informationen zu aktuellen Themen und in besonderen Fällen auch Sonderaktionen per E-Mail. E-Mails können entsprechend den Informationen, die wir über Sie haben, personalisiert und individualisiert werden.
      <br /> <br />
      Für unsere Nutzung bei der Anmeldung zu unserem Newsletter wird, sofern Sie uns nicht Ihre schriftliche Einwilligung erteilt haben, das sog. Double-Opt-In-Verfahren eingesetzt, d. h. wenn Sie zuvor ausdrücklich darauf hingewiesen haben, dass wir Ihnen den Newsletter zunächst per E-Mail zur Bestätigung zusenden dass wir den Versand des Newsletters aktivieren müssen. Wir senden Ihnen dann eine E-Mail und bitten Sie, durch Klicken auf den Link in dieser E-Mail zu bestätigen, dass Sie unseren Newsletter erhalten möchten.
      <br /> <br />
      Rechtsgrundlage für die Verarbeitung Ihrer Daten ist Ihre Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO. Abs. Art. 6 Abs. 1 lit. a) DSGVO, sofern Sie den Newsletter ausdrücklich abonniert haben. Im Rahmen der gesetzlichen Bestimmungen können Sie unseren Newsletter auch ohne Ihre ausdrückliche Einwilligung erhalten oder wenn wir Ihre E-Mail-Adresse erhalten, weil Sie ein Produkt oder eine Dienstleistung bei uns bestellt haben und per E-Mail kontaktiert wurden. Sie haben der Zusendung von Informationen per E-Mail nicht widersprochen. In diesem Fall liegt unser berechtigtes Interesse an der Übersendung von Direktwerbung auf der Rechtsgrundlage des Art. 6 Abs. 1 lit. f DSGVO. Abs. 6 1f) Datenschutz-Grundverordnung.
      <br /> <br />
      Wenn Sie unseren Newsletter nicht mehr erhalten möchten, können Sie Ihre jeweils erteilte Einwilligung jederzeit widerrufen oder den weiteren Empfang des Newsletters verweigern, ohne dass hierfür andere als die Übermittlungskosten nach den Basistarifen berechnet werden. Nutzen Sie einfach den in jedem Newsletter enthaltenen Abmeldelink oder senden Sie uns ggf. eine Nachricht, indem Sie diese an unseren Datenschutzbeauftragten senden.
      </p>
      `,
    },
    {
      name: 'Kontakt',
      description: `
      <p class="mb-15">
      Sie erreichen uns über unsere Kundenhotline, E-Mail, Chat oder per Post. Wenn Sie einen dieser Kontaktwege nutzen möchten, erheben wir zu diesem Zweck personenbezogene Daten, die Sie uns über den gewählten Kontaktkanal übermitteln. Dies können Name, Adresse, E-Mail-Adresse, Kundennummer und Telefonnummer sein. Es bleibt Ihnen überlassen, welche Informationen Sie uns über den Kontaktkanal übermitteln möchten.
      <br /> <br />
      Wir verarbeiten diese Daten insbesondere, um Ihre Fragen beantworten zu können bzw. Ihre Fragen bearbeiten zu können.
      <br /> <br />
      Wenn Sie das Kontaktformular unseres Online-Angebots nutzen möchten, erheben wir die von Ihnen im Rahmen des Kontaktformulars angegebenen personenbezogenen Daten, insbesondere Ihren Namen und Ihre E-Mail-Adresse. Darüber hinaus speichern wir die IP-Adresse sowie Datum und Uhrzeit der Anfrage. Die über das Kontaktformular übermittelten Daten verarbeiten wir ausschließlich, um Ihre Fragen und Anliegen beantworten zu können.
      </p>
      `,
    },
    {
      name: 'Qualität',
      description: `
      <p class="mb-15">
      Auf unserer Website nutzen wir die Dienste ausgewählter Unternehmen zur Durchführung von Nutzerbefragungen sowie Produkt- und Markenimages, um unsere Produkte und Dienstleistungen regelmäßig zu verbessern. Wenn Sie an einer Umfrage teilnehmen, werden nur Protokolldaten verarbeitet (Datums- und Zeitstempel/an Ihren Browser gesendete Informationen und Browsereinstellungen/an Ihr Gerät gesendete Informationen/Nutzungsdatum). Sie können frei entscheiden, ob Sie an der Umfrage teilnehmen möchten oder nicht. Wenn Sie nicht antworten möchten, klicken Sie einfach auf das „X“ in der oberen rechten Ecke des Umfrage-Popup-Fensters, um das Umfrage-Popup-Fenster zu schließen. Rechtsgrundlage für die Verarbeitung Ihrer Daten ist Ihre Einwilligung nach Art. 6 Abs. 1 S. 1 lit. a DSGVO. Art. 6 Abs. 1 lit. a Datenschutz-Grundverordnung. Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
      </p>
      `,
    },
    {
      name: 'Einkaufsführer',
      description: `
      <p class="mb-15">
      Auf unserer Website nutzen wir einen Einkaufsunterstützungsdienst unserer Dienstleister. Der Kaufassistenzservice hilft Ihnen, schneller und effizienter das richtige Produkt zu finden. Nach Beantwortung einiger Fragen erhalten Sie den ersten Produktvorschlag. Die Produkte werden entsprechend ihrer Eignung für Ihre Bedürfnisse präsentiert. Sie können frei entscheiden, ob Sie diesen Service nutzen möchten oder nicht. In diesem Fall verarbeiten wir lediglich die Metadaten der HTTP-Webanfrage als Referenz, Ihre IP-Adresse, Browsersprache und Benutzeragent (Browser-/Betriebssystemtyp und -version) sowie die Daten, die Sie uns über den Dienst mitteilen. Diese Daten werden nicht gespeichert. Wir verarbeiten Ihre Daten, um Ihnen diesen Service anbieten zu können. Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO. Wenn Sie ein Produkt kaufen, das Kunstwerk. Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO. Der Dienstleister handelt in unserem Auftrag als Auftragsverarbeiter nach unseren Weisungen.
      <br /> <br />
      Im Rahmen der Nutzung der Dienste speichern wir auch Informationen in Ihrem Sitzungsspeicher, hauptsächlich um Benutzer über mehrere Browsersitzungen hinweg zu identifizieren. Weitere Informationen zu unseren Cookies. Weitere Informationen zu Dienstanbietern und Einkaufsunterstützungsdiensten finden Sie auf den Websites der entsprechenden Dienstanbieter.
      </p>
      `,
    },
    {
      name: 'Rechtsgrundlage für die Nutzung und den Widerruf des Kontaktkanals',
      description: `
      <p class="mb-15">
      Rechtsgrundlage für die Datenverarbeitung bei Nutzung der bereitgestellten Kontaktkanäle ist Ihre Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO. Abs. 6 1 Datenschutz-Grundverordnung. Sie können Ihre Einwilligung jederzeit widerrufen. Nach der Bearbeitung der Fragen durch uns erfolgt die Speicherung der Daten zunächst zur Beantwortung möglicher Rückfragen. Die Löschung der Daten kann jederzeit beantragt werden, andernfalls erfolgt die Löschung nach vollständiger Klärung der Frage. Anschließend löschen wir die Daten unverzüglich, sofern wir nicht aufgrund handels- oder steuerrechtlicher Vorschriften zur Aufbewahrung der Daten verpflichtet sind.
      </p>
      `,
    },
    {
      name: 'Sozialen Medien',
      description: `
      <p class="mb-15">
      In unseren Online- und Mobilangeboten finden Sie Links zu den sozialen Netzwerken Facebook und unserem Youtube-Kanal. Die Links erkennen Sie an dem Logo des Anbieters.
      <br /> <br />
      Durch Anklicken der Links werden die entsprechenden Social-Media-Seiten geöffnet; Diese Datenschutzerklärung gilt nicht für sie. Nähere Informationen zu den hier geltenden Bedingungen können Sie den Datenschutzerklärungen der jeweiligen Anbieter entnehmen; Sie finden sie unter den folgenden Adressen.
      <br /> <br />
      Facebook:
      <br /> <br />
      <a href="https://www.facebook.com/policy.php" target="_blank" class="underline">https://www.facebook.com/policy.php</a>
      <br /> <br />
      YouTube:
      <br /> <br />
      <a href="https://www.google.de/intl/de/policies/privacy/" target="_blank" class="underline">https://www.google.de/intl/de/policies/privacy/</a>
      </p>
      `,
    },
    {
      name: 'Deine Rechte',
      description: `
      <p class="mb-15">
      Der betroffenen Person stehen nach der DSGVO mehrere Rechte zu. Wenn Sie diese nutzen oder weitere Informationen zu diesem Thema erhalten möchten, können Sie sich gerne an uns wenden.
      <br /> <br />
      Zu den Rechten der betroffenen Person gehören insbesondere:
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">Das Recht auf Auskunft: Sie können dies gemäß Art. 15 DSGVO unabhängig davon, ob die betreffenden personenbezogenen Daten von uns verarbeitet werden. Sofern es sich um eine Datenverarbeitung handelt, können Sie von uns zudem weitere Informationen über die Verarbeitung erhalten.</li>
      <li class="m-2">Recht auf Berichtigung: Sie haben das Recht auf Berichtigung und/oder Vervollständigung der über Sie verarbeiteten personenbezogenen Daten, soweit diese Daten unrichtig oder unvollständig sind gem. Art. 16 DSGVO.</li>
      <li class="m-2">Recht auf Einschränkung der Verarbeitung: In bestimmten Fällen können Sie gemäß Art. Gemäß Art. 18 DSGVO verlangen wir die Einschränkung der Verarbeitung der Sie betreffenden personenbezogenen Daten.</li>
      <li class="m-2">Recht auf Löschung: Sie haben außerdem das Recht, unter bestimmten Voraussetzungen gemäß Art. 17 DSGVO.</li>
      <li class="m-2">Recht auf Datenübertragbarkeit: Sie haben außerdem das Recht gemäß Art. gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und unter bestimmten Voraussetzungen problemlos von uns an einen anderen Verantwortlichen zu übermitteln.</li>
      </ul>
      <p class="mb-15">Sofern Ihre personenbezogenen Daten auf Grundlage der berechtigten Interessen des Art. Abs. Gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, sofern in Ihrem Fall besondere Gründe vorliegen.</p>
      `,
    },
    {
      name: 'Beschwerden',
      description: `
      <p class="mb-15">
      Wenn Sie der Meinung sind, dass unsere Verarbeitung Ihrer personenbezogenen Daten nicht dieser Datenschutzerklärung oder der geltenden Datenschutzrichtlinie entspricht, können Sie eine Beschwerde bei unserem Datenschutzbeauftragten einreichen. Der Datenschutzbeauftragte wird dann den Sachverhalt prüfen und Sie über das Ergebnis der Prüfung informieren. Sie haben außerdem das Recht, eine Beschwerde bei einer Aufsichtsbehörde einzureichen.
      </p>
      `,
    },
    {
      name: 'Mehr Informationen',
      description: `
      <p class="mb-15">
      </p>
      `,
    },
    {
      name: 'Weitergabe von Daten an Dritte',
      description: `
      <p class="mb-15">
      Für andere als die in dieser Datenschutzerklärung erläuterten Zwecke geben wir grundsätzlich keine personenbezogenen Daten an Dritte weiter. Sofern wir jedoch gesetzlich dazu verpflichtet sind oder aufgrund einer gerichtlichen Entscheidung, übermitteln wir Ihre Daten an die zuständigen Behörden.
      </p>
      `,
    },
    {
      name: 'Links zu anderen Websites',
      description: `
      <p class="mb-15">
      Unser Online-Angebot enthält Links zu anderen Websites. Diese Links sind in der Regel als solche gekennzeichnet. Wir haben keinen Einfluss darauf, dass die Websites, zu denen diese Links führen, den geltenden Datenschutzbestimmungen entsprechen. Daher empfehlen wir Ihnen, sich auch bei anderen Websites nach deren Datenschutzerklärungen zu erkundigen.
      </p>
      `,
    },
    {
      name: 'Änderungen dieser Datenschutzerklärung',
      description: `
      <p class="mb-15">
      Das Datum der Aktualisierungen der Datenschutzerklärung ist am Ende der Erklärung aufgeführt. Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Die aktuelle Version kann direkt über das Online-Angebot abgerufen werden. Bitte prüfen Sie regelmäßig das Online-Angebot auf die jeweils gültige Datenschutzerklärung.
      <br /> <br />
      Diese Datenschutzerklärung wurde im Januar 2023 aktualisiert.
      </p>
      `,
    },
    {
      name: 'Werbeform',
      description: `
      <p class="mb-15">
      Um den Komfort und die Qualität unserer Dienste zu verbessern, verwenden wir Conversion-Tracking- und Retargeting-Technologien, die beide von Adform ApS, Wildersgade 10B, 1, 1408 Copenhagen K, Dänemark, bereitgestellt werden.
      <br /> <br />
      Unsere Online-Angebote nutzen das Conversion-Tracking von Adform. Wenn ein Nutzer eine von Adform geschaltete Anzeige sieht, wird ein temporäres Cookie für das Conversion-Tracking eingesetzt.
      <br /> <br />
      Nutzer, die nicht am Tracking teilnehmen möchten, können die Cookies von Adform jederzeit mit Wirkung zum jetzigen Zeitpunkt über ihren Internetbrowser unter <a href="https://site.adform.com" deaktivieren oder der Datenerhebung und -speicherung widersprechen /datenschutz-opt-out/" target="_blank" class="underline">https://site.adform.com/datenschutz-opt-out/</a> . Sie können bereits auf Ihrem Computer gespeicherte Cookies in dem von Ihnen verwendeten Browser löschen oder durch Löschen temporärer Webseiten löschen.
      <br /> <br />
      Unsere Online-Angebote nutzen die Weiterleitungstechnologie von Adform. Dadurch können Nutzer, die sich bereits für unsere Seiten und Produkte interessiert haben, zielgerichtete Anzeigen auf den Seiten unserer Partner sehen. Beim Retargeting erfolgt die Einblendung der Werbeanzeigen nach einer Cookie-Analyse des bisher beobachteten Nutzerverhaltens. Hierbei handelt es sich um ein temporäres Cookie, das nach 60 Tagen abläuft. Wenn Sie keine interessenrelevanten Anzeigen von Adform anzeigen möchten, können Sie der Datenerhebung und -speicherung jederzeit hier widersprechen (<a href="https://site.adform.com/datenschutz-opt-out/ " target="_blank" class="underline">https://site.adform.com/datenschutz-opt-out/</a>). Weitere Informationen zu den Datenschutzbestimmungen von Adform finden Sie unter <a href="https://site.adform.com/datenschutz-opt-out/" target="_blank" class="underline">https://site.adform .com/datenschutz-opt-out/<a>
      <br /> <br />
      Rechtsgrundlage für die Verarbeitung ist Art. Abs. Die Verbesserung des Komforts und der Qualität unseres Online-Angebots dient gemäß Art. 6 Abs. 1 lit. f DSGVO unserem berechtigten Interesse.
      </p>
      `,
    },
    {
      name: 'Amazon Conversion Pixel und Amazon Remarketing Pixel',
      description: `
      <p class="mb-15">
      Unsere Online-Angebote nutzen die Funktionalität der Webanalysedienste Amazon Conversion Pixel und Amazon Remarketing Pixel von Amazon. Anbieter dieser Dienste ist Amazon.com, Inc. 410 Terry Ave. North Seattle, Washington, USA. Amazon Conversion Pixel und Amazon Remarketing Pixel verwenden ebenfalls auf Ihrem Computer gespeicherte Cookies, die eine Analyse Ihrer Nutzung ermöglichen. Diese Cookies ermöglichen es uns, Ihre Nutzung der Website zu analysieren und personalisierte Werbung auszuliefern.
      <br /> <br />
      Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; Wir weisen Sie jedoch darauf hin, dass Sie in solchen Fällen möglicherweise nicht alle Funktionen der Website nutzen können. Sie können darüber hinaus die Übertragung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten an Amazon sowie die Verarbeitung dieser Daten durch Amazon verhindern, indem Sie auf diesen Link klicken und die Option „Keine personalisierte Werbung“ auswählen. Dieser Internet Explorer": <a href="https://www.amazon.de/adprefs" target="_blank" class="underline">https://www.amazon.de/adprefs</a>.
      <br /> <br />
      Sie können auch die entsprechenden Einstellungen auswählen <a href="http://www.youronlinechoices.com/be" target="_blank" class="underline">http://www.youronlinechoices.com/be</a>. Anschließend wird in Ihrem Browser ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten durch Amazon Pixel bei zukünftigen Besuchen unserer Webseiten verhindert. Dieser Widerspruch gilt, solange Sie das Opt-Out-Cookie nicht löschen.
      <br /> <br />
      Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. Grundlage für unsere berechtigten Interessen ist die Verarbeitung gemäß Art. 6 Abs. 1 lit. f DSGVO sowie die Verbesserung des Komforts und der Qualität unserer Dienste.
      </p>
      `,
    },
    {
      name: 'Facebook Custom Audience',
      description: `
      <p class="mb-15">
      Unsere Online-Angebote nutzen die Remarketing-Funktion „Custom Audiences“ der Facebook Inc. Auf diese Weise können Nutzern beim Besuch des sozialen Netzwerks Facebook oder anderen Websites, die das gleiche Verfahren verwenden, für die Interessen der Nutzer relevante Werbeanzeigen angezeigt werden Website („Facebook-Ads“) auf ihren Bildschirmen anzuzeigen. Wir verfolgen daher das Interesse, Ihnen für Sie interessante Werbeanzeigen anzuzeigen, um unser Online-Angebot für Sie interessanter zu gestalten. Rechtsgrundlage für die Verarbeitung Ihrer Daten ist Art. Abs. 6 1 Seite 1f Datenschutz-Grundverordnung.
      <br /> <br />
      Durch den Einsatz von Marketing-Tools baut Ihr Browser automatisch eine direkte Verbindung mit den Servern von Facebook auf. Wir haben keinen Einfluss auf den Umfang und die Verwendung der Daten, die Facebook mit diesem Tool erhebt. Daher stellen wir Ihnen die uns vorliegenden Informationen zur Verfügung: Durch Facebook Custom Audiences wird Facebook darüber informiert, dass Sie die Online-Angebote der entsprechenden Seiten aufgerufen haben unsere Seiten besucht haben oder auf eine unserer Anzeigen geklickt haben. Wenn Sie sich für Facebook-Dienste registrieren, kann Facebook den Zugriff auf Ihr Konto zuordnen. Auch wenn Sie nicht bei Facebook registriert sind bzw. sich nicht eingeloggt haben, besteht die Möglichkeit, dass der Anbieter Ihre IP-Adresse und weitere identifizierende Informationen in Erfahrung bringt und speichert.
      <br /> <br />
      Benutzer von <a href="https://www.facebook.com/settings/?tab=ads#_" target="_blank" class="underline">https://www.facebook.com/settings/?tab=ads#_</a> können die Funktion „Facebook Custom Audiences“ deaktivieren.
      <br /> <br />
      Nähere Informationen zur Datenverarbeitung durch Facebook finden Sie unter <a href="https://www.facebook.com/about/privacy" target="_blank" class="underline">https://www.facebook.com/about/privacy</a>.
      </p>
      `,
    },
    {
      name: 'Social-Media-Plugins',
      description: `
      <p class="mb-15">
      Unsere Online-Angebote nutzen Social-Media-Plugins des sozialen Netzwerks Facebook. <a href="https://www.facebook.com" target="_blank" class="underline">www.facebook.com</a> by Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA and <a href="https://www.facebook.be" target="_blank" class="underline">www.facebook.be</a> von Facebook Ireland Limited, Hanover Reach. Facebook Ireland Limited, Hanover Reach, 5-7 Hanover Quay, Dublin Operations 2, Irland („Facebook“).
      <br /> <br />
      Eine Zusammenfassung des Facebook-Plugins finden Sie hier: <a href="http://developers.facebook.com/docs/plugins" target="_blank" class="underline">http://developers.facebook.com/docs/plugins</a>; Weitere Informationen zum Datenschutz bei Facebook finden Sie unter: <a href="https://www.facebook.com/policy.php" target="_blank" class="underline">www.facebook.com/policy.php</a>
      <br /> <br />
      Dadurch erhält Facebook die Information, dass Sie die entsprechende Seite unseres Online-Angebots besucht und ggf. mit dem Plugin interagiert haben. Durch die Aktivierung des Plug-ins werden personenbezogene Daten von Ihnen an Facebook in den USA übermittelt und dort gespeichert.
      <br /> <br />
      Wir haben weder Einfluss auf die erhobenen Daten und die Datenverarbeitung, noch sind uns der genaue Umfang der Datenerhebung, der Zweck der Verarbeitung und die Speicherdauer bekannt. Auch zur Löschung der erhobenen Daten durch Facebook liegen uns keine Informationen vor.
      <br /> <br />
      Facebook speichert die über Sie erhobenen Daten in Ihrem Nutzerprofil und nutzt diese für Zwecke der Werbung, Marktforschung und/oder bedarfsgerechten Gestaltung seiner Website. Der Zweck dieser Verarbeitung besteht insbesondere darin, (selbst für nicht eingeloggte Nutzer) bedarfsgerechte Werbung zu erbringen und andere Nutzer des sozialen Netzwerks über Ihre Aktivitäten auf unserer Website zu informieren. Sie haben das Recht, der Erstellung dieses Nutzerprofils zu widersprechen. Zur Ausübung dieses Rechts müssen Sie sich in diesem Fall an Facebook wenden.
      <br /> <br />
      Wir bieten Ihnen die Möglichkeit, über Plugins mit sozialen Netzwerken und anderen Nutzern zu interagieren, um unsere Dienste zu verbessern und für Sie als Nutzer interessanter zu gestalten. Rechtsgrundlage für die Nutzung von Plug-Ins ist Art. 6 Abs. 1 lit. f DSGVO. 6 Abs. 1 o. 1f Datenschutz-Grundverordnung.
      <br /> <br />
      Sie können das Laden der Plug-ins grundsätzlich auch mit Add-ons für Ihren Browser (sog. Script-Blocker) komplett verhindern.
      </p>
      `,
    },
    {
      name: 'AppNexus',
      description: `
      <p class="mb-15">
      Unsere Online-Angebote nutzen AppNexus, einen Dienst der AppNexus Inc. 28 W 23rd Street, 4th floor, New York, New York – 10010, USA. AppNexus verwendet Cookies, Web Beacons usw., die auf Ihrem Computer gespeichert werden und eine Analyse der Website-Nutzung ermöglichen. Im Rahmen dieser Nutzung können Daten, insbesondere IP-Adressen und Nutzeraktivitäten, an Server der AppNexus Inc. übertragen und dort gespeichert werden. AppNexus Inc. gibt diese Informationen gegebenenfalls an Dritte weiter, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten verarbeiten. Sie können die Erfassung und Übermittlung personenbezogener Daten (insbesondere Ihrer IP-Adresse) sowie die Verarbeitung dieser Daten verhindern, indem Sie die Ausführung von Java-Script in Ihrem Browser deaktivieren oder Tools wie „NoScript“ installieren. Weitere Informationen finden Sie in der Datenschutzerklärung von AppNexus (<a href="https://www.appnexus.com/en/company/platform-privacy-policy" target="_blank" class="underline">https:/ /www.appnexus.com/en/company/platform-privacy-policy</a>). Sie können sich auch von AppNexus abmelden unter: <a href="https://www.appnexus.com/en/company/platform-privacy-policy#choices" target="_blank" class="underline">https://www.appnexus.com/en/company/platform-privacy-policy#choices</a>
      <br /> <br />
      Rechtsgrundlage für die Verarbeitung ist Art. Die Verarbeitung unserer berechtigten Interessen gemäß Art. 6 Abs. 6 Abs. 1 lit. f DSGVO dient der Verbesserung des Komforts und der Qualität unseres Online-Angebots.
      </p>
      `,
    },
    {
      name: 'Doppelklick',
      description: `
      <p class="mb-15">
        Unsere Online-Angebote mit Doubleclick (<a href="https://www.doubleclick.com" target="_blank" class="underline">www.doubleclick.com</a>) von Google Ireland Limited, Gordon House, Mountain View, Barrow St Dublin 4 Ireland („Google“) nutzt Technologien, um Ihnen Werbung anzuzeigen, die für Sie von Interesse sein könnte. Wenn Sie nicht möchten, dass Doubleclick weiterhin anonyme Daten sammelt, können Sie hier ein Opt-Out-Cookie setzen: <a href="https://www.google.de/settings/ads/onweb#display_optout" target="_blank" class="underline">https://www.google.de/settings/ads/onweb#display_optout</a>
      <br /> <br />
        Dieses OptOut-Cookie löscht die bisher gespeicherten Informationen und verhindert die weitere Erfassung dieser Informationen.
      <br /> <br />
        Rechtsgrundlage für diese Verarbeitung ist Art. Die Verarbeitung unserer berechtigten Interessen gemäß Art. 6 Abs. 6 Abs. 1 lit. f DSGVO dient der Verbesserung des Komforts und der Qualität unseres Online-Angebots.
      </p>
      `,
    },
    {
      name: 'Chisma',
      description: `
      <p class="mb-15">
        Unsere Online-Angebote nutzen die Dienste der Quisma GmbH, Rosenheimer Straße 145d, 81671 München, Deutschland. Quisma Web Beacons sammeln pseudonyme Informationen über den Zugriffsvorgang des Nutzers, um das Verhalten des Nutzers nachvollziehen zu können. Der hierbei erzeugte Cookie dient der Speicherung pseudonymisierter Informationen unter einer zufällig generierten Nutzerkennung (Pseudonym). Dabei wird der geografische Standort grob ermittelt und die IP-Adresse des Nutzers kurzzeitig analysiert. Nach Abschluss der datenschutzkonformen verkürzten Analyse wird die IP-Adresse vollständig anonymisiert. Es ist zu keinem Zeitpunkt möglich, eine konkrete Einigung mit einer Person oder einer bestimmten Adresse zu erzielen. Sie können der Setzung von Cookies und dem Tracking durch die Quisma-Technologie auch jederzeit widersprechen, indem Sie das Opt-Out-Cookie herunterladen und installieren (<a href="http://privacy.quisma.com/uk/cookie-opt-out). /" target="_blank" class="underline">http://privacy.quisma.com/uk/cookie-opt-out/</a>). Weitere Informationen finden Sie in der Datenschutzerklärung von Quisma (<a href="https://privacy.quisma.com/datenschutz/quisma-websites/" target="_blank" class="underline">https://privacy.quisma .com/datenschutz/quisma-websites/</a>).
      <br /> <br />
        Rechtsgrundlage für die Verarbeitung ist Art. Art. 6 Abs. 1 lit. f DSGVO, um auf Grundlage unserer berechtigten Interessen den Komfort und die Qualität unseres Online-Angebots zu verbessern.
      </p>
      `,
    },
  ],
}

function PrivacyPolicyPageDe() {
  return (
    <>
      <h1 className="sr-only">GAME-Datenschutzrichtlinie</h1>
      <SiteHelpTabs {...tabs} />
      <PrivacyPolicy {...privacyPolicyProps} />
    </>
  )
}

export { PrivacyPolicyPageDe }
