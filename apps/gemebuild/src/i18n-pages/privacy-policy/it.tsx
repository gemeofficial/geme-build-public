import { PrivacyPolicy } from './components'
import { SiteHelpTabs } from '../../components/tabs'
import { ETabsId } from '../../components/tabs/type'
import type { IPrivacyPolicyProps } from './components'
import { getWarrantyTabsTextInfo } from '../../helpers/warranty-tabs-text-info'

// 静态页面的navBar内容 配置文件 It版
const tabs = getWarrantyTabsTextInfo('it', ETabsId.PrivacyPolicy)

// 静态页面的内容 配置文件 It版
const privacyPolicyProps: IPrivacyPolicyProps = {
  title: 'Informativa sulla Privacy',
  description: `
    <p class="mb-15">
    Presso ROKH, ci impegniamo a proteggere la privacy e i dati personali dei nostri clienti. Pertanto, riteniamo molto importante informare i nostri clienti su come trattiamo i loro dati e perché ne abbiamo bisogno.
    <br /> <br />
    Questa informativa sulla privacy ha lo scopo di informarvi sul trattamento dei dati nell'ambito del nostro sito web e dei servizi correlati. Il trattamento dei dati personali avviene solo nell'ambito delle corrispondenti normative legali sulla protezione dei dati applicabili, in particolare il Regolamento Generale sulla Protezione dei Dati (GDPR).
    <br /> <br />
    Questo sito web appartiene a ROKH SRL.
    </p>
    `,
  items: [
    {
      name: 'Responsabile della Protezione dei Dati',
      description: `
      <p class="mb-15">
      Potete contattare il nostro Responsabile della Protezione dei Dati all'indirizzo Privacy@geme.bio
      </p>
      `,
    },
    {
      name: 'Dati Personali',
      description: `
      <p class="mb-15">
      I dati personali sono tutte le informazioni relative a una persona fisica identificata o identificabile; una persona fisica è considerata identificabile se può essere identificata direttamente o indirettamente, in particolare utilizzando identificatori come nome, numero di identificazione, coordinate di localizzazione, identificatore online, o collegandola a una o più caratteristiche che sono l'espressione fisica, fisiologica, genetica, psicologica, economica, culturale o sociale dell'identità. Questo include tutte le informazioni relative alle vostre identità, come il vostro nome, indirizzo e-mail o indirizzo postale, numero cliente e un identificatore online.
      <br /> <br />
      In linea di principio, potete utilizzare i nostri servizi online e mobili senza rivelare la vostra identità e senza comunicare dati personali. Tuttavia, i dati personali su di voi vengono raccolti quando utilizzate determinati servizi del nostro negozio online e delle applicazioni.
      </p>
      `,
    },
    {
      name: 'Conservazione dei Dati Personali',
      description: `
      <p class="mb-15">
      I vostri dati sono conservati da noi su server appositamente protetti. Sono protetti da misure tecniche e organizzative per prevenire la perdita, la distruzione, l'accesso, la modifica o la diffusione da parte di persone non autorizzate. Solo un numero limitato di persone autorizzate ha accesso ai vostri dati. Sono responsabili della gestione tecnica, commerciale o editoriale del server.
      <br /> <br />
      I vostri dati vengono trasmessi in forma criptata su Internet. Utilizziamo la crittografia SSL (Secure Sockets Layer) per la trasmissione dei dati.
      </p>
      `,
    },
    {
      name: 'Base Giuridica per il Trattamento dei Dati',
      description: `
      <p class="mb-15">
      Se otteniamo il consenso per trattare i vostri dati, l'Art. 6 par. 1 a) GDPR serve come base giuridica per il trattamento dei dati.
      <br /> <br />
      Se trattiamo i vostri dati perché è necessario per l'esecuzione di un contratto o nel contesto di un rapporto quasi contrattuale con voi, l'Art. 6 par. 1 b) GDPR serve come base giuridica per il trattamento dei dati.
      <br /> <br />
      Se trattiamo i vostri dati per adempiere a un obbligo legale, l'Art. 6 par. 1 c) GDPR serve come base giuridica per il trattamento dei dati.
      <br /> <br />
      L'Art. 6 par. 1 f) GDPR se il trattamento dei vostri dati è necessario per salvaguardare gli interessi legittimi della nostra azienda o di terzi, e se i vostri interessi, diritti fondamentali e libertà in questo senso non sono richiesti dai principi fondamentali per la protezione dei dati personali.
      <br/> <br />
      Nell'ambito di questa informativa sulla privacy, indichiamo sempre la base giuridica per il nostro trattamento dei vostri dati.
      </p>
      `,
    },
    {
      name: 'Cancellazione dei Dati e Periodo di Conservazione',
      description: `
      <p class="mb-15">
      In linea di principio, cancelleremo o bloccheremo sempre i vostri dati quando la conservazione diventa priva di significato. Tuttavia, i dati personali possono essere conservati altrove se ciò è previsto dai requisiti legali a cui siamo soggetti (ad esempio in relazione agli obblighi legali di conservazione e documentazione). In questo caso, cancelleremo o bloccheremo i vostri dati al termine delle procedure.
      </p>
      `,
    },
    {
      name: 'Trattamento dei Dati in Caso di Uso Generale delle Nostre Offerte',
      description: `
      `,
    },
    {
      name: 'Informazioni sul Dispositivo di Comunicazione Utilizzato',
      description: `
      <p class="mb-15">
      Ogni volta che accedete alle nostre offerte online e mobili, raccogliamo le seguenti informazioni sul dispositivo che state utilizzando: l'indirizzo IP, la richiesta del vostro browser e la data e l'ora di tale richiesta. Inoltre, vengono catturati lo stato e il volume dei dati trasmessi come parte di questa richiesta. Raccogliamo anche informazioni relative al prodotto e alla versione del browser utilizzato, nonché al sistema operativo del dispositivo e al fornitore di servizi Internet. Tracciamo anche il sito da cui viene effettuato l'accesso al servizio.
      <br /> <br />
      La base giuridica per il trattamento di questi dati è l'Art. 6 par. 1 f) del Regolamento Generale sulla Protezione dei Dati.
      <br /> <br />
      Trattiamo questi dati per poter visualizzare contenuti come pagine web sul vostro dispositivo. Inoltre, utilizziamo questi dati per il funzionamento dei servizi online e mobili, per identificare ed eliminare errori, per misurare il carico sui servizi online e mobili e per apportare regolazioni o miglioramenti.
      <br /> <br />
      Questi scopi dimostrano anche un interesse legittimo ai sensi dell'Art. 6 par. 1 f) del Regolamento Generale sulla Protezione dei Dati.
      <br /> <br />
      L'indirizzo IP del vostro dispositivo viene memorizzato solo per la durata dell'uso dei servizi online o mobili e verrà cancellato o troncato successivamente. I dati vengono memorizzati per un periodo limitato.
      </p>
      `,
    },
    {
      name: 'Uso dei Cookie',
      id: 'use-of-cookie',
      description: `
      <p class="mb-15">
      Utilizziamo i cookie, che sono piccoli pezzi di dati sotto forma di testo che vengono memorizzati sul vostro computer per memorizzare determinati parametri e dati per lo scambio con le nostre offerte online tramite il vostro browser. I cookie di solito contengono il nome del dominio da cui viene inviato il file cookie e informazioni sull'età e l'identificatore alfanumerico del cookie. Esistono diversi tipi di cookie a seconda del loro contenuto e della durata della loro memorizzazione. La maggior parte dei cookie che utilizziamo sono i cosiddetti "cookie di sessione", che vengono eliminati quando terminate la sessione del browser. Esistono anche cookie a lunga durata che ci permettono di riconoscervi come visitatori.
      <br /> <br />
      Vi informiamo in anticipo sull'uso dei cookie visualizzando un messaggio corrispondente su un banner.
      <br /> <br />
      Alcuni cookie sono tecnicamente necessari per consentire l'uso dei nostri prodotti online e mobili. Con questi cookie, catturiamo e memorizziamo i seguenti dati.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Impostazioni della lingua</li>
        <li class="m-2">Impostazioni di ricerca</li>
        <li class="m-2">Contenuto dei moduli online</li>
        <li class="m-2">Informazioni utilizzate per identificare o autenticare gli utenti</li>
        <li class="m-2">Prodotti nel carrello</li>
        <li class="m-2">Prodotti nella lista dei desideri</li>
        <li class="m-2">Prodotti consigliati per l'acquisto</li>
      </ul>
      Inoltre, utilizziamo cookie sulle nostre pagine web per analizzare il vostro comportamento di utilizzo, chiamati cookie analitici. Questi cookie ci permettono di catturare e memorizzare i seguenti dati.
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Frequenza di visualizzazione delle pagine</li>
        <li class="m-2">Parole chiave di ricerca</li>
        <li class="m-2">Uso delle funzionalità della pagina web</li>
      </ul>
      <p class="mb-15">
      I dati raccolti su di voi tramite i cookie sono pseudonimizzati e quindi non è più possibile collegare i dati a ciascun utente.
      <br /> <br />
      La base giuridica per il trattamento dei dati tramite i cookie è l'Art. 6 par. 1 f) del Regolamento Generale sulla Protezione dei Dati.
      <br /> <br />
      I cookie ci permettono di riconoscere il vostro computer e di fornire immediatamente qualsiasi configurazione. I cookie ci aiutano a migliorare i nostri servizi online e a offrirvi un servizio migliore e più personalizzato. L'uso dei cookie è necessario per facilitare l'uso dei nostri servizi online e alcune funzionalità possono essere fornite solo tramite l'uso dei cookie. Questo riguarda le richieste, i moduli online, gli account cliente, i carrelli dei prodotti e le liste dei desideri.
      <br /> <br />
      Utilizziamo cookie analitici per migliorare e ottimizzare la qualità dei nostri servizi online e dei loro contenuti.
      <br /> <br />
      Questi scopi dimostrano anche un interesse legittimo ai sensi dell'Art. 6 par. 1 f) del Regolamento Generale sulla Protezione dei Dati.
      <br /> <br />
      I cookie tecnicamente necessari che utilizziamo sono i cosiddetti cookie di sessione, che vengono automaticamente eliminati alla fine della sessione del browser. I restanti cookie vengono memorizzati sul vostro computer. La maggior parte dei browser è configurata per accettare automaticamente i cookie; tuttavia, potete disabilitare la memorizzazione dei cookie o configurare il vostro browser per notificarvi immediatamente quando viene inviato un cookie. Si prega di notare che in alcuni casi, se rifiutate di memorizzare un cookie, potrete utilizzare i nostri servizi online solo in misura limitata o per nulla.
      <br /> <br />
      Per analizzare il comportamento degli utenti per gli scopi sopra descritti, utilizziamo i programmi menzionati di seguito, che a loro volta utilizzano i cookie come descritto sopra, e i dati memorizzati verranno eliminati non appena non saranno più necessari per gli scopi descritti.
      </p>
      `,
    },
    {
      name: 'Google Analytics',
      description: `
      <p class="mb-15">
      Utilizziamo Google Analytics per l'analisi statistica. Google Analytics è un servizio di analisi web di Google LLC., 1600 Amphitheatre Parkway, Mountain View, CA 94034, USA ("Google"). Google Analytics utilizza "cookie", che sono dati di testo memorizzati sul vostro computer, per analizzare l'uso del sito web. I server di Google negli Stati Uniti e li memorizzano lì. Tuttavia, se l'anonimizzazione dell'IP è attivata su questo sito web, il vostro indirizzo IP verrà troncato da Google in anticipo negli stati membri dell'Unione Europea o in altri firmatari della politica sulla privacy. "Area Economica Europea". L'indirizzo IP completo verrà trasmesso solo ai server di Google negli Stati Uniti e troncato lì in casi eccezionali. Google utilizzerà questi dati per conto dell'operatore di questo sito web per valutare il vostro utilizzo del sito web, per compilare rapporti sull'attività del sito web e per fornire all'operatore del sito web altri servizi relativi al sito web, al sito web e all'uso di Internet. L'indirizzo IP del vostro browser trasmesso come parte di Google Analytics non verrà unito ad altri dati di Google. Potete impedire la memorizzazione dei cookie configurando di conseguenza il vostro software del browser; tuttavia, desideriamo sottolineare che non tutte le funzioni di questo sito web sono completamente disponibili in questo caso. Inoltre, <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" class="underline">http://tools.google.com/dlpage/gaoptout?hl=de</a>.
      <br /> <br />
      Per ulteriori informazioni su questo, visitate <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" class="underline">http://tools.google.com/dlpage/gaoptout?hl=de</a> o <a href="http://www.google.com/intl/de/analytics/privacyoverview.html" target="_blank" class="underline">http://www.google.com/intl/de/analytics/privacyoverview.html</a> (informazioni generali sull'analisi e sulla privacy di Google). Vi informiamo che Google Analytics è stato integrato nelle nostre pagine con il codice "anonymizeIp();". L'indirizzo IP viene anonimizzato rimuovendo l'ultimo ottetto.
      </p>
      `,
    },
    {
      name: 'Retargeting e Remarketing',
      description: `
      <p class="mb-15">
      Il termine retargeting o remarketing si riferisce a tecniche che consentono di servire annunci pertinenti agli utenti che hanno precedentemente visitato determinate pagine web, anche se hanno lasciato quelle pagine. Per fare ciò, l'utente deve essere identificato nuovamente dopo aver lasciato il sito web dell'azienda, il che può essere fatto utilizzando i cookie del fornitore di servizi pertinente. Inoltre, viene preso in considerazione il comportamento passato dell'utente. Ad esempio, se un utente visualizza determinati prodotti, annunci per questi o prodotti simili possono successivamente apparire su altre pagine Internet. Questa è pubblicità personalizzata su misura per le esigenze degli utenti individuali. Per tali annunci personalizzati, l'utente non deve essere identificato una volta identificato. Pertanto, i dati utilizzati per il retargeting o il remarketing non vengono combinati con altri dati.
      <br /> <br />
      Utilizziamo tale tecnologia per fornire annunci su Internet. Per visualizzare gli annunci, utilizziamo fornitori di terze parti. Inoltre, utilizziamo un servizio fornito da Google che ci consente di visualizzare automaticamente prodotti di interesse per gli utenti di Internet. Questa funzione viene implementata tramite cookie. Potete ottenere ulteriori informazioni su questa tecnologia nella Politica sulla Privacy di Google all'indirizzo <a href="https://policies.google.com/privacy?hl=de" target="_blank" class="underline">https://policies.google.com/privacy?hl=de</a>. Visitando la pagina Internet <a href="http://www.google.com/policies/privacy/ads/" target="_blank" class="underline">http://www.google.com/policies/privacy/ads/</a> e modificando di conseguenza la configurazione, l'installazione di cookie per il remarketing di Google e il monitoraggio delle conversioni di Google AdWords può essere bloccata da un'impostazione nel vostro software del browser.
      <br /> <br />
      Questo sito web utilizza tag di reindirizzamento di Google, Appnexus e Performance Profiles per promuovere i prodotti ROKH. Il codice JavaScript di reindirizzamento implementato su questo sito web memorizza un cookie sul computer dell'utente per scopi di reindirizzamento. Se l'utente esegue azioni sul sito di ricerca di Google e sui siti della Rete Display di Google, Appnexus e Performance Profiles, un banner o un annuncio ROKH viene successivamente inviato all'utente. Durante questo processo, tutti i dati vengono raccolti in modo anonimo e quindi non possono essere riconciliati con una persona specifica. Gli utenti possono opporsi alla funzione di reindirizzamento modificando le impostazioni di visualizzazione della scheda di remarketing di Google o disattivando il reindirizzamento.
      </p>
      `,
    },
    {
      name: 'Registrazione',
      description: `
      <p class="mb-15">
      Potete anche registrarvi come utenti nei nostri servizi online e mobili. Per farlo, dovete inserire i dati richiesti, come nome, indirizzo e indirizzo e-mail, nella maschera di input. Inoltre, catturiamo la data e l'ora della registrazione e l'indirizzo IP. Nell'ambito del processo di registrazione, chiederemo il vostro consenso all'uso dei dati.
      <br /> <br />
      La base giuridica per il trattamento dei dati di registrazione è l'articolo in caso di consenso. Par. 6 1 del Regolamento Generale sulla Protezione dei Dati. Se vi registrate con noi per eseguire o stabilire un contratto, la base giuridica aggiuntiva per il trattamento dei dati è l'Art. 6 par. 1 b) del Regolamento Generale sulla Protezione dei Dati.
      <br /> <br />
      La registrazione è necessaria per l'esecuzione o l'istituzione di un contratto con noi per determinati servizi.
      <br /> <br />
      I dati vengono memorizzati con noi per tutto il tempo necessario per l'esecuzione del contratto. Inoltre, conserviamo questi dati per adempiere ai nostri obblighi post-contrattuali e ai periodi di conservazione commerciale e fiscale previsti dalla legge. Questo periodo di conservazione è normalmente di 10 anni fino alla fine dell'anno solare rispettivo.
      </p>
      `,
    },
    {
      name: 'Elaborazione degli Ordini dal Nostro Negozio Online',
      description: `
      <p class="mb-15">
      I vostri dati personali verranno utilizzati solo quando gli ordini vengono effettuati dalla nostra azienda e dalle aziende affiliate, nonché dalle aziende incaricate dell'elaborazione degli ordini.
      <br /> <br />
      Per l'elaborazione degli ordini, collaboriamo con varie aziende responsabili dell'elaborazione dei pagamenti e della logistica. Ci assicuriamo che i nostri partner rispettino anche le normative sulla protezione dei dati in questo processo. Pertanto, inviamo i vostri dati di contatto (nome e indirizzo) alla società di spedizione pertinente, che consegnerà i prodotti ordinati a voi.
      <br /> <br />
      La base giuridica per questo trattamento è l'Art. 6 par. 1 b) del Regolamento Generale sulla Protezione dei Dati. Il trattamento dei vostri dati personali è necessario per l'esecuzione del contratto che abbiamo concluso con voi.
      <br /> <br />
      Conserviamo i dati per tutto il tempo necessario per l'esecuzione del contratto. Inoltre, conserviamo questi dati per adempiere ai nostri obblighi post-contrattuali e ai periodi di conservazione commerciale e fiscale previsti dalla legge. Questo periodo di conservazione è normalmente di 10 anni fino alla fine dell'anno solare rispettivo.
      <br /> <br />
      Elaborazione dei pagamenti degli ordini, Paypal, Stripe
      <br /> <br />
      A seconda del metodo di pagamento scelto, l'elaborazione dei pagamenti durante un ordine può essere effettuata tramite un fornitore di servizi.
      <br /> <br />
      Se il pagamento viene effettuato con carta di credito, i dati necessari a tale scopo, come nome, indirizzo e dati di acquisto, verranno trasmessi alla società di carte di credito pertinente.
      <br /> <br />
      Se il pagamento viene effettuato tramite PayPal, verrete reindirizzati a un link alla pagina web di PayPal. I vostri dati personali vengono elaborati in questo processo. Questi sono il vostro nome, il vostro indirizzo, il vostro indirizzo e-mail, il vostro numero di telefono e i vostri dati bancari o della carta di credito (se applicabile). Si prega di consultare le condizioni generali, i termini di utilizzo e la politica sulla privacy di PayPal (Europe) S.à rl et Cie, SCA, 22-24 Boulevard Royal, L-2449 Lussemburgo sul sito web <a href="https://www.paypal.com" target="_blank" class="underline">www.paypal.com</a>.
      <br /> <br />
      Quando si effettua un pagamento utilizzando Strip Amount, verrete reindirizzati a un link alla pagina web di Stripe, un servizio di Stripe Payments Europe, Limited ("SPEL"). Durante questo processo, i vostri dati personali verranno elaborati. Questi sono il vostro nome, il vostro indirizzo, il vostro indirizzo e-mail, il vostro numero di telefono e i vostri dati del conto o della carta di credito (se applicabile). Si prega di consultare i termini e le condizioni pertinenti, i termini di utilizzo e la politica sulla privacy all'indirizzo <a href="https://stripe.com/ie/ssa" target="_blank" class="underline">https://stripe.com/ie/ssa</a>.
      <br /> <br />
      La base giuridica per l'elaborazione dei pagamenti è l'Art. 6 par. 1 b) del Regolamento Generale sulla Protezione dei Dati. Il trattamento dei vostri dati personali è necessario per l'esecuzione del contratto concluso con voi.
      <br /> <br />
      Conserviamo i dati per tutto il tempo necessario per l'esecuzione del contratto. Inoltre, conserviamo i dati per adempiere ai nostri obblighi post-contrattuali e ai periodi di conservazione commerciale e fiscale previsti dalla legge. Questo periodo di conservazione è normalmente di 10 anni fino alla fine dell'anno solare rispettivo.
      </p>
      `,
    },
    {
      name: `Trattamento Aggiuntivo dei Dati Quando si Utilizza l'Applicazione Fornita da ROKH (prossimamente)`,
      description: `
      <p class="mb-15">
      I seguenti dati verranno elaborati quando si utilizza l'applicazione.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">Dati di registrazione</li>
      <li class="m-2">Numero cliente, account ROKH</li>
      <li class="m-2">Numero di fabbricazione dell'apparecchiatura</li>
      <li class="m-2">Caratteristiche funzionali del dispositivo, dati di base del dispositivo</li>
      <li class="m-2">Dati di utilizzo dell'apparecchiatura</li>
      <li class="m-2">Dati di stato dell'apparecchiatura</li>
      <li class="m-2">Dati di utilizzo dell'applicazione</li>
      <li class="m-2">Credenziali personali delle telecomunicazioni</li>
      </ul>
      <p class="mb-15">
      Per poter utilizzare tutte le funzioni dell'applicazione geme@mobile, è necessaria un'autorizzazione di sistema specifica. Quando iniziate a utilizzare l'applicazione e/o solo quando utilizzate le funzioni pertinenti, vi verrà chiesto di concedere le autorizzazioni appropriate. Si prega di notare, tuttavia, che l'uso corretto dell'app richiede l'accesso a determinate funzionalità del vostro dispositivo mobile (smartphone o tablet) e l'accesso ai vostri dati personali.
      <br /> <br />
      L'app geme@mobile è disponibile nei cosiddetti app store gestiti da terze parti (Google Play Store e Apple App Store). Il download dell'app richiede generalmente una registrazione preventiva con l'app store pertinente. Non abbiamo alcun controllo sui dati personali raccolti, elaborati e utilizzati in questo contesto. In tali casi, l'unica responsabilità è dell'operatore dell'app store pertinente.
      <br /> <br />
      La base giuridica per il trattamento dei dati è in caso di consenso. Par. 6 1 del Regolamento Generale sulla Protezione dei Dati. La base giuridica aggiuntiva per il trattamento è l'Art. par. 6 1 b) del Regolamento Generale sulla Protezione dei Dati, se il trattamento dei dati è necessario per l'esecuzione dei servizi forniti dall'applicazione rispettiva. I dati utilizzati dal dispositivo verranno utilizzati in forma anonima in modo che i nostri prodotti e applicazioni possano essere continuamente migliorati. La base giuridica per questo è l'Art. 1 f) del par. 6 GDPR, l'ottimizzazione dei prodotti e dei servizi stimola contemporaneamente i nostri interessi legittimi.
      <br /> <br />
      Trattiamo i dati per i seguenti scopi
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Per migliorare i nostri prodotti e servizi (ad esempio, i programmi e altre funzioni dei dispositivi domestici e delle applicazioni utilizzate)</li>
        <li class="m-2">Contattarvi per inviare offerte di servizi e prodotti mirate a soddisfare le vostre esigenze</li>
        <li class="m-2">Eliminare o evitare interruzioni</li>
        <li class="m-2">Garantire e migliorare la facilità d'uso dell'applicazione</li>
        <li class="m-2">Fornire i servizi offerti dall'applicazione</li>
      </ul>
      <p class="mb-15">Conserviamo i dati solo per il tempo necessario a raggiungere l'obiettivo desiderato.</p>
      `,
    },
    {
      name: 'Trattamento Aggiuntivo dei Dati Quando si Utilizza GCN',
      description: `
      <p class="mb-15">
      Nell'ambito dell'esecuzione del contratto di noleggio, trattiamo i seguenti dati personali tramite il portale GCN.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">Cognome</li>
      <li class="m-2">Indirizzo</li>
      <li class="m-2">Indirizzo e-mail</li>
      <li class="m-2">Indirizzo IP</li>
      <li class="m-2">Numero cliente</li>
      <li class="m-2">Numero di fabbricazione dell'apparecchiatura</li>
      <li class="m-2">Caratteristiche funzionali dell'apparecchiatura</li>
      <li class="m-2">Dati utilizzati dall'apparecchiatura</li>
      </ul>
      <p class="mb-15">
      I dati vengono trattati per eseguire il contratto di noleggio "GCN". La base giuridica per il trattamento è l'Art. 6 par. 1 b) del Regolamento Generale sulla Protezione dei Dati. Combiniamo i vostri dati principali dell'utente (nome e cognome, indirizzo, e-mail) con i dati principali dell'apparecchiatura disponibili (ad esempio, numero di fabbricazione dell'apparecchiatura) per addebitare il vostro account per l'uso dell'apparecchiatura secondo il contratto di noleggio. In particolare, abbiamo bisogno dei dati di utilizzo dell'apparecchiatura (ad esempio, impostazioni di base, selezione del programma, impostazioni del programma, utilizzo del programma) per calcolare le tariffe di noleggio e le date di manutenzione.
      <br /> <br />
      Inoltre, i dati di utilizzo risultanti dalle interazioni con il portale GCN vengono tracciati e utilizzati per ottimizzare continuamente il portale GCN e i prodotti. La base giuridica per questo trattamento è l'Art. 1 f) del par. 6 GDPR, l'ottimizzazione del servizio dimostra contemporaneamente il nostro interesse legittimo.
      <br /> <br />
      Conserviamo i dati solo per il tempo necessario per eseguire il contratto e per raggiungere lo scopo.
      </p>
      `,
    },
    {
      name: 'Trattamento Aggiuntivo dei Dati Quando si Utilizza la Skill Alexa che Forniamo',
      description: `
      <p class="mb-15">
      I seguenti dati sono necessari per utilizzare la Skill ROKH.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Informazioni di registrazione</li>
        <li class="m-2">Numero cliente ROKH</li>
        <li class="m-2">Numero di fabbricazione del dispositivo</li>
        <li class="m-2">Caratteristiche funzionali del dispositivo</li>
        <li class="m-2">Identificatore personale delle telecomunicazioni</li>
        <li class="m-2">Stato dell'apparecchiatura ROKH</li>
      </ul>
      <p class="mb-15">
      ROKH utilizza l'implementazione della Skill del servizio Amazon Europe Core S.à.rl, sis 5, Rue Plaetis, L-2338 Lussemburgo e raccoglie statistiche anonime degli utenti e protocolli del server per rilevare errori e migliorare l'esperienza utente. Questi sono il numero di chiamate di funzione e la frequenza di utilizzo e i messaggi di errore. Questi dati vengono elaborati in forma anonima da ROKH. Potete trovare l'informativa sulla privacy di amazon.de all'indirizzo <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=3312401" target="_blank" class="underline">https://www.amazon.de/gp/help/customer/display.html?nodeId=3312401</a>
      <br /> <br />
      Le skill ROKH sono disponibili nello Store delle Skill di Amazon Alexa gestito da Amazon. L'abilitazione delle skill di Amazon Alexa e l'uso generale richiedono generalmente una registrazione preventiva con Amazon. Non abbiamo alcun controllo sui dati personali raccolti, elaborati e utilizzati di conseguenza. In questo caso, l'unica responsabilità è di Amazon.
      <br /> <br />
      La base giuridica per il trattamento dei dati è il consenso. Art. 6 par. 1 del Regolamento Generale sulla Protezione dei Dati. Un'ulteriore base giuridica per il trattamento è l'Art. 6 par. 1b del Regolamento Generale sulla Protezione dei Dati, se il trattamento dei dati è necessario per l'esecuzione dei servizi forniti sull'applicazione rispettiva. Inoltre, i dati di utilizzo del dispositivo vengono anonimizzati e utilizzati per migliorare continuamente i nostri prodotti e applicazioni. La base giuridica per il trattamento è l'Art. 6 par. 1f del GDPR, l'ottimizzazione dei prodotti e dei servizi stimola contemporaneamente i nostri legittimi interessi.
      <br /> <br />
      Trattiamo i dati per i seguenti scopi.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">Garantire l'interazione degli apparecchi ROKH con i terminali Alexa</li>
      <li class="m-2">fornirti i servizi corrispondenti nella skill ROKH Alexa</li>
      <li class="m-2">migliorare i nostri prodotti e servizi (ad esempio, i programmi utilizzati e altre funzioni degli elettrodomestici e delle applicazioni)</li>
      <li class="m-2">Contattarti per inviarti offerte mirate per prodotti e servizi su misura per le tue esigenze</li>
      <li class="m-2">Garantire e migliorare la facilità d'uso delle skill ROKH Alexa</li>
      <li class="m-2">Garantire l'interazione degli apparecchi ROKH con i terminali Alexa</li>
      <li class="m-2">Fornirti i servizi appropriati nella skill ROKH Alexa</li>
      </ul>
      <p class="mb-15">
      Conserviamo i dati solo per il tempo necessario per raggiungere lo scopo previsto.
      </p>
      `,
    },
    {
      name: 'Portale delle Applicazioni',
      description: `
      <p class="mb-15">
      Puoi candidarti per un lavoro con noi tramite il portale delle applicazioni e inviare tutte le informazioni e i documenti necessari a tale scopo. A tal fine, puoi utilizzare il modulo online e inviarci i tuoi documenti di candidatura in questo modo. L'uso del portale delle applicazioni è facoltativo; puoi anche inviarci la tua candidatura in altri modi, ad esempio via e-mail o per posta.
      <br /> <br />
      Quando una candidatura arriva tramite il portale delle applicazioni, i tuoi documenti verranno trasmessi elettronicamente al nostro personale appropriato. Se ti candidi per un'offerta di lavoro, questi documenti verranno automaticamente distrutti sei mesi dopo la fine del processo di selezione, a condizione che la loro cancellazione non influisca su altri interessi legittimi. Un interesse legittimo in questo senso è, ad esempio, l'obbligo di fornire prove in procedimenti basati sul trattamento equo (Allgemeines Gleichbehandlungsgesetz - AGG). Se la candidatura non si riferisce a un'offerta di lavoro (candidatura spontanea), la candidatura verrà conservata fino a quando potrebbe essere di interesse. Puoi richiedere la cancellazione della tua candidatura in qualsiasi momento, anche prima della scadenza del periodo di conservazione specificato. Se la candidatura viene accettata, i dati trasmessi verranno conservati per elaborare il reclutamento, tenendo conto dei requisiti legali. In tutti gli altri casi, la base legale per la conservazione dei dati della tua candidatura è il tuo consenso ai sensi dell'Art. 6 par. 1, a) del Regolamento Generale sulla Protezione dei Dati.
      </p>
      `,
    },
    {
      name: 'Comunicare con Noi',
      description: `
      <p class="mb-15">
      Puoi metterti in contatto con noi in diversi modi, incluso tramite il modulo di contatto sulla nostra pagina web. Inoltre, siamo felici di informarti regolarmente tramite la nostra newsletter via e-mail.
      </p>
      `,
    },
    {
      name: 'Newsletter',
      description: `
      <p class="mb-15">
      Quando ti iscrivi alla nostra newsletter, il tuo indirizzo e-mail verrà utilizzato per scopi pubblicitari fino a quando non annullerai l'iscrizione. A tal fine, riceverai regolarmente informazioni su argomenti attuali e, in casi speciali, promozioni speciali, via e-mail. Le e-mail possono essere personalizzate e individualizzate in base alle informazioni che abbiamo su di te.
      <br /> <br />
      Per il nostro utilizzo nella registrazione alla nostra newsletter, se non ci hai dato il tuo consenso scritto, utilizziamo la cosiddetta procedura di doppio opt-in, cioè se hai precedentemente indicato esplicitamente, ti invieremo prima la newsletter via e-mail per confermare che dobbiamo attivare l'invio della newsletter. Ti invieremo quindi un'e-mail e ti chiederemo di cliccare sul link in questa e-mail per confermare che desideri ricevere la nostra newsletter.
      <br /> <br />
      La base legale per il trattamento dei tuoi dati è il tuo consenso ai sensi dell'Art. 6 par. 1 a) GDPR se ti sei iscritto esplicitamente alla newsletter. Nell'ambito delle disposizioni legali, puoi anche ricevere la nostra newsletter senza il tuo esplicito consenso o se riceviamo il tuo indirizzo e-mail perché hai ordinato un prodotto o servizio da noi e sei stato contattato via e-mail. Non hai obiettato a ricevere informazioni via e-mail. In questo caso, il nostro legittimo interesse nella trasmissione della pubblicità diretta sarà considerato basato sulla base legale dell'Art. 6 par. 1 f) del Regolamento Generale sulla Protezione dei Dati.
      <br /> <br />
      Se non desideri più ricevere la nostra newsletter, puoi revocare il consenso attualmente valido che hai dato o rifiutare di continuare a ricevere la newsletter in qualsiasi momento senza alcun costo oltre alla tariffa di trasmissione calcolata alla tariffa base. Basta utilizzare il link di annullamento dell'iscrizione incluso in ogni newsletter o eventualmente inviarci un messaggio inviandolo al nostro responsabile della protezione dei dati.
      </p>
      `,
    },
    {
      name: 'Contatto',
      description: `
      <p class="mb-15">
      Puoi contattarci tramite la nostra hotline clienti, e-mail, chat o per posta. Se desideri utilizzare uno di questi metodi di contatto, raccoglieremo i dati personali che ci trasmetti tramite il canale di contatto scelto a tale scopo. Questi possono essere nome, indirizzo, indirizzo e-mail, numero cliente e numero di telefono. Sta a te decidere quali informazioni desideri inviarci tramite il canale di contatto.
      <br /> <br />
      Trattiamo questi dati specificamente per poter rispondere alle tue domande o per poter elaborare le tue richieste.
      <br /> <br />
      Se desideri utilizzare il modulo di contatto nella nostra offerta online, raccogliamo i dati personali che fornisci nel modulo di contatto, in particolare il nome e l'indirizzo e-mail. Inoltre, memorizziamo l'indirizzo IP nonché la data e l'ora della richiesta. Trattiamo i dati trasmessi tramite il modulo di contatto esclusivamente per poter rispondere alle tue domande e preoccupazioni.
      </p>
      `,
    },
    {
      name: 'Qualità',
      description: `
      <p class="mb-15">
      Sul nostro sito web, utilizziamo i servizi di aziende selezionate per condurre sondaggi sugli utenti, nonché sull'immagine del prodotto e del marchio, per migliorare regolarmente i nostri prodotti e servizi. Quando rispondi a un sondaggio, vengono elaborati solo i dati di log (data e ora/timestamp/informazioni inviate al tuo browser e impostazioni del browser/informazioni inviate al tuo dispositivo/data di utilizzo). Sei libero di decidere se vuoi partecipare al sondaggio o meno. Se non desideri rispondere, basta cliccare sulla "X" nell'angolo in alto a destra della finestra pop-up del sondaggio per chiudere la finestra pop-up del sondaggio. Il tuo consenso è la base legale per il trattamento dei tuoi dati ai sensi dell'Art. 6 par. 1 a) del Regolamento Generale sulla Protezione dei Dati. Puoi revocare il tuo consenso in qualsiasi momento con effetto immediato.
      </p>
      `,
    },
    {
      name: `Guida all'Acquisto`,
      description: `
      <p class="mb-15">
      Sul nostro sito web, utilizziamo un servizio di supporto agli acquisti fornito dai nostri fornitori di servizi. Il servizio di assistenza all'acquisto ti aiuta a trovare il prodotto giusto in modo più rapido ed efficiente. Dopo aver risposto a poche domande, ti verrà fornito il primo suggerimento di prodotto. I prodotti vengono presentati in base alla loro idoneità alle tue esigenze. Sei libero di decidere se desideri utilizzare questo servizio o meno. In questo caso, elaboriamo solo i metadati della richiesta web HTTP come riferimento, il tuo indirizzo IP, la lingua del browser e l'agente utente (tipo e versione del browser/SO) nonché i dati che condividi con noi utilizzando il servizio. Questi dati non verranno memorizzati. Trattiamo i tuoi dati per consentirci di fornirti questo servizio. L'articolo 6 par. 1 a) del GDPR costituisce la base legale per il trattamento. Se acquisti un prodotto, l'art. 6 par. 1 b) GDPR è la base legale per il trattamento dei dati. Il fornitore di servizi agisce come responsabile del trattamento per nostro conto secondo le nostre istruzioni.
      <br /> <br />
      Nell'ambito dell'utilizzo dei Servizi, conserviamo anche informazioni nella tua memoria di sessione, principalmente per identificare gli utenti attraverso più sessioni di navigazione. Per ulteriori informazioni sui nostri cookie. Per ulteriori informazioni sui fornitori di servizi e sui servizi di assistenza all'acquisto, visita i siti web dei rispettivi fornitori di servizi.
      </p>
      `,
    },
    {
      name: `Base Legale per l'Uso e la Revoca del Canale di Contatto`,
      description: `
      <p class="mb-15">
      La base legale per il trattamento dei dati quando si utilizzano i canali di contatto forniti è il tuo consenso ai sensi dell'Art. 6 par. 1 del Regolamento Generale sulla Protezione dei Dati. Puoi revocare il tuo consenso in qualsiasi momento. Dopo aver elaborato le domande, i dati vengono inizialmente memorizzati per rispondere a possibili domande. La cancellazione dei dati può essere richiesta in qualsiasi momento, altrimenti la cancellazione avverrà dopo che la domanda è stata completamente risolta. Successivamente, eliminiamo immediatamente i dati, a condizione che non siamo obbligati a conservare i dati in base a regolamenti commerciali o fiscali.
      </p>
      `,
    },
    {
      name: 'Social Media',
      description: `
      <p class="mb-15">
      Nei nostri servizi online e mobili, troverai link ai social network Facebook e al nostro canale YouTube. Riconoscerai i link dal logo del fornitore.
      <br /> <br />
      Cliccando sui link, si aprono le corrispondenti pagine dei social media; questa dichiarazione sulla privacy non si applica a loro. Puoi trovare ulteriori informazioni sui termini che si applicano qui nelle dichiarazioni sulla privacy dei rispettivi fornitori; puoi trovarle ai seguenti indirizzi.
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
      name: 'I Tuoi Diritti',
      description: `
      <p class="mb-15">
      L'interessato ha diversi diritti secondo il GDPR. Se desideri utilizzarli o ottenere ulteriori informazioni su questo argomento, non esitare a contattarci.
      <br /> <br />
      I diritti dell'interessato includono, in particolare
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">Il diritto di essere informato: Puoi confermare questo ai sensi dell'Art. 15 GDPR indipendentemente dal fatto che i dati personali in questione siano trattati da noi. Se i dati vengono trattati, puoi anche ottenere ulteriori informazioni da noi sul trattamento.</li>
      <li class="m-2">Diritto di rettifica: Hai il diritto di rettificare e/o perfezionare i dati personali trattati su di te se questi dati sono errati o incompleti ai sensi dell'Art. 16 GDPR.</li>
      <li class="m-2">Diritto di limitazione del trattamento: In alcuni casi, puoi richiedere, ai sensi dell'Art. 18 GDPR, che il trattamento dei dati personali che ti riguardano sia limitato.</li>
      <li class="m-2">Diritto alla cancellazione: Hai anche il diritto di richiedere che cancelliamo i dati personali già memorizzati su di te in determinate condizioni ai sensi dell'Art. 17 GDPR.</li>
      <li class="m-2">Diritto alla portabilità dei dati: Hai anche il diritto ai sensi dell'Art. 20 GDPR di ricevere i tuoi dati personali che ti riguardano in un formato strutturato, comune e leggibile da una macchina e di trasferirli facilmente da noi a un altro titolare del trattamento, in determinate condizioni.</li>
      </ul>
      <p class="mb-15">Se i tuoi dati personali vengono trattati per interessi legittimi ai sensi dell'Art. 6 par. 1 Pagina 1 f GDPR, hai il diritto di opporti al trattamento dei tuoi dati personali ai sensi dell'Art. 21 del GDPR se ci sono motivi speciali nel tuo caso.</p>
      `,
    },
    {
      name: 'Reclami',
      description: `
      <p class="mb-15">
      Se ritieni che il nostro trattamento dei tuoi dati personali non sia conforme a questa Dichiarazione sulla Privacy o alla normativa sulla privacy applicabile, puoi presentare un reclamo al nostro Rappresentante per la Protezione dei Dati. Il Responsabile della Protezione dei Dati esaminerà quindi il problema e ti informerà dei risultati dell'esame. Hai anche il diritto di presentare un reclamo a un'autorità di controllo.
      </p>
      `,
    },
    {
      name: 'Ulteriori Informazioni',
      description: `
      <p class="mb-15">
      </p>
      `,
    },
    {
      name: 'Trasferimento di Dati a Terzi',
      description: `
      <p class="mb-15">
      In linea di principio, non divulghiamo alcuna informazione personale a terzi per scopi diversi da quelli spiegati in questa dichiarazione sulla privacy. Tuttavia, se siamo legalmente obbligati a farlo o in conformità con una decisione del tribunale, trasferiremo i tuoi dati alle autorità competenti.
      </p>
      `,
    },
    {
      name: 'Link ad Altri Siti Web',
      description: `
      <p class="mb-15">
      La nostra offerta online contiene link ad altri siti web. Questi link sono solitamente indicati come tali. Non abbiamo alcun controllo sul fatto che i siti web a cui questi link conducono rispettino le attuali norme sulla privacy. Pertanto, ti consigliamo di verificare anche con altri siti web le loro dichiarazioni sulla privacy.
      </p>
      `,
    },
    {
      name: 'Modifiche a Questa Dichiarazione sulla Privacy',
      description: `
      <p class="mb-15">
      La data degli aggiornamenti alla Dichiarazione sulla Privacy è indicata in fondo alla dichiarazione. Ci riserviamo il diritto di modificare questa dichiarazione sulla privacy in qualsiasi momento. La versione corrente può essere accessibile direttamente tramite l'offerta online. Si prega di controllare periodicamente l'offerta online per la dichiarazione sulla privacy applicabile.
      <br /> <br />
      Questa dichiarazione sulla privacy è stata aggiornata a gennaio 2023.
      </p>
      `,
    },
    {
      name: 'Modulo Pubblicitario',
      description: `
      <p class="mb-15">
      Per migliorare la comodità e la qualità dei nostri servizi, utilizziamo il tracciamento delle conversioni e la tecnologia di retargeting, entrambi forniti da Adform ApS, Wildersgade 10B, 1, 1408 Copenhagen K, Danimarca.
      <br /> <br />
      Le nostre offerte online utilizzano il tracciamento delle conversioni di Adform. Quando un utente viene esposto a un annuncio pubblicato da Adform, viene introdotto un cookie temporaneo per il tracciamento delle conversioni.
      <br /> <br />
      Gli utenti che non desiderano partecipare al tracciamento possono disattivare i cookie di Adform o opporsi alla raccolta e alla memorizzazione dei dati in qualsiasi momento, con effetto immediato, tramite il loro browser Internet su <a href="https://site.adform.com/datenschutz-opt-out/" target="_blank" class="underline">https://site.adform.com/datenschutz-opt-out/</a>. Puoi eliminare i cookie già memorizzati sul tuo computer nel browser che stai utilizzando o eliminarli eliminando le pagine web temporanee.
      <br /> <br />
      Le nostre offerte online utilizzano la tecnologia di reindirizzamento di Adform. Questo consente agli utenti che sono già interessati alle nostre pagine e ai nostri prodotti di vedere annunci mirati sulle pagine dei nostri partner. Nel retargeting, gli annunci vengono visualizzati in base a un'analisi dei cookie del comportamento dell'utente osservato finora. Questo è un cookie temporaneo, che scade dopo 60 giorni. Se non desideri visualizzare annunci Adform pertinenti ai tuoi interessi, puoi sempre opporti alla raccolta e alla memorizzazione dei dati qui (<a href="https://site.adform.com/datenschutz-opt-out/" target="_blank" class="underline">https://site.adform.com/datenschutz-opt-out/</a>). Per ulteriori informazioni sulla politica sulla privacy di Adform, visita <a href="https://site.adform.com/datenschutz-opt-out/" target="_blank" class="underline">https://site.adform.com/datenschutz-opt-out/<a>
      <br /> <br />
      La base legale per il trattamento è l'Art. 6 par. 1 f GDPR, migliorare la comodità e la qualità dei nostri servizi online stimola i nostri legittimi interessi.
      </p>
      `,
    },
    {
      name: 'Amazon Conversion Pixel e Amazon Remarketing Pixel',
      description: `
      <p class="mb-15">
      Le nostre offerte online utilizzano le funzionalità dei servizi di analisi web Amazon Conversion Pixel e Amazon Remarketing Pixel. Il fornitore di questi servizi è Amazon.com, Inc. 410 Terry Ave. North Seattle, Washington, USA. Amazon Conversion Pixel e Amazon Remarketing Pixel utilizzano anche cookie memorizzati sul tuo computer che consentono l'analisi del tuo utilizzo del sito. Questi cookie ci consentono di analizzare il tuo utilizzo del sito e di fornire annunci personalizzati.
      <br /> <br />
      Puoi impedire la memorizzazione dei cookie configurando di conseguenza il software del tuo browser; tuttavia, ti informiamo che in tali casi, potresti non essere in grado di utilizzare tutte le funzionalità del sito. Puoi anche impedire il trasferimento dei dati generati dal cookie in relazione al tuo utilizzo del sito ad Amazon e il trattamento di tali dati da parte di Amazon cliccando su questo link e selezionando l'opzione "No annunci personalizzati". Questo Internet Explorer": <a href="https://www.amazon.de/adprefs" target="_blank" class="underline">https://www.amazon.de/adprefs</a>.
      <br /> <br />
      Puoi anche selezionare le impostazioni appropriate su <a href="http://www.youronlinechoices.com/be-nl" target="_blank" class="underline">http://www.youronlinechoices.com/be</a>. Un cookie di Opt-Out viene quindi inserito nel tuo browser per impedire che Amazon Pixel catturi i tuoi dati durante le tue future visite alle nostre pagine web. Questa obiezione si applica finché non elimini il cookie di Opt-Out.
      <br /> <br />
      La base legale per questo trattamento è l'Art. 6 par. 1 f GDPR, migliorare il comfort e la qualità dei nostri servizi è la base per i nostri legittimi interessi.
      </p>
      `,
    },
    {
      name: 'Facebook Customized Audience',
      description: `
      <p class="mb-15">
      Le nostre offerte online utilizzano la funzione di remarketing "Custom Audiences" di Facebook Inc. In questo modo, quando gli utenti visitano il social network Facebook o altri siti web che utilizzano lo stesso processo, è possibile visualizzare annunci pertinenti agli interessi degli utenti del sito web ("Facebook-Ads") sui loro schermi. Pertanto, perseguiamo l'interesse di mostrarti annunci di tuo interesse per rendere i nostri servizi online più interessanti per te. La base legale per il trattamento dei tuoi dati è l'Art. 6 par. 1 Pagina 1 f del Regolamento Generale sulla Protezione dei Dati.
      <br /> <br />
      Come risultato dell'uso degli strumenti di marketing, il tuo browser stabilisce automaticamente una connessione diretta ai server di Facebook. Non abbiamo alcun controllo sulla portata e sull'uso dei dati che Facebook raccoglie tramite questo strumento, quindi ti forniamo le informazioni che abbiamo: tramite Facebook Custom Audiences, Facebook viene informato che hai visualizzato le offerte online delle pagine corrispondenti alle nostre pagine o che hai cliccato su uno dei nostri annunci. Se ti registri ai servizi di Facebook, Facebook può assegnare l'accesso al tuo account. Anche se non sei registrato su Facebook o non hai effettuato l'accesso, è possibile che il fornitore conosca il tuo indirizzo IP e altre informazioni identificative e le memorizzi.
      <br /> <br />
      Gli utenti di <a href="https://www.facebook.com/settings/?tab=ads#_" target="_blank" class="underline">https://www.facebook.com/settings/?tab=ads#_</a> possono disattivare la funzione "Facebook Custom Audiences".
      <br /> <br />
      Puoi trovare ulteriori informazioni sul trattamento dei dati di Facebook su <a href="https://www.facebook.com/about/privacy" target="_blank" class="underline">https://www.facebook.com/about/privacy</a>.
      </p>
      `,
    },
    {
      name: 'Plugin di Social Media',
      description: `
      <p class="mb-15">
      Le nostre offerte online utilizzano plugin di social media del social network Facebook. <a href="https://www.facebook.com" target="_blank" class="underline">www.facebook.com</a> di Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA e <a href="https://www.facebook.be" target="_blank" class="underline">www.facebook.be</a> di Facebook Ireland Limited, Hanover Reach. Facebook Ireland Limited, Hanover Reach, 5-7 Hanover Quay, Dublin Operations 2, Irlanda ("Facebook").
      <br /> <br />
      Puoi trovare un riepilogo del plugin di Facebook qui: <a href="http://developers.facebook.com/docs/plugins" target="_blank" class="underline">http://developers.facebook.com/docs/plugins</a>; per ulteriori informazioni sulla privacy di Facebook, visita: <a href="https://www.facebook.com/policy.php" target="_blank" class="underline">www.facebook.com/policy.php</a>
      <br /> <br />
      Facebook può quindi essere informato che hai visitato il sito corrispondente ai nostri servizi online e che hai interagito con il plugin, se necessario. Attivando il plugin, i tuoi dati personali verranno trasferiti a Facebook negli Stati Uniti e lì memorizzati.
      <br /> <br />
      Non abbiamo alcun controllo sui dati raccolti e sul trattamento dei dati, né conosciamo l'esatta portata della raccolta dei dati, lo scopo del trattamento o il tempo di conservazione. Non abbiamo nemmeno informazioni sulla cancellazione dei dati raccolti da Facebook.
      <br /> <br />
      Facebook memorizza i dati raccolti su di te nel tuo profilo utente e li utilizza per pubblicità, ricerche di mercato e/o per configurare il proprio sito web secondo necessità. Lo scopo particolare di questa operazione è (anche per gli utenti che non hanno effettuato l'accesso) fornire pubblicità mirata secondo necessità e informare altri utenti del social network delle tue attività sul nostro sito web. Hai il diritto di opporti alla creazione di questo profilo utente, nel qual caso devi contattare Facebook per esercitare questo diritto.
      <br /> <br />
      Ti offriamo l'opportunità di interagire con i social network e altri utenti tramite plugin in modo da poter migliorare i nostri servizi e renderli più interessanti per te come utente. La base legale per l'uso dei plugin è l'Art. 6 par. 1 o. 1 f del Regolamento Generale sulla Protezione dei Dati.
      <br /> <br />
      In linea di principio, puoi anche impedire completamente il caricamento dei plugin tramite componenti aggiuntivi del tuo browser (i cosiddetti Script-Blocker).
      </p>
      `,
    },
    {
      name: 'AppNexus',
      description: `
      <p class="mb-15">
      Le nostre offerte online utilizzano AppNexus, un servizio di AppNexus Inc. 28 W 23rd Street, 4th floor, New York, New York - 10010, USA. AppNexus utilizza cookie, web beacon, ecc. che vengono memorizzati sul tuo computer e possono analizzare l'uso del sito web. Nell'ambito di questo utilizzo, i dati, in particolare gli indirizzi IP e l'attività dell'utente, possono essere trasferiti ai server di AppNexus Inc. e lì memorizzati. AppNexus Inc. comunicherà queste informazioni a terzi se necessario, nella misura in cui è richiesto dalla legge o se questi dati vengono trattati da terzi. Puoi impedire la raccolta e la trasmissione di dati personali (in particolare il tuo indirizzo IP) e il trattamento di tali dati disabilitando l'esecuzione di Java Script nel tuo browser o installando strumenti come "NoScript". Maggiori informazioni possono essere trovate nella Dichiarazione sulla Privacy di AppNexus (<a href="https://www.appnexus.com/en/company/platform-privacy-policy" target="_blank" class="underline">https://www.appnexus.com/en/company/platform-privacy-policy</a>). Puoi anche scegliere di non partecipare a AppNexus su: <a href="https://www.appnexus.com/en/company/platform-privacy-policy#choices" target="_blank" class="underline">https://www.appnexus.com/en/company/platform-privacy-policy#choices</a>
      <br /> <br />
      La base legale per il trattamento è l'Art. 6 par. 1 f GDPR per migliorare la comodità e la qualità dei nostri servizi online stimola i nostri legittimi interessi.
      </p>
      `,
    },
    {
      name: 'Doubleclick',
      description: `
      <p class="mb-15">
      Le nostre offerte online utilizzano Doubleclick (<a href="https://www.doubleclick.com" target="_blank" class="underline">www.doubleclick.com</a>) di Google Ireland Limited, Gordon House, Mountain View, Barrow St Dublin 4 Irlanda ("Google") utilizza la tecnologia per mostrarti annunci che potrebbero interessarti. Se non desideri che Doubleclick continui a raccogliere dati anonimi, puoi impostare un cookie di Opt-Out qui: <a href="https://www.google.de/settings/ads/onweb#display_optout" target="_blank" class="underline">https://www.google.de/settings/ads/onweb#display_optout</a>
      <br /> <br />
      Questo cookie di Opt-Out elimina le informazioni salvate finora e impedisce la continua raccolta di queste informazioni.
      <br /> <br />
      La base legale per questo trattamento è l'Art. 6 par. 1 f GDPR per migliorare la comodità e la qualità dei nostri servizi online stimola i nostri legittimi interessi.
      </p>
      `,
    },
    {
      name: 'Quisma',
      description: `
      <p class="mb-15">
      Le nostre offerte online utilizzano i servizi di Quisma GmbH, Rosenheimer Straße 145d, 81671 Monaco, Germania. I web beacon di Quisma raccolgono informazioni pseudonime sul processo di accesso dell'utente per poter comprendere il comportamento dell'utente. Il cookie generato in questo caso è dedicato alla memorizzazione di informazioni pseudonime sotto un ID utente generato casualmente (pseudonimo). La posizione geografica viene determinata approssimativamente e l'indirizzo IP dell'utente viene brevemente analizzato. Dopo che l'analisi troncata è stata completata in conformità con i requisiti di protezione dei dati, l'indirizzo IP viene completamente anonimizzato. In nessun momento è possibile raggiungere alcuna specifica risoluzione con una persona o con un indirizzo specifico. Puoi anche opporti all'impostazione dei cookie e al tracciamento della tecnologia Quisma in qualsiasi momento scaricando e installando il cookie di Opt-Out (<a href="http://privacy.quisma.com/uk/cookie-opt-out/" target="_blank" class="underline">http://privacy.quisma.com/uk/cookie-opt-out/</a>). Maggiori informazioni possono essere trovate nella dichiarazione sulla privacy di Quisma (<a href="https://privacy.quisma.com/datenschutz/quisma-websites/" target="_blank" class="underline">https://privacy.quisma.com/datenschutz/quisma-websites/</a>).
      <br /> <br />
      La base legale per il trattamento è l'Art. 6 par. 1 f GDPR, per migliorare la comodità e la qualità dei nostri servizi online ispirati ai nostri legittimi interessi.
      </p>
      `,
    },
  ],
}

function PrivacyPolicyPageIt() {
  return (
    <>
      <h1 className="sr-only">Informativa sulla privacy di GEME</h1>
      <SiteHelpTabs {...tabs} />
      <PrivacyPolicy {...privacyPolicyProps} />
    </>
  )
}

export { PrivacyPolicyPageIt }
