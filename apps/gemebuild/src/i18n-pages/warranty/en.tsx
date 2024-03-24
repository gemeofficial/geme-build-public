import { Warranty } from './components'
import type { IWarrantyProps } from './components'
import { SiteHelpTabs, ISiteHelpTabsProps } from '../../components/tabs'

// 静态页面的navBar内容 配置文件 En版
const siteHelpTabsProps: ISiteHelpTabsProps = {
  tabs: [
    {
      title: 'Terms and Conditions of Service Agreement',
      id: 'terms-and-conditions',
    },
    {
      title: 'Warranty',
      id: 'warranty',
    },
    {
      title: 'Warranty Extend',
      id: 'warranty-extend',
    },
    {
      title: 'Return Policy',
      id: 'return-policy',
    },
    {
      title: 'Privacy Policy',
      id: 'privacy-policy',
    },
    {
      title: 'GEME Dots Loyalty Program',
      id: 'geme-dots-loyalty-program',
    },
  ],
  currentTabId: 'warranty',
}

// 静态页面的内容 配置文件 En版
const warrantyProps: IWarrantyProps = {
  title: 'warranty',
  forward: {
    title: 'Foreword',
    description: `
      ROKH SRL electrical appliances are manufactured to very high
      quality standards. Nevertheless, failures are always possible.
      In such cases, repairs can be carried out quickly and
      professionally during or after the warranty period, without
      affecting the service life of the equipment.
      <br />
      <br />
      The ROKH SRL warranty conditions are established in accordance
      with EU Directive 99/44/EC and applicable national legislation;
      they do not affect in any way the rights they confer on the
      consumer.
    `,
    imgSrc: '/assets/images/warranty/1.png',
  },
  items: [
    {
      name: 'Start and duration of the warranty period',
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
        The GEME BIO-WASTE COMPOSTER warranty period starts from the date of purchase by the consumer. The warranty period is 12 months, when and only when the warranty is used free of charge as described herein during home use.
        <br /> <br />
        The 1-year warranty period is suspended during repair or replacement. At the end of this period, the consumer is not entitled to a new 1-year warranty, but the warranty period that has begun is reinstated from the time of replacement or completion of the repair.
        </li>
        <li>
        For commercial equipment, the warranty period is governed by the terms of the sales contract.
        </li>
      </ul>
      `,
    },
    {
      name: 'Warranty Content and Coverage',
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
      <p class="mb-5">ROKH SRL undertakes to repair or replace defective parts free of charge if the initial defect occurs during the warranty period or if the failure occurs during proper use.</p>
      <p class="mb-5">The replaced parts remain the property of ROKH SRL. If the same defect occurs several times during the warranty period, or if the cost of repair is deemed disproportionate to the value of the equipment, a replacement of the equivalent equipment will be offered to the consumer after consultation with him. In such cases, ROKH SRL reserves the right to charge the consumer an amount based on the period of use.</p>
      <p class="mb-5">Any defects must be reported immediately to avoid more serious damage.</p>
      <p class="mb-5">For appliances that are difficult to transport and built-in devices, repairs will be carried out at the consumer's home. Appliances that are easily transportable will be delivered or sent to ROKH SRL's after-sales service, either directly or through a retailer.</p>
      `,
    },
    {
      name: 'Limitation of the guarantee',
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
      <p class="mb-5">The guarantee does not apply in the following cases.</p>
      <ul class="my-5 list-inside list-disc">
        <li class="mb-5">Minor discrepancies related to the expected quality, which do not affect the value or proper functioning of the equipment.</li>
        <li class="mb-5">Construction or execution modifications made prior to the execution of the order that do not affect the value and good functioning of the equipment.</li>
        <li class="mb-5">Defects due to improper assembly or installation.</li>
        <li class="mb-5">Consequences of external factors, such as: shipping damage; non-compliant use that may damage certain sensitive components, such as synthetic parts, rubber; chemical or electrochemical reactions caused by water; weather conditions; abnormal environmental stresses.</li>
        <li class="mb-5">Unsuitable conditions of use or operation.</li>
        <li class="mb-5">Repairs or modifications performed by third parties not professionally qualified.</li>
        <li class="mb-5">Missing equipment identification numbers.</li>
        <li class="mb-5">Equipment purchased outside the European Union, Norway or Switzerland, outside the United States, which, due to its technical specifications, is unusable or to a certain extent unusable.</li>
        <li class="mb-5">Unavoidable wear and tear due to the use of parts or natural processes, which according to the user manual must be replaced regularly, e.g. UV-UV lamps.</li>
        <li class="mb-5">Inadequate maintenance (e.g. not putting out non-biological waste as required or overloading operation) and/or improper execution (e.g. use of aggressive cleaning products).</li>
        <li class="mb-5">Use of non-original accessories or parts.</li>
      </ul>
      `,
    },
  ],
  additionalProvisions: {
    title: 'Additional provisions',
    description: `
    Claims for a cancellation of the sale, loss of value, or damages
    are not covered, except in cases provided for by law in this
    field. In the case of an appeal, compensation cannot exceed the
    value of the equipment.
    <br />
    <br />
    The warranty conditions apply to equipment purchased and used in
    Belgium. In the case of use abroad of equipment purchased in
    Belgium, or in the case of use in Belgium of equipment purchased
    abroad, the consumer shall ensure that the equipment complies with
    the technical conditions of the place of use (electrical
    indicators, electrical frequency, installation standards, climatic
    conditions). Defects resulting from non-compliance of the
    equipment with these requirements and modifications made to bring
    it into compliance are not covered by the warranty.
    <br />
    <br />
    If it takes more than 30 minutes to access the equipment and
    return it to its original position to complete the repair, the
    cost incurred for the additional time will be charged. Any damage
    that may result from such handling is also the responsibility of
    the consumer.
    <br />
    <br />
    For any dispute or disagreement, the courts of the Wallonia Region
    shall have jurisdiction.
    `,
  },
}

function WarrantyPageEn() {
  return (
    <>
      <link rel="canonical" href="https://www.geme.bio/warranty" />
      <h1 className="sr-only">GEME Product Warranty Information</h1>
      <SiteHelpTabs {...siteHelpTabsProps} />
      <Warranty {...warrantyProps} />
    </>
  )
}
export { WarrantyPageEn }
