import { GemeDotsLoyaltyProgram } from './components'
import type { IGemeDotsProps } from './components'
import { SiteHelpTabs } from '../../components/tabs'
import { ETabsId } from '../../components/tabs/type'
import s from './components/index.module.css'
import cn from 'clsx'
import { getWarrantyTabsTextInfo } from '../../helpers/warranty-tabs-text-info'

// Navbar内容 配置文件 It版
const tabs = getWarrantyTabsTextInfo('en', ETabsId.GemeDotsLoyaltyProgram)

// 静态页面的内容 配置文件 It版
const gemeDotsProps: IGemeDotsProps = {
  title: 'Programma Fedeltà GEME Dots',
  forward: {
    title: 'Dichiarazione GEME Dots',
    description: `
        <p class="mb-10">Benvenuti nel Programma Fedeltà GEME Dots.</p>
        <p class="mb-5">Accumula i tuoi GEME Dots - l'eco-sostenibilità paga sempre!</p>
        <ul class="mx-2 my-5 list-inside list-disc">
            <li class="mb-5 ${cn(s.textIndented)}">Scopri il nostro programma fedeltà GEME Dots!</li>
            <li class="mb-5 ${cn(s.textIndented)}">Raccogli i tuoi GEME Dots con ogni acquisto e risparmia denaro.</li>
            <li class="mb-5 ${cn(s.textIndented)}">Goditi benefici straordinari e ricevi premi per la tua eco-sostenibilità.</li>
            <li class="mb-5 ${cn(s.textIndented)}">L'eco-sostenibilità paga sempre: una volta raccolti 1.000 GEME Dots, puoi riscattarli immediatamente sul tuo prossimo acquisto o decidere di continuare a raccoglierli. Puoi riscattare fino a 40.000 GEME Dots per acquisto per un cashback immediato di 40€!</li>
        </ul>
        `,
    imgSrc: '/assets/images/geme-dots-loyalty-program/image.png',
  },
  subTitle: `<p class="mb-5">Ecco come funziona il programma fedeltà GEME Dots</p>`,
  enrollment: {
    title: 'Idoneità e Iscrizione',
    questionsAndAnswers: [
      {
        question: 'Come posso partecipare al Programma Fedeltà GEME Dots?',
        answer:
          'Puoi registrarti facilmente su <a href="https://www.geme.bio/signup" class="underline">https://www.geme.bio/signup</a>. Puoi utilizzare i dati del tuo account cliente se sei già un cliente.',
      },
      {
        question:
          'La partecipazione al Programma Fedeltà GEME Dots è a pagamento?',
        answer: `L'iscrizione al programma fedeltà GEME Dots è completamente gratuita.`,
      },
      {
        question:
          'Devo essere membro del programma fedeltà GEME Dots per ricevere offerte speciali?',
        answer:
          'No, tutti i nostri clienti possono usufruire delle nostre offerte speciali. Per guadagnare GEME Dots sui tuoi acquisti e ricevere promozioni esclusive GEME Dots, devi essere membro del programma fedeltà GEME Dots.',
      },
      {
        question: 'Come posso guadagnare GEME Dots?',
        answer: `
            <p>Per ogni acquisto effettuato tramite il tuo account cliente, riceverai GEME Dots. Riceverai 10 GEME Dots per ogni euro speso o ulteriori 10 "GEME Dots" come ricompensa per aver invitato altri a registrarsi; e ulteriori 100 "GEME Dots" come ricompensa per aver invitato altri ad acquistare.
            <br /> <br />
            Inoltre, organizziamo regolarmente promozioni in cui puoi guadagnare ancora più GEME Dots! Puoi saperne di più su <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a>.
            </p>`,
      },
      {
        question: 'Quando saranno disponibili i miei GEME Dots?',
        answer: `
            <p>
            Puoi guadagnare GEME Dots su <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a>
            <br />
            I GEME Dots guadagnati durante lo shopping sul sito web saranno accreditati sul tuo account entro 14 giorni lavorativi dalla data di spedizione. Fino ad allora, questi GEME Dots saranno considerati "GEME Dots in attesa di conferma". Se l'ordine non viene annullato o modificato (esclusi i reclami in garanzia), i tuoi GEME Dots saranno accreditati solo successivamente.
            </p>
            `,
      },
      {
        question: 'Quanti GEME Dots di fedeltà posso utilizzare per ordine?',
        answer: `<p>
            Il valore dei GEME Dots che riscatti non può superare il valore del tuo ordine. Inoltre, puoi riscattare fino a 40.000 GEME Dots per acquisto, che corrisponde a una riduzione immediata di 40€.
            </p>`,
      },
      {
        question:
          'Alcuni prodotti di questa gamma sono esclusi dal programma fedeltà GEME Dots?',
        answer: 'Sì, per motivi legali, lo sconto non si applica ai libri.',
      },
      {
        question: 'Come posso riscattare i miei GEME Dots?',
        answer:
          'I GEME Dots raccolti durante un ordine possono essere convertiti in un buono. I GEME Dots saranno convertiti in un importo che verrà detratto dal totale della tua fattura. Puoi decidere a livello di carrello durante ogni ordine se vuoi scambiare i tuoi GEME Dots o continuare a raccoglierli.',
      },
      {
        question: 'I miei GEME Dots scadranno?',
        answer:
          'Sì, i tuoi GEME Dots scadranno se non vengono utilizzati per tre anni o se non hai effettuato un ordine su un account collegato per 12 mesi.',
      },
    ],
  },
  conditions: {
    title: 'Condizioni per la partecipazione al programma fedeltà GEME Dots',
    items: [
      {
        label: 'Responsabilità',
        description: `
          <p>
          Il gestore del programma fedeltà GEME Dots è
          ROKH SRL<br /><br />  Bruxelles, Belgio  
          Boulevard Louis Schmidt 29,<br /><br />
          1040 Etterbeek, <br /><br />
          Bruxelles, <br /><br />
          Belgio <br /><br />
          (Di seguito denominato "ROKH")
          </p>
          `,
      },
      {
        label: 'Idoneità',
        description: `<p class="mb-5">Solo le persone fisiche di età superiore ai 18 anni sono idonee a partecipare.</p>`,
      },
      {
        label: `Idoneità per l'iscrizione`,
        description: `
            <ul class="m-5 ml-0 list-inside list-decimal">
                <li class="mb-5 ${cn(s.textIndented)}">La partecipazione al programma fedeltà GEME Dots è gratuita. È disponibile solo tramite il sito web <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> quando ti registri online sul sito o al momento dell'acquisto</li>
                <li class="${cn(s.textIndented)}">Se sei idoneo (vedi 2. Idoneità), inizierai a partecipare al programma fedeltà GEME Dots immediatamente dopo aver verificato la tua registrazione. </li>
            </ul>`,
      },
      {
        label: 'Programma Fedeltà GEME Dots',
        description: `
              <p class="mb-5">
              Come membro del Programma Fedeltà GEME Dots, beneficerai di numerosi vantaggi e il Programma Fedeltà GEME Dots si riserva il diritto di modificare, integrare o limitare il contenuto di questi vantaggi.
              </p>
              <ul class="m-5 ml-0 list-inside list-decimal">
              <li class="mb-5">
                <span class="font-bold">Guadagnare GEME Dots</span>
                <p class="mt-2 ml-5">Come membro del programma, puoi guadagnare "GEME Dots" durante i tuoi acquisti su <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> o guadagnare ulteriori 10 "GEME Dots" come ricompensa per aver invitato altri a registrarsi; e ulteriori 100 "GEME Dots" come ricompensa per aver invitato altri ad acquistare. <p class="mt-2 ml-5">
              <li class="mb-5">
                 <span class="font-bold">GEME Dots in attesa di conferma</span>
                 <p class="mt-2 ml-5">I GEME Dots che accumuli durante i tuoi acquisti sul sito web <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> saranno accreditati sul tuo account entro 15 giorni dalla data di spedizione del tuo ordine. Fino ad allora, questi GEME Dots saranno considerati "GEME Dots in attesa di conferma". Se l'ordine non viene annullato o modificato (esclusi i reclami in garanzia), i tuoi GEME Dots saranno accreditati solo successivamente. <p class="mt-2 ml-5">
              </li>
              <li class="mb-5">
                <span class="font-bold">Validità e scadenza dei GEME Dots</span>
                <p class="mt-2 ml-5">I GEME Dots guadagnati sono validi per 12 mesi dalla data di accredito e scadranno se non viene effettuato alcun ordine sull'account associato durante questo periodo. Inoltre, tutti i GEME Dots non utilizzati scadranno dopo 3 anni. <p class="mt-2 ml-5">
              </li>
              <li class="mb-5">
                <span class="mb-5 font-bold">Notifica della quantità di GEME Dots</span>
                <p class="mt-2 ml-5">Sarai periodicamente informato della quantità attuale dei tuoi GEME Dots. Le notifiche saranno inviate elettronicamente (via email) o per posta. <p class="mt-2 ml-5">
              </li>
              <li class="mb-5">
                Le condizioni del programma fedeltà GEME Dots si applicano al momento della transazione.</p>
              </li>
              <li class="mb-5">
                Sarai informato se le condizioni e i benefici del programma fedeltà GEME Dots vengono modificati, integrati o limitati.
              </li>
              <li class="mb-5">
                 <span class="font-bold">I bonus fisici e i bonus non possono essere scambiati con altri prodotti o denaro.</span>
                 <p class="mt-2 ml-5">Eventuali reclami in garanzia per i bonus in natura devono essere conformi alla legge applicabile. Questo non include alcun pagamento in contanti per i servizi "a valore aggiunto".</p>
              </li>
              <li>
                 L'annullamento di un contratto (ad esempio, uno scambio) non significa che l'acquisto sia considerato parte dei benefici del piano.
              </li>
              </ul>
              `,
      },
      {
        label: 'Cessazione',
        description: `
              <p>
              Puoi terminare la tua partecipazione al Programma Fedeltà GEME Dots in qualsiasi momento senza preavviso tramite comunicazione scritta (ad esempio, via email). Il Programma Fedeltà GEME Dots può essere terminato senza alcuna ragione specifica, ma con un preavviso di 4 settimane. Il diritto di entrambe le parti di terminare specificamente per giusta causa non è influenzato.
              </p>`,
      },
      {
        label: 'Modifica delle condizioni di partecipazione',
        description: `
              <p>
              ROKH si riserva il diritto di modificare o eliminare le condizioni di partecipazione in qualsiasi momento dandoti almeno 30 giorni di preavviso via email. Se non ti opponi alla modifica prima della scadenza di questo periodo, essa entrerà in vigore dalla data specificata. Se non accetti le nuove condizioni di partecipazione, puoi opporti per iscritto (ad esempio, via email) alla modifica o terminare la tua partecipazione al programma fedeltà GEME Dots. Se ti opponi alla modifica, si applicheranno i termini precedenti. In questo caso, FARMALINE si riserva il diritto di annullare la tua partecipazione al programma.
              </p>`,
      },
    ],
  },
}

function GemeDotsLoyaltyProgramPageIt() {
  return (
    <>
      <h1 className="sr-only">Dettagli del programma di fedeltà GEME Dots</h1>
      <SiteHelpTabs {...tabs} />
      <GemeDotsLoyaltyProgram {...gemeDotsProps} />
    </>
  )
}

export { GemeDotsLoyaltyProgramPageIt }
