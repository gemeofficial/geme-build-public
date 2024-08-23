import { hasMixpanel } from "ui"
import mixpanel from 'mixpanel-browser'

// mixpanelTrack函数所需类型
type IMixpanelPayloadType = Record<string, any>
interface IMixpanelTrack {
  eventName: EMixpanelEvent,
  from: EFrom,
  detail?: string
  payload?: IMixpanelPayloadType
}

// 统计Mixpanel事件的函数封装
export function mixpanelTrack(
  {
    eventName,
    from,
    detail,
    payload
  }: IMixpanelTrack
) {
  if (!hasMixpanel()) return
  const mixpanelTitle = `${eventName} [${from}]${detail ? `(${detail})` : ''}`
  mixpanel.track(mixpanelTitle, {
    ...payload
  })
}

// Note1: Config说明
// EMixpanelEvent 只编写事件名称，在执行Mixpanel函数时会要求传入From，最终会拼接成一个字符串发送给Mixpanel
// 格式说明：MixpanelEvent + From + Detail(可选)
// eg: Go Product Page [Home](Hero)
//     Go Product Page [Header]
//     Watch video [Home](stop landfilling)

// Note2：如后续有事件更新，请同步更新此文档。https://geme-team.feishu.cn/wiki/MhjRw2tX9iDXRek7kWQc3kman9g

// Mixpanel事件名称枚举配置
export enum EMixpanelEvent {
  GoProductPage = 'Go Product Page',
  WatchVideo = 'Watch Video',
  Subscribe = 'Subscribe',

  EnterDiscountCode = 'Enter Discount Code',
  ChangeShipTo = 'Change Ship To',
  ChangeProductImage = 'Change Product Image',
  ChangeTabs = 'Change Tabs',
  BuyItNow = 'Buy It Now',
  AddToCart = 'Add To Cart',
  ClickBuyNow = 'Click Buy Now',
  ChangeUserStory = 'Change User Story',
  ClickPrevReviews = 'Click Prev Reviews',
  ViewReviewsImage = 'View Reviews Image',
  ClickNextReviews = 'Click Next Reviews',
  PostReview = 'Post Review',
  WriteReview = 'Write Review',
}

// Mixpanel事件来源配置（一般是页面 / 组件）
export enum EFrom {
  Home = 'Home',
  Product_Geme = 'Product_Geme',
  Product_Kobold = 'Product_Kobold',
  IFA = 'IFA',

  Header = 'Header',
  Footer = 'Footer',
  CozeAi = 'CozeAi',
}

export type MixpanelEventHandleType = (payload?: IMixpanelPayloadType) => void

