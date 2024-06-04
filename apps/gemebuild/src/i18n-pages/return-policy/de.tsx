import { ReturnPolicy } from './components'
import type {
  IReturnPolicyCurrentProps,
  IReturnPolicyEndProps,
  IReturnPolicyProps,
} from './components'
import { ISiteHelpTabsProps, SiteHelpTabs } from '../../components/tabs'
import Svg7Days from './components/Svg7Days'
import Svg30Days from './components/Svg30Days'
import Svg45Days from './components/Svg45Days'
import Svg45DaysAfter from './components/Svg45DaysAfter'

// navbar的内容 配置文件 De版
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
  currentTabId: 'return-policy',
}

// 静态页面的内容一 配置文件 De版
const returnPolicyCurrentProps: IReturnPolicyCurrentProps = {
  title: 'Wie Retouren funktionieren',
  updateTime: 'Aktualisiert: 25. November 2023',
  forward: {
    description: `
    <p class="mb-5">Unser Team hilft Ihnen gerne bei der Rückgabe von Produkten, die Sie über www.geme.bio gekauft haben. Senden Sie einfach das Widerrufsformular an  <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio </a>. Bitte halten Sie Ihre Bestellnummer oder Produktseriennummer bereit, damit wir Ihnen bei der Bearbeitung helfen können.</p>
    <p class="mb-2 text-xs">
    Hinweis: Wir akzeptieren nur Rücksendungen von Produkten, die direkt über diesen Tisch gekauft wurden.
    Wenn Sie Ihr Produkt bei einem anderen Händler gekauft haben, wenden Sie sich bitte an diesen Händler bezüglich Ihrer Rückgabe.
    </p>

   <table class="border-collapse border border-slate-400 mb-5 table-auto">
      <thead>
        <tr>
          <th class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Quelle Name</th>
          <th class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Links speichern</th>
          <th class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Startzeit</th>
        </tr>
      </thead>

      <tbody class="pl-2 pr-2 pb-2 pt-2">
        <tr>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2"">Offizielle Website</td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">
            <a href="https://www.geme.bio/" target="_blank">www.geme.bio</a>
          </td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">2022-11-11</td>
        </tr>
        <tr>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Amazon</td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">
            <a href="https://www.amazon.com/dp/B0BV31KTCN" target="_blank">Link</a>
          </td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">2023-02-04</td>
        </tr>
        <tr>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">eBay</td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">
            <a href="https://www.ebay.com/usr/gemeofficial" target="_blank">Link</a>
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
      name: 'Rückgabe innerhalb von 30 Kalendertagen',
      hide: false,
      svgSrc: <Svg30Days></Svg30Days>,
      description: `
        <p class="mb-5">Genießen Sie 30 Tage lang Ihr Glück mit GEME zu Hause! Wenn Sie nicht zufrieden sind, schicken Sie es innerhalb von 30 Tagen zurück. Wir kümmern uns um den Rest und übernehmen das Porto.</p>
        <p class="mb-5">Wenn Sie GEME-Kobold nicht benutzt haben, erhalten Sie eine volle Rückerstattung, ohne Fragen zu stellen!</p>
        <p class="mb-5">Benutzt? Kein Problem! Schicken Sie es zurück, wir übernehmen die Versandgebühren. Nur eine bloße $ 70 wird von der ursprünglichen Zahlung für eine gründliche Reinigung und wieder aufzufüllen abgezogen werden.</p>
        <p class="mb-5">Nur ein freundlicher Tipp: Bevor Sie das Gerät zurückgeben, sollten Sie sicherstellen, dass alle Nebenprodukte, verbrauchten Mikroorganismen oder Lebensmittelreste entfernt werden. Machen Sie Fotos vor und nach dem Verpacken. Diese 2 einfachen Schritte gewährleisten einen reibungslosen Rückgabeprozess und verhindern logistische Probleme.</p>
        <p class="mb-5">Ihre Zufriedenheit ist unsere Priorität, und wir möchten, dass diese Studie für Sie zu einer angenehmen Erfahrung wird!</p>
      `,
    },
    {
      name: 'Rücksendungen innerhalb von 45 Kalendertagen',
      hide: false,
      svgSrc: <Svg45Days></Svg45Days>,
      description: `
      <p class="mb-5">Wenn Sie aus einem anderen Grund mit Ihrem Produkt nicht zufrieden sind, haben Sie bis zu 45 Kalendertage Zeit, um eine Rückgabe zu beantragen. Es wird eine zusätzliche Wiedereinlagerungsgebühr in Höhe von 50 % des Verkaufspreises des Produkts erhoben. Die ursprünglichen Liefer-, Versand- und Servicegebühren werden nicht erstattet. Kontaktieren Sie uns über <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> um eine Rückgabe zu vereinbaren. </p>
        `,
    },
    {
      name: 'Nach 45 Kalendertagen',
      hide: false,
      svgSrc: <Svg45DaysAfter></Svg45DaysAfter>,
      description: `
      <p class="mb-5">Wenn die 45-Tage-Frist für die Rückgabe verstrichen ist und Ihr Produkt noch unter Garantie steht, rufen Sie uns bitte an, um einen Garantieservice zu erhalten oder eine Reparatur zu vereinbaren. Es kann eine Gebühr anfallen.</p>
      <p class="mb-5">Gibt es einen Grund, unglücklich zu sein? Kontaktieren Sie uns über <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> So können wir besser verstehen, wie wir Ihnen bei der Lösung Ihres Problems helfen können.</p>
      `,
    },
  ],
}

// 静态页面的内容二 配置文件 De版
const returnPolicyEndProps: IReturnPolicyEndProps = {
  title: 'Wie Retouren funktionieren',
  updateTime: 'Aktualisiert: 1. Januar 2023',
  forward: {
    description: `
    <p class="mb-5">Unser Team hilft Ihnen gerne beim Rückgabeprozess für über www.geme.bio gekaufte Produkte. Senden Sie einfach das Widerrufsformular an <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio </a>. Bitte halten Sie Ihre Bestellnummer oder Produktseriennummer bereit, damit wir Ihnen bei dem Vorgang helfen können.</p>
    <p class="mb-5">Hinweis: Wir akzeptieren nur Rücksendungen von Produkten, die direkt bei www.geme.bio gekauft wurden. Wenn Sie Ihr Produkt bei einem anderen Händler gekauft haben, wenden Sie sich bezüglich der Rückgabe bitte an diesen Händler.</p>
    `,
    imgSrc: '/assets/images/return-policy/1.png',
  },
  items: [
    {
      name: 'Returns within 7 days - no restocking fee',
      svgSrc: <Svg7Days></Svg7Days>,
      description: `
      <p class="mb-5">Nach dem belgischen Gesetz über Geschäftspraktiken und Verbraucherinformation und -schutz kann der Käufer dem Verkäufer mitteilen, dass er innerhalb von 7 Tagen nach Erhalt der Ware vom Kauf zurücktreten wird. Die Ware muss innerhalb eines akzeptablen Zeitraums (7 Tage) nach Erhalt der Ware und wenn sie nicht geöffnet und benutzt wurde, zurückverfolgt werden. Wir empfehlen Ihnen, die Ware so weit wie möglich in ihrer Originalverpackung und in ihrem Originalzustand aufzubewahren, damit Sie nicht für eine eventuelle Entwertung der Ware infolge ihrer Entsorgung haften müssen.</p>
      <p class="mb-5">Sie können eine <a href="/assets/return/revocation-form.docx" target='_blank' class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">withdrawal form</a> to by <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> um uns mitzuteilen, dass Sie von Ihrem Kauf zurücktreten. Sie müssen dann die Ware auf dem normalen Postweg mit ausreichendem Porto und einer Kopie der Rechnung an die unten stehende Adresse zurücksenden.</p>
      <p class="mb-5">Damit wir eine Rückerstattung vornehmen können, geben Sie uns bitte auch Ihre Kontonummer an. Nach Erhalt Ihrer Rücksendung stellen wir eine Gutschrift aus und erstatten Ihnen den gezahlten Betrag innerhalb von 14 Tagen. Für das Widerrufsformular gibt es keine Ausnahmen.</p>
      <p class="mb-5">Wenn Sie ein Produkt erhalten, das nicht dem entspricht, was Sie bestellt haben, oder das beschädigt ist, müssen Sie uns dies auf die gleiche Weise mitteilen und das Produkt auf die gleiche Weise zurücksenden. In diesem Fall erstatten wir Ihnen jedoch auch die Kosten für den Versand per Post.</p>
      `,
    },
    {
      name: 'Rückgabe innerhalb von 30 Kalendertagen',
      svgSrc: <Svg30Days></Svg30Days>,
      description: `
      <p class="mb-5">Zum Zeitpunkt der Lieferung beschädigte Produkte</p>
      <p class="mb-5">(Zu den Schäden zählen Kratzer, Dellen, Absplitterungen und andere Schäden, die auf Material- und/oder Verarbeitungsfehler zurückzuführen sind).</p>
      <p class="mb-5">Wenn Sie feststellen, dass Ihr Produkt beschädigt geliefert wurde, können Sie innerhalb von 30 Kalendertagen über <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> eine Rückgabe, einen Umtausch oder eine Reparatur beantragen.</p>
      <ul class="my-5 list-inside list-disc">
        <li class="mb-5">Für den Umtausch müssen Sie keine zusätzlichen Liefer-, Versand- oder Servicegebühren bezahlen. Je nach der Preisdifferenz des neuen Artikels erhalten Sie eine Gutschrift oder eine Gebühr auf der Kreditkarte, die Sie für den Kauf des ursprünglichen Artikels verwendet haben.</li>
        <li class="mb-5">Bei Rücksendungen erhalten Sie eine Rückerstattung für das Produkt, aber die Versand-, Fracht- und Servicekosten werden nicht erstattet. Bitte rufen Sie uns an, um die Art des Schadens zu besprechen und zu bestätigen, dass Sie für eine Rückerstattung des Produkts berechtigt sind.</li>
        <li class="mb-5">Wenn Sie an einer Reparatur interessiert sind, senden Sie einfach eine E-Mail an dieselbe E-Mail-Adresse, um einen Termin zu vereinbaren.</li>
      </ul>
      `,
    },
    {
      name: 'Rücksendungen innerhalb von 45 Kalendertagen',
      svgSrc: <Svg45Days></Svg45Days>,
      description: `
      <p class="mb-5">Wenn Sie aus einem anderen Grund mit Ihrem Produkt nicht zufrieden sind, haben Sie bis zu 45 Kalendertage Zeit, um eine Rückgabe zu beantragen. Es wird eine zusätzliche Wiedereinlagerungsgebühr in Höhe von 50 % des Verkaufspreises des Produkts erhoben. Die ursprünglichen Liefer-, Versand- und Servicegebühren werden nicht erstattet. Kontaktieren Sie uns über <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> eine Rücksendung veranlassen. </p>
        `,
    },
    {
      name: 'Nach 45 Kalendertagen',
      svgSrc: <Svg45DaysAfter></Svg45DaysAfter>,
      description: `
      <p class="mb-5">Wenn die 45-tägige Rückgabefrist abgelaufen ist und für Ihr Produkt noch Garantie besteht, rufen Sie uns bitte an, um einen Garantieservice zu erhalten oder eine Reparatur zu veranlassen. Es kann eine Gebühr anfallen.</p>
      <p class="mb-5">Gibt es einen Grund, unglücklich zu sein? Kontaktieren Sie uns über <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> So können wir besser verstehen, wie wir Ihnen bei der Lösung Ihres Problems helfen können.</p>
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
      <SiteHelpTabs {...siteHelpTabsProps} />
      <ReturnPolicy {...childProps} />
    </>
  )
}
export { ReturnPolicyPageDe }
