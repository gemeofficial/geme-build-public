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
    Bei ROKH setzen wir uns für den Schutz der Privatsphäre und personenbezogenen Daten unserer Kunden ein. Daher halten wir es für sehr wichtig, unsere Kunden darüber zu informieren, wie wir ihre Daten verarbeiten und warum wir sie genau benötigen.
    <br /> <br />
    Diese Datenschutzerklärung soll Sie über die Verarbeitung von Daten im Rahmen unserer Website und der damit verbundenen Dienstleistungen informieren. Die Verarbeitung personenbezogener Daten erfolgt nur im Rahmen der entsprechenden anwendbaren gesetzlichen Datenschutzbestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO).
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
      name: 'Personenbezogene Daten',
      description: `
      <p class="mb-15">
      Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen; eine natürliche Person gilt als identifizierbar, wenn sie direkt oder indirekt identifiziert werden kann, insbesondere durch die Verwendung von Identifikationen wie Name, ID-Nummer, Standortkoordinaten, Online-Kennung oder durch die Verknüpfung mit einer oder mehreren Eigenschaften, die die physische, physiologische, genetische, psychologische, wirtschaftliche, kulturelle oder soziale Identität ausdrücken. Dies umfasst alle Informationen, die sich auf Ihre Identitäten beziehen, wie Ihren Namen, Ihre E-Mail-Adresse oder Postadresse, Ihre Kundennummer und eine Online-Kennung.
      <br /> <br />
      Grundsätzlich können Sie unsere Online- und Mobilen Dienste nutzen, ohne Ihre Identität preiszugeben und ohne personenbezogene Daten zu übermitteln. Personenbezogene Daten über Sie werden jedoch bei der Nutzung bestimmter Dienste unseres Online-Shops und Anwendungen erfasst.
      </p>
      `,
    },
    {
      name: 'Speicherung personenbezogener Daten',
      description: `
      <p class="mb-15">
      Ihre Daten werden von uns auf speziell geschützten Servern gespeichert. Sie sind durch technische und organisatorische Maßnahmen geschützt, um Verlust, Zerstörung, Zugriff, Änderung oder Verbreitung durch unbefugte Personen zu verhindern. Nur eine begrenzte Anzahl autorisierter Personen hat Zugriff auf Ihre Daten. Sie sind für die technische, kommerzielle oder redaktionelle Verwaltung des Servers verantwortlich.
      <br /> <br />
      Ihre Daten werden verschlüsselt über das Internet übertragen. Wir verwenden SSL (Secure Sockets Layer) Verschlüsselung für die Datenübertragung.
      </p>
      `,
    },
    {
      name: 'Rechtsgrundlage für die Datenverarbeitung',
      description: `
      <p class="mb-15">
      Wenn wir Ihre Daten verarbeiten, weil dies für die Erfüllung eines Vertrags oder im Rahmen eines quasi-vertraglichen Verhältnisses mit Ihnen erforderlich ist, dient Art. 6 Abs. 1 lit. b) DSGVO als Rechtsgrundlage für die Datenverarbeitung.
      <br /> <br />
      Wenn wir Ihre Daten verarbeiten, um einer rechtlichen Verpflichtung nachzukommen, dient Art. 6 Abs. 1 lit. c) DSGVO als Rechtsgrundlage für die Datenverarbeitung.
      <br /> <br />
      Wenn die Verarbeitung Ihrer Daten erforderlich ist, um die berechtigten Interessen unseres Unternehmens oder Dritter zu wahren, und wenn Ihre Interessen, Grundrechte und Grundfreiheiten in dieser Hinsicht nicht durch die grundlegenden Datenschutzprinzipien erforderlich sind, dient Art. 6 Abs. 1 lit. f) DSGVO als Rechtsgrundlage für die Verarbeitung Ihrer Daten.
      <br /> <br />
      Im Rahmen dieser Datenschutzerklärung geben wir stets die Rechtsgrundlage für die Verarbeitung Ihrer Daten an.
      </p>
      `,
    },
    {
      name: 'Löschung von Daten und Aufbewahrungsfrist',
      description: `
      <p class="mb-15">
      Grundsätzlich werden wir Ihre Daten immer löschen oder sperren, wenn die Speicherung sinnlos wird. Personenbezogene Daten können jedoch an anderer Stelle gespeichert werden, wenn dies durch die gesetzlichen Anforderungen, denen wir unterliegen, vorgeschrieben ist (z.B. im Zusammenhang mit gesetzlichen Aufbewahrungs- und Dokumentationspflichten). In diesem Fall werden wir Ihre Daten nach Abschluss der Verfahren löschen oder sperren.
      </p>
      `,
    },
    {
      name: 'Datenverarbeitung bei allgemeiner Nutzung unserer Angebote',
      description: `
      `,
    },
    {
      name: 'Informationen über das verwendete Kommunikationsgerät',
      description: `
      <p class="mb-15">
      Jedes Mal, wenn Sie auf unsere Online- und Mobilen Angebote zugreifen, erfassen wir die folgenden Informationen über das von Ihnen verwendete Gerät: die IP-Adresse, die Anfrage Ihres Browsers sowie Datum und Uhrzeit dieser Anfrage. Darüber hinaus werden der Status und das Volumen der im Rahmen dieser Anfrage übertragenen Daten erfasst. Wir erfassen auch Informationen über das Produkt und die Version des verwendeten Browsers sowie das Betriebssystem des Geräts und den Internetdienstanbieter. Wir verfolgen auch die Seite, von der aus auf den Dienst zugegriffen wird.
      <br /> <br />
      Die Rechtsgrundlage für die Verarbeitung dieser Daten ist Art. 6 Abs. 1 lit. f DSGVO.
      <br /> <br />
      Wir verarbeiten diese Daten, um Inhalte wie Webseiten auf Ihrem Gerät anzeigen zu können. Darüber hinaus verwenden wir diese Daten für den Betrieb der Online- und Mobilen Dienste, um Fehler zu identifizieren und zu beseitigen, die Last der Online- und Mobilen Dienste zu messen sowie Anpassungen oder Verbesserungen vorzunehmen.
      <br /> <br />
      Diese Zwecke beweisen auch ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO.
      <br /> <br />
      Die IP-Adresse Ihres Geräts wird nur für die Dauer der Nutzung der Online- oder Mobilen Dienste gespeichert und danach gelöscht oder gekürzt. Die Daten werden nur für einen begrenzten Zeitraum gespeichert.
      </p>
      `,
    },
    {
      name: 'Verwendung von Cookies',
      id: 'use-of-cookie',
      description: `
      <p class="mb-15">
      Wir verwenden Cookies, bei denen es sich um kleine Datenmengen in Form von Text handelt, die auf Ihrem Computer gespeichert werden, um bestimmte Parameter und Daten für den Austausch mit unseren Online-Angeboten über Ihren Browser zu speichern. Cookies enthalten in der Regel den Namen der Domain, von der die Cookie-Datei gesendet wird, sowie Informationen über das Alter und den alphanumerischen Identifikator des Cookies. Je nach Inhalt und Speicherdauer gibt es verschiedene Arten von Cookies. Die meisten von uns verwendeten Cookies sind sogenannte "Sitzungscookies", die beim Beenden Ihrer Browsersitzung gelöscht werden. Es gibt auch langlebige Cookies, mit denen wir Sie als Besucher erkennen können.
      <br /> <br />
      Wir informieren Sie im Voraus über die Verwendung von Cookies, indem wir auf einem Banner eine entsprechende Nachricht anzeigen.
      <br /> <br />
      Einige Cookies sind technisch notwendig, um die Nutzung unserer Online- und Mobilen Produkte zu ermöglichen. Mit diesen Cookies erfassen und speichern wir die folgenden Daten.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Spracheinstellungen</li>
        <li class="m-2">Sucheinstellungen</li>
        <li class="m-2">Inhalte von Online-Formularen</li>
        <li class="m-2">Informationen zur Identifizierung oder Authentifizierung von Benutzern</li>
        <li class="m-2">Produkte im Warenkorb</li>
        <li class="m-2">Produkte auf dem Merkzettel</li>
        <li class="m-2">Empfohlene Produkte zum Kauf</li>
      </ul>
      Darüber hinaus verwenden wir Cookies auf unseren Webseiten, um Ihr Nutzerverhalten zu analysieren, was als analytische Cookies bezeichnet wird. Diese Cookies ermöglichen es uns, die folgenden Daten zu erfassen und zu speichern.
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Seitenansichtshäufigkeit</li>
        <li class="m-2">Suchbegriffe</li>
        <li class="m-2">Nutzung von Webseitenfunktionen</li>
      </ul>
      <p class="mb-15">
      Die über Cookies erfassten Daten werden pseudonymisiert und daher ist es nicht mehr möglich, die Daten mit jedem Benutzer zu verknüpfen.
      <br /> <br />
      Die Rechtsgrundlage für die Datenverarbeitung mit Cookies ist Art. 6 Abs. 1 lit. f DSGVO.
      <br /> <br />
      Cookies ermöglichen es uns, Ihren Computer zu erkennen und sofort jede Konfiguration bereitzustellen. Cookies helfen uns, unsere Online-Dienste zu verbessern und Ihnen einen besseren und personalisierten Service bieten zu können. Die Verwendung von Cookies ist erforderlich, um Ihre Nutzung unserer Online-Dienste zu erleichtern, und bestimmte Funktionen können Ihnen nur durch die Verwendung von Cookies bereitgestellt werden. Dies umfasst Abfragen, Online-Formulare, Kundenkonten, Produktkörbe und Merkzettel.
      <br /> <br />
      Wir verwenden analytische Cookies, um die Qualität unserer Online-Dienste und deren Inhalt zu verbessern und zu optimieren.
      <br /> <br />
      Diese Zwecke beweisen auch ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO.
      <br /> <br />
      Die technisch notwendigen Cookies, die wir verwenden, sind sogenannte Sitzungscookies, die nach dem Ende der Browsersitzung automatisch gelöscht werden. Die verbleibenden Cookies werden auf Ihrem Computer gespeichert. Die meisten Browser sind auch so konfiguriert, dass sie Cookies automatisch akzeptieren; sie können jedoch die Speicherung von Cookies deaktivieren oder Ihren Browser so konfigurieren, dass Sie sofort benachrichtigt werden, wenn ein Cookie gesendet wird. Bitte beachten Sie, dass Sie in einigen Fällen, wenn Sie die Speicherung eines Cookies ablehnen, unsere Online-Dienste nur in begrenztem Umfang oder gar nicht nutzen können.
      <br /> <br />
      Um das Benutzerverhalten für die oben beschriebenen Zwecke zu analysieren, verwenden wir die unten genannten Programme, die wiederum Cookies wie oben beschrieben verwenden, und die gespeicherten Daten werden gelöscht, sobald sie für die beschriebenen Zwecke nicht mehr benötigt werden.
      </p>
      `,
    },
    {
      name: 'Google Analytics',
      description: `
        <p class="mb-15">
        Wir verwenden Google Analytics für die statistische Analyse. Google Analytics ist ein Webanalysedienst von Google LLC., 1600 Amphitheatre Parkway, Mountain View, CA 94034, USA ("Google"). Google Analytics verwendet "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden, um Ihre Nutzung der Website zu analysieren. Diese Informationen werden an Google-Server in den USA übermittelt und dort gespeichert. Wenn die IP-Anonymisierung auf dieser Website aktiviert ist, wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Google-Server in den USA übertragen und dort gekürzt. Google wird diese Informationen im Auftrag des Betreibers dieser Website verwenden, um Ihre Nutzung der Website auszuwerten, Berichte über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen jedoch darauf hin, dass Sie in diesem Fall möglicherweise nicht sämtliche Funktionen dieser Website vollumfänglich nutzen können. Weiterführende Informationen finden Sie unter <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" class="underline">http://tools.google.com/dlpage/gaoptout?hl=de</a>.
        <br /> <br />
        Weitere Informationen hierzu finden Sie unter <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" class="underline">http://tools.google.com/dlpage/gaoptout?hl=de</a> oder <a href="http://www.google.com/intl/de/analytics/privacyoverview.html" target="_blank" class="underline">http://www.google.com/intl/de/analytics/privacyoverview.html</a> (über die allgemeinen Informationen von Google Analytics und den Datenschutz). Wir weisen darauf hin, dass auf dieser Website Google Analytics um den Code "anonymizeIp();" erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen (sogenanntes IP-Masking) zu gewährleisten.
        </p>
        `,
    },
    {
      name: 'Retargeting und Remarketing',
      description: `
        <p class="mb-15">
        Der Begriff Retargeting oder Remarketing bezieht sich auf Techniken, die es ermöglichen, relevante Werbung an Nutzer zu schalten, die zuvor bestimmte Webseiten besucht haben, auch wenn sie diese Seiten verlassen haben. Dazu muss der Nutzer nach dem Verlassen der Unternehmenswebsite erneut identifiziert werden, was durch die Verwendung von Cookies des jeweiligen Dienstanbieters erfolgen kann. Darüber hinaus wird das bisherige Verhalten des Nutzers berücksichtigt. Beispielsweise kann Werbung für bestimmte Produkte, die sich der Nutzer angesehen hat, oder für ähnliche Produkte später auf anderen Internetseiten erscheinen. Dies ist personalisierte Werbung, die auf die Bedürfnisse einzelner Nutzer zugeschnitten ist. Für solche personalisierten Anzeigen muss der Nutzer nicht erneut identifiziert werden, sobald er identifiziert ist. Daher werden die für das Retargeting oder Remarketing verwendeten Daten auch nicht mit anderen Daten kombiniert.
        <br /> <br />
        Wir verwenden solche Technologien, um Werbung im Internet zu schalten. Um die Anzeigen zu schalten, nutzen wir Drittanbieter. Darüber hinaus verwenden wir einen Dienst von Google, der es uns ermöglicht, automatisch Produkte von Interesse für Internetnutzer anzuzeigen. Diese Funktion wird über Cookies implementiert. Weitere Informationen zu dieser Technologie finden Sie in den Google-Datenschutzbestimmungen unter <a href="https://policies.google.com/privacy?hl=de" target="_blank" class="underline">https://policies.google.com/privacy?hl=de</a>. Durch den Besuch der Internetseite <a href="http://www.google.com/policies/privacy/ads/" target="_blank" class="underline">http://www.google.com/policies/privacy/ads/</a> und die entsprechende Änderung der Konfiguration können Sie die Installation von Cookies für Google-Remarketing und Google AdWords Conversion Tracking durch eine entsprechende Einstellung in Ihrer Browser-Software blockieren.
        <br /> <br />
        Diese Website verwendet Redirect-Tags von Google, Appnexus und Performance Profiles, um Produkte von ROKH zu bewerben. Der auf dieser Website implementierte Redirect-JavaScript-Code speichert ein Cookie auf dem Computer des Nutzers für Umleitungszwecke. Wenn der Nutzer Aktionen auf der Google-Suchseite und den Websites des Google Display-Netzwerks, von Appnexus und Performance Profiles ausführt, wird dem Nutzer anschließend ein ROKH-Banner oder eine Werbung angezeigt. Während dieses Prozesses werden alle Daten anonym gesammelt und können daher keiner bestimmten Person zugeordnet werden. Nutzer können der Retargeting-Funktion widersprechen, indem sie die Anzeigeneinstellungen des Google-Remarketing-Tabs ändern oder das Retargeting deaktivieren.
        </p>
        `,
    },
    {
      name: 'Registrierung',
      description: `
        <p class="mb-15">
        Sie können sich auch als Nutzer unserer Online- und Mobilangebote registrieren. Dazu müssen Sie die erforderlichen Daten wie Name, Adresse und E-Mail-Adresse in die Eingabemaske eingeben. Darüber hinaus erfassen wir das Datum und die Uhrzeit der Registrierung sowie die IP-Adresse. Im Rahmen des Registrierungsprozesses bitten wir Sie um Ihre Zustimmung zur Nutzung der Daten.
        <br /> <br />
        Die rechtliche Grundlage für die Verarbeitung der Registrierungsdaten ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Wenn Sie sich bei uns registrieren, um einen Vertrag zu erfüllen oder abzuschließen, ist die zusätzliche rechtliche Grundlage für die Datenverarbeitung Art. 6 Abs. 1 lit. b DSGVO.
        <br /> <br />
        Die Registrierung ist erforderlich, um einen Vertrag mit uns abzuschließen oder zu erfüllen.
        <br /> <br />
        Die Daten werden bei uns so lange gespeichert, wie es für die Erfüllung des Vertrags erforderlich ist. Darüber hinaus speichern wir diese Daten zur Erfüllung unserer nachvertraglichen Verpflichtungen und gemäß den handels- und steuerrechtlichen Aufbewahrungsfristen. Diese Aufbewahrungsfrist beträgt normalerweise 10 Jahre bis zum Ende des jeweiligen Kalenderjahres.
        </p>
        `,
    },
    {
      name: 'Bearbeitung von Bestellungen aus unserem Online-Shop',
      description: `
        <p class="mb-15">
        Ihre persönlichen Daten werden nur verwendet, wenn Bestellungen von unserem Unternehmen und verbundenen Unternehmen sowie von Unternehmen, die mit der Bearbeitung von Bestellungen beauftragt sind, aufgegeben werden.
        <br /> <br />
        Für die Bestellabwicklung arbeiten wir mit verschiedenen Unternehmen zusammen, die für die Zahlungsabwicklung und Logistik verantwortlich sind. Wir stellen sicher, dass unsere Partner auch in diesem Prozess die Datenschutzbestimmungen einhalten. Daher übermitteln wir Ihre Kontaktdaten (Name und Adresse) an das jeweilige Versandunternehmen, das die bestellten Produkte an Sie liefert.
        <br /> <br />
        Die rechtliche Grundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO. Die Verarbeitung Ihrer persönlichen Daten ist erforderlich, um den Vertrag zu erfüllen, den wir mit Ihnen geschlossen haben.
        <br /> <br />
        Wir speichern die Daten so lange, wie es für die Erfüllung des Vertrags erforderlich ist. Darüber hinaus speichern wir diese Daten zur Erfüllung unserer nachvertraglichen Verpflichtungen und gemäß den handels- und steuerrechtlichen Aufbewahrungsfristen. Diese Aufbewahrungsfrist beträgt normalerweise 10 Jahre bis zum Ende des jeweiligen Kalenderjahres.
        <br /> <br />
        Zahlungsabwicklung bei Bestellungen, Paypal, Stripe
        <br /> <br />
        Abhängig von der gewählten Zahlungsmethode kann die Zahlungsabwicklung während einer Bestellung über einen Dienstleister erfolgen.
        <br /> <br />
        Wenn die Zahlung per Kreditkarte erfolgt, werden die dafür erforderlichen Daten wie Name, Adresse und Kaufdaten an das betreffende Kreditkartenunternehmen übermittelt.
        <br /> <br />
        Wenn die Zahlung über PayPal erfolgt, werden Sie zu einem Link zur PayPal-Webseite weitergeleitet. Ihre persönlichen Daten werden in diesem Prozess verarbeitet. Dazu gehören Ihr Name, Ihre Adresse, Ihre E-Mail-Adresse, Ihre Telefonnummer und Ihre Bank- oder Kreditkartendaten (sofern zutreffend). Die allgemeinen Geschäftsbedingungen, Nutzungsbedingungen und die Datenschutzrichtlinie von PayPal (Europe) S.à rl et Cie, SCA, 22-24 Boulevard Royal, L-2449 Luxemburg finden Sie auf der Webseite <a href="https://www.paypal.com" target="_blank" class="underline">www.paypal.com</a>.
        <br /> <br />
        Bei Zahlungen mit Strip Amount werden Sie zu einem Link zur Webseite von Stripe, einem Dienst von Stripe Payments Europe, Limited ("SPEL"), weitergeleitet. Während dieses Prozesses werden Ihre persönlichen Daten verarbeitet. Dazu gehören Ihr Name, Ihre Adresse, Ihre E-Mail-Adresse, Ihre Telefonnummer und Ihre Kontodaten oder Kreditkartendaten (sofern zutreffend). Die relevanten Geschäftsbedingungen, Nutzungsbedingungen und die Datenschutzrichtlinie finden Sie unter <a href="https://stripe.com/ie/ssa" target="_blank" class="underline">https://stripe.com/ie/ssa</a>.
        <br /> <br />
        Die rechtliche Grundlage für die Zahlungsabwicklung ist Art. 6 Abs. 1 lit. b DSGVO. Die Verarbeitung Ihrer persönlichen Daten ist erforderlich, um den mit Ihnen geschlossenen Vertrag zu erfüllen.
        <br /> <br />
        Wir speichern die Daten so lange, wie es für die Erfüllung des Vertrags erforderlich ist. Darüber hinaus speichern wir die Daten zur Erfüllung unserer nachvertraglichen Verpflichtungen und gemäß den handels- und steuerrechtlichen Aufbewahrungsfristen. Diese Aufbewahrungsfrist beträgt normalerweise 10 Jahre bis zum Ende des jeweiligen Kalenderjahres.
        </p>
        `,
    },
    {
      name: 'Zusätzliche Datenverarbeitung bei Nutzung der von ROKH bereitgestellten Anwendung (demnächst verfügbar)',
      description: `
        <p class="mb-15">
        Bei der Nutzung der Anwendung werden folgende Daten verarbeitet.
        </p>
        <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Registrierungsdaten</li>
        <li class="m-2">Kundennummer, ROKH-Konto</li>
        <li class="m-2">Herstellungsnummer des Geräts</li>
        <li class="m-2">Funktionale Eigenschaften des Geräts, Grunddaten des Geräts</li>
        <li class="m-2">Gerätenutzungsdaten</li>
        <li class="m-2">Gerätestatusdaten</li>
        <li class="m-2">Anwendungsnutzungsdaten</li>
        <li class="m-2">Persönliche Telekommunikationsdaten</li>
        </ul>
        <p class="mb-15">
        Um alle Funktionen der geme@mobile-Anwendung nutzen zu können, ist eine spezifische Systemberechtigung erforderlich. Wenn Sie die Anwendung starten und/oder nur die relevanten Funktionen nutzen, werden Sie aufgefordert, die entsprechenden Berechtigungen zu erteilen. Bitte beachten Sie jedoch, dass die ordnungsgemäße Nutzung der App den Zugriff auf bestimmte Funktionen Ihres Mobilgeräts (Smartphone oder Tablet) und den Zugriff auf Ihre persönlichen Daten erfordert.
        <br /> <br />
        Die geme@mobile-App ist in sogenannten App-Stores erhältlich, die von Dritten betrieben werden (Google Play Store und Apple App Store). Das Herunterladen der App erfordert in der Regel eine vorherige Registrierung beim jeweiligen App-Store. Wir haben keine Kontrolle über die in diesem Zusammenhang erhobenen, verarbeiteten und genutzten personenbezogenen Daten. In solchen Fällen liegt die Verantwortung allein beim Betreiber des jeweiligen App-Stores.
        <br /> <br />
        Die rechtliche Grundlage für die Datenverarbeitung ist im Falle der Einwilligung Art. 6 Abs. 1 lit. a DSGVO. Die zusätzliche rechtliche Grundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, wenn die Datenverarbeitung zur Erbringung der von der jeweiligen Anwendung angebotenen Dienste erforderlich ist. Die von den Geräten verwendeten Daten werden anonymisiert, damit unsere Produkte und Anwendungen kontinuierlich verbessert werden können. Die rechtliche Grundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO, die Optimierung von Produkten und Dienstleistungen regt gleichzeitig unser berechtigtes Interesse an.
        <br /> <br />
        Wir verarbeiten Daten zu folgenden Zwecken
        </p>
        <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Verbesserung unserer Produkte und Dienstleistungen (z.B. die verwendeten Programme und andere Funktionen der Haushaltsgeräte und Anwendungen)</li>
        <li class="m-2">Kontaktaufnahme mit Ihnen, um gezielte Service- und Produktangebote zu senden, die Ihren Bedürfnissen entsprechen</li>
        <li class="m-2">Beseitigung oder Vermeidung von Störungen</li>
        <li class="m-2">Sicherstellung und Verbesserung der Benutzerfreundlichkeit der Anwendung</li>
        <li class="m-2">Bereitstellung der von der Anwendung angebotenen Dienste</li>
        </ul>
        <p class="mb-15">Wir speichern die Daten nur so lange, wie es zur Erreichung des gewünschten Ziels erforderlich ist.</p>
        `,
    },
    {
      name: 'Zusätzliche Datenverarbeitung bei Nutzung von GCN',
      description: `
        <p class="mb-15">
        Im Rahmen der Ausführung des Mietvertrags verarbeiten wir über das GCN-Portal folgende personenbezogene Daten.
        </p>
        <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Nachname</li>
        <li class="m-2">Adresse</li>
        <li class="m-2">E-Mail-Adresse</li>
        <li class="m-2">IP-Adresse</li>
        <li class="m-2">Kundennummer</li>
        <li class="m-2">Herstellungsnummer des Geräts</li>
        <li class="m-2">Funktionale Eigenschaften des Geräts</li>
        <li class="m-2">Gerätenutzungsdaten</li>
        </ul>
        <p class="mb-15">
        Die Daten werden verarbeitet, um den "GCN"-Mietvertrag auszuführen. Die rechtliche Grundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO. Wir kombinieren Ihre Benutzerdaten (Vor- und Nachname, Adresse, E-Mail) mit den verfügbaren Gerätedaten (z.B. Herstellungsnummer des Geräts), um Ihr Konto gemäß dem Mietvertrag zu belasten. Insbesondere benötigen wir Gerätenutzungsdaten (z.B. Grundeinstellungen, Programmauswahl, Programmeinstellungen, Programmnutzung), um Mietraten und Wartungstermine zu berechnen.
        <br /> <br />
        Darüber hinaus werden Nutzungsdaten, die sich aus Interaktionen mit dem GCN-Portal ergeben, verfolgt und verwendet, um das GCN-Portal und die Produkte kontinuierlich zu optimieren. Die rechtliche Grundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, die Optimierung des Dienstes beweist gleichzeitig unser berechtigtes Interesse.
        <br /> <br />
        Wir speichern die Daten nur so lange, wie es zur Ausführung des Vertrags und zur Erreichung des Zwecks erforderlich ist.
        </p>
        `,
    },
    {
      name: 'Zusätzliche Datenverarbeitung bei Nutzung der von uns bereitgestellten Alexa-Skill',
      description: `
        <p class="mb-15">
        Zur Nutzung der ROKH-Skill sind folgende Daten erforderlich.
        </p>
        <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Registrierungsinformationen</li>
        <li class="m-2">ROKH-Kundennummer</li>
        <li class="m-2">Herstellungsnummer des Geräts</li>
        <li class="m-2">Funktionale Eigenschaften des Geräts</li>
        <li class="m-2">Persönliche Telekommunikationskennungen</li>
        <li class="m-2">ROKH-Status des Geräts</li>
        </ul>
        <p class="mb-15">
        ROKH nutzt die Skill-Implementierung des Dienstes Amazon Europe Core S.à.rl, sis 5, Rue Plaetis, L-2338 Luxemburg, und sammelt anonyme Nutzungsstatistiken und Serverprotokolle, um Fehler zu erkennen und die Benutzererfahrung zu verbessern. Dazu gehören die Anzahl der Funktionsaufrufe, die Nutzungsfrequenz und Fehlermeldungen. Diese Daten werden von ROKH anonymisiert verarbeitet. Die Datenschutzerklärung von amazon.de finden Sie unter <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=3312401" target="_blank" class="underline">https://www.amazon.de/gp/help/customer/display.html?nodeId=3312401</a>
        <br /> <br />
        ROKH-Skills sind im Amazon Alexa Skills Store erhältlich, der von Amazon betrieben wird. Das Aktivieren der Amazon Alexa-Skills und die allgemeine Nutzung erfordern in der Regel eine vorherige Registrierung bei Amazon. Wir haben keine Kontrolle über die in diesem Zusammenhang erhobenen, verarbeiteten und genutzten personenbezogenen Daten. In diesem Fall liegt die Verantwortung allein bei Amazon.
        <br /> <br />
        Die rechtliche Grundlage für die Datenverarbeitung ist im Falle der Einwilligung Art. 6 Abs. 1 lit. a DSGVO. Die zusätzliche rechtliche Grundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, wenn die Datenverarbeitung zur Erbringung der von der jeweiligen Anwendung angebotenen Dienste erforderlich ist. Darüber hinaus werden Gerätenutzungsdaten anonymisiert verwendet, damit unsere Produkte und Anwendungen kontinuierlich verbessert werden können. Die rechtliche Grundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO, die Optimierung von Produkten und Dienstleistungen regt gleichzeitig unser berechtigtes Interesse an.
        <br /> <br />
        Wir verarbeiten Daten zu folgenden Zwecken.
        </p>
        <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Sicherstellung der Interaktion von ROKH-Geräten mit Alexa-Terminals</li>
        <li class="m-2">Bereitstellung der entsprechenden Dienste in der ROKH-Alexa-Skill</li>
        <li class="m-2">Verbesserung unserer Produkte und Dienstleistungen (z.B. die verwendeten Programme und andere Funktionen der Haushaltsgeräte und Anwendungen)</li>
        <li class="m-2">Kontaktaufnahme mit Ihnen, um gezielte Produkt- und Serviceangebote zu senden, die Ihren Bedürfnissen entsprechen</li>
        <li class="m-2">Sicherstellung und Verbesserung der Benutzerfreundlichkeit der ROKH-Alexa-Skill</li>
        <li class="m-2">Sicherstellung der Interaktion von ROKH-Geräten mit Alexa-Terminals</li>
        <li class="m-2">Bereitstellung der entsprechenden Dienste in der ROKH-Alexa-Skill</li>
        </ul>
        <p class="mb-15">
        Wir speichern Daten nur so lange, wie es zur Erreichung des beabsichtigten Zwecks erforderlich ist.
        </p>
        `,
    },
    {
      name: 'Bewerbungsportal',
      description: `
        <p class="mb-15">
        Sie können sich über das Bewerbungsportal bei uns bewerben und alle erforderlichen Informationen und Dokumente zu diesem Zweck senden. Dazu können Sie das Online-Formular verwenden und uns Ihre Bewerbungsunterlagen auf diesem Weg zusenden. Die Nutzung des Bewerbungsportals ist optional; Sie können uns Ihre Bewerbung auch auf andere Weise zusenden, zum Beispiel per E-Mail oder Post.
        <br /> <br />
        Wenn eine Bewerbung über das Bewerbungsportal eingeht, werden Ihre Unterlagen elektronisch an unser zuständiges Personal übermittelt. Wenn Sie sich auf ein Stellenangebot bewerben, werden diese Unterlagen automatisch sechs Monate nach Abschluss des Einstellungsverfahrens vernichtet, sofern deren Löschung keine anderen berechtigten Interessen beeinträchtigt. Ein berechtigtes Interesse in diesem Sinne ist beispielsweise die Nachweispflicht in Verfahren nach dem Allgemeinen Gleichbehandlungsgesetz (AGG). Wenn die Bewerbung sich nicht auf ein Stellenangebot bezieht (Initiativbewerbung), wird die Bewerbung so lange aufbewahrt, bis sie möglicherweise von Interesse ist. Sie können jederzeit die Löschung Ihrer Bewerbung verlangen, auch vor Ablauf der angegebenen Aufbewahrungsfrist. Wird die Bewerbung angenommen, werden die übermittelten Daten zur Abwicklung der Einstellung unter Berücksichtigung der gesetzlichen Anforderungen gespeichert. In allen anderen Fällen ist die rechtliche Grundlage für die Speicherung Ihrer Bewerbungsdaten Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
        </p>
        `,
    },
    {
      name: 'Kommunikation mit uns',
      description: `
        <p class="mb-15">
        Sie können auf verschiedene Weise mit uns in Kontakt treten, einschließlich über das Kontaktformular auf unserer Webseite. Darüber hinaus informieren wir Sie gerne regelmäßig über unseren E-Mail-Newsletter.
        </p>
        `,
    },
    {
      name: 'Newsletter',
      description: `
        <p class="mb-15">
        Bei der Anmeldung zu unserem Newsletter wird Ihre E-Mail-Adresse für Werbezwecke genutzt, bis Sie sich abmelden. Zu diesem Zweck erhalten Sie regelmäßig Informationen zu aktuellen Themen und in besonderen Fällen spezielle Angebote per E-Mail. E-Mails können personalisiert und individuell auf der Grundlage der Informationen, die wir über Sie haben, gestaltet werden.
        <br /> <br />
        Für die Registrierung zu unserem Newsletter, wenn Sie uns nicht schriftlich Ihre Zustimmung gegeben haben, verwenden wir das sogenannte Double-Opt-In-Verfahren. Das bedeutet, dass wir Ihnen erst dann den Newsletter per E-Mail zusenden, wenn Sie uns ausdrücklich bestätigt haben, dass wir den Newsletter-Versand aktivieren sollen. Wir senden Ihnen dann eine E-Mail und bitten Sie, auf den in dieser E-Mail enthaltenen Link zu klicken, um zu bestätigen, dass Sie unseren Newsletter erhalten möchten.
        <br /> <br />
        Die rechtliche Grundlage für die Verarbeitung Ihrer Daten ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO, wenn Sie sich ausdrücklich für den Newsletter angemeldet haben. Im Rahmen der gesetzlichen Bestimmungen können Sie unseren Newsletter auch ohne ausdrückliche Einwilligung erhalten, wenn wir Ihre E-Mail-Adresse im Zusammenhang mit dem Verkauf eines Produkts oder einer Dienstleistung von Ihnen erhalten und Sie dem Erhalt von Informationen per E-Mail nicht widersprochen haben. In diesem Fall wird unser berechtigtes Interesse an der Übermittlung von Direktwerbung als rechtliche Grundlage gemäß Art. 6 Abs. 1 lit. f DSGVO betrachtet.
        <br /> <br />
        Wenn Sie unseren Newsletter nicht mehr erhalten möchten, können Sie Ihre aktuell gültige Einwilligung jederzeit mit sofortiger Wirkung widerrufen oder den Newsletter ohne zusätzliche Kosten abbestellen. Verwenden Sie einfach den in jedem Newsletter enthaltenen Abmeldelink oder senden Sie uns eine Nachricht an unseren Datenschutzbeauftragten.
        </p>
        `,
    },
    {
      name: 'Kontakt',
      description: `
        <p class="mb-15">
        Sie können uns über unsere Kundenhotline, E-Mail, Chat oder per Post kontaktieren. Wenn Sie eine dieser Kontaktmethoden nutzen möchten, erheben wir die personenbezogenen Daten, die Sie uns über den gewählten Kontaktkanal zu diesem Zweck übermitteln. Dies können Name, Adresse, E-Mail-Adresse, Kundennummer und Telefonnummer sein. Es liegt an Ihnen, zu entscheiden, welche Informationen Sie uns über den Kontaktkanal senden möchten.
        <br /> <br />
        Wir verarbeiten diese Daten, um Ihre Fragen beantworten oder Ihre Anliegen bearbeiten zu können.
        <br /> <br />
        Wenn Sie das Kontaktformular in unserem Online-Angebot nutzen möchten, erheben wir die personenbezogenen Daten, die Sie im Kontaktformular angeben, insbesondere Name und E-Mail-Adresse. Darüber hinaus speichern wir die IP-Adresse sowie Datum und Uhrzeit der Anfrage. Wir verarbeiten die über das Kontaktformular übermittelten Daten ausschließlich, um Ihre Fragen und Anliegen beantworten zu können.
        </p>
        `,
    },
    {
      name: 'Qualität',
      description: `
        <p class="mb-15">
        Auf unserer Website verwenden wir die Dienste ausgewählter Unternehmen, um regelmäßig Benutzerumfragen sowie Produkt- und Markenimage durchzuführen, um unsere Produkte und Dienstleistungen zu verbessern. Wenn Sie an einer Umfrage teilnehmen, werden nur Protokolldaten verarbeitet (Datum und Zeitstempel/Informationen, die an Ihren Browser gesendet werden und Browsereinstellungen/Informationen, die an Ihr Gerät gesendet werden/Nutzungsdatum). Sie können frei entscheiden, ob Sie an der Umfrage teilnehmen möchten oder nicht. Wenn Sie nicht antworten möchten, klicken Sie einfach auf das "X" in der oberen rechten Ecke des Umfrage-Pop-up-Fensters, um das Umfrage-Pop-up-Fenster zu schließen. Ihre Einwilligung ist die rechtliche Grundlage für die Verarbeitung Ihrer Daten gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit mit sofortiger Wirkung widerrufen.
        </p>
        `,
    },
    {
      name: 'Kaufberatung',
      description: `
        <p class="mb-15">
        Auf unserer Website verwenden wir einen Einkaufsunterstützungsdienst, der von unseren Dienstleistern bereitgestellt wird. Der Einkaufsunterstützungsdienst hilft Ihnen, das richtige Produkt schneller und effizienter zu finden. Nach der Beantwortung einiger Fragen wird Ihnen der erste Produktvorschlag unterbreitet. Produkte werden entsprechend ihrer Eignung für Ihre Bedürfnisse präsentiert. Sie können frei entscheiden, ob Sie diesen Dienst nutzen möchten oder nicht. In diesem Fall verarbeiten wir nur die Metadaten der HTTP-Webanfrage als Referenz, Ihre IP-Adresse, Browsersprache und User-Agent (Browser/OS-Typ und -Version) sowie die Daten, die Sie uns bei der Nutzung des Dienstes mitteilen. Diese Daten werden nicht gespeichert. Wir verarbeiten Ihre Daten, um Ihnen diesen Dienst anbieten zu können. Artikel 6 Abs. 1 lit. a DSGVO bildet die rechtliche Grundlage für die Verarbeitung. Wenn Sie ein Produkt kaufen, ist Artikel 6 Abs. 1 lit. b DSGVO die rechtliche Grundlage für die Datenverarbeitung. Der Dienstleister handelt als Auftragsverarbeiter in unserem Auftrag gemäß unseren Anweisungen.
        <br /> <br />
        Im Rahmen der Nutzung der Dienste speichern wir auch Informationen in Ihrem Sitzungs-Speicher, hauptsächlich um Benutzer über mehrere Browsersitzungen hinweg zu identifizieren. Weitere Informationen zu unseren Cookies. Weitere Informationen zu Dienstleistern und Einkaufsunterstützungsdiensten finden Sie auf den jeweiligen Websites der Dienstleister.
        </p>
        `,
    },
    {
      name: 'Rechtliche Grundlage für die Nutzung und den Widerruf des Kontaktkanals',
      description: `
        <p class="mb-15">
        Die rechtliche Grundlage für die Datenverarbeitung bei der Nutzung der bereitgestellten Kontaktkanäle ist Ihre Einwilligung gemäß Art. 6 Abs. 1 DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen. Nachdem wir die Fragen bearbeitet haben, werden die Daten zunächst gespeichert, um mögliche Rückfragen zu beantworten. Die Löschung der Daten kann jederzeit verlangt werden, andernfalls erfolgt die Löschung nach vollständiger Klärung der Frage. Wir löschen die Daten dann sofort, sofern wir nicht aufgrund handels- oder steuerrechtlicher Vorschriften zur Aufbewahrung verpflichtet sind.
        </p>
        `,
    },
    {
      name: 'Soziale Medien',
      description: `
        <p class="mb-15">
        In unseren Online- und Mobilangeboten finden Sie Links zu den sozialen Netzwerken Facebook und unserem YouTube-Kanal. Die Links erkennen Sie am Logo des Anbieters.
        <br /> <br />
        Durch Klicken auf die Links werden die entsprechenden sozialen Medienseiten geöffnet; diese Datenschutzerklärung gilt nicht für diese Seiten. Weitere Informationen zu den dort geltenden Bedingungen finden Sie in den Datenschutzbestimmungen der jeweiligen Anbieter; diese finden Sie unter den folgenden Adressen.
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
      name: 'Ihre Rechte',
      description: `
        <p class="mb-15">
        Die betroffene Person hat mehrere Rechte gemäß der DSGVO. Wenn Sie diese nutzen möchten oder weitere Informationen zu diesem Thema erhalten möchten, können Sie uns gerne kontaktieren.
        <br /> <br />
        Zu den Rechten der betroffenen Person gehören insbesondere:
        </p>
        <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Auskunftsrecht: Sie können nach Art. 15 DSGVO bestätigen, ob die betreffenden personenbezogenen Daten von uns verarbeitet werden. Wenn die Daten verarbeitet werden, können Sie auch zusätzliche Informationen von uns über die Verarbeitung erhalten.</li>
        <li class="m-2">Recht auf Berichtigung: Sie haben das Recht, die Berichtigung und/oder Vervollständigung der über Sie verarbeiteten personenbezogenen Daten zu verlangen, wenn diese Daten gemäß Art. 16 DSGVO unrichtig oder unvollständig sind.</li>
        <li class="m-2">Recht auf Einschränkung der Verarbeitung: In bestimmten Fällen können Sie gemäß Art. 18 DSGVO verlangen, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten eingeschränkt wird.</li>
        <li class="m-2">Recht auf Löschung: Sie haben auch das Recht, unter bestimmten Bedingungen zu verlangen, dass wir die bereits über Sie gespeicherten personenbezogenen Daten gemäß Art. 17 DSGVO löschen.</li>
        <li class="m-2">Recht auf Datenübertragbarkeit: Sie haben auch das Recht, gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie betreffen, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und diese Daten unter bestimmten Bedingungen problemlos von uns an einen anderen Verantwortlichen zu übermitteln.</li>
        </ul>
        <p class="mb-15">Wenn Ihre personenbezogenen Daten aufgrund berechtigter Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, der Verarbeitung Ihrer personenbezogenen Daten gemäß Art. 21 DSGVO zu widersprechen, wenn besondere Gründe in Ihrem Fall vorliegen.</p>
        `,
    },
    {
      name: 'Beschwerden',
      description: `
        <p class="mb-15">
        Wenn Sie der Ansicht sind, dass unsere Verarbeitung Ihrer personenbezogenen Daten nicht dieser Datenschutzerklärung oder den geltenden Datenschutzbestimmungen entspricht, können Sie eine Beschwerde bei unserem Datenschutzbeauftragten einreichen. Der Datenschutzbeauftragte wird das Problem dann untersuchen und Sie über die Ergebnisse der Untersuchung informieren. Sie haben auch das Recht, eine Beschwerde bei einer Aufsichtsbehörde einzureichen.
        </p>
        `,
    },
    {
      name: 'Weitere Informationen',
      description: `
        <p class="mb-15">
        </p>
        `,
    },
    {
      name: 'Übermittlung von Daten an Dritte',
      description: `
        <p class="mb-15">
        Grundsätzlich geben wir keine personenbezogenen Daten zu anderen Zwecken als den in dieser Datenschutzerklärung erläuterten an Dritte weiter. Wenn wir jedoch gesetzlich dazu verpflichtet sind oder aufgrund einer gerichtlichen Entscheidung, werden wir Ihre Daten an die zuständigen Behörden weitergeben.
        </p>
        `,
    },
    {
      name: 'Links zu anderen Websites',
      description: `
        <p class="mb-15">
        Unser Online-Angebot enthält Links zu anderen Websites. Diese Links sind in der Regel als solche gekennzeichnet. Wir haben keine Kontrolle darüber, ob die Websites, auf die diese Links führen, die aktuellen Datenschutzbestimmungen einhalten. Daher empfehlen wir Ihnen, sich auch bei anderen Websites nach deren Datenschutzerklärungen zu erkundigen.
        </p>
        `,
    },
    {
      name: 'Änderungen dieser Datenschutzerklärung',
      description: `
        <p class="mb-15">
        Das Datum der Aktualisierungen der Datenschutzerklärung ist am Ende der Erklärung aufgeführt. Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Die aktuelle Version kann direkt über das Online-Angebot abgerufen werden. Bitte überprüfen Sie das Online-Angebot regelmäßig auf die geltende Datenschutzerklärung.
        <br /> <br />
        Diese Datenschutzerklärung wurde im Januar 2023 aktualisiert.
        </p>
        `,
    },
    {
      name: 'Werbeformular',
      description: `
        <p class="mb-15">
        Zur Verbesserung der Bequemlichkeit und Qualität unserer Dienste verwenden wir Conversion-Tracking- und Retargeting-Technologie, die beide von Adform ApS, Wildersgade 10B, 1, 1408 Kopenhagen K, Dänemark, bereitgestellt werden.
        <br /> <br />
        Unsere Online-Angebote verwenden das Conversion-Tracking von Adform. Wenn ein Nutzer einer von Adform platzierten Anzeige ausgesetzt wird, wird ein temporäres Cookie für das Conversion-Tracking eingeführt.
        <br /> <br />
        Nutzer, die nicht am Tracking teilnehmen möchten, können die Cookies von Adform deaktivieren oder der Erfassung und Speicherung von Daten jederzeit mit sofortiger Wirkung über ihren Internetbrowser unter <a href="https://site.adform.com/datenschutz-opt-out/" target="_blank" class="underline">https://site.adform.com/datenschutz-opt-out/</a> widersprechen. Sie können bereits auf Ihrem Computer gespeicherte Cookies im verwendeten Browser löschen oder durch Löschen temporärer Webseiten löschen.
        <br /> <br />
        Unsere Online-Angebote verwenden die Umleitungstechnologie von Adform. Dadurch können Nutzern, die bereits Interesse an unseren Seiten und Produkten gezeigt haben, gezielte Anzeigen auf den Seiten unserer Partner angezeigt werden. Beim Retargeting werden die Anzeigen basierend auf einer Cookie-Analyse des bisherigen Nutzerverhaltens angezeigt. Dies ist ein temporäres Cookie, das nach 60 Tagen abläuft. Wenn Sie keine auf Ihre Interessen zugeschnittenen Adform-Anzeigen anzeigen möchten, können Sie der Erfassung und Speicherung von Daten jederzeit hier widersprechen (<a href="https://site.adform.com/datenschutz-opt-out/" target="_blank" class="underline">https://site.adform.com/datenschutz-opt-out/</a>). Weitere Informationen zur Datenschutzrichtlinie von Adform finden Sie unter <a href="https://site.adform.com/datenschutz-opt-out/" target="_blank" class="underline">https://site.adform.com/datenschutz-opt-out/<a>
        <br /> <br />
        Die rechtliche Grundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, die Verbesserung der Bequemlichkeit und Qualität unserer Online-Dienste stimuliert unser berechtigtes Interesse.
        </p>
        `,
    },
    {
      name: 'Amazon Conversion Pixel und Amazon Remarketing Pixel',
      description: `
        <p class="mb-15">
        Unsere Online-Angebote verwenden die Funktionalität der Webanalysedienste Amazon Conversion Pixel und Amazon Remarketing Pixel. Der Anbieter dieser Dienste ist Amazon.com, Inc. 410 Terry Ave. North Seattle, Washington, USA. Amazon Conversion Pixel und Amazon Remarketing Pixel verwenden ebenfalls Cookies, die auf Ihrem Computer gespeichert werden und die eine Analyse Ihrer Diese Cookies ermöglichen es uns, Ihre Nutzung der Website zu analysieren und personalisierte Anzeigen zu schalten.
        <br /> <br />
        Sie können die Speicherung von Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen jedoch darauf hin, dass Sie in diesem Fall möglicherweise nicht alle Funktionen der Website nutzen können. Sie können auch die Übertragung der durch das Cookie erzeugten Daten im Zusammenhang mit Ihrer Nutzung der Website an Amazon und die Verarbeitung dieser Daten durch Amazon verhindern, indem Sie auf diesen Link klicken und die Option "Keine personalisierten Anzeigen" auswählen. Dies ist Internet Explorer": <a href="https://www.amazon.de/adprefs" target="_blank" class="underline">https://www.amazon.de/adprefs</a>.
        <br /> <br />
        Sie können auch die entsprechenden Einstellungen unter <a href="http://www.youronlinechoices.com/be" target="_blank" class="underline">http://www.youronlinechoices.com/be</a> auswählen. Ein Opt-Out-Cookie wird dann in Ihrem Browser platziert, um zu verhindern, dass Amazon Pixel Ihre Daten bei zukünftigen Besuchen unserer Webseiten erfasst. Dieser Widerspruch gilt, solange Sie das Opt-Out-Cookie nicht löschen.
        <br /> <br />
        Die rechtliche Grundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, und die Verbesserung des Komforts und der Qualität unserer Dienste ist die Grundlage für unser berechtigtes Interesse.
        </p>
        `,
    },
    {
      name: 'Facebook Custom Audiences',
      description: `
        <p class="mb-15">
        Unsere Online-Angebote verwenden die Remarketing-Funktion "Custom Audiences" von Facebook Inc. Auf diese Weise können Nutzern, wenn sie das soziale Netzwerk Facebook oder andere Websites besuchen, die den gleichen Prozess verwenden, Anzeigen angezeigt werden, die für die Interessen der Nutzer der Website relevant sind ("Facebook-Ads"). Daher verfolgen wir das Interesse, Ihnen Anzeigen zu zeigen, die für Sie von Interesse sind, um unsere Online-Dienste für Sie interessanter zu gestalten. Die rechtliche Grundlage für die Verarbeitung Ihrer Daten ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
        <br /> <br />
        Durch die Nutzung von Marketing-Tools stellt Ihr Browser automatisch eine direkte Verbindung zu den Facebook-Servern her. Wir haben keine Kontrolle über den Umfang und die Verwendung der Daten, die Facebook mit diesem Tool erhebt, und stellen Ihnen daher die Informationen zur Verfügung, die uns vorliegen: Durch Facebook Custom Audiences wird Facebook darüber informiert, dass Sie die Online-Angebote der Seiten, die unseren Seiten entsprechen, angesehen oder auf eine unserer Anzeigen geklickt haben. Wenn Sie sich für Facebook-Dienste registrieren, kann Facebook den Zugriff Ihrem Konto zuordnen. Selbst wenn Sie nicht bei Facebook registriert oder nicht eingeloggt sind, ist es möglich, dass der Anbieter Ihre IP-Adresse und andere Identifikationsinformationen kennt und speichert.
        <br /> <br />
        Nutzer von <a href="https://www.facebook.com/settings/?tab=ads#_" target="_blank" class="underline">https://www.facebook.com/settings/?tab=ads#_</a> können die Funktion "Facebook Custom Audiences" deaktivieren.
        <br /> <br />
        Weitere Informationen zur Datenverarbeitung durch Facebook finden Sie unter <a href="https://www.facebook.com/about/privacy" target="_blank" class="underline">https://www.facebook.com/about/privacy</a>.
        </p>
        `,
    },
    {
      name: 'Social Media Plugins',
      description: `
        <p class="mb-15">
        Unsere Online-Angebote verwenden Social-Media-Plugins des sozialen Netzwerks Facebook. <a href="https://www.facebook.com" target="_blank" class="underline">www.facebook.com</a> von Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA und <a href="https://www.facebook.be" target="_blank" class="underline">www.facebook.be</a> von Facebook Ireland Limited, Hanover Reach. Facebook Ireland Limited, Hanover Reach, 5-7 Hanover Quay, Dublin Operations 2, Irland ("Facebook").
        <br /> <br />
        Eine Zusammenfassung des Facebook-Plug-ins finden Sie hier: <a href="http://developers.facebook.com/docs/plugins" target="_blank" class="underline">http://developers.facebook.com/docs/plugins</a>; Weitere Informationen zum Datenschutz bei Facebook finden Sie unter: <a href="https://www.facebook.com/policy.php" target="_blank" class="underline">www.facebook.com/policy.php</a>
        <br /> <br />
        Facebook kann daher informiert werden, dass Sie die Seite, die unseren Online-Diensten entspricht, besucht haben und gegebenenfalls mit dem Plug-in interagiert haben. Durch die Aktivierung des Plug-ins werden Ihre persönlichen Daten an Facebook in die USA übertragen und dort gespeichert.
        <br /> <br />
        Wir haben keine Kontrolle über die erhobenen Daten und die Datenverarbeitung, noch kennen wir den genauen Umfang der Datenerhebung, den Zweck der Verarbeitung oder die Speicherzeit. Wir haben auch keine Informationen über die Löschung der von Facebook erhobenen Daten.
        <br /> <br />
        Facebook speichert die über Sie erhobenen Daten in Ihrem Nutzerprofil und verwendet sie für Werbung, Marktforschung und/oder zur bedarfsgerechten Gestaltung seiner Website. Der besondere Zweck dieser Operation ist es (auch für nicht eingeloggte Nutzer), gezielte Werbung nach Bedarf bereitzustellen und andere Nutzer des sozialen Netzwerks über Ihre Aktivitäten auf unserer Website zu informieren. Sie haben das Recht, der Erstellung dieses Nutzerprofils zu widersprechen, in diesem Fall müssen Sie sich an Facebook wenden, um dieses Recht auszuüben.
        <br /> <br />
        Wir bieten Ihnen die Möglichkeit, über Plugins mit sozialen Netzwerken und anderen Nutzern zu interagieren, damit wir unsere Dienste verbessern und für Sie als Nutzer interessanter gestalten können. Die rechtliche Grundlage für die Verwendung von Plugins ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
        <br /> <br />
        Grundsätzlich können Sie das Laden von Plugins auch vollständig durch Add-ons für Ihren Browser (sogenannte Script-Blocker) verhindern.
        </p>
        `,
    },
    {
      name: 'AppNexus',
      description: `
        <p class="mb-15">
        Unsere Online-Angebote nutzen AppNexus, einen Dienst von AppNexus Inc. 28 W 23rd Street, 4th floor, New York, New York - 10010, USA. AppNexus verwendet Cookies, Web-Beacons usw., die auf Ihrem Computer gespeichert werden und die Nutzung der Website analysieren können. Im Rahmen dieser Nutzung können Daten, insbesondere IP-Adressen und Benutzeraktivitäten, an die Server von AppNexus Inc. übertragen und dort gespeichert werden. AppNexus Inc. wird diese Informationen nach Bedarf an Dritte weitergeben, soweit dies gesetzlich vorgeschrieben ist oder diese Daten von Dritten verarbeitet werden. Sie können die Erhebung und Übermittlung personenbezogener Daten (insbesondere Ihrer IP-Adresse) und die Verarbeitung solcher Daten verhindern, indem Sie die Ausführung von Java Script in Ihrem Browser deaktivieren oder Tools wie "NoScript" installieren. Weitere Informationen finden Sie in der Datenschutzrichtlinie von AppNexus (<a href="https://www.appnexus.com/en/company/platform-privacy-policy" target="_blank" class="underline">https://www.appnexus.com/en/company/platform-privacy-policy</a>). Sie können auch ein Opt-Out für AppNexus unter <a href="https://www.appnexus.com/en/company/platform-privacy-policy#choices" target="_blank" class="underline">https://www.appnexus.com/en/company/platform-privacy-policy#choices</a> wählen.
        <br /> <br />
        Die rechtliche Grundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, um den Komfort und die Qualität unserer Online-Dienste zu verbessern, was unser berechtigtes Interesse anregt.
        </p>
        `,
    },
    {
      name: 'Doubleclick',
      description: `
        <p class="mb-15">
        Unsere Online-Angebote verwenden Doubleclick (<a href="https://www.doubleclick.com" target="_blank" class="underline">www.doubleclick.com</a>) von Google Ireland Limited, Gordon House, Mountain View, Barrow St Dublin 4 Irland ("Google") und verwenden Technologie, um Ihnen Anzeigen zu zeigen, die für Sie von Interesse sein könnten. Wenn Sie nicht möchten, dass Doubleclick weiterhin anonyme Daten sammelt, können Sie hier ein Opt-Out-Cookie setzen: <a href="https://www.google.de/settings/ads/onweb#display_optout" target="_blank" class="underline">https://www.google.de/settings/ads/onweb#display_optout</a>
        <br /> <br />
        Dieses Opt-Out-Cookie löscht die bisher gespeicherten Informationen und verhindert die weitere Erfassung dieser Informationen.
        <br /> <br />
        Die rechtliche Grundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, um den Komfort und die Qualität unserer Online-Dienste zu verbessern, was unser berechtigtes Interesse anregt.
        </p>
        `,
    },
    {
      name: 'Quisma',
      description: `
        <p class="mb-15">
        Unsere Online-Angebote nutzen die Dienste der Quisma GmbH, Rosenheimer Straße 145d, 81671 München, Deutschland. Quisma-Web-Beacons sammeln pseudonyme Informationen über den Zugriffsprozess des Nutzers, um das Verhalten des Nutzers nachvollziehen zu können. Das in diesem Fall generierte Cookie speichert pseudonyme Informationen unter einer zufällig generierten Benutzer-ID (Pseudonym). Der geografische Standort wird grob bestimmt und die IP-Adresse des Nutzers kurz analysiert. Nach Abschluss der datenschutzkonformen Analyse wird die IP-Adresse vollständig anonymisiert. Zu keinem Zeitpunkt ist eine spezifische Zuordnung zu einer Person oder einer bestimmten Adresse möglich. Sie können auch der Setzung von Cookies und der Verfolgung der Quisma-Technologie jederzeit widersprechen, indem Sie das Opt-Out-Cookie herunterladen und installieren (<a href="http://privacy.quisma.com/uk/cookie-opt-out/" target="_blank" class="underline">http://privacy.quisma.com/uk/cookie-opt-out/</a>). Weitere Informationen finden Sie in der Datenschutzrichtlinie von Quisma (<a href="https://privacy.quisma.com/datenschutz/quisma-websites/" target="_blank" class="underline">https://privacy.quisma.com/datenschutz/quisma-websites/</a>).
        <br /> <br />
        Die rechtliche Grundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, um den Komfort und die Qualität unserer Online-Dienste zu verbessern, was unser berechtigtes Interesse anregt.
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
