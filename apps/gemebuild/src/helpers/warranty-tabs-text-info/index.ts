import { LocaleType } from "ui";
import { ISiteHelpTabsProps } from "../../components/tabs";
import { ETabsId } from "../../components/tabs/type";

// 静态页面的navBar内容 配置文件 En版
const tabsMultiLanguage = {
  en: [
    {
      title: 'Terms and Conditions of Service Agreement',
      id: ETabsId.TermsAndConditions,
    },
    {
      title: 'Warranty',
      id: ETabsId.Warranty,
    },
    {
      title: 'Warranty Extend',
      id: ETabsId.WarrantyExtend,
    },
    {
      title: 'Return Policy',
      id: ETabsId.ReturnPolicy,
    },
    {
      title: 'Privacy Policy',
      id: ETabsId.PrivacyPolicy,
    },
    {
      title: 'GEME Dots Loyalty Program',
      id: ETabsId.GemeDotsLoyaltyProgram,
    },
  ],
  de: [
    {
      title: 'Allgemeine Geschäftsbedingungen des Servicevertrags',
      id: ETabsId.TermsAndConditions,
    },
    {
      title: 'Garantie',
      id: ETabsId.Warranty,
    },
    {
      title: 'Garantieverlängerung',
      id: ETabsId.WarrantyExtend,
    },
    {
      title: 'Rückgaberecht',
      id: ETabsId.ReturnPolicy,
    },
    {
      title: 'Datenschutzrichtlinie',
      id: ETabsId.PrivacyPolicy,
    },
    {
      title: 'GEME Dots Treueprogramm',
      id: ETabsId.GemeDotsLoyaltyProgram,
    },
  ],
  fr: [
    {
      title: `Termes et conditions de l'accord de service`,
      id: ETabsId.TermsAndConditions,
    },
    {
      title: 'Garantie',
      id: ETabsId.Warranty,
    },
    {
      title: 'Extension de garantie',
      id: ETabsId.WarrantyExtend,
    },
    {
      title: 'Politique de retour',
      id: ETabsId.ReturnPolicy,
    },
    {
      title: 'Politique de confidentialité',
      id: ETabsId.PrivacyPolicy,
    },
    {
      title: 'Programme de fidélité GEME Dots',
      id: ETabsId.GemeDotsLoyaltyProgram,
    },
  ],
}

export function getWarrantyTabsTextInfo(locale: LocaleType, currentTabId: ETabsId): ISiteHelpTabsProps {
  return {
    tabs: tabsMultiLanguage[locale],
    currentTabId
  }
}