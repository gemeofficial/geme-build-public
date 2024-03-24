import { PrivacyPolicy } from './components'
import { SiteHelpTabs, ISiteHelpTabsProps } from '../../components/tabs'
import type { IPrivacyPolicyProps } from './components'

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
  currentTabId: 'privacy-policy',
}

// 静态页面的内容 配置文件 En版
const privacyPolicyProps: IPrivacyPolicyProps = {
  title: 'Privacy Statement',
  description: `
    <p class="mb-15">
    At ROKH, we are committed to protecting our customers' privacy and personal data. Therefore, we consider it very important to inform our customers how we process their data and exactly why we need it.
    <br /> <br />
    This privacy statement is intended to inform you about the processing of data within the framework of our website and related services. The processing of personal data takes place only within the scope of the corresponding applicable legal data protection regulations, in particular the General Data Protection Regulation (GDPR).
    <br /> <br />
    This website belongs to ROKH SRL.
    </p>
    `,
  items: [
    {
      name: 'Data Protection Officer',
      description: `
      <p class="mb-15">
      You can contact our Data Protection Officer at Privacy@geme.bio
      </p>
      `,
    },
    {
      name: 'Personal Data',
      description: `
      <p class="mb-15">
      Personal data is all information related to an identified or identifiable natural person; a natural person is considered identifiable if he can be identified directly or indirectly, in particular using identification, such as name, ID number, location coordinates, online identifier, or by linking him to one or more characteristics that are the physical, physiological, genetic, psychological, economic, cultural or social expression of identity. This includes all information related to your identities, such as your name, e-mail address or postal address, customer number, and an online identifier.
      <br /> <br />
      In principle, you can use our online and mobile services without revealing your identity and without communicating personal data. However, personal data about you is collected when using certain services of our online store, and applications.
      </p>
      `,
    },
    {
      name: 'Storage of personal data',
      description: `
      <p class="mb-15">
      Your data are stored by us on specially protected servers. They are protected by technical and organizational measures to prevent loss, destruction, access, modification, or dissemination by unauthorized persons. Only a limited number of authorized persons have access to your data. They are responsible for the server's technical, commercial, or editorial management.
      <br /> <br />
      Your data is transmitted in encrypted form over the Internet. We use SSL (Secure Sockets Layer) encryption for data transmission.
      </p>
      `,
    },
    {
      name: 'Legal Basis for Data Processing',
      description: `
      <p class="mb-15">
      If we obtain consent to process your data, Art. 6 para. 1 a) GDPR serves as the legal basis for data processing.
      <br /> <br />
      If we process your data because it is necessary for the performance of a contract or in the context of a quasi-contractual relationship with you, Art. Para 6 1 b)  GDPR as the legal basis for data processing.
      <br /> <br />
      If we process your data to fulfill a legal obligation, Art. 6 para. 1 c)  GDPR as the legal basis for data processing.
      <br /> <br />
      Art. 6 para. 1F)  GDPR if the processing of your data is necessary to safeguard the legitimate interests of our company or third parties, and if your interests, fundamental rights, and freedoms in this regard are not required by the fundamental principles for the protection of personal data.
      <br/> <br />
      As part of this privacy statement, we always indicate the legal basis for our processing of your data.
      </p>
      `,
    },
    {
      name: 'Deletion of Data and Storage Period',
      description: `
      <p class="mb-15">
      In principle, we will always delete or block your data when storage becomes meaningless. However, personal data may be stored elsewhere if this is stipulated by the legal requirements to which we are subject (e.g. in connection with legal obligations for storage and documentation). In this case, we will delete or block your data after the end of the procedures.
      </p>
      `,
    },
    {
      name: 'Data Processing in Case of General Use of Our Offers',
      description: `
      `,
    },
    {
      name: 'Information About The Communication Device You Are Using',
      description: `
      <p class="mb-15">
      Each time you access our online and mobile offerings, we collect the following information about the device you are using: the IP address, the request from your browser, and the date and time of that request. In addition, the status and volume of data transmitted as part of this request are captured. We also collect information related to the product and version of the browser used, as well as the device's operating system and Internet service provider. We also track the site from which the service is accessed.
      <br /> <br />
      The legal basis for the processing of this data is Art. Para. 6 1f General Data Protection Regulation.
      <br /> <br />
      We process this data to be able to display content such as web pages on your device. In addition, we use this data for the operation of the online and mobile services, to identify and eliminate errors, to measure the load on the online and mobile services, and to make adjustments or improvements.
      <br /> <br />
      These purposes also prove a legitimate interest in the meaning of art. Para. 6 1f General Data Protection Regulation.
      <br /> <br />
      The IP address of your device is stored only for the duration of the use of the online or mobile services and will be deleted or truncated thereafter. The data is stored for a limited period.
      </p>
      `,
    },
    {
      name: 'Use of Cookies',
      id: 'use-of-cookie',
      description: `
      <p class="mb-15">
      We use cookies, which are small pieces of data in the form of text that are stored on your computer to store certain parameters and data for exchange with our online offers via your browser. cookies usually contain the name of the domain from which the cookie file is sent and information about the age and alphanumeric identifier of the cookie. There are different types of cookies depending on their content and how long they are stored. Most of the cookies we use are so-called "session cookies", which are deleted when you end your browser session. There are also long-lived cookies that allow us to recognize you as a visitor.
      <br /> <br />
      We notify you in advance about the use of cookies by displaying a corresponding message on a banner.
      <br /> <br />
      Some cookies are technically necessary to allow the use of our online and mobile products. With these cookies, we capture and store the following data.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Language settings</li>
        <li class="m-2">Search settings</li>
        <li class="m-2">Content of online forms</li>
        <li class="m-2">Information used to identify or authenticate users</li>
        <li class="m-2">Products in the shopping cart</li>
        <li class="m-2">Products on the memo</li>
        <li class="m-2">Products recommended for purchase</li>
      </ul>
      In addition, we use cookies on our web pages to analyze your user behavior, which is called. Analytic cookies. These cookies allow us to capture and store the following data.
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Page view frequency</li>
        <li class="m-2">Search keywords</li>
        <li class="m-2">Use of web page features</li>
      </ul>
      <p class="mb-15">
      The data collected about you via cookies is pseudonymized and therefore it is no longer possible to link the data to each user.
      <br /> <br />
      The legal basis for data processing using cookies is Art. 6 para. 1f General Data Protection Regulation.
      <br /> <br />
      Cookies enable us to recognize your computer and immediately provide any configuration. cookies help us to improve our online services and to be able to offer you a better and more personalized service. The use of cookies is necessary to facilitate your use of our online services, and certain features can only be provided to you through the use of cookies. This involves queries, online forms, customer accounts, product baskets, and memos.
      <br /> <br />
      We use analytical cookies to improve and optimize the quality of our online services and their content.
      <br /> <br />
      These purposes also prove a legitimate interest in the meaning of art. Para. 6 1f General Data Protection Regulation.
      <br /> <br />
      The technically necessary cookies that we use are so-called session cookies, which are automatically deleted again at the end of the browser session. The remaining cookies are stored on your computer. Most browsers are also configured to accept cookies automatically; however, they can disable the storage of cookies or configure your browser to notify you immediately when a cookie is sent. Please note that in some cases, if you refuse to store a cookie, you will only be able to use our online services to a limited extent or not at all.
      <br /> <br />
      To analyze user behavior for the purposes described above, we use the programs mentioned below, which in turn use cookies as described above, and the stored data will be deleted as soon as it is no longer needed for the purposes described.
      </p>
      `,
    },
    {
      name: 'Google Analytics',
      description: `
      <p class="mb-15">
      We use Google Analytics for statistical analysis. Google Analytics is a web analytics service of Google LLC., 1600 Amphitheatre Parkway, Mountain View, CA 94034, USA ("Google"). "Google Analytics uses "cookies", which are text data stored on your computer, to analyze your use of the website. Google servers in the United States and stored them there. However, if IP anonymization is activated on this website, your IP address will be truncated by Google in advance in member states of the European Union or other signatories to the privacy policy. "European Economic Area". The full IP address will only be transmitted to Google servers in the USA and truncated there in exceptional cases. Google will use this data on behalf of the operator of this website to evaluate your use of the website, to compile reports on website activity, and to provide the website operator with other services relating to the website, website, and internet usage. The IP address of your IP browser transmitted as part of Google Analytics will not be merged with other Google data. You can prevent the storage of cookies by setting your browser software accordingly; however, we would like to point out that not all functions of this website are fully available in this case. Furthermore, <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" class="underline">http://tools.google.com/dlpage/gaoptout?hl=de</a>.
      <br /> <br />
      For more information on this, please visit <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" class="underline">http://tools.google.com/dlpage/gaoptout?hl=de</a> or <a href="http://www.google.com/intl/de/analytics/privacyoverview.html" target="_blank" class="underline">http://www.google.com/intl/de/analytics/privacyoverview.html</a> (about Google's General Information Analysis and Privacy). We draw your attention to the fact that Google Analytics has been supplemented on our pages by the code "anonymizeIp();". The IP address is anonymized by removing the last octet.
      </p>
      `,
    },
    {
      name: 'Retargeting and Remarketing',
      description: `
      <p class="mb-15">
      The term retargeting or remarketing refers to techniques that make it possible to serve relevant advertisements to users who have previously visited certain web pages, even if they have left those pages. To do this, the user must be identified again after leaving the company's website, which can be done by using cookies from the relevant service provider. In addition, the user's past behavior is taken into account. For example, if a user views certain products, advertisements for these or similar products may later appear on other Internet pages. This is personalized advertising tailored to the needs of individual users. For such personalized ads, the user does not need to be identified once he or she is identified. Therefore, the data used for retargeting or remarketing is also not combined with other data.
      <br /> <br />
      We use such technology to deliver ads on the Internet. To display the ads, we use third-party providers. In addition to this, we use a service provided by Google that allows us to automatically display products of interest to Internet users. This function is implemented via cookies. You can get more information about this technology in the Google Privacy Policy at <a href="https://policies.google.com/privacy?hl=de" target="_blank" class="underline">https://policies.google.com/privacy?hl=de</a>. By visiting the Internet page <a href="http://www.google.com/policies/privacy/ads/" target="_blank" class="underline">http://www.google.com/policies/privacy/ads/</a> and changing the configuration accordingly, the installation of cookies for Google remarketing and Google AdWords conversion tracking can be blocked by a setting in your browser software.
      <br /> <br />
      This website uses redirect tags from Google, Appnexus, and Performance Profiles to promote ROKH products. The redirect JavaScript code implemented on this website stores a cookie on the user's computer for redirection purposes. If the user performs actions on the Google search site and the websites of Google Display Network, Appnexus, and Performance Profiles, a ROKH banner or advertisement is subsequently sent to the user. During this process, all data is collected anonymously and therefore cannot be reconciled with a specific person. Users can oppose the retargeting function by changing the display settings of the Google Remarketing tab or by deactivating the retargeting.
      </p>
      `,
    },
    {
      name: 'Registration',
      description: `
      <p class="mb-15">
      You can also register as a user in our online and mobile services. To do so, you must enter the required data, such as name, address, and e-mail address, in the input mask. In addition, we capture the date and time of the recording as well as the IP address. As part of the registration process, we will ask for your consent to use the data.
      <br /> <br />
      The legal basis for the processing of registration data is the art in case of consent. Para. 6 1 General Data Protection Regulation. If you register with us to perform or establish a contract, the additional legal basis for data processing is Art. 6 para. 1b General Data Protection Regulation.
      <br /> <br />
      Registration is necessary for the performance or establishment of a contract with us for certain services.
      <br /> <br />
      The data is stored with us for as long as it is necessary for the execution of the contract. In addition, we store this data to fulfill our post-contractual obligations and by the commercial and tax retention periods stipulated by law. This retention period is normally 10 years until the end of the respective calendar year.
      </p>
      `,
    },
    {
      name: 'Processing Orders From Our Online Store',
      description: `
      <p class="mb-15">
      Your personal data will only be used when orders are placed by our company and affiliated companies as well as by companies that are entrusted with the processing of orders.
      <br /> <br />
      For order processing, we work with various companies that are responsible for payment processing and logistics. We ensure that our partners also comply with the data protection regulations in this process. Therefore, we send your contact details (name and address) to the relevant shipping company, which will deliver the ordered products to you.
      <br /> <br />
      The legal basis for this processing is Art. 6 para. 1b General Data Protection Regulation. The processing of your personal data is necessary for the performance of the contract we have concluded with you.
      <br /> <br />
      We retain the data for as long as it is necessary for the execution of the contract. Furthermore, we store this data in order to fulfill our post-contractual obligations and by the commercial and tax retention periods stipulated by law. This retention period is normally 10 years until the end of the relevant calendar year.
      <br /> <br />
      Order payment processing, Paypal, Stripe
      <br /> <br />
      Depending on the chosen payment method, payment processing during an order may be carried out through a service provider.
      <br /> <br />
      If payment is made by credit card, the data you require for this purpose, such as name, address, and purchase data, will be transmitted to the relevant credit card company.
      <br /> <br />
      If payment is made via PayPal, you will be redirected to a link to the PayPal web page. Your personal data are processed in this process. These are your name, your address, your e-mail address, your telephone number, and your bank or credit card details (if applicable). Please find the general conditions, and terms of use, and check the privacy policy of PayPal (Europe) S.à rl et Cie, SCA, 22-24 Boulevard Royal, L-2449 Luxembourg on the website <a href="https://www.paypal.com" target="_blank" class="underline">www.paypal.com</a>.
      <br /> <br />
      When making a payment using Strip Amount, you will be redirected to a link to the web page of Stripe, a service of Stripe Payments Europe, Limited ("SPEL"). During this process, your personal data will be processed. These are your name, your address, your email address, your telephone number, and your account details or credit card details (if applicable). Please find the relevant terms and conditions, and terms of use, and check the privacy policy at <a href="https://stripe.com/ie/ssa" target="_blank" class="underline">https://stripe.com/ie/ssa</a>.
      <br /> <br />
      The legal basis for payment processing is Art. 6 para. 1b General Data Protection Regulation. The processing of your personal data is necessary for the execution of the contract concluded with you.
      <br /> <br />
      We retain the data for as long as it is necessary for the execution of the contract. In addition, we store the data in order to fulfill our post-contractual obligations and the commercial and tax retention periods required by law. This retention period is normally 10 years until the end of the relevant calendar year.
      </p>
      `,
    },
    {
      name: 'Additional Data Processing When Using The Application Provided by ROKH (coming soon)',
      description: `
      <p class="mb-15">
      The following data will be processed when using the application.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">Registration data</li>
      <li class="m-2">Customer number, ROKH account</li>
      <li class="m-2">Manufacturing number of the equipment</li>
      <li class="m-2">Functional characteristics of the device, basic data of the device</li>
      <li class="m-2">Equipment usage data</li>
      <li class="m-2">Equipment status data</li>
      <li class="m-2">Application usage data</li>
      <li class="m-2">Telecom personal credentials</li>
      </ul>
      <p class="mb-15">
      To be able to use all functions of the geme@mobile application, a specific system authorization is required. When you start using the application and/or only when you use the relevant functions, you will be asked to grant the appropriate permissions. Please note, however, that proper use of the app requires access to certain features of your mobile device (smartphone or tablet) and access to your personal data.
      <br /> <br />
      The geme@mobile app is available in so-called app stores operated by third parties (Google Play Store and Apple App Store). Downloading the app usually requires prior registration with the relevant app store. We have no control over the personal data collected, processed, and used in this context. In such cases, the only responsibility is that of the operator of the relevant app store.
      <br /> <br />
      The legal basis for data processing is in the case of consent. Para. 6 1 General Data Protection Regulation. The additional legal basis for the processing is Art. paragraph 6 1b General Data Protection Regulation, if the data processing is necessary for the execution of the services provided by the respective application. The data used by the device will be used anonymously so that our products and applications can be continuously improved. The legal basis for this is Art. 1f of paragraph 6 GDPR, the optimization of products and services simultaneously stimulates our legitimate interests.
      <br /> <br />
      We process data for the following purposes
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">To improve our products and services (e.g. the programs and other functions of the home devices and applications used)</li>
        <li class="m-2">contacting you to send targeted service and product offers to meet your needs</li>
        <li class="m-2">Eliminating or avoiding interruptions</li>
        <li class="m-2">Ensure and improve the user-friendliness of the application</li>
        <li class="m-2">Provide the services offered by the application</li>
      </ul>
      <p class="mb-15">We retain data only for as long as is necessary to achieve the desired goal.</p>
      `,
    },
    {
      name: 'Additional Data Processing When Using GCN',
      description: `
      <p class="mb-15">
      As part of the execution of the rental agreement, we process the following personal data through the GCN portal.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">Last name</li>
      <li class="m-2">Address</li>
      <li class="m-2">Mail address</li>
      <li class="m-2">IP address</li>
      <li class="m-2">Customer number</li>
      <li class="m-2">Manufacturing number of the equipment</li>
      <li class="m-2">Functional characteristics of the equipment</li>
      <li class="m-2">Data used by the equipment</li>
      </ul>
      <p class="mb-15">
      The data is processed to execute the "GCN" lease agreement. The legal basis for the processing is Art. 6 para. 1b General Data Protection Regulation. We combine your user master data (first and last name, address, e-mail) with the available device master data (e.g. device manufacturing number) to charge your account for the use of the device according to the rental agreement. In particular, we need equipment usage data (e.g. basic settings, program selection, program settings, program usage) to calculate rental rates and maintenance dates.
      <br /> <br />
      In addition, usage data resulting from interactions with the GCN Portal is tracked and used to continuously optimize the GCN Portal and products. The legal basis for this processing is Art. 1 f of paragraph 6 GDPR, the optimization of the service at the same time proves our legitimate interest.
      <br /> <br />
      We store the data only for as long as necessary to execute the contract and to achieve the purpose.
      </p>
      `,
    },
    {
      name: 'Additional Data Processing When Using the Alexa Skill We Provide',
      description: `
      <p class="mb-15">
      The following data is required to use the ROKH Skill.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Registration information</li>
        <li class="m-2">ROKH customer number</li>
        <li class="m-2">Manufacturing number of the device</li>
        <li class="m-2">Functional characteristics of the device</li>
        <li class="m-2">Personal identifier of the telecommunication</li>
        <li class="m-2">ROKH Status of the appliance</li>
      </ul>
      <p class="mb-15">
      ROKH uses the Skill implementation of the Amazon Europe Core S.à.rl, sis 5, Rue Plaetis, L-2338 Luxembourg service and collects anonymous user statistics and server protocols to detect errors and improve the user experience. These are the number of function calls and the frequency of usage and error messages. This data is processed anonymously by ROKH. You can find amazon.de's privacy statement at <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=3312401" target="_blank" class="underline">https://www.amazon.de/gp/help/customer/display.html?nodeId=3312401</a>
      <br /> <br />
      ROKH skills are available in the Amazon Alexa Skills Store operated by Amazon. Enabling Amazon Alexa skills and general use generally requires prior registration with Amazon. We have no control over the personal data collected, processed, and used as a result. In this case, the only responsibility is Amazon's.
      <br /> <br />
      The legal basis for data processing is in the case of consent. Para. 6 1 General Data Protection Regulation. The additional legal basis for the processing is Art. paragraph 6 1b General Data Protection Regulation, if the data processing is necessary for the performance of the services provided on the respective application. In addition, device usage data is anonymized and used so that our products and applications can be continuously improved. The legal basis for processing is Art. 1f of paragraph 6 GDPR, the optimization of products and services simultaneously stimulates our legitimate interests.
      <br /> <br />
      We process data for the following purposes.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">Ensuring the interaction of ROKH appliances with Alexa terminals</li>
      <li class="m-2">to provide you with the corresponding services in the ROKH Alexa skill</li>
      <li class="m-2">improving our products and services (e.g. the programs used and other functions of home appliances and applications)</li>
      <li class="m-2">Contacting you to send you targeted offers for products and services tailored to your needs</li>
      <li class="m-2">Ensure and improve the user-friendliness of ROKH Alexa skills</li>
      <li class="m-2">Ensure the interaction of ROKH appliances with Alexa terminals</li>
      <li class="m-2">Provide you with the appropriate services in the ROKH Alexa skill</li>
      </ul>
      <p class="mb-15">
      We store data only for as long as is necessary to achieve the intended purpose.
      </p>
      `,
    },
    {
      name: 'Application Portal',
      description: `
      <p class="mb-15">
      You can apply for a job with us via the application portal and send all necessary information and documents for this purpose. For this purpose, you can use the online form and send us your application documents in this way. The use of the application portal is optional; you can also send us your application in other ways, for example by e-mail or by post.
      <br /> <br />
      When an application arrives through the application portal, your documents will be transmitted electronically to our appropriate personnel. If you apply for a job offer, these documents will be automatically destroyed six months after the end of the recruitment process, provided that their deletion does not affect other legitimate interests. A legitimate interest in this sense is, for example, the obligation to provide evidence in proceedings based on equal treatment (Allgemeines Gleichbehandlungsgesetz - AGG). If the application does not refer to a job offer (spontaneous application), the application will be kept until it may be of interest. You can request the deletion of your application at any time, even before the expiration of the specified retention period. If the application is accepted, the transmitted data will be retained to process the recruitment, taking into account legal requirements. In all other cases, the legal basis for storing your application data is your consent according to Art. 6 para. 1, a) General Data Protection Regulation.
      </p>
      `,
    },
    {
      name: 'Communicating with Us',
      description: `
      <p class="mb-15">
      You can get in touch with us in a number of ways, including through the contact form on our web page. In addition, we are happy to inform you regularly via our e-mail newsletter.
      </p>
      `,
    },
    {
      name: 'Newsletters',
      description: `
      <p class="mb-15">
      When subscribing to our newsletter, your e-mail address will be used for advertising purposes until you unsubscribe. To this end, you will receive regular information about current topics and, in special cases, special promotions, via e-mail. Emails can be personalized and individualized according to the information we have about you.
      <br /> <br />
      For our use in registering for our newsletter, if you have not given us your written consent, the so-called double opt-in procedure, i.e. if you have previously explicitly indicated, we will first send you the newsletter by e-mail to confirm that we must activate the sending of the newsletter. We will then send you an email and ask you to click on the link in this email to confirm that you wish to receive our newsletter.
      <br /> <br />
      The legal basis for the processing of your data is your consent by Art. Para. 6 1 a) GDPR if you have explicitly subscribed to the newsletter. Within the framework of the legal provisions, you may also receive our newsletter without your express consent or if we receive your e-mail address because you have ordered a product or service from us and have been contacted by e-mail. You have not objected to receiving information by e-mail. In this case, our legitimate interest in the transmission of direct advertising will be deemed to be based on the legal basis of art. Para. 6 1f) General Data Protection Regulation.
      <br /> <br />
      If you no longer wish to receive our newsletter, you may revoke the currently valid consent you have given or refuse to continue receiving the newsletter at any time without any charge other than the transmission fee calculated at the basic rate. Simply use the unsubscribe link included in each newsletter or possibly send us a message by sending it to our data protection officer.
      </p>
      `,
    },
    {
      name: 'Contact',
      description: `
      <p class="mb-15">
      You can contact us via our customer hotline, e-mail, chat, or by post. If you wish to use one of these contact methods, we will collect personal data that you transmit to us via the chosen contact channel for this purpose. This can be name, address, e-mail address, customer number, and telephone number. It is up to you to decide which information you want to send us via the contact channel.
      <br /> <br />
      We process this data specifically to be able to answer your questions or to be able to process your questions.
      <br /> <br />
      If you wish to use the contact form in our online offer, we collect the personal data you provide in the contact form, in particular the name and e-mail address. In addition, we store the IP address as well as the date and time of the request. We process the data transmitted via the contact form exclusively to be able to answer your questions and concerns.
      </p>
      `,
    },
    {
      name: 'Quality',
      description: `
      <p class="mb-15">
      On our website, we use the services of selected companies to conduct user surveys as well as product and brand image to improve our products and services regularly. When you respond to a survey, only log data is processed (date and time stamps/information sent to your browser and browser settings/information sent to your device/date of use). You are free to decide whether you want to take the survey or not. If you do not want to answer, simply click on the "X" in the upper right corner of the survey pop-up window to close the survey pop-up window. Your consent is the legal basis for the processing of your data by Art. 6 (1) (a) General Data Protection Regulation. You can withdraw your consent at any time with immediate effect.
      </p>
      `,
    },
    {
      name: 'Buying Guide',
      description: `
      <p class="mb-15">
      On our website, we use a shopping support service provided by our service providers. The purchase assistance service helps you to find the right product faster and more efficiently. After answering a few questions, the first product suggestion will be provided to you. Products are presented according to their suitability for your needs. You are free to decide whether you want to use this service or not. In this case, we only process the metadata of the HTTP web request as a reference, your IP address, browser language, and user agent (browser/OS type and version) as well as the data you share with us using the service. This data will not be stored. We process your data to enable us to provide you with this service. article 6 (1) (a) of the GDPR constitutes the legal basis for the processing. If you purchase a product, the artwork. 6 (1) (b) GDPR is the legal basis for data processing. The service provider acts as a processor on our behalf by our instructions.
      <br /> <br />
      As part of the use of the Services, we also retain information in your session storage, primarily to identify users across multiple browsing sessions. For more information about our cookies. For more information about service providers and purchasing assistance services, please visit the relevant service provider websites.
      </p>
      `,
    },
    {
      name: 'Legal Basis for The Use and Withdrawal of The Contact Channel',
      description: `
      <p class="mb-15">
      The legal basis for data processing when using the provided contact channels is your consent by Art. Para. 6 1 General Data Protection Regulation. You can revoke your consent at any time. After we have processed the questions, the data is first stored to answer possible questions. The deletion of data can be requested at any time, otherwise, the deletion will take place after the question has been fully resolved. We then delete the data immediately, provided that we are not obliged to store the data by commercial or tax regulations.
      </p>
      `,
    },
    {
      name: 'Social Media',
      description: `
      <p class="mb-15">
      In our online and mobile services, you will find links to Facebook social networks and our Youtube channel. You will recognize the links by the provider's logo.
      <br /> <br />
      By clicking on the links, the corresponding social media pages are opened; this privacy statement does not apply to them. You can find more information about the terms that apply here in the privacy statements of the respective providers; you can find them at the following addresses.
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
      name: 'Your Rights',
      description: `
      <p class="mb-15">
      The data subject has several rights according to the GDPR. If you would like to use them or obtain more information on this subject, please feel free to contact us.
      <br /> <br />
      The rights of the data subject include, in particular
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">The right to be informed: You can confirm this according to Art. 15 GDPR regardless of whether the personal data in question is processed by us. If the data is being processed, you can also obtain additional information from us about the processing.</li>
      <li class="m-2">Right to rectification: You have the right to rectify and/or perfect the personal data processed about you if these data are incorrect or incomplete by Art. 16 GDPR.</li>
      <li class="m-2">Right to restriction of processing: In certain cases, you may request, by Art. 18 GDPR, that the processing of personal data concerning you be restricted.</li>
      <li class="m-2">Right to erasure: You also have the right to request that we delete the personal data already stored about you under certain conditions by Art. 17 GDPR.</li>
      <li class="m-2">Right to data portability: You also have the right under Art. 20 GDPR to receive your personal data concerning you in a structured, common, and machine-readable format and to transfer them easily from us to another controller, under certain conditions.</li>
      </ul>
      <p class="mb-15">If your personal data is processed by the legitimate interests of Art. Para. 6 1 Page 1f GDPR, you have the right to object to the processing of your personal data by Article 21 of the GDPR if there are special reasons in your case.</p>
      `,
    },
    {
      name: 'Complaints',
      description: `
      <p class="mb-15">
      If you believe that our processing of your personal data does not comply with this Privacy Statement or the applicable Privacy Policy, you may file a complaint with our Data Protection Representative. The Data Protection Officer will then examine the problem and inform you of the results of the examination. You also have the right to file a complaint with a supervisory authority.
      </p>
      `,
    },
    {
      name: 'More Information',
      description: `
      <p class="mb-15">
      </p>
      `,
    },
    {
      name: 'Transfer of Data to Third Parties',
      description: `
      <p class="mb-15">
      In principle, we do not disclose any personal information to third parties for purposes other than those explained in this privacy statement. However, if we are legally obliged to do so or in accordance with a court decision, we will transfer your data to the competent authorities.
      </p>
      `,
    },
    {
      name: 'Links to Other Websites',
      description: `
      <p class="mb-15">
      Our online offer contains links to other websites. These links are usually indicated as such. We have no control over whether the websites to which these links lead comply with the current privacy rules. Therefore, we recommend that you also check with other websites for their privacy statements.
      </p>
      `,
    },
    {
      name: 'Changes to This Privacy Statement',
      description: `
      <p class="mb-15">
      The date of updates to the Privacy Statement is listed at the bottom of the statement. We reserve the right to change this privacy statement at any time. The current version can be accessed directly through the online offer. Please check the online offer periodically for the applicable privacy statement.
      <br /> <br />
      This privacy statement was updated on January 2023.
      </p>
      `,
    },
    {
      name: 'Advertising Form',
      description: `
      <p class="mb-15">
      To improve the convenience and quality of our services, we use conversion tracking and retargeting technology, both of which are provided by Adform ApS, Wildersgade 10B, 1, 1408 Copenhagen K, Denmark.
      <br /> <br />
      Our online offers use Adform's conversion tracking. When a user is exposed to an ad placed by Adform, a temporary cookie for conversion tracking is introduced.
      <br /> <br />
      Users who do not want to participate in the tracking can deactivate Adform's cookies or object to the collection and storage of data at any time, with current effect, through their Internet browser at <a href="https://site.adform.com/datenschutz-opt-out/" target="_blank" class="underline">https://site.adform.com/datenschutz-opt-out/</a> . You can delete cookies already stored on your computer in the browser you are using, or delete them by deleting temporary web pages.
      <br /> <br />
      Our online offers use Adform's redirection technology. This allows users who are already interested in our pages and products to see targeted ads on our partners' pages. In retargeting, the ads are displayed following a cookie analysis of the user behavior observed so far. This is a temporary cookie, which expires after 60 days. If you do not want to display Adform ads that are relevant to your interests, you can always object to the collection and storage of data here (<a href="https://site.adform.com/datenschutz-opt-out/" target="_blank" class="underline">https://site.adform.com/datenschutz-opt-out/</a>). For more information about Adform's privacy policy, please visit <a href="https://site.adform.com/datenschutz-opt-out/" target="_blank" class="underline">https://site.adform.com/datenschutz-opt-out/<a>
      <br /> <br />
      The legal basis for the processing is Art. Para. 6 1 f GDPR, improving the convenience and quality of our online services stimulates our legitimate interests.
      </p>
      `,
    },
    {
      name: 'Amazon Conversion Pixel and Amazon Remarketing Pixel',
      description: `
      <p class="mb-15">
      Our online offers use the functionality of Amazon's Amazon Conversion Pixel and Amazon Remarketing Pixel web analytics services. The provider of these services is Amazon.com, Inc. 410 Terry Ave. North Seattle, Washington, USA. Amazon Conversion Pixel and Amazon Remarketing Pixel also use cookies stored on your computer that allow analysis of your These cookies allow us to analyze your use of the site and deliver personalized ads.
      <br /> <br />
      You can prevent the storage of cookies by configuring your browser software accordingly; however, we draw your attention to the fact that in such cases, you may not be able to use all of the features of the Site. You may also prevent the transfer of data generated by the cookie in connection with your use of the Site to Amazon and the processing of such data by Amazon by clicking on this link and selecting the "No personalized ads" option. This Internet Explorer": <a href="https://www.amazon.de/adprefs" target="_blank" class="underline">https://www.amazon.de/adprefs</a>.
      <br /> <br />
      You can also select the appropriate settings on <a href="http://www.youronlinechoices.com/be" target="_blank" class="underline">http://www.youronlinechoices.com/be</a>. An Opt-Out cookie is then placed in your browser to prevent Amazon Pixel from capturing your data during your future visits to our web pages. This objection applies as long as you do not delete the Opt-Out cookie.
      <br /> <br />
      The legal basis for this processing is Art. 6 para. 1 f GDPR, and improving the comfort and quality of our services is the basis for our legitimate interests.
      </p>
      `,
    },
    {
      name: 'Facebook Customized Audience',
      description: `
      <p class="mb-15">
      Our online offers use the remarketing function "Custom Audiences" of Facebook Inc. In this way, when users visit the social network Facebook or other websites that use the same process, it is possible to display ads relevant to the interests of the users of the website ("Facebook-Ads") on their screens. Therefore, we pursue the interest of showing you ads of interest to you in order to make our online services more interesting for you. The legal basis for the processing of your data is Art. Para. 6 1 Page 1f General Data Protection Regulation.
      <br /> <br />
      As a result of the use of marketing tools, your browser automatically establishes a direct connection to Facebook servers. We have no control over the scope and use of the data that Facebook collects through this tool, so we provide you with the information that we have: through Facebook Custom Audiences, Facebook is informed that you have viewed the online offers of the pages corresponding to our pages or that you have clicked on one of our advertisements. If you register for Facebook services, Facebook can assign access to your account. Even if you are not registered with Facebook or are not logged in, it is possible for the provider to know your IP address and other identifying information and to store it.
      <br /> <br />
      Users of <a href="https://www.facebook.com/settings/?tab=ads#_" target="_blank" class="underline">https://www.facebook.com/settings/?tab=ads#_</a> can deactivate the "Facebook Custom Audiences" function.
      <br /> <br />
      You can find more information on Facebook data processing at <a href="https://www.facebook.com/about/privacy" target="_blank" class="underline">https://www.facebook.com/about/privacy</a>.
      </p>
      `,
    },
    {
      name: 'Social Media Plugins',
      description: `
      <p class="mb-15">
      Our online offers use social media plugins from the social network Facebook. <a href="https://www.facebook.com" target="_blank" class="underline">www.facebook.com</a> by Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA and <a href="https://www.facebook.be" target="_blank" class="underline">www.facebook.be</a> by Facebook Ireland Limited, Hanover Reach. Facebook Ireland Limited, Hanover Reach, 5-7 Hanover Quay, Dublin Operations 2, Ireland ("Facebook").
      <br /> <br />
      You can find a summary of the Facebook plug-in here: <a href="http://developers.facebook.com/docs/plugins" target="_blank" class="underline">http://developers.facebook.com/docs/plugins</a>; for more information about Facebook privacy, please visit: <a href="https://www.facebook.com/policy.php" target="_blank" class="underline">www.facebook.com/policy.php</a>
      <br /> <br />
      Facebook can therefore be informed that you have visited the site corresponding to our online services and that you have interacted with the plug-in if necessary. By activating the plug-in, your personal data will be transferred to Facebook in the United States and stored there.
      <br /> <br />
      We have no control over the data collected and the data processing, nor do we know the exact scope of the data collection, the purpose of processing, or the storage time. We also have no information about the deletion of data collected by Facebook.
      <br /> <br />
      Facebook stores the data collected about you in your user profile and uses it for advertising, market research and/or to configure its website as needed. The particular purpose of this operation is (even for users who are not logged in) to provide targeted advertising as needed and to inform other users of the social network of your activities on our website. You have the right to object to the creation of this user profile, in which case you must contact Facebook in order to exercise this right.
      <br /> <br />
      We offer you the opportunity to interact with social networks and other users through plugins so that we can improve our services and make them more interesting for you as a user. The legal basis for the use of plug-ins is Art. 6 para. 1 o. 1f General Data Protection Regulation.
      <br /> <br />
      In principle, you can also completely prevent the loading of plug-ins by means of add-ons to your browser (so-called Script-Blockers).
      </p>
      `,
    },
    {
      name: 'AppNexus',
      description: `
      <p class="mb-15">
      Our online offers use AppNexus, a service of AppNexus Inc. 28 W 23rd Street, 4th floor, New York, New York - 10010, USA. AppNexus uses cookies, web beacons, etc. that are stored on your computer and can analyze website usage. As part of this use, data, in particular IP addresses and user activity, may be transferred to AppNexus Inc. servers and stored there. AppNexus Inc. will communicate this information to third parties as necessary, as far as required by law or if this data is processed by third parties. You can prevent the collection and transmission of personal data (in particular your IP address) and the processing of such data by disabling the execution of Java Script in your browser or by installing tools such as "NoScript". More information can be found in the AppNexus Privacy Statement (<a href="https://www.appnexus.com/en/company/platform-privacy-policy" target="_blank" class="underline">https://www.appnexus.com/en/company/platform-privacy-policy</a>). You can also opt-out for AppNexus at: <a href="https://www.appnexus.com/en/company/platform-privacy-policy#choices" target="_blank" class="underline">https://www.appnexus.com/en/company/platform-privacy-policy#choices</a>
      <br /> <br />
      The legal basis for the processing is Art. 1f of paragraph 6 GDPR to improve the comfort and quality of our online services stimulates our legitimate interests.
      </p>
      `,
    },
    {
      name: 'Doubleclick',
      description: `
      <p class="mb-15">
      Our online offers using Doubleclick (<a href="https://www.doubleclick.com" target="_blank" class="underline">www.doubleclick.com</a>) from Google Ireland Limited, Gordon House, Mountain View, Barrow St Dublin 4 Ireland (" Google") uses technology to show you ads that may be of interest to you. If you do not want Doubleclick to continue collecting anonymous data, you can set an Opt-Out cookie here: <a href="https://www.google.de/settings/ads/onweb#display_optout" target="_blank" class="underline">https://www.google.de/settings/ads/onweb#display_optout</a>
      <br /> <br />
      This OptOut cookie deletes the information that has been saved so far and prevents the continued collection of this information.
      <br /> <br />
      The legal basis for this processing is Art. 1f of paragraph 6 GDPR to improve the comfort and quality of our online services stimulates our legitimate interests.
      </p>
      `,
    },
    {
      name: 'Quisma',
      description: `
      <p class="mb-15">
      Our online offers use the services of Quisma GmbH, Rosenheimer Straße 145d, 81671 Munich, Germany. quisma web beacons collect pseudonymous information about the user's access process in order to be able to understand the user's behavior. The cookie generated in this case is dedicated to storing pseudonym information under a randomly generated user ID (pseudonym). The geographical location is roughly determined and the user's IP address is briefly analyzed. After the truncated analysis is completed in accordance with data protection requirements, the IP address is completely anonymized. At no time is it possible to reach any specific settlement with a person or with a specific address. You can also oppose the setting of cookies and the tracking of Quisma-Technologie at any time by downloading and installing the Opt-Out cookie (<a href="http://privacy.quisma.com/uk/cookie-opt-out/" target="_blank" class="underline">http://privacy.quisma.com/uk/cookie-opt-out/</a>). More information can be found in Quisma's privacy statement (<a href="https://privacy.quisma.com/datenschutz/quisma-websites/" target="_blank" class="underline">https://privacy.quisma.com/datenschutz/quisma-websites/</a>).
      <br /> <br />
      The legal basis for the processing is Art. 1f of paragraph 6 GDPR, to improve the comfort and quality of our online services inspired by our legitimate interests.
      </p>
      `,
    },
  ],
}

function PrivacyPolicyPageEn() {
  const url = 'https://www.geme.bio/privacy-policy'

  return (
    <>
      <link rel="canonical" href={url} />
      <h1 className="sr-only">GEME Privacy Policy</h1>
      <SiteHelpTabs {...siteHelpTabsProps} />
      <PrivacyPolicy {...privacyPolicyProps} />
    </>
  )
}

export { PrivacyPolicyPageEn }
