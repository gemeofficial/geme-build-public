import { EFrom, EMixpanelEvent, MixpanelEventHandleType, mixpanelTrack } from "./config"

// Mixpanel事件函数配置接口类型配置
interface IMixpanelEventHandles {
  heroButton: MixpanelEventHandleType
  watchVideoFromHero: MixpanelEventHandleType
  watchVideoFromStopLandfilling: MixpanelEventHandleType
  watchVideoFromWhatCustomersSay: MixpanelEventHandleType
  subscribeFromPageBottomButton: MixpanelEventHandleType
}

/**
 * Mixpanel事件函数配置，二层封装
 */
export const homeMixpanelEventHandles: IMixpanelEventHandles = {
  heroButton(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.GoProductPage,
      from: EFrom.Home,
      detail: 'Hero',
      payload
    })
  },
  watchVideoFromHero(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.WatchVideo,
      from: EFrom.Home,
      detail: 'Hero',
      payload
    })
  },
  watchVideoFromStopLandfilling(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.WatchVideo,
      from: EFrom.Home,
      detail: 'Stop Landfilling',
      payload
    })
  },
  watchVideoFromWhatCustomersSay(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.WatchVideo,
      from: EFrom.Home,
      detail: 'What Customers Say',
      payload
    })
  },
  subscribeFromPageBottomButton(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.Subscribe,
      from: EFrom.Home,
      detail: 'Page Bottom Button',
      payload
    })
  },
}