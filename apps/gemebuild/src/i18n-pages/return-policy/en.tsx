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

// navbar的内容 配置文件 En版
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
  currentTabId: 'return-policy',
}

// 静态页面的内容一 配置文件 En版
const returnPolicyCurrentProps: IReturnPolicyCurrentProps = {
  title: 'How Returns Work',
  updateTime: 'Updated: November 25, 2023',
  forward: {
    description: `
    <p class="mb-5">Our team is happy to help you with the return process for products purchased through www.geme.bio. Simply send the cancellation form to <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio </a>. Please have your order number or product serial number ready so we can help you through the process.</p>
    <p class="mb-2 text-xs">
      Note: We only accept returns on products purchased directly from this table.
      If you purchased your product from another retailer, please contact that retailer regarding your return.
    </p>

   <table class="border-collapse border border-slate-400 mb-5 table-auto">
      <thead>
        <tr>
          <th class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Source Name</th>
          <th class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Store Links</th>
          <th class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Launch Time</th>
        </tr>
      </thead>

      <tbody class="pl-2 pr-2 pb-2 pt-2">
        <tr>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2"">Official Website</td>
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
      name: 'Returns within 30 calendar days',
      hide: false,
      svgSrc: <Svg30Days></Svg30Days>,
      description: `
        <p class="mb-5">Enjoy 30 days of happiness with GEME at home! If you're not happy, return it within 30 days. We'll take care of the rest and cover the postage.</p>
        <p class="mb-5">If you haven't used GEME-Kobold, get a full refund, no questions asked!</p>
        <p class="mb-5">Used it? No problem! Return it, we still cover the shipping fee. Only a mere $70 will be deducted from the original payment for a thorough cleaning and replenish.</p>
        <p class="mb-5">Just a friendly tip: before returning the unit, make sure to clear out any by-products, used microorganisms, or food residue. Take photos before and after packing. This 2 simple steps ensures a smooth return process, preventing any logistical hiccups.</p>
        <p class="mb-5">Your satisfaction is our priority, and we want this trial to be a delightful experience for you!</p>
      `,
    },
    {
      name: 'Returns within 45 calendar days',
      hide: false,
      svgSrc: <Svg45Days></Svg45Days>,
      description: `
      <p class="mb-5">If you are not satisfied with your product for any other reason, you have up to 45 calendar days to request a return. An additional restocking fee of 50% of the product's selling price will be charged. The original delivery, shipping, and service charges will not be refunded. Contact us through <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> to arrange a return. </p>
        `,
    },
    {
      name: 'After 45 calendar days',
      hide: false,
      svgSrc: <Svg45DaysAfter></Svg45DaysAfter>,
      description: `
      <p class="mb-5">If the 45-day return window has passed and your product is still under warranty, please call us for warranty service or to arrange a repair. A fee may apply.</p>
      <p class="mb-5">Any reason to be unhappy? Contact us through <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> so we can better understand how to help you resolve your issue.</p>
      `,
    },
  ],
}

// 静态页面的内容二 配置文件 En版
const returnPolicyEndProps: IReturnPolicyEndProps = {
  title: 'How Returns Work',
  updateTime: 'Updated: January 1, 2023',
  forward: {
    description: `
    <p class="mb-5">Our team is happy to help you with the return process for products purchased through www.geme.bio. Simply send the cancellation form to <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio </a>. Please have your order number or product serial number ready so we can help you through the process.</p>
    <p class="mb-5">Note: We only accept returns on products purchased directly from www.geme.bio. If you purchased your product from another retailer, please contact that retailer regarding your return.</p>
    `,
    imgSrc: '/assets/images/return-policy/1.png',
  },
  items: [
    {
      name: 'Returns within 7 days - no restocking fee',
      svgSrc: <Svg7Days></Svg7Days>,
      description: `
      <p class="mb-5">Belgian law on business practices and consumer information and protection allows the buyer to notify the seller that he will abandon the purchase within 7 days of receiving the product. The goods must be followed up within an acceptable period of time (7 days) after receipt of the goods and if they have not been opened and used. We recommend that you keep the goods in their original packaging and condition as much as possible so that you are not obliged to be responsible for any devaluation of the goods as a result of their disposal.</p>
      <p class="mb-5">You may send a <a href="/assets/return/revocation-form.docx" target='_blank' class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">withdrawal form</a> to by <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> to inform us that you are abandoning your purchase. You must then return the goods by normal post to the address below with sufficient postage and a copy of the invoice.</p>
      <p class="mb-5">In order for us to issue a refund, please also provide us with your account number. Upon receipt of your return, we will issue a credit note and refund the amount paid within 14 days. There are no exceptions to the cancellation form.</p>
      <p class="mb-5">If you receive a product that is not what you ordered or is damaged, then you must inform us in the same manner and return the product in the same manner. However, in this case, we will also reimburse you for the shipping costs sent by regular mail.</p>
      `,
    },
    {
      name: 'Returns within 30 calendar days',
      svgSrc: <Svg30Days></Svg30Days>,
      description: `
      <p class="mb-5">Products damaged at the time of delivery</p>
      <p class="mb-5">(Damage includes scratches, dents, chips, and other damage caused by defects in materials and/or workmanship.)</p>
      <p class="mb-5">If you find that your Product is delivered damaged, you may request a return, exchange, or repair through <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> within 30 calendar days.</p>
      <ul class="my-5 list-inside list-disc">
        <li class="mb-5">For exchanges, you will not be required to pay any additional delivery, shipping, or service charges. Depending on the price difference of the new item, you will receive a credit or fee on the credit card used to purchase the original item.</li>
        <li class="mb-5">For returns, you will receive a refund for the product, but shipping, freight, and service charges will not be refunded. Please call us to discuss the nature of the damage and to confirm that you are eligible for a product refund.</li>
        <li class="mb-5">If you are interested in a repair, simply send an email to the same email address to schedule service.</li>
      </ul>
      `,
    },
    {
      name: 'Returns within 45 calendar days',
      svgSrc: <Svg45Days></Svg45Days>,
      description: `
      <p class="mb-5">If you are not satisfied with your product for any other reason, you have up to 45 calendar days to request a return. An additional restocking fee of 50% of the product's selling price will be charged. The original delivery, shipping, and service charges will not be refunded. Contact us through <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> to arrange a return. </p>
        `,
    },
    {
      name: 'After 45 calendar days',
      svgSrc: <Svg45DaysAfter></Svg45DaysAfter>,
      description: `
      <p class="mb-5">If the 45-day return window has passed and your product is still under warranty, please call us for warranty service or to arrange a repair. A fee may apply.</p>
      <p class="mb-5">Any reason to be unhappy? Contact us through <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> so we can better understand how to help you resolve your issue.</p>
      `,
    },
  ],
}

function ReturnPolicyPageEn() {
  const url = 'https://www.geme.bio/return-policy'

  const childProps: IReturnPolicyProps = {
    current: returnPolicyCurrentProps,
    end: returnPolicyEndProps,
  }

  return (
    <>
      <link rel="canonical" href={url} />
      <h1 className="sr-only">GEME Return Policy</h1>
      <SiteHelpTabs {...siteHelpTabsProps} />
      <ReturnPolicy {...childProps} />
    </>
  )
}
export { ReturnPolicyPageEn }
