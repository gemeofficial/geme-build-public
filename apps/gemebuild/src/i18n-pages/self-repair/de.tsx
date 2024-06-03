import SelfRepairView from './components/SelfRepairView'
import { IFaqOffsetWithSupportingTextProps } from './components/FaqOffsetWithSupportingText'
import { IHeaderCenteredProps } from './components/Hero'
import Image from 'next/image'

// 页面内容配置文件1  De版本
const faqGroups: IFaqOffsetWithSupportingTextProps[] = [
  {
    title: 'Keine Energie',
    description: `Ich habe Probleme beim Einschalten meines GEME. Die vorderen LED-Leuchten leuchten nicht auf, selbst wenn ich den Netzschalter drücke.`,
    faqs: [
      {
        question: 'Sind Stecker und Steckdose richtig verbunden?',
        answer: 'Bitte schließen Sie den Stecker korrekt an die Steckdose an.',
      },
      {
        question: 'Ist die Stromversorgung 110/220 V?',
        answer: 'Bitte verwenden Sie eine Spannung von 110/220 V.',
      },
      {
        question: 'Keiner der oben genannten Fälle?',
        answer: 'Bitte wenden Sie sich an das Kundendienstcenter.',
      },
    ],
  },
  {
    title: 'Warnton',
    description: `Ich habe ein Problem mit meinem GEME. Wenn es läuft, ertönt ein „Bibibi“-Warnton und auf dem LED-Display wird ein Fehlercode angezeigt.`,
    faqs: [
      {
        question: 'Wenn der Code wie folgt angezeigt wird:',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <Image src="/assets/images/self-repair/stirringIndicatorLight.png" alt='code displayed' width={260} height={80} />
            <p>TSein Code zeigt an, dass die Vermischung abnormal ist.</p>
            <ul>
              <li>
                Überprüfen Sie, ob ein harter Fremdkörper darin steckt
                Zersetzungstank.
              </li>
              <li>
                Entfernen Sie den Fremdkörper, schließen Sie den Deckel und
                prüfen Sie, ob der Fremdkörper vorhanden ist Code wird weiterhin
                angezeigt.
              </li>
              <li>
                Sollte der obige Code weiterhin angezeigt werden, wenden Sie
                sich bitte an den Service Wenn der obige Code immer noch
                angezeigt wird, wenden Sie sich bitte an den Service Center.
              </li>
            </ul>
          </div>
        ),
      },
      {
        question: 'Wenn der Code wie folgt angezeigt wird:',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <Image src="/assets/images/self-repair/uvLampIndicatorLight.png" alt='code displayed' width={260} height={80} />
            <p>
              Bitte{' '}
              <a href="https://youtu.be/VdAtQfpSQ_E" target="_blank">
                Wechseln Sie die UV-Lampe.
              </a>
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: 'Lärm',
    description: `Mir ist aufgefallen, dass mein GEME während des Betriebs ungewöhnliche Geräusche macht. Die Geräusche unterscheiden sich deutlich von dem, was ich normalerweise im Normalbetrieb höre.`,
    faqs: [
      {
        question: 'Befinden sich harte Fremdkörper im Zersetzungstank? ',
        answer: 'Bitte entfernen Sie harte Gegenstände.',
      },
      {
        question:
          'Bitte entfernen Sie harte Gegenstände. Kommt es zu regelmäßigen Geräuschen, wenn der Rührmotor läuft?',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            Dies wird durch den Rührmotor verursacht. Bitte{' '}
            <a href="https://youtu.be/rthDSasoOrY" target="_blank">
              Passen Sie die Füße an
            </a>{' '}
            des GAME, um das Gerät für einen reibungslosen Betrieb auf einer
            ebenen Fläche zu halten, oder wenden Sie sich an den Kundendienst.
          </div>
        ),
      },
      {
        question: 'Kommt das Geräusch vom Lüfter? ',
        answer: `Bitte überprüfen Sie den Aufstellungsort des Geräts, um sicherzustellen, dass der Luftauslass nicht blockiert ist, oder wenden Sie sich an das Kundendienstzentrum.`,
      },
      {
        question:
          'Klingt das Geräusch wie ein intermittierendes „Du“-Geräusch und ist das Innere des Zersetzungstanks zu trocken?',
        answer: `Geben Sie etwa 200 bis 500 ml Wasser in den Rottetank oder geben Sie mehr Wasser in den Bioabfall.`,
      },
    ],
  },
  {
    title: 'Schlechter Geruch',
    description: `Mir ist aufgefallen, dass mein GEME einen unangenehmen Geruch verströmt.`,
    faqs: [
      {
        question:
          'Tritt der Geruch aus, unabhängig davon, ob der Deckel geschlossen ist oder nicht?',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <p>
              Bitte prüfen Sie, ob das in Ihrem GEME erzeugte Material zu feucht
              ist. Durch zu viel Feuchtigkeit ausgelöste anaerobe Fermentation
              kann entstehen ein Geruch.
            </p>
            <ul>
              <li>
                Bitte überprüfen Sie, ob die Stromversorgung Ihres Geräts immer
                eingeschaltet ist.
              </li>
              <li>
                Bitte unterbrechen Sie die Entsorgung von Bioabfällen für 2-3
                Tage und drücken Sie die Taste Desodorierungs- und
                Entfeuchtungstaste.
              </li>
              <li>
                Wenn die Luftfeuchtigkeit des Nebenprodukts zu hoch ist, nehmen
                Sie es bitte mit aus und legen Sie es an einen belüfteten Ort,
                damit es vorher trocknen kann indem Sie es erneut zur Verwendung
                aktivieren.
              </li>
            </ul>
          </div>
        ),
      },
      {
        question:
          'Es gibt keinen Geruch von den Nebenprodukten im Inneren von GEME, aber es gibt einen Geruch von dem Gas, das aus der Einheit austritt?',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <p>Dies ist ein Problem mit der Desodorierungseinheit.</p>
            <ul>
              <li>Bitte überprüfen Sie, ob der Filter verstopft ist, und reinigen Sie ihn.</li>
              <li>
              Bitte überprüfen Sie, ob die Auslassöffnung verstopft ist, und reinigen Sie sie
                 Blockierung.
              </li>
              <li>Andernfalls wenden Sie sich bitte an das Kundendienstcenter.</li>
            </ul>
          </div>
        ),
      },
      {
        question: 'GEME hat einen leichten Geruch.',
        answer: `Bitte drücken Sie die Desodorierungstaste.`,
      },
    ],
  },
  {
    title: 'Nicht String',
    description: `Die Rührwelle meines GEME dreht sich nicht mehr.`,
    faqs: [
      {
        question: 'Gibt es zu viele Nebenprodukte?',
        answer: `
        Behalten Sie die gleiche Menge an Nebenprodukten wie die ursprünglichen Mikroben und schaufeln Sie den Rest heraus.
        `,
      },
      {
        question: 'Ist der interne Zustand dick genug?',
        answer: `Hören Sie 2-5 Tage lang auf, es in den Müll zu werfen, und verwenden Sie es nach dem Trocknen normal.`,
      },
      {
        question:
          'Sind lange Fasern in der Rührwelle verwickelt?',
        answer: `Bitte entfernen Sie die langen Fasern von der Mischwelle. Bitte zerkleinern Sie so viele Lebensmittelabfälle wie möglich, bevor Sie sie in den GEME geben.`,
      },
      {
        question: 'Läuft der Motor nicht?',
        answer: `Bitte wenden Sie sich an das Kundendienstzentrum.`,
      },
    ],
  },
  {
    title: 'Abfall nicht zersetzt',
    description: `Mir ist aufgefallen, dass sich mein Abfall überhaupt nicht zersetzt, nachdem er in mein GEME gegeben wurde, selbst nach 1-3 Tagen Wartezeit.`,
    faqs: [
      {
        question:
          'Ist der Rührwerksmotor abnormal und verursacht eine unzureichende Bewegung?',
        answer: `Störung des Rührmotors, wenden Sie sich bitte an den Kundendienst.`,
      },
      {
        question:
          'Haben Sie zu viel Bioabfall verfüttert? (Die durchschnittliche tägliche Verarbeitungskapazität beträgt etwa 5 kg)',
        answer: `Bitte stellen Sie 2 bis 5 Tage lang keine Bioabfälle mehr ein und verwenden Sie diese wieder normal, nachdem das Innere des Zersetzungsbehälters trocken ist.`,
      },
      {
        question: 'Haben Sie Fruchtschalen oder andere faserreiche Bioabfälle eingelagert?',
        answer: `Schneiden Sie den faserreichen Bioabfall in kleine Stücke, um die Zersetzung zu beschleunigen, oder zersetzen Sie ihn nach einiger Zeit.`,
      },
      {
        question: `Ist alles in Ordnung, aber die Zersetzungsgeschwindigkeit ist nur langsamer als zuvor?`,
        answer: `Bitte fügen Sie neue Mikroorganismen hinzu oder ersetzen Sie diese.`,
      },
    ],
  },
  {
    title: 'Nass oder matschig',
    description: `Das Nebenprodukt in meinem GEME ist übermäßig nass oder matschig.`,
    faqs: [
      {
        question: 'Haben Sie zu viel Bioabfall entsorgt?',
        answer: `Die durchschnittliche tägliche Verarbeitungskapazität beträgt 5 kg.
        Bitte stellen Sie 2 bis 5 Tage lang keine Bioabfälle mehr ein und verwenden Sie diese wieder normal, nachdem das Innere des Zersetzungsbehälters trocken ist.`,
      },
      {
        question: 'Haben Sie Bioabfall entsorgt, der zu viel Wasser enthält?',
        answer: `Bitte stellen Sie 2 bis 5 Tage lang keine Bioabfälle mehr ein und verwenden Sie diese wieder normal, nachdem das Innere des Zersetzungsbehälters trocken ist.`,
      },
      {
        question: 'Hast du den Strom ausgeschaltet?',
        answer: `Nachdem Sie das Netzteil 1 bis 3 Tage lang verwendet haben, können Sie es normal verwenden.`,
      },
    ],
  },
  {
    title: `Kondensation`,
    description: 'Auf dem Innendeckel meines GAME befinden sich Wassertropfen.',
    faqs: [
      {
        question: 'Haben Sie zu viel Bioabfall entsorgt?',
        answer: `Drücken Sie die Entfeuchtungstaste und hören Sie für 2–3 Tage auf, Biomüll einzuwerfen.`,
      },
      {
        question: 'Wird GEME an einem kühleren Ort installiert (nicht im Winter)?',
        answer: `Bitte bringen Sie GEME nach drinnen.`,
      },
      {
        question: 'Haben Sie vergessen, das Schaumstoffpolster unter dem Produkt zu entfernen?',
        answer: `Nachdem Sie das Schaumstoffpolster entfernt haben, drücken Sie die Entfeuchtungsfunktionstaste.`,
      },
      {
        question: `Ist der Abgasfilter im Zersetzungstank verstopft?`,
        answer: `Bitte reinigen Sie den Abluftfilter.`,
      },
    ],
  },
  {
    title: 'Insekten',
    description: `Ich habe Insekten in meinem GEME-Behälter bemerkt, zusammen mit den Lebensmittelabfällen.`,
    faqs: [
      {
        question: 'Hast du den Strom ausgeschaltet?',
        answer: `Durch neue Mikroorganismen ersetzen.`,
      },
    ],
  },
  {
    title: 'Zu trocken',
    description: `Mir ist aufgefallen, dass das Innere des Zersetzungstanks in meinem GEME zu trocken ist und sowohl der Abfall als auch der GEME-Kobold scheinen ebenfalls trocken zu sein. `,
    faqs: [
      {
        question: 'Ist die Menge an Bioabfall zu gering?',
        answer: `Gießen Sie etwa 200 ml Wasser oder geben Sie eine angemessene Menge Suppe in den Bioabfall.`,
      },
    ],
  },
]

// 页面内容配置文件2  De版本
const heroProps: IHeaderCenteredProps = {
  title: 'Selbstreparatur',
  description: `Willkommen beim Selbstreparatur-Leitfaden von GEME! Entdecken Sie, wie Sie Ihr GEME-Problem beheben können. Unsere Schritt-für-Schritt-Anleitung bietet leicht verständliche Anweisungen und Bilder, die Sie bei der Fehlerbehebung und Reparatur Ihrer Geräte unterstützen. Lassen Sie ein kaputtes Gerät nicht ungenutzt, sondern lernen Sie anhand einer einfachen Checkliste, wie Sie es reparieren können.`,
}

function SelfRepairPageDe() {
  const props = { faqGroups, heroProps }
  return (
    <>
      <h1 className="sr-only">GEME Selbstreparatur</h1>
      <SelfRepairView {...props} />
    </>
  )
}
export { SelfRepairPageDe }
