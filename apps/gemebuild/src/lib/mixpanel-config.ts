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
  const mixpanelTitle = `${eventName} [${from}] ${detail ? `(${detail})` : ''}`
  mixpanel.track(mixpanelTitle, {
    ...payload
  })
}

// Note：
// Mixpanel的事件统计是按照EventName来划分的，所以最好将From也一起编写在Event中，筛选统计数据时才清晰明了
// MixpanelEvent Enum 只负责编写事件名称，在执行Mixpanel函数时会要求传入From，最终会拼接成一个字符串发送给Mixpanel
// 格式说明：MixpanelEvent + From + Detail(可选)
// eg: Go Product Page [Home](Hero)
//     Go Product Page [Header]
//     Watch video [Home](stop landfilling)

// Note2：如后续有事件更新，请同步更新此文档。https://geme-team.feishu.cn/wiki/MhjRw2tX9iDXRek7kWQc3kman9g

// Mixpanel事件名称枚举配置
export enum EMixpanelEvent {
  goProductPage = 'Go Product Page',
  watchVideo = 'Watch video',
  subscribe = 'Subscribe',
  // goProductPage = 'Go Product Page',
  // goProductPage = 'Go Product Page',
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

type MixpanelEventHandleType = (payload?: IMixpanelPayloadType) => void

// Mixpanel事件函数配置接口类型配置
interface IMixpanelEventHandles {
  homeHeroButton: MixpanelEventHandleType
  homeWatchVideoFromHero: MixpanelEventHandleType
  homeWatchVideoFromStopLandfilling: MixpanelEventHandleType
  homeWatchVideoFromWhatCustomersSay: MixpanelEventHandleType
  homeSubscribeFromPageBottomButton: MixpanelEventHandleType
}

/**
 * Mixpanel事件函数配置，二层封装
 */
export const mixpanelEventHandles: IMixpanelEventHandles = {
  homeHeroButton(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.goProductPage,
      from: EFrom.Home,
      detail: 'Hero',
      payload
    })
  },
  homeWatchVideoFromHero(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.watchVideo,
      from: EFrom.Home,
      detail: 'Hero',
      payload
    })
  },
  homeWatchVideoFromStopLandfilling(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.watchVideo,
      from: EFrom.Home,
      detail: 'Stop Landfilling',
      payload
    })
  },
  homeWatchVideoFromWhatCustomersSay(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.watchVideo,
      from: EFrom.Home,
      detail: 'What Customers Say',
      payload
    })
  },
  homeSubscribeFromPageBottomButton(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.subscribe,
      from: EFrom.Home,
      detail: 'Page Bottom Button',
      payload
    })
  },
}