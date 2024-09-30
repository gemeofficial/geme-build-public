import { ReturnPolicy } from './components'
import type {
  IReturnPolicyCurrentProps,
  IReturnPolicyEndProps,
  IReturnPolicyProps,
} from './components'
import { SiteHelpTabs } from '../../components/tabs'
import { ETabsId } from '../../components/tabs/type'
import Svg7Days from './components/Svg7Days'
import Svg30Days from './components/Svg30Days'
import Svg45Days from './components/Svg45Days'
import Svg45DaysAfter from './components/Svg45DaysAfter'
import { getWarrantyTabsTextInfo } from '../../helpers/warranty-tabs-text-info'

// navbar的内容 配置文件 It版
const tabs = getWarrantyTabsTextInfo('it', ETabsId.ReturnPolicy)

// 静态页面的内容一 配置文件 It版
const returnPolicyCurrentProps: IReturnPolicyCurrentProps = {
  title: 'Come funzionano i resi',
  updateTime: 'Aggiornato: 25 novembre 2023',
  forward: {
    description: `
    <p class="mb-5">Il nostro team è felice di aiutarti con il processo di restituzione per i prodotti acquistati tramite www.geme.bio. Basta inviare il modulo di annullamento a <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio </a>. Tieni pronto il numero dell'ordine o il numero di serie del prodotto in modo che possiamo aiutarti a completare il processo.</p>
    <p class="mb-2 text-xs">
      Nota: Accettiamo solo resi di prodotti acquistati direttamente da questa tabella. Se hai acquistato il tuo prodotto da un altro rivenditore, contatta quel rivenditore per quanto riguarda il tuo reso.
    </p>

   <table class="border-collapse border border-slate-400 mb-5 table-auto">
      <thead>
        <tr>
          <th class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Nome della fonte</th>
          <th class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Link del negozio</th>
          <th class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Data di lancio</th>
        </tr>
      </thead>

      <tbody class="pl-2 pr-2 pb-2 pt-2">
        <tr>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2"">Sito ufficiale</td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">
            <a href="https://www.geme.bio/" target="_blank">www.geme.bio</a>
          </td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">2022-11-11</td>
        </tr>
        <tr>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Amazon</td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">
            <a href="https://www.amazon.com/dp/B0BV31KTCN" target="_blank">geme compostiera</a>
          </td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">2023-02-04</td>
        </tr>
        <tr>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">eBay</td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">
            <a href="https://www.ebay.com/usr/gemeofficial" target="_blank">geme official</a>
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
      name: 'Resi entro 30 giorni di calendario',
      hide: false,
      svgSrc: '<Svg30Days></Svg30Days>',
      description: `
        <p class="mb-5">Goditi 30 giorni di felicità con GEME a casa! Se non sei felice, restituiscilo entro 30 giorni (dal giorno della consegna dell'articolo). Ci occuperemo del resto e copriremo le spese di spedizione.</p>
        <p class="mb-5">Se non hai usato GEME-Kobold, otterrai un rimborso completo, senza fare domande!</p>
        <p class="mb-5">L'hai usato? Nessun problema! Restituiscilo, copriremo comunque le spese di spedizione. Verranno detratti solo 70$ dal pagamento originale per una pulizia completa e reintegro.</p>
        <p class="mb-5">Un piccolo consiglio: prima di restituire l'unità, assicurati di eliminare eventuali sottoprodotti, microrganismi usati o residui di cibo. Scatta foto prima e dopo l'imballaggio. Questi 2 semplici passaggi garantiscono un processo di restituzione regolare, prevenendo eventuali intoppi logistici.</p>
        <p class="mb-5">GEME Kobold accetta solo acquisti individuali da parte di utenti di apparecchiature esistenti. Per la tua sicurezza, una volta consegnato il Kobold, non sono accettati resi né rimborsi.</p>
        <p class="mb-5">La tua soddisfazione è la nostra priorità e vogliamo che questa prova sia un'esperienza piacevole per te!</p>
      `,
    },
    {
      name: 'Resi entro 45 giorni di calendario',
      hide: false,
      svgSrc: '<Svg45Days></Svg45Days>',
      description: `
      <p class="mb-5">Se non sei soddisfatto del tuo prodotto per qualsiasi altro motivo, hai fino a 45 giorni di calendario per richiedere un reso. Verrà addebitata una commissione di restocking aggiuntiva pari al 50% del prezzo di vendita del prodotto. Le spese di consegna, spedizione e servizio originali non saranno rimborsate. Contattaci tramite <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> per organizzare un reso.</p>
        `,
    },
    {
      name: 'Dopo 45 giorni di calendario',
      hide: false,
      svgSrc: '<Svg45DaysAfter></Svg45DaysAfter>',
      description: `
      <p class="mb-5">Se la finestra di restituzione di 45 giorni è scaduta e il tuo prodotto è ancora in garanzia, contattaci per il servizio di garanzia o per organizzare una riparazione. Potrebbe essere applicata una tariffa.</p>
      <p class="mb-5">Hai qualche problema? Contattaci tramite <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> in modo che possiamo capire meglio come aiutarti a risolvere il tuo problema.</p>
      `,
    },
  ],
}

// 静态页面的内容二 配置文件 It版
const returnPolicyEndProps: IReturnPolicyEndProps = {
  title: 'Come funzionano i resi',
  updateTime: 'Aggiornato: 1 gennaio 2023',
  forward: {
    description: `
        <p class="mb-5">Il nostro team è felice di aiutarti con il processo di reso per i prodotti acquistati tramite www.geme.bio. Invia semplicemente il modulo di cancellazione a <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a>. Si prega di avere il numero dell'ordine o il numero di serie del prodotto a portata di mano, in modo che possiamo aiutarti nel processo.</p>
        <p class="mb-5">Nota: accettiamo solo resi per prodotti acquistati direttamente su www.geme.bio. Se hai acquistato il tuo prodotto da un altro rivenditore, contatta quel rivenditore per quanto riguarda il reso.</p>
        `,
    imgSrc: '/assets/images/return-policy/1.png',
  },
  items: [
    {
      name: 'Resi entro 7 giorni - nessuna tassa di rifornimento',
      svgSrc: '<Svg7Days></Svg7Days>',
      description: `
          <p class="mb-5">La legge belga sulle pratiche commerciali e sull'informazione e protezione dei consumatori consente all'acquirente di notificare al venditore che abbandonerà l'acquisto entro 7 giorni dal ricevimento del prodotto. Le merci devono essere seguite entro un periodo di tempo accettabile (7 giorni) dal ricevimento e non devono essere state aperte o utilizzate. Consigliamo di conservare le merci nella loro confezione originale e condizioni il più possibile per non essere responsabile di eventuali svalutazioni delle merci a seguito della loro dismissione.</p>
          <p class="mb-5">Puoi inviare un <a href="/assets/return/revocation-form.docx" target='_blank' class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">modulo di revoca</a> via <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> per informarci che stai abbandonando il tuo acquisto. Dovrai quindi restituire le merci per posta ordinaria all'indirizzo sottostante con sufficiente affrancatura e una copia della fattura.</p>
          <p class="mb-5">Per consentirci di emettere un rimborso, ti preghiamo di fornirci anche il tuo numero di conto. Al ricevimento del reso, emetteremo una nota di credito e rimborseremo l'importo pagato entro 14 giorni. Non ci sono eccezioni al modulo di cancellazione.</p>
          <p class="mb-5">Se ricevi un prodotto che non è quello che hai ordinato o è danneggiato, devi informarci allo stesso modo e restituire il prodotto nello stesso modo. Tuttavia, in questo caso, ti rimborseremo anche le spese di spedizione inviate tramite posta ordinaria.</p>
          `,
    },
    {
      name: 'Resi entro 30 giorni di calendario',
      svgSrc: '<Svg30Days></Svg30Days>',
      description: `
          <p class="mb-5">Prodotti danneggiati al momento della consegna</p>
          <p class="mb-5">(I danni includono graffi, ammaccature, scheggiature e altri danni causati da difetti nei materiali e/o nella lavorazione.)</p>
          <p class="mb-5">Se ritieni che il tuo prodotto sia stato consegnato danneggiato, puoi richiedere un reso, una sostituzione o una riparazione tramite <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> entro 30 giorni di calendario.</p>
          <ul class="my-5 list-inside list-disc">
            <li class="mb-5">Per le sostituzioni, non sarà richiesto alcun costo aggiuntivo per la consegna, la spedizione o il servizio. A seconda della differenza di prezzo del nuovo articolo, riceverai un credito o una tassa sulla carta di credito utilizzata per acquistare l'articolo originale.</li>
            <li class="mb-5">Per i resi, riceverai un rimborso per il prodotto, ma le spese di consegna, spedizione e servizio non saranno rimborsate. Si prega di chiamarci per discutere la natura del danno e confermare che si è idonei a ricevere un rimborso del prodotto.</li>
            <li class="mb-5">Se sei interessato a una riparazione, invia semplicemente un'email allo stesso indirizzo per programmare il servizio.</li>
          </ul>
          `,
    },
    {
      name: 'Resi entro 45 giorni di calendario',
      svgSrc: '<Svg45Days></Svg45Days>',
      description: `
          <p class="mb-5">Se non sei soddisfatto del tuo prodotto per qualsiasi altro motivo, hai fino a 45 giorni di calendario per richiedere un reso. Verrà addebitata una tassa di rifornimento aggiuntiva del 50% del prezzo di vendita del prodotto. Le spese di consegna, spedizione e servizio originali non saranno rimborsate. Contattaci tramite <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> per organizzare un reso.</p>
            `,
    },
    {
      name: 'Dopo 45 giorni di calendario',
      svgSrc: '<Svg45DaysAfter></Svg45DaysAfter>',
      description: `
          <p class="mb-5">Se il periodo di reso di 45 giorni è scaduto e il tuo prodotto è ancora in garanzia, ti preghiamo di chiamarci per il servizio di garanzia o per organizzare una riparazione. Potrebbe essere applicata una tassa.</p>
          <p class="mb-5">Qualsiasi motivo per essere insoddisfatto? Contattaci tramite <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> così possiamo capire meglio come aiutarti a risolvere il tuo problema.</p>
          `,
    },
  ],
}

function ReturnPolicyPageIt() {
  const childProps: IReturnPolicyProps = {
    current: returnPolicyCurrentProps,
    end: returnPolicyEndProps,
  }

  return (
    <>
      <h1 className="sr-only">Informativa sulla restituzione di GEME</h1>
      <SiteHelpTabs {...tabs} />
      <ReturnPolicy {...childProps} />
    </>
  )
}
export { ReturnPolicyPageIt }
