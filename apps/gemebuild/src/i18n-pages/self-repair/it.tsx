/* eslint-disable react/no-unescaped-entities */
import SelfRepairView from './components/SelfRepairView'
import { IFaqOffsetWithSupportingTextProps } from './components/FaqOffsetWithSupportingText'
import { IHeaderCenteredProps } from './components/Hero'
import Image from 'next/image'

// 页面内容配置文件1  It版
const faqGroups: IFaqOffsetWithSupportingTextProps[] = [
  {
    title: 'Nessuna Alimentazione',
    description: `Ho problemi ad accendere il mio GEME. Le luci LED frontali non si accendono, anche quando premo il pulsante di accensione.`,
    faqs: [
      {
        question: 'La spina e la presa sono collegate correttamente?',
        answer: 'Si prega di collegare correttamente la spina alla presa.',
      },
      {
        question: 'La tensione è 110/220V?',
        answer: 'Si prega di utilizzare una tensione di 110/220V.',
      },
      {
        question: 'Nessuno dei casi sopra elencati?',
        answer: 'Si prega di contattare il centro assistenza post-vendita.',
      },
    ],
  },
  {
    title: 'Suono di Avvertimento',
    description: `Sto riscontrando un problema con il mio GEME. Quando è in funzione, emette un suono di avvertimento "bibibi" e il display LED mostra un codice di errore.`,
    faqs: [
      {
        question: 'Quando il codice viene visualizzato come segue:',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <Image src="/assets/images/self-repair/stirringIndicatorLight.png" alt='codice visualizzato1' width={260} height={80} />
            <p>Questo codice indica che la miscelazione è anomala.</p>
            <ul>
              <li>
                Controllare se c'è un oggetto estraneo duro bloccato nel serbatoio di decomposizione.
              </li>
              <li>
                Rimuovere l'oggetto estraneo, chiudere il coperchio e verificare se il codice è ancora visualizzato.
              </li>
              <li>
                Se il codice sopra è ancora visualizzato, si prega di contattare il centro assistenza.
              </li>
            </ul>
          </div>
        ),
      },
      {
        question: 'Quando il codice viene visualizzato come segue:',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <Image src="/assets/images/self-repair/uvLampIndicatorLight.png" alt='codice visualizzato2' width={260} height={80} />
            <p>
              Si prega di{' '}
              <a href="https://youtu.be/VdAtQfpSQ_E" target="_blank">
                cambiare la lampada UV.
              </a>
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: 'Rumore',
    description: `Ho notato che il mio GEME emette rumori insoliti mentre è in funzione. I suoni sono distintamente diversi da quelli che sentirei normalmente durante il funzionamento.`,
    faqs: [
      {
        question:
          `C'è qualche oggetto estraneo duro bloccato nel serbatoio di decomposizione?`,
        answer: 'Si prega di rimuovere gli oggetti duri.',
      },
      {
        question:
          'Il rumore viene generato periodicamente quando il motore di miscelazione è in funzione?',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            Questo è causato dal motore di miscelazione. Si prega di{' '}
            <a href="https://youtu.be/rthDSasoOrY" target="_blank">
              regolare i piedini
            </a>{' '}
            del GEME per mantenere il dispositivo su una superficie piana per un funzionamento regolare o contattare il centro assistenza post-vendita.
          </div>
        ),
      },
      {
        question: 'Il rumore proviene dalla ventola?',
        answer: `Si prega di controllare dove è posizionata l'attrezzatura per assicurarsi che l'uscita dell'aria non sia bloccata, o contattare il centro assistenza post-vendita.`,
      },
      {
        question:
          "Il rumore sembra un rumore intermittente di 'du' e l'interno del serbatoio di decomposizione è troppo secco?",
        answer: `Aggiungere circa 200 a 500 ml di acqua nel serbatoio di decomposizione o si può mettere rifiuti biologici con più acqua.`,
      },
    ],
  },
  {
    title: 'Cattivo Odore',
    description: `Ho notato che il mio GEME emette un odore sgradevole.`,
    faqs: [
      {
        question:
          `L'odore si diffonde indipendentemente dal fatto che il coperchio sia chiuso o meno?`,
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <p>
              Si prega di controllare se il materiale generato nel vostro GEME è troppo umido. La fermentazione anaerobica innescata da troppa umidità può produrre un odore.
            </p>
            <ul>
              <li>Si prega di controllare se l'alimentazione del vostro dispositivo è sempre accesa.</li>
              <li>
                Si prega di smettere di mettere rifiuti biologici per 2-3 giorni e premere il pulsante di deodorizzazione e deumidificazione.
              </li>
              <li>
                Se l'umidità del sottoprodotto è troppo alta, si prega di toglierlo e metterlo in un luogo ventilato per farlo asciugare prima di riattivarlo per l'uso.
              </li>
            </ul>
          </div>
        ),
      },
      {
        question:
          `Non c'è odore dal sottoprodotto all'interno del GEME, ma c'è un odore dal gas scaricato dall'unità?`,
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <p>Questo è un problema con l'unità di deodorizzazione.</p>
            <ul>
              <li>Si prega di controllare se il filtro è intasato e pulirlo.</li>
              <li>
                Si prega di controllare se la porta di scarico è bloccata e rimuovere il blocco.
              </li>
              <li>Altrimenti, si prega di contattare il centro assistenza post-vendita.</li>
            </ul>
          </div>
        ),
      },
      {
        question: 'GEME ha un leggero odore.',
        answer: `Si prega di premere il pulsante di deodorizzazione.`,
      },
    ],
  },
  {
    title: 'Non Mescola',
    description: `L'albero dell'agitatore del mio GEME ha smesso di ruotare.`,
    faqs: [
      {
        question: 'Ci sono troppi sottoprodotti?',
        answer: `
        Mantenere la stessa quantità di sottoprodotti come i microbi originali e rimuovere il resto.
        `,
      },
      {
        question: 'Lo stato interno è abbastanza denso?',
        answer: `Smettere di mettere i rifiuti per 2-5 giorni e usarlo normalmente dopo l'asciugatura.`,
      },
      {
        question:
          `Ci sono fibre lunghe avvolte con l'albero di miscelazione?`,
        answer: `Si prega di rimuovere le fibre lunghe dall'albero di miscelazione. Si prega di tagliare il più possibile i rifiuti alimentari prima di metterli nel GEME.`,
      },
      {
        question: 'Il motore non funziona?',
        answer: `Si prega di consultare il centro assistenza post-vendita.`,
      },
    ],
  },
  {
    title: 'Rifiuti Non Decomposti',
    description: `Ho notato che i miei rifiuti non si decompongono affatto dopo essere stati messi nel mio GEME, anche dopo aver aspettato 1-3 giorni.`,
    faqs: [
      {
        question:
          `Il motore dell'agitatore è anomalo e causa un'agitazione insufficiente?`,
        answer: `Guasto del motore di miscelazione, si prega di contattare il centro assistenza post-vendita.`,
      },
      {
        question:
          'Hai messo troppi rifiuti biologici? (la capacità di elaborazione media giornaliera è di circa 5 kg)',
        answer: `Si prega di smettere di mettere rifiuti biologici per 2-5 giorni e riutilizzarlo normalmente dopo che l'interno del serbatoio di decomposizione è asciutto.`,
      },
      {
        question: 'Hai messo bucce di frutta o altri rifiuti biologici ricchi di fibre?',
        answer: `Tagliare i rifiuti biologici ricchi di fibre in piccoli pezzi per accelerare la decomposizione o decomporre dopo un periodo di tempo.`,
      },
      {
        question: `Tutto va bene ma la velocità di decomposizione è solo più lenta di prima?`,
        answer: `Si prega di aggiungere nuovi microrganismi o sostituirli.`,
      },
    ],
  },
  {
    title: 'Troppo Umido o Fangoso',
    description: `Il sottoprodotto nel mio GEME è eccessivamente umido o fangoso.`,
    faqs: [
      {
        question: 'Hai messo troppi rifiuti biologici?',
        answer: `La capacità di elaborazione media giornaliera è di 5 kg.
        Si prega di smettere di mettere rifiuti biologici per 2-5 giorni e riutilizzarlo normalmente dopo che l'interno del serbatoio di decomposizione è asciutto.`,
      },
      {
        question: 'Hai messo rifiuti biologici che contengono troppa acqua?',
        answer: `Si prega di smettere di mettere rifiuti biologici per 2-5 giorni e riutilizzarlo normalmente dopo che l'interno del serbatoio di decomposizione è asciutto.`,
      },
      {
        question: `Hai spento l'alimentazione?`,
        answer: `Dopo aver utilizzato l'alimentazione per 1~3 giorni, sarà utilizzato normalmente.`,
      },
    ],
  },
  {
    title: `Condensa`,
    description: 'Ci sono gocce d\'acqua sul coperchio interno del mio GEME.',
    faqs: [
      {
        question: 'Hai messo troppi rifiuti biologici?',
        answer: `Premere il pulsante di deumidificazione e smettere di mettere rifiuti biologici per 2~3 giorni.`,
      },
      {
        question: `GEME è installato in un luogo più fresco (non durante l'inverno)?`,
        answer: `Si prega di spostare GEME all'interno.`,
      },
      {
        question: 'Hai dimenticato di rimuovere il cuscinetto di schiuma sotto il prodotto?',
        answer: `Dopo aver rimosso il cuscinetto di schiuma, premere il pulsante della funzione di deumidificazione.`,
      },
      {
        question: `Il filtro di scarico nel serbatoio di decomposizione è intasato.`,
        answer: `Si prega di pulire il filtro di scarico.`,
      },
    ],
  },
  {
    title: 'Insetti',
    description: `Ho notato insetti all'interno del contenitore del mio GEME, insieme ai rifiuti alimentari.`,
    faqs: [
      {
        question: `Hai spento l'alimentazione?`,
        answer: `Sostituire con nuovi microrganismi.`,
      },
    ],
  },
  {
    title: 'Troppo Secco',
    description: `Ho notato che l'interno del serbatoio di decomposizione nel mio GEME è troppo secco, e sia i rifiuti che il GEME-Kobold sembrano essere asciutti.`,
    faqs: [
      {
        question: 'La quantità di rifiuti biologici è troppo piccola?',
        answer: `Versare circa 200 ml di acqua o mettere una quantità adeguata di zuppa quando si mettono i rifiuti biologici.`,
      },
    ],
  },
]

// 页面内容配置文件2  It版
const heroProps: IHeaderCenteredProps = {
  title: 'Auto-riparazione',
  description: `Benvenuti nella Guida all'Auto-riparazione di GEME! Scopri come risolvere i problemi del tuo GEME. La nostra guida passo-passo fornisce istruzioni facili da seguire e immagini per aiutarti a diagnosticare e riparare i tuoi dispositivi. Non lasciare che un dispositivo rotto vada sprecato, impara a ripararlo seguendo una semplice lista di controllo.`,
}

function SelfRepairPageIt() {
  const props = { faqGroups, heroProps }
  return (
    <>
      <h1 className="sr-only">Riparazione GEME</h1>
      <SelfRepairView {...props} />
    </>
  )
}
export { SelfRepairPageIt }
