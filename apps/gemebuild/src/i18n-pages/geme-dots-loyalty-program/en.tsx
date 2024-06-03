import { GemeDotsLoyaltyProgram } from './components'
import type { IGemeDotsProps } from './components'
import { ISiteHelpTabsProps, SiteHelpTabs } from '../../components/tabs'
import s from './components/index.module.css'
import cn from 'clsx'

// Navbar内容 配置文件 En版
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
  currentTabId: 'geme-dots-loyalty-program',
}

// 静态页面的内容 配置文件 En版
const gemeDotsProps: IGemeDotsProps = {
  title: 'GEME Dots Loyalty Program',
  forward: {
    title: 'GEME Dots Statement',
    description: `
        <p class="mb-10">Welcome to the GEME Dots Loyalty Program.</p>
        <p class="mb-5">Accumulate your GEME Dots - Eco-friendliness always pays off!</p>
        <ul class="mx-2 my-5 list-inside list-disc">
            <li class="mb-5  ${cn(
              s.textIndented,
            )}">Discover our GEME Dots loyalty program!</li>
            <li class="mb-5  ${cn(
              s.textIndented,
            )}">Collect your GEME Dots with every purchase and save money.</li>
            <li class="mb-5  ${cn(
              s.textIndented,
            )}">Enjoy extraordinary benefits and get rewarded for your Eco-friendliness.</li>
            <li class="mb-5 ${cn(
              s.textIndented,
            )}">Eco-friendly always pay: once you've collected 1,000 GEME Dots, you can redeem them immediately on your next purchase or decide to keep collecting them. You can redeem up to 40,000 GEME Dots per purchase for an instant cashback of $40!</li>
        </ul>
        `,
    imgSrc: '/assets/images/geme-dots-loyalty-program/image.png',
  },
  subTitle: `<p class="mb-5">Here's how the GEME Dots loyalty program works</p>`,
  enrollment: {
    title: 'Eligibility and Enrollment',
    questionsAndAnswers: [
      {
        question: 'How do I participate in the GEME Dots Loyalty Program? ',
        answer:
          'You can register easily at <a href="https://www.geme.bio/signup" class="underline">https://www.geme.bio/signup</a>. You can use the data from your customer account if you are already a customer.',
      },
      {
        question: 'Does participation in the GEME Dots Loyalty Program pay?',
        answer:
          'Membership in the GEME Dots loyalty program is completely free of charge.',
      },
      {
        question:
          'Do I need to be a member of the GEME Dots loyalty program to receive special offers?',
        answer:
          'No, all of our customers are eligible for our special offers. In order to earn GEME Dots on your purchases and receive exclusive GEME Dots promotions, you must be a member of the GEME Dots loyalty program.',
      },
      {
        question: 'How do I earn GEME Dots? ',
        answer: `
            <p>For each purchase made through your customer account, you will receive GEME Dots. You will receive 10 GEME Dots for every 1 euro purchase or an additional 10 "GEME Dots" as a reward for referring others to register; and a further 100 "GEME Dots" as a reward for referring others to purchase. " as a reward.
            <br /> <br />
            In addition, we hold regular promotions where you can earn even more GEME Dots! You can find out more at <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a>.
            </p>`,
      },
      {
        question: 'When will my GEME Dots be available? ',
        answer: `
            <p>
            You can earn GEME Dots at <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a>
            <br />
            GEME Dots earned while shopping on the website will be credited to your account within 14 business days from the date of shipment. Until then, these GEME Dots will be considered "GEME Dots pending confirmation". If the order is not canceled or modified (excluding warranty claims), your GEME Dots will only be credited thereafter.
            </p>
            `,
      },
      {
        question: 'How many loyalty GEME Dots can I use per order? ',
        answer: `<p>
            The value of the Geme Dots you redeem cannot exceed the value of your order. In addition, you can redeem up to 40,000 GEME Dots per purchase, which is an immediate reduction of €40.
            </p>`,
      },
      {
        question:
          'Are certain products in this range excluded from the GEME Dots loyalty program? ',
        answer: 'Yes, for legal reasons, the discount does not apply to books.',
      },
      {
        question: 'How do I redeem my GEME Dots? ',
        answer:
          'GEME Dots collected when placing an order can be converted into a voucher. GEME Dots will be converted into an amount that will be deducted from your invoice amount. You can decide at the basket level during each order whether you want to exchange your GEME Dots or continue collecting them.',
      },
      {
        question: 'Will my GEME Dots expire? ',
        answer:
          'Yes, your GEME Dots will expire if your GEME Dots has not been used for three years or if you have not placed an order on a linked account for 12 months.',
      },
    ],
  },
  conditions: {
    title: 'Conditions for participation in the GEME Dots loyalty program',
    items: [
      {
        label: 'Responsibilities',
        description: `
          <p>
          The manager of the GEME Dots loyalty program is
          ROKH SRL<br /><br />
          Avenue Louis Schmidt 29，<br /><br />
          1040 Etterbeek, <br /><br />
          Brussels, <br /><br />
          Belgium <br /><br />
          (Hereinafter referred to as "ROKH")
          </p>
          `,
      },
      {
        label: 'Eligibility',
        description: `<p class="mb-5">Only natural people over the age of 18 are eligible to participate.</p>`,
      },
      {
        label: 'Eligibility for membership',
        description: `
            <ul class="m-5 ml-0 list-inside list-decimal">
                <li class="mb-5 ${cn(
                  s.textIndented,
                )}">Participation in the GEME Dots loyalty program is free of charge. It is only available through the website <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> when you register online on the website or at the time of purchase</li>
                <li class="${cn(
                  s.textIndented,
                )}">If you are eligible (see 2. Eligibility), you will start participating in the GEME Dots Loyalty Program immediately after verifying your registration. </li>
            </ul>`,
      },
      {
        label: 'GEME Dots Loyalty Program',
        description: `
              <p class="mb-5">
              As a member of the Green medal Loyalty Program, you will benefit from several advantages and the GEME Dots Loyalty Program reserves the right to modify, supplement or limit the content of these advantages.
              </p>
              <ul class="m-5 ml-0 list-inside list-decimal">
              <li class="mb-5">
                <span class="font-bold">Earning GEME Dots</span>
                <p class="mt-2 ml-5">As a member of the program, you can earn "GEME Dots" during your purchases on the <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> or earn an additional 10 "GEME Dots" as a reward for referring others to sign up; and an additional 100 "GEME Dots" as a reward for referring others to purchase. <p class="mt-2 ml-5">
              <li class="mb-5">
                 <span class="font-bold">Awaiting confirmation of GEME Dots</span>
                 <p class="mt-2 ml-5">The GEME Dots you accrue during your purchases on the <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> website will be credited to your account within 15 days from the date your order is shipped. Until then, these GEME Dots will be considered "GEME Dots Awaiting Confirmation". If the order is not canceled or modified (excluding warranty claims), your GEME Dots will only be credited thereafter. <p class="mt-2 ml-5">
              </li>
              <li class="mb-5">
                <span class="font-bold">Validity and expiration of GEME Dots</span>
                <p class="mt-2 ml-5">GEME Dots earned is valid for 12 months from the date of the credit and will expire if no order is placed on the associated account during this period. In addition, all unused GEME Dots will expire after 3 years. <p class="mt-2 ml-5">
              </li>
              <li class="mb-5">
                <span class="mb-5 font-bold">GEME Dots Quantity Notification</span>
                <p class="mt-2 ml-5">You will be notified periodically of your current GEME Dots amount. Notifications will be sent electronically (by email) or by mail. <p class="mt-2 ml-5">
              </li>
              <li class="mb-5">
                The conditions of the GEME Dots loyalty program apply at the time of the transaction.</p>
              </li>
              <li class="mb-5">
                You will be informed if the conditions and benefits of the GEME Dots loyalty program are modified, supplemented, or limited.
              </li>
              <li class="mb-5">
                 <span class="font-bold">Physical bonuses and bonuses cannot be exchanged for other products or money.</span>
                 <p class="mt-2 ml-5">Any warranty claims for in-kind bonuses and bonuses must comply with applicable law. This does not include any cash payments for "value-added" services.</p>
              </li>
              <li>
                 Cancellation of a contract (e.g., exchange) does not mean that the purchase is considered part of the plan benefits.
              </li>
              </ul>
              `,
      },
      {
        label: 'Termination',
        description: `
              <p>
              You may terminate your participation in the GEME Dots Loyalty Program at any time without notice by written communication (e.g. by email). The GEME Dots Loyalty Program can be terminated without any specific reason, but with 4 weeks' notice. The right of both parties to terminate specifically for just cause is not affected.
              </p>`,
      },
      {
        label: 'Modification of the conditions of participation',
        description: `
              <p>
              ROKH reserves the right to modify or delete the conditions of participation at any time by giving you at least 30 days prior notice by email. If you do not object to the change before the expiry of this period, it will take effect from the date specified. If you do not accept the new conditions of participation, you may object in writing (e.g. by e-mail) to the change or terminate your participation in the GEME Dots loyalty program. If you object to the change, the previous terms will apply. In this case, FARMALINE reserves the right to cancel your participation in the program.
              </p>`,
      },
    ],
  },
}

function GemeDotsLoyaltyProgramPageEn() {
  const url = 'https://www.geme.bio/geme-dots-loyalty-program'

  return (
    <>
      <link rel="canonical" href={url} />
      <h1 className="sr-only">GEME Dots Loyalty Program Details</h1>
      <SiteHelpTabs {...siteHelpTabsProps} />
      <GemeDotsLoyaltyProgram {...gemeDotsProps} />
    </>
  )
}

export { GemeDotsLoyaltyProgramPageEn }
