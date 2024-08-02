import SelfRepairView from './components/SelfRepairView'
import { IFaqOffsetWithSupportingTextProps } from './components/FaqOffsetWithSupportingText'
import { IHeaderCenteredProps } from './components/Hero'
import Image from 'next/image'

// 页面内容配置文件1  De版本
const faqGroups: IFaqOffsetWithSupportingTextProps[] = [
  {
    title: 'Kein Strom',
    description: `Ich habe Schwierigkeiten, mein GEME einzuschalten. Die vorderen LED-Leuchten leuchten nicht, selbst wenn ich den Netzschalter drücke.`,
    faqs: [
      {
        question: 'Sind der Stecker und die Steckdose richtig angeschlossen?',
        answer: 'Bitte stecken Sie den Stecker richtig in die Steckdose.',
      },
      {
        question: 'Ist die Spannung 110/220V?',
        answer: 'Bitte verwenden Sie 110/220V Spannung.',
      },
      {
        question: 'Keiner der oben genannten Fälle?',
        answer: 'Bitte wenden Sie sich an das Kundendienstzentrum.',
      },
    ],
  },
  {
    title: 'Warnsignal',
    description: `Ich habe ein Problem mit meinem GEME. Wenn es läuft, ertönt ein "bibibi" Warnsignal und das LED-Display zeigt einen Fehlercode an.`,
    faqs: [
      {
        question: 'Wenn der Code wie folgt angezeigt wird:',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <Image src="/assets/images/self-repair/stirringIndicatorLight.png" alt='code displayed1' width={260} height={80} />
            <p>Dieser Code weist darauf hin, dass das Mischen abnormal ist.</p>
            <ul>
              <li>
                Überprüfen Sie, ob sich ein harter Fremdkörper im
                Zersetzungstank befindet.
              </li>
              <li>
                Entfernen Sie den Fremdkörper, schließen Sie den Deckel und
                prüfen Sie, ob der Code noch angezeigt wird.
              </li>
              <li>
                Wenn der obige Code immer noch angezeigt wird, wenden Sie sich
                bitte an das Servicecenter.
              </li>
            </ul>
          </div>
        ),
      },
      {
        question: 'Wenn der Code wie folgt angezeigt wird:',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <Image src="/assets/images/self-repair/uvLampIndicatorLight.png" alt='code displayed2' width={260} height={80} />
            <p>
              Bitte{' '}
              <a href="https://youtu.be/VdAtQfpSQ_E" target="_blank">
                wechseln Sie die UV-Lampe.
              </a>
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: 'Geräusch',
    description: `Ich habe festgestellt, dass mein GEME während des Betriebs ungewöhnliche Geräusche macht. Die Geräusche unterscheiden sich deutlich von denen, die ich normalerweise während des normalen Betriebs hören würde.`,
    faqs: [
      {
        question:
          'Befindet sich ein harter Fremdkörper im Zersetzungstank? ',
        answer: 'Bitte entfernen Sie harte Gegenstände.',
      },
      {
        question:
          'Wird das Geräusch periodisch erzeugt, wenn der Rührmotor läuft?',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            Dies wird durch den Rührmotor verursacht. Bitte{' '}
            <a href="https://youtu.be/rthDSasoOrY" target="_blank">
              stellen Sie die Füße
            </a>{' '}
            des GEME ein, um das Gerät auf einer ebenen Fläche für einen reibungslosen
            Betrieb zu halten, oder wenden Sie sich an das Kundendienstzentrum.
          </div>
        ),
      },
      {
        question: 'Kommt das Geräusch vom Lüfter? ',
        answer: `Bitte überprüfen Sie, wo das Gerät platziert ist, um sicherzustellen, dass der Luftauslass nicht blockiert ist, oder wenden Sie sich an das Kundendienstzentrum.`,
      },
      {
        question:
          "Klingt das Geräusch wie intermittierendes 'du' und ist das Innere des Zersetzungstanks zu trocken?",
        answer: `Fügen Sie etwa 200 bis 500 ml Wasser in den Zersetzungstank hinzu oder geben Sie Bio-Abfälle mit mehr Wasser hinein.`,
      },
    ],
  },
  {
    title: 'Schlechter Geruch',
    description: `Ich habe festgestellt, dass mein GEME einen unangenehmen Geruch abgibt.`,
    faqs: [
      {
        question:
          'Tritt der Geruch unabhängig davon aus, ob der Deckel geschlossen ist oder nicht?',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <p>
              Bitte überprüfen Sie, ob das in Ihrem GEME erzeugte Material zu feucht ist.
              Durch zu viel Feuchtigkeit ausgelöste anaerobe Fermentation kann Geruch verursachen.
            </p>
            <ul>
              <li>Bitte überprüfen Sie, ob die Stromversorgung Ihres Geräts immer eingeschaltet ist.</li>
              <li>
                Bitte hören Sie auf, 2-3 Tage lang Bio-Abfälle hinzuzufügen, und drücken Sie die
                Entodorierungs- und Entfeuchtungstaste.
              </li>
              <li>
                Wenn die Feuchtigkeit des Nebenprodukts zu hoch ist, nehmen Sie es
                heraus und lassen Sie es an einem belüfteten Ort trocknen, bevor
                Sie es wieder aktivieren.
              </li>
            </ul>
          </div>
        ),
      },
      {
        question:
          'Es gibt keinen Geruch vom Nebenprodukt im GEME, aber es gibt einen Geruch vom aus dem Gerät abgegebenen Gas?',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <p>Dies ist ein Problem mit der Entodorierungseinheit.</p>
            <ul>
              <li>Bitte überprüfen Sie, ob der Filter verstopft ist, und reinigen Sie ihn.</li>
              <li>
                Bitte überprüfen Sie, ob der Auslass blockiert ist, und beseitigen Sie die
                Blockierung.
              </li>
              <li>Andernfalls wenden Sie sich bitte an das Kundendienstzentrum.</li>
            </ul>
          </div>
        ),
      },
      {
        question: 'GEME hat einen leichten Geruch.',
        answer: `Bitte drücken Sie die Entodorierungstaste.`,
      },
    ],
  },
  {
    title: 'Rührwerk dreht sich nicht',
    description: `Die Rührwelle meines GEME hat aufgehört zu rotieren.`,
    faqs: [
      {
        question: 'Gibt es zu viele Nebenprodukte?',
        answer: `
        Halten Sie die gleiche Menge an Nebenprodukten wie die ursprünglichen Mikroben und schaufeln Sie den Rest aus.
        `,
      },
      {
        question: 'Ist der innere Zustand dick genug?',
        answer: `Hören Sie auf, den Müll 2-5 Tage lang hinzuzufügen, und verwenden Sie ihn nach dem Trocknen normal.`,
      },
      {
        question:
          'Gibt es lange Fasern, die sich um die Rührwelle gewickelt haben?',
        answer: `Bitte entfernen Sie die langen Fasern von der Rührwelle. Bitte schneiden Sie Ihre Speiseabfälle so klein wie möglich, bevor Sie sie in das GEME geben.`,
      },
      {
        question: 'Läuft der Motor nicht?',
        answer: `Bitte konsultieren Sie das Kundendienstzentrum.`,
      },
    ],
  },
  {
    title: 'Abfall nicht zersetzt',
    description: `Ich habe festgestellt, dass mein Abfall überhaupt nicht zersetzt wird, nachdem er in mein GEME gegeben wurde, selbst nach 1-3 Tagen Warten.`,
    faqs: [
      {
        question:
          'Ist der Rührmotor abnormal und verursacht unzureichende Durchmischung?',
        answer: `Rührmotorfehler, bitte wenden Sie sich an das Kundendienstzentrum.`,
      },
      {
        question:
          'Haben Sie zu viel Bio-Abfall hinzugefügt? (die durchschnittliche tägliche Verarbeitungskapazität beträgt etwa 5 kg)',
        answer: `Bitte hören Sie auf, 2 bis 5 Tage lang Bio-Abfälle hinzuzufügen, und verwenden Sie es nach dem Trocknen im Inneren des Zersetzungstanks normal.`,
      },
      {
        question: 'Haben Sie Obstschalen oder andere faserreiche Bio-Abfälle hinzugefügt?',
        answer: `Schneiden Sie die faserreichen Bio-Abfälle in kleine Stücke, um die Zersetzung zu beschleunigen oder nach einer gewissen Zeit zu zersetzen.`,
      },
      {
        question: `Ist alles in Ordnung, aber die Zersetzungsgeschwindigkeit langsamer als zuvor?`,
        answer: `Bitte fügen Sie neue Mikroorganismen hinzu oder ersetzen Sie sie.`,
      },
    ],
  },
  {
    title: 'Nass oder matschig',
    description: `Das Nebenprodukt in meinem GEME ist übermäßig nass oder matschig.`,
    faqs: [
      {
        question: 'Haben Sie übermäßig Bio-Abfall hinzugefügt?',
        answer: `Die durchschnittliche tägliche Verarbeitungskapazität beträgt 5 kg.
        Bitte hören Sie auf, 2 bis 5 Tage lang Bio-Abfälle hinzuzufügen, und verwenden Sie es nach dem Trocknen im Inneren des Zersetzungstanks normal.`,
      },
      {
        question: 'Haben Sie Bio-Abfälle hinzugefügt, die zu viel Wasser enthalten?',
        answer: `Bitte hören Sie auf, 2 bis 5 Tage lang Bio-Abfälle hinzuzufügen, und verwenden Sie es nach dem Trocknen im Inneren des Zersetzungstanks normal.`,
      },
      {
        question: 'Haben Sie den Strom abgeschaltet?',
        answer: `Nach der Verwendung der Stromversorgung für 1-3 Tage wird es normal verwendet.`,
      },
    ],
  },
  {
    title: `Kondensation`,
    description: 'Es befinden sich Wassertropfen auf der Innenseite meines GEME-Deckels.',
    faqs: [
      {
        question: 'Haben Sie übermäßig Bio-Abfall hinzugefügt?',
        answer: `Drücken Sie die Entfeuchtungstaste und hören Sie auf, 2-3 Tage lang Bio-Abfälle hinzuzufügen.`,
      },
      {
        question: 'Ist GEME an einem kühleren Ort installiert (nicht im Winter)?',
        answer: `Bitte bewegen Sie GEME nach innen.`,
      },
      {
        question: 'Haben Sie vergessen, das Schaumstoffpolster unter dem Produkt zu entfernen?',
        answer: `Entfernen Sie nach dem Entfernen des Schaumstoffpolsters die Entfeuchtungsfunktionstaste.`,
      },
      {
        question: `Ist der Auslassfilter im Zersetzungstank verstopft?`,
        answer: `Bitte reinigen Sie den Auslassfilter.`,
      },
    ],
  },
  {
    title: 'Insekten',
    description: `Ich habe Insekten in meinem GEME-Behälter zusammen mit den Lebensmittelabfällen bemerkt.`,
    faqs: [
      {
        question: 'Haben Sie den Strom abgeschaltet?',
        answer: `Ersetzen Sie es durch neue Mikroorganismen.`,
      },
    ],
  },
  {
    title: 'Zu trocken',
    description: `Ich habe festgestellt, dass das Innere des Zersetzungstanks in meinem GEME zu trocken ist und sowohl der Abfall als auch der GEME-Kobold ebenfalls trocken zu sein scheinen. `,
    faqs: [
      {
        question: 'Ist die Menge an Bio-Abfällen zu gering?',
        answer: `Gießen Sie etwa 200 ml Wasser ein oder geben Sie beim Einfüllen von Bio-Abfällen eine angemessene Menge Suppe hinzu.`,
      },
    ],
  },
]

// 页面内容配置文件2  De版本
const heroProps: IHeaderCenteredProps = {
  title: 'Selbstreparatur',
  description: `Willkommen im Selbstreparatur-Leitfaden von GEME! Erfahren Sie, wie Sie das Problem Ihres GEME beheben können. Unser Schritt-für-Schritt-Leitfaden bietet leicht verständliche Anweisungen und visuelle Hilfen, um Ihnen bei der Fehlerbehebung und Reparatur Ihrer Geräte zu helfen. Lassen Sie ein defektes Gerät nicht ungenutzt, lernen Sie, es mit einer einfachen Checkliste zu reparieren.`,
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
