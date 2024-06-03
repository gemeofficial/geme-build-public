import { IWarrantyExtendProps, WarrantyExtend } from './components'
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
  currentTabId: 'warranty-extend',
}

// 静态页面的内容 配置文件 En版
const warrantyExtendProps: IWarrantyExtendProps = {
  title: 'Extended Warranty',
  forward: {
    title: 'The following contract conditions apply',
    imgSrc: '/assets/images/warranty-extend/1.png',
  },
  items: [
    {
      name: 'Duration and start of the warranty',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1110 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M594.701017 945.23878h346.094644a401.234441 401.234441 0 0 0-190.93261-267.802034L555.389831 563.807458l-194.473221 113.629288a401.234441 401.234441 0 0 0-190.93261 267.802034h346.077288v-39.397966A39.345898 39.345898 0 0 1 555.389831 866.460203a39.345898 39.345898 0 0 1 39.311186 39.397966v39.380611zM819.373559 315.079593a448.650847 448.650847 0 0 0 122.289899-236.318373H169.133559a448.650847 448.650847 0 0 0 122.289899 236.318373h527.932745z m-104.690983 78.761221H396.114441c11.073085 6.022508 22.475932 11.628475 34.156474 16.731118L555.389831 465.416678l125.118915-54.844746c11.680542-5.12 23.08339-10.70861 34.156474-16.731118z m-624.64 551.397966a480.030373 480.030373 0 0 1 231.267797-335.837288l157.071186-91.77817-79.611661-34.885424C231.649627 409.495864 116.128542 255.861153 89.452475 78.76122H39.311186A39.345898 39.345898 0 0 1 0 39.397966 39.345898 39.345898 0 0 1 39.311186 0h1032.157289A39.345898 39.345898 0 0 1 1110.779661 39.397966a39.345898 39.345898 0 0 1-39.311186 39.363254h-50.141289c-26.676068 177.099932-142.197153 330.752-309.300067 403.976678l-79.594305 34.885424 157.05383 91.77817a480.030373 480.030373 0 0 1 231.250441 335.837288h50.73139A39.345898 39.345898 0 0 1 1110.779661 984.602034 39.345898 39.345898 0 0 1 1071.468475 1024H39.311186A39.345898 39.345898 0 0 1 0 984.602034a39.345898 39.345898 0 0 1 39.311186-39.363254h50.73139z m426.053424-275.698983A39.345898 39.345898 0 0 1 555.389831 630.141831a39.345898 39.345898 0 0 1 39.311186 39.397966v78.76122A39.345898 39.345898 0 0 1 555.389831 787.698983a39.345898 39.345898 0 0 1-39.311187-39.397966v-78.76122z"></path>
        </svg>
      ),
      description: `
        <ul class="my-5 list-inside list-decimal">
        <li class="mb-5">ROKH SRL offers a warranty period of 1 year from the date of purchase of the equipment. By extending the warranty period, ROKH SRL will cover the cost of repairs for an additional one or two years immediately after the warranty period has expired. The expiration date is indicated on the front of the warranty document.</li>
        <li class="mb-5">The one-year warranty extension contract is automatically extended for 12 months to 3 years from the date of purchase of the equipment. Thereafter the contract is automatically canceled. It can also be canceled in writing up to one month before the end of the annual coverage period from the first day of validity/renewal. The automatic extension takes effect when the customer pays the invoice received at the start of the extension within the specified payment period.</li>
        <li class="mb-5">Existing 1-year warranty extensions may be extended for a maximum of 3 years within their warranty period.</li>
        <li class="mb-5">ROKH SRL has the right to adjust prices at any time. When purchasing an extended warranty, the price in effect at the time the contract is signed shall apply. The change in price for a one-year warranty extension may be indicated on the annual invoice. No prior written information will be provided. If the invoice is paid within the payment period, it is assumed that the price change has been accepted. If payment is refused, the warranty period will not be extended.
        <p class="mt-2">All prices are inclusive of statutory VAT.</p>
        </li>
        <li class="mb-5">Policy documents will be provided via e-mail.</li>
        <li class="mb-5">Equipment repairs or spare parts supply do not extend the contract period.</li>
      </ul>
      `,
    },
    {
      name: 'Terms',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M771.068 205.745c-1.405 0-2.78 0.105-4.13 0.302L255.414 206.047c-1.347-0.197-2.722-0.302-4.125-0.302-15.862 0-28.72 12.862-28.72 28.725s12.857 28.722 28.72 28.722l0 0.297 519.779 0 0-0.297c15.865 0 28.72-12.86 28.72-28.722S786.933 205.745 771.068 205.745zM771.068 429.009c-1.405 0-2.78 0.105-4.13 0.297L255.414 429.306c-1.347-0.193-2.722-0.297-4.125-0.297-15.862 0-28.72 12.857-28.72 28.72 0 15.865 12.857 28.722 28.72 28.722l0 0.297 519.779 0 0-0.297c15.865 0 28.72-12.857 28.72-28.722C799.788 441.866 786.933 429.009 771.068 429.009zM498.219 646.043c-1.402 0-2.777 0.105-4.125 0.295L254.754 646.338c-1.345-0.19-2.722-0.295-4.122-0.295-15.865 0-28.722 12.855-28.722 28.72 0 15.86 12.857 28.725 28.722 28.725l0 0.29 247.587 0 0-0.29c15.865 0 28.73-12.865 28.73-28.725C526.949 658.898 514.084 646.043 498.219 646.043zM944.318 92.895c0-44.557-36.245-80.81-80.81-80.81L159.3 12.085c-44.562 0-80.81 36.252-80.81 80.81l0 845.153c0 44.55 36.252 80.805 80.81 80.805l464.214 0c7.74 0.33 15.6-2.43 21.51-8.35l0.215 0.21 290.589-290.594-0.21-0.21c5.575-5.58 8.385-12.89 8.405-20.2l0.295 0L944.318 350.954l0.065 0 0-57.447-0.065 0L944.318 92.895zM624.868 949.848 624.868 711.893l237.944 0L624.868 949.848zM888.218 655.583c-2.2-0.535-4.495-0.83-6.86-0.83l0-0.305L595.839 654.448c-15.855 0-28.72 12.865-28.72 28.725 0 0.045 0.01 0.08 0.01 0.13 0 0.055-0.01 0.115-0.01 0.175 0 1.4 0.105 2.77 0.3 4.12l0 273.954L147.332 961.552c-6.365 0-11.545-5.175-11.545-11.54L135.787 80.925c0-6.365 5.18-11.542 11.545-11.542l729.341 0c6.37 0 11.545 5.18 11.545 11.542"
            fill="#2c2c2c"
          ></path>
        </svg>
      ),
      description: `
        <ul class="my-5 list-inside list-decimal">
        <li class="mb-5">The appliances are purchased from authorized specialist retailers or directly from the ROKH SRL online store in EU countries, UK, Switzerland, Norway or USA.</li>
        <li class="mb-5">At the time of purchase of the extended warranty, the equipment is located in the country specified above.</li>
        <li class="mb-5">The policy document is valid for one specific ROKH SRL appliance in each case and is not transferable.</li>
        <li class="mb-5">If the equipment changes ownership or the owner moves to another address, ROKH SRL must be notified in order for the policy document to remain valid.</li>
        <li class="mb-5">The policy document must be registered and signed within the 1-year warranty period of the equipment. A one-year warranty extension may also be obtained directly after a service visit by a ROKH SRL technician for appliances up to 3 years old.</li>
        <li class="mb-5">Service under the extended warranty will only be available in the EU, UK, Switzerland, Norway, and USA.</li>
        <li class="mb-5">Service under the extended warranty may only be performed by ROKH SRL Customer Service or by a ROKH SRL authorized service agent, available at <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> contract to ROKH SRL Customer Service.</li>
        <li class="mb-5">If requested by ROKH SRL, the purchase receipt and policy documents must be presented.</li>
        <li class="mb-5">If the Customer is not entitled to make a claim under the extended warranty, the cost of repairs and other services provided (e.g. equipment inspection) will be charged according to the current rates.</li>
        <li class="mb-5">Equipment with policy documentation is for non-commercial use only.</li>
      </ul>
      `,
    },
    {
      name: 'Coverage',
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
        <ul class="my-5 list-inside list-decimal">
        <li class="mb-5">Defects in the equipment will be repaired within a reasonable time and free of charge by means of repair or replacement of the relevant parts. All travel, intervention, labor, and spare parts costs will be borne by ROKH SRL. The replaced parts or appliances become the property of ROKH SRL.</li>
        <li class="mb-5">If the equipment cannot be economically repaired or is beyond repair, the customer will receive a new identical or equivalent device. In the case of replacement equipment, communication (connection) with other equipment and existing home systems cannot be guaranteed. The current market value of the equipment may also be refunded upon request. If ROKH SRL reimburses the current market value of the appliance, the policy document will become invalid. If the appliance is replaced, the remaining warranty period provided by the policy document will be transferred to the new appliance.</li>
        <li class="mb-5">The extended warranty does not cover other claims for damages against ROKH SRL, except for liability due to gross or willful negligence of ROKH SRL's authorized technical service agents or due to fatal injury, personal injury or damage to the appliance Health.</li>
        <li class="mb-5">The supply of consumables and accessories is not covered by this contract.</li>
      </ul>
      `,
    },
    {
      name: 'Limitations',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0zM128 566.848 128 457.152l768 0 0 109.696L128 566.848z"
            fill="#000"
          ></path>
        </svg>
      ),
      description: `
      <p class="mb-5">Warranty extensions do not cover the cost of repair if the defect is caused by</p>
        <ul class="my-5 list-inside list-decimal">
        <li class="mb-5">Improper installation, such as failure to comply with applicable safety rules and written instructions for use and installation.</li>
        <li class="mb-5">Improper use and handling, such as the use of unsuitable cleaning agents or chemicals and damage caused by absorption of liquids, dust, or toner.</li>
        <li class="mb-5">Equipment purchased in other EU member states, the UK, Switzerland, Norway or the USA may not work or may be restricted in use due to different technical specifications.</li>
        <li class="mb-5">External factors such as shipping damage, shocks and bumps, harsh environmental conditions or natural phenomena.</li>
        <li class="mb-5">Repairs or modifications not performed by a ROKH SRL trained and authorized service agent.</li>
        <li class="mb-5">Damage caused by non-standard parts and failure to use original ROKH SRL spare parts or ROKH SRL authorized parts.</li>
        <li class="mb-5">Broken housings and defective bulbs.</li>
        <li class="mb-5">Fluctuations in power conditions exceeding the tolerances given by the manufacturer.</li>
        <li class="mb-5">Non-compliance with cleaning and maintenance instructions.</li>
        <li class="mb-5">Natural and use-related wear and tear which, according to the user manual, must be replaced periodically during the life of the product.</li>
      </ul>
      `,
    },
    {
      name: 'Data protection',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="18850"
        >
          <path
            d="M876.8 97.6L532.8 3.2c-12.8-4.8-30.4-4.8-46.4 0L144 97.6c-33.6 8-60.8 43.2-60.8 81.6v248c0 262.4 155.2 492.8 395.2 592 9.6 4.8 22.4 4.8 33.6 4.8 12.8 0 20.8 0 33.6-4.8 240-94.4 395.2-329.6 395.2-592V179.2c0-38.4-24-73.6-64-81.6z m-20.8 329.6c0 222.4-137.6 428.8-342.4 515.2-209.6-86.4-342.4-288-342.4-515.2V179.2L512 84.8l342.4 94.4v248z"
            p-id="18851"
          ></path>
          <path
            d="M368 457.6c-17.6-17.6-46.4-12.8-60.8 4.8-17.6 17.6-12.8 46.4 4.8 60.8l128 107.2c8 8 17.6 8 25.6 8s20.8-4.8 25.6-8L748.8 416c17.6-17.6 20.8-43.2 4.8-60.8s-43.2-20.8-60.8-4.8L470.4 544 368 457.6z"
            p-id="18852"
          ></path>
        </svg>
      ),
      description: `
      <p>As part of its customer service performance, ROKH SRL collects and processes personal data. For more information on the processing of your personal data, please refer to our privacy statement at the following address: <a href="/privacy-policy" target="_blank" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">Privacy Policy</a>.<p>
      `,
    },
    {
      name: 'Right of Revocation',
      svgSrc: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="20115"
        >
          <path
            d="M624 288H236.8l105.6-105.6c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0l-160 160c-3.2 3.2-6.4 6.4-6.4 9.6-3.2 9.6-3.2 16 0 25.6 3.2 3.2 3.2 6.4 6.4 9.6l160 160c6.4 6.4 12.8 9.6 22.4 9.6s16-3.2 22.4-9.6c12.8-12.8 12.8-32 0-44.8L236.8 352h387.2c115.2 0 208 92.8 208 208S739.2 768 624 768H252.8c-19.2 0-32 12.8-32 32s12.8 32 32 32h371.2c150.4 0 272-121.6 272-272S774.4 288 624 288z"
            p-id="20116"
          ></path>
        </svg>
      ),
      description: `
      <p class="mb-5">You have the right to withdraw from this contract within 30 days without having to justify your decision. See <a href="/return-policy" target="_blank" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">the terms of returns</a> for details.<p>
      <p class="mb-5">If you request to begin providing services during the returns period, you must pay us an amount proportional to the amount provided based on the total coverage under the contract before you can notify us of your withdrawal from this contract.</p>
      `,
    },
  ],
}

function WarrantyExtendPageEn() {
  return (
    <>
      <h1 className="sr-only">Extend Your GEME Product Warranty</h1>
      <SiteHelpTabs {...siteHelpTabsProps} />
      <WarrantyExtend {...warrantyExtendProps} />
    </>
  )
}

export { WarrantyExtendPageEn }
