import { ReturnPolicy } from './components'
import type {
  IReturnPolicyCurrentProps,
  IReturnPolicyEndProps,
  IReturnPolicyProps,
} from './components'
import { ETabsId, SiteHelpTabs } from '../../components/tabs'
import Svg7Days from './components/Svg7Days'
import Svg30Days from './components/Svg30Days'
import Svg45Days from './components/Svg45Days'
import Svg45DaysAfter from './components/Svg45DaysAfter'
import { getWarrantyTabsTextInfo } from '../../helpers/warranty-tabs-text-info'

// navbar的内容 配置文件 De版
const tabs = getWarrantyTabsTextInfo('de', ETabsId.ReturnPolicy)

// 静态页面的内容一 配置文件 De版
const returnPolicyCurrentProps: IReturnPolicyCurrentProps = {
  title: 'Wie Rückgaben funktionieren',
  updateTime: 'Aktualisiert: 25. November 2023',
  forward: {
    description: `
    <p class="mb-5">Unser Team hilft Ihnen gerne beim Rückgabeprozess für Produkte, die über www.geme.bio gekauft wurden. Senden Sie einfach das Widerrufsformular an <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio </a>. Bitte halten Sie Ihre Bestellnummer oder Seriennummer des Produkts bereit, damit wir Ihnen bei der Abwicklung des Vorgangs helfen können.</p>
    <p class="mb-2 text-xs">
      Hinweis: Wir akzeptieren nur Rücksendungen von Produkten, die direkt aus dieser Tabelle gekauft wurden.
      Wenn Sie Ihr Produkt bei einem anderen Einzelhändler gekauft haben, wenden Sie sich bitte bezüglich Ihrer Rücksendung an diesen Einzelhändler.
    </p>

   <table class="border-collapse border border-slate-400 mb-5 table-auto">
      <thead>
        <tr>
          <th class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Quellname</th>
          <th class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Shop-Links</th>
          <th class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Startzeit</th>
        </tr>
      </thead>

      <tbody class="pl-2 pr-2 pb-2 pt-2">
        <tr>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Offizielle Webseite</td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">
            <a href="https://www.geme.bio/" target="_blank">www.geme.bio</a>
          </td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">2022-11-11</td>
        </tr>
        <tr>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Amazon</td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">
            <a href="https://www.amazon.com/dp/B0BV31KTCN" target="_blank">gemecomposter</a>
          </td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">2023-02-04</td>
        </tr>
        <tr>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">eBay</td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">
            <a href="https://www.ebay.com/usr/gemeofficial" target="_blank">gemeofficial</a>
          </td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">2023-09-05</td>
        </tr>
        <tr>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Walmart</td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">
            <a href="https://www.walmart.com/ip/GEME-19L-Electric-Composter-World-s-First-Bio-Compost-Machine-Composter-indoor-Electric-Food-Cycler-Turn-Waste-Organic-Compost-Kitchen-Kitchen-compos/1670817413" target="_blank">Link</a>
          </td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">2023-10-23</td>
        </tr>
      </tbody>
    </table>
    `,
    imgSrc: '/assets/images/return-policy/1.png',
  },
  versionInfo: `123`,
  items: [
    {
      name: 'Rückgaben innerhalb von 30 Kalendertagen',
      hide: false,
      svgSrc: <Svg30Days></Svg30Days>,
      description: `
        <p class="mb-5">Genießen Sie 30 Tage Glück mit GEME zu Hause! Wenn Sie nicht zufrieden sind, geben Sie es innerhalb von 30 Tagen zurück (seit Lieferung). Wir kümmern uns um den Rest und übernehmen die Portokosten.</p>
        <p class="mb-5">Wenn Sie GEME-Kobold noch nicht verwendet haben, erhalten Sie eine volle Rückerstattung, ohne Fragen zu stellen!</p>
        <p class="mb-5">Benutzt? Kein Problem! Senden Sie es zurück, wir übernehmen trotzdem die Versandkosten. Nur 70 $ werden von der ursprünglichen Zahlung für eine gründliche Reinigung und Auffüllung abgezogen.</p>
        <p class="mb-5">Ein freundlicher Tipp: Entfernen Sie vor der Rücksendung alle Nebenprodukte, verwendeten Mikroorganismen oder Speisereste. Machen Sie vor und nach dem Verpacken Fotos. Diese 2 einfachen Schritte sorgen für einen reibungslosen Rückgabeprozess und verhindern logistische Probleme.</p>
        <p class="mb-5">GEME Kobold akzeptiert nur Einzelkäufe von bestehenden Gerätebenutzern. Zu Ihrer Sicherheit werden nach Lieferung des Kobold keine Rücksendungen und Rückerstattungen akzeptiert.</p>
        <p class="mb-5">Ihre Zufriedenheit hat für uns oberste Priorität, und wir möchten, dass dieser Testlauf für Sie zu einem erfreulichen Erlebnis wird!</p>
      `,
    },
    {
      name: 'Rückgaben innerhalb von 45 Kalendertagen',
      hide: false,
      svgSrc: <Svg45Days></Svg45Days>,
      description: `
      <p class="mb-5">Wenn Sie aus einem anderen Grund mit Ihrem Produkt nicht zufrieden sind, haben Sie bis zu 45 Kalendertage Zeit, um eine Rücksendung zu beantragen. Es wird eine zusätzliche Wiedereinlagerungsgebühr in Höhe von 50 % des Verkaufspreises des Produkts erhoben. Die ursprünglichen Liefer-, Versand- und Servicegebühren werden nicht erstattet. Kontaktieren Sie uns über <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a>, um eine Rücksendung zu vereinbaren. </p>
      `,
    },
    {
      name: 'Nach 45 Kalendertagen',
      hide: false,
      svgSrc: <Svg45DaysAfter></Svg45DaysAfter>,
      description: `
      <p class="mb-5">Wenn das 45-tägige Rückgabefenster abgelaufen ist und Ihr Produkt noch unter Garantie steht, rufen Sie uns bitte an, um Garantiearbeiten oder eine Reparatur zu arrangieren. Eine Gebühr kann anfallen.</p>
      <p class="mb-5">Jeder Grund zur Unzufriedenheit? Kontaktieren Sie uns über <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a>, damit wir besser verstehen, wie wir Ihnen bei der Lösung Ihres Problems helfen können.</p>
      `,
    },
  ],
}

