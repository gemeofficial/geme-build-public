import { LocaleType } from "ui";
import { ETabsId, ISiteHelpTabsProps } from "../../components/tabs";

// 静态页面的navBar内容 配置文件 En版
const tabsMultiLanguage = {
  en: [
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
  de: [
    {
      title: 'Allgemeine Geschäftsbedingungen des Servicevertrags',
      id: 'terms-and-conditions',
    },
    {
      title: 'Garantie',
      id: 'warranty',
    },
    {
      title: 'Garantieverlängerung',
      id: 'warranty-extend',
    },
    {
      title: 'Rückgaberecht',
      id: 'return-policy',
    },
    {
      title: 'Datenschutzrichtlinie',
      id: 'privacy-policy',
    },
    {
      title: 'GEME Dots Treueprogramm',
      id: 'geme-dots-loyalty-program',
    },
  ],
  fr: [
    {
      title: `Termes et conditions de l'accord de service`,
      id: 'terms-and-conditions',
    },
    {
      title: 'Garantie',
      id: 'warranty',
    },
    {
      title: 'Extension de garantie',
      id: 'warranty-extend',
    },
    {
      title: 'Politique de retour',
      id: 'return-policy',
    },
    {
      title: 'Politique de confidentialité',
      id: 'privacy-policy',
    },
    {
      title: 'Programme de fidélité GEME Dots',
      id: 'geme-dots-loyalty-program',
    },
  ],
}

export function getWarrantyTabsTextInfo(locale: LocaleType, currentTabId: ETabsId): ISiteHelpTabsProps {
  return {
    tabs: tabsMultiLanguage[locale],
    currentTabId
  }
}