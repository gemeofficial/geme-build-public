import { Warranty } from './components'
import type { IWarrantyProps } from './components'
import { SiteHelpTabs } from '../../components/tabs'
import { ETabsId } from '../../components/tabs/type'
import { getWarrantyTabsTextInfo } from '../../helpers/warranty-tabs-text-info'

// 静态页面的navBar内容 配置文件 It版
const tabs = getWarrantyTabsTextInfo('it', ETabsId.Warranty)

// 静态页面的内容 配置文件 It版
const warrantyProps: IWarrantyProps = {
  title: 'garanzia',
  forward: {
    title: 'Prefazione',
    description: `
    Gli elettrodomestici ROKH SRL sono prodotti con standard qualitativi molto elevati. Tuttavia, i guasti sono sempre possibili. In tali casi, le riparazioni possono essere eseguite rapidamente e professionalmente durante o dopo il periodo di garanzia, senza influire sulla durata del servizio dell'apparecchiatura.
    <br />
    <br />
    Le condizioni di garanzia di ROKH SRL sono stabilite in conformità alla Direttiva 99/44/CE dell'UE e alla legislazione nazionale applicabile; esse non influiscono in alcun modo sui diritti che conferiscono al consumatore.
  `,
    imgSrc: '/assets/images/warranty/1.png',
  },

  items: [
    {
      name: 'Inizio e durata del periodo di garanzia',
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
        Il periodo di garanzia del COMPOSTATORE BIO-RIFIUTI GEME inizia dalla data di acquisto da parte del consumatore. Il periodo di garanzia è di 12 mesi, quando e solo quando la garanzia viene utilizzata gratuitamente come descritto nel presente documento durante l'uso domestico.
        <br /> <br />
        Il periodo di garanzia di 1 anno è sospeso durante la riparazione o la sostituzione. Al termine di questo periodo, il consumatore non ha diritto a una nuova garanzia di 1 anno, ma il periodo di garanzia già iniziato viene ripristinato a partire dal momento della sostituzione o dal completamento della riparazione.
        </li>
        <li>
        Per le apparecchiature commerciali, il periodo di garanzia è regolato dai termini del contratto di vendita.
        </li>
      </ul>
      `,
    },
    {
      name: 'Contenuto e Copertura della Garanzia',
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
      <p class="mb-5">ROKH SRL si impegna a riparare o sostituire parti difettose gratuitamente se il difetto iniziale si verifica durante il periodo di garanzia o se il guasto si verifica durante l'uso corretto.</p>
      <p class="mb-5">Le parti sostituite rimangono di proprietà di ROKH SRL. Se lo stesso difetto si verifica più volte durante il periodo di garanzia, o se il costo della riparazione è ritenuto sproporzionato rispetto al valore dell'apparecchiatura, verrà offerta al consumatore la sostituzione dell'apparecchiatura equivalente previa consultazione. In tal caso, ROKH SRL si riserva il diritto di addebitare al consumatore un importo in base al periodo di utilizzo.</p>
      <p class="mb-5">Qualsiasi difetto deve essere segnalato immediatamente per evitare danni più gravi.</p>
      <p class="mb-5">Per gli apparecchi difficili da trasportare e per i dispositivi incorporati, le riparazioni verranno eseguite a domicilio del consumatore. Gli apparecchi facilmente trasportabili verranno consegnati o inviati all'assistenza post-vendita di ROKH SRL, direttamente o tramite un rivenditore.</p>
      `,
    },
    {
      name: 'Limitazioni della Garanzia',
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
      <p class="mb-5">La garanzia non si applica nei seguenti casi.</p>
      <ul class="my-5 list-inside list-disc">
        <li class="mb-5">Lievi discrepanze relative alla qualità prevista, che non influiscono sul valore o sul corretto funzionamento dell'apparecchiatura.</li>
        <li class="mb-5">Modifiche di costruzione o esecuzione apportate prima dell'esecuzione dell'ordine che non influiscono sul valore e sul buon funzionamento dell'apparecchiatura.</li>
        <li class="mb-5">Difetti dovuti a un'errata installazione o montaggio.</li>
        <li class="mb-5">Conseguenze di fattori esterni, come: danni da trasporto; uso non conforme che può danneggiare determinati componenti sensibili, come parti sintetiche, gomma; reazioni chimiche o elettrochimiche causate dall'acqua; condizioni climatiche; stress ambientali anomali.</li>
        <li class="mb-5">Condizioni d'uso o di funzionamento non idonee.</li>
        <li class="mb-5">Riparazioni o modifiche effettuate da terzi non qualificati professionalmente.</li>
        <li class="mb-5">Mancanza di numeri di identificazione dell'attrezzatura.</li>
        <li class="mb-5">Attrezzature acquistate al di fuori dell'Unione Europea, Norvegia o Svizzera, al di fuori degli Stati Uniti, che, a causa delle sue specifiche tecniche, risultano inutilizzabili o in parte inutilizzabili.</li>
        <li class="mb-5">Usura inevitabile e deterioramento dovuti all'uso di parti o processi naturali, che secondo il manuale dell'utente devono essere sostituiti regolarmente, es. lampade UV-UV.</li>
        <li class="mb-5">Mancata manutenzione adeguata (ad es. mancata eliminazione di rifiuti non biologici come richiesto o sovraccarico dell'operazione) e/o esecuzione impropria (ad es. uso di detergenti aggressivi).</li>
        <li class="mb-5">Uso di accessori o parti non originali.</li>
      </ul>
      `,
    },
  ],

  additionalProvisions: {
    title: 'Disposizioni aggiuntive',
    description: `
    Le richieste di annullamento della vendita, perdita di valore o danni non
    sono coperte, ad eccezione dei casi previsti dalla legge in questo campo.
    In caso di reclamo, il risarcimento non può superare il valore
    dell'attrezzatura.
    <br />
    <br />
    Le condizioni di garanzia si applicano alle apparecchiature acquistate e
    utilizzate in Belgio. Nel caso di utilizzo all'estero di apparecchiature
    acquistate in Belgio, o in caso di utilizzo in Belgio di apparecchiature
    acquistate all'estero, il consumatore deve garantire che l'attrezzatura
    sia conforme alle condizioni tecniche del luogo di utilizzo (indicatori
    elettrici, frequenza elettrica, standard di installazione, condizioni
    climatiche). I difetti derivanti dalla non conformità dell'apparecchiatura
    a tali requisiti e le modifiche apportate per renderla conforme non sono
    coperti dalla garanzia.
    <br />
    <br />
    Se sono necessari più di 30 minuti per accedere all'attrezzatura e
    riportarla alla sua posizione originale per completare la riparazione, il
    costo aggiuntivo per il tempo impiegato sarà addebitato. Eventuali danni
    derivanti da tale manipolazione sono anche a carico del consumatore.
    <br />
    <br />
    Per qualsiasi controversia o disaccordo, i tribunali della Regione di
    Bruxelles avranno giurisdizione.
    `,
  },
}

function WarrantyPageIt() {
  return (
    <>
      <h1 className="sr-only">Informativa sulla garanzia di GEME</h1>
      <SiteHelpTabs {...tabs} />
      <Warranty {...warrantyProps} />
    </>
  )
}
export { WarrantyPageIt }