// 静态页面的内容二 配置文件 De版
const returnPolicyEndProps: IReturnPolicyEndProps = {
  title: 'Wie Rückgaben funktionieren',
  updateTime: 'Aktualisiert: 1. Januar 2023',
  forward: {
    description: `
    <p class="mb-5">Unser Team hilft Ihnen gerne beim Rückgabeprozess für Produkte, die über www.geme.bio gekauft wurden. Senden Sie einfach das Widerrufsformular an <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio </a>. Bitte halten Sie Ihre Bestellnummer oder Seriennummer des Produkts bereit, damit wir Ihnen bei der Abwicklung des Vorgangs helfen können.</p>
    <p class="mb-5">Hinweis: Wir akzeptieren nur Rücksendungen von Produkten, die direkt von www.geme.bio gekauft wurden. Wenn Sie Ihr Produkt bei einem anderen Einzelhändler gekauft haben, wenden Sie sich bitte bezüglich Ihrer Rücksendung an diesen Einzelhändler.</p>
    `,
    imgSrc: '/assets/images/return-policy/1.png',
  },
  items: [
    {
      name: 'Rückgaben innerhalb von 7 Tagen – keine Wiedereinlagerungsgebühr',
      svgSrc: <Svg7Days></Svg7Days>,
      description: `
      <p class="mb-5">Das belgische Gesetz über Geschäftspraktiken sowie Verbraucherinformationen und -schutz erlaubt es dem Käufer, den Verkäufer innerhalb von 7 Tagen nach Erhalt des Produkts darüber zu informieren, dass er den Kauf abbrechen wird. Die Ware muss innerhalb einer angemessenen Frist (7 Tage) nach Erhalt der Ware verfolgt werden, und wenn sie nicht geöffnet und verwendet wurde. Wir empfehlen Ihnen, die Ware nach Möglichkeit in der Originalverpackung und im Originalzustand aufzubewahren, damit Sie nicht für eine etwaige Wertminderung der Ware durch deren Entsorgung verantwortlich gemacht werden müssen.</p>
      <p class="mb-5">Sie können ein <a href="/assets/return/revocation-form.docx" target='_blank' class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">Widerrufsformular</a> an <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> senden, um uns mitzuteilen, dass Sie Ihren Kauf abbrechen. Anschließend müssen Sie die Ware ausreichend frankiert und mit einer Rechnungskopie per Normalpost an die unten angegebene Adresse zurücksenden.</p>
      <p class="mb-5">Um eine Rückerstattung zu veranlassen, teilen Sie uns bitte auch Ihre Kontonummer mit. Nach Erhalt Ihrer Rücksendung erstellen wir eine Gutschrift und erstatten Ihnen den gezahlten Betrag innerhalb von 14 Tagen. Es gibt keine Ausnahmen von dem Widerrufsformular.</p>
      <p class="mb-5">Wenn Sie ein Produkt erhalten, das nicht Ihrer Bestellung entspricht oder beschädigt ist, müssen Sie uns auf die gleiche Weise informieren und das Produkt auf die gleiche Weise zurücksenden. Allerdings erstatten wir Ihnen in diesem Fall auch die Versandkosten für den postalischen Versand.</p>
      `,
    },
    {
      name: 'Rückgaben innerhalb von 30 Kalendertagen',
      svgSrc: <Svg30Days></Svg30Days>,
      description: `
      <p class="mb-5">Produkte, die zum Zeitpunkt der Lieferung beschädigt sind</p>
      <p class="mb-5">(Schäden umfassen Kratzer, Dellen, Absplitterungen und andere Schäden, die durch Material- und/oder Verarbeitungsfehler verursacht wurden.)</p>
      <p class="mb-5">Wenn Sie feststellen, dass Ihr Produkt bei der Lieferung beschädigt ist, können Sie innerhalb von 30 Kalendertagen eine Rückgabe, einen Umtausch oder eine Reparatur über <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> beantragen.</p>
      <ul class="my-5 list-inside list-disc">
        <li class="mb-5">Für Umtausch sind keine zusätzlichen Liefer-, Versand- oder Servicegebühren zu zahlen. Abhängig von der Preisdifferenz des neuen Artikels erhalten Sie eine Gutschrift oder Gebühr auf die zum Kauf des Originalartikels verwendete Kreditkarte.</li>
        <li class="mb-5">Bei Rücksendungen erhalten Sie eine Rückerstattung für das Produkt, aber Versand-, Fracht- und Servicegebühren werden nicht erstattet. Bitte rufen Sie uns an, um die Art des Schadens zu besprechen und zu bestätigen, ob Sie Anspruch auf eine Rückerstattung des Produkts haben.</li>
        <li class="mb-5">Wenn Sie an einer Reparatur interessiert sind, senden Sie einfach eine E-Mail an dieselbe E-Mail-Adresse, um einen Service zu vereinbaren.</li>
      </ul>
      `,
    },
    {
      name: 'Rückgaben innerhalb von 45 Kalendertagen',
      svgSrc: <Svg45Days></Svg45Days>,
      description: `
      <p class="mb-5">Wenn Sie aus einem anderen Grund mit Ihrem Produkt nicht zufrieden sind, haben Sie bis zu 45 Kalendertage Zeit, um eine Rücksendung zu beantragen. Es wird eine zusätzliche Wiedereinlagerungsgebühr in Höhe von 50 % des Verkaufspreises des Produkts erhoben. Die ursprünglichen Liefer-, Versand- und Servicegebühren werden nicht erstattet. Kontaktieren Sie uns über <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a>, um eine Rücksendung zu vereinbaren. </p>
      `,
    },
    {
      name: 'Nach 45 Kalendertagen',
      svgSrc: <Svg45DaysAfter></Svg45DaysAfter>,
      description: `
      <p class="mb-5">Wenn das 45-tägige Rückgabefenster abgelaufen ist und Ihr Produkt noch unter Garantie steht, rufen Sie uns bitte an, um Garantiearbeiten oder eine Reparatur zu arrangieren. Eine Gebühr kann anfallen.</p>
      <p class="mb-5">Jeder Grund zur Unzufriedenheit? Kontaktieren Sie uns über <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a>, damit wir besser verstehen, wie wir Ihnen bei der Lösung Ihres Problems helfen können.</p>
      `,
    },
  ],
}

function ReturnPolicyPageDe() {
  const childProps: IReturnPolicyProps = {
    current: returnPolicyCurrentProps,
    end: returnPolicyEndProps,
  }

  return (
    <>
      <h1 className="sr-only">GAME-Rückgabebedingungen</h1>
      <SiteHelpTabs {...tabs} />
      <ReturnPolicy {...childProps} />
    </>
  )
}
export { ReturnPolicyPageDe }
