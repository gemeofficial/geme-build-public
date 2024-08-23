import {
  EFrom,
  EMixpanelEvent,
  MixpanelEventHandleType,
  mixpanelTrack,
} from "./config"

// Mixpanel事件函数配置接口类型配置
interface IMixpanelEventHandles {
  // hero section
  enterDiscountCode: MixpanelEventHandleType
  changeShipTo: MixpanelEventHandleType
  changeProductImage: MixpanelEventHandleType
  buyItNow: MixpanelEventHandleType
  addToCart: MixpanelEventHandleType

  // introduction
  changeTabs: MixpanelEventHandleType
  clickBuyNowFromFreeReturn: MixpanelEventHandleType
  clickBuyNowFromCompare: MixpanelEventHandleType
  changeUserStory: MixpanelEventHandleType
  clickPrevReviews: MixpanelEventHandleType
  viewReviewsImage: MixpanelEventHandleType
  clickNextReviews: MixpanelEventHandleType
  postReview: MixpanelEventHandleType
  writeReview: MixpanelEventHandleType
}

/**
 * Mixpanel事件函数配置，二层封装
 */
export const productGemeMixpanelEventHandles: IMixpanelEventHandles = {
  enterDiscountCode(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.EnterDiscountCode,
      from: EFrom.Product_Geme,
      payload,
    })
  },
  changeShipTo(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.ChangeShipTo,
      from: EFrom.Product_Geme,
      payload,
    })
  },
  changeProductImage(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.ChangeProductImage,
      from: EFrom.Product_Geme,
      detail: "Hero",
      payload,
    })
  },
  buyItNow(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.BuyItNow,
      from: EFrom.Product_Geme,
      payload,
    })
  },
  addToCart(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.AddToCart,
      from: EFrom.Product_Geme,
      payload,
    })
  },
  changeTabs(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.ChangeTabs,
      from: EFrom.Product_Geme,
      payload,
    })
  },
  clickBuyNowFromFreeReturn(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.ClickBuyNow,
      from: EFrom.Product_Geme,
      detail: "Free Return",
      payload,
    })
  },
  clickBuyNowFromCompare(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.ClickBuyNow,
      from: EFrom.Product_Geme,
      detail: "Compare",
      payload,
    })
  },
  changeUserStory(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.ChangeUserStory,
      from: EFrom.Product_Geme,
      payload,
    })
  },
  clickPrevReviews(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.ClickPrevReviews,
      from: EFrom.Product_Geme,
      payload,
    })
  },
  viewReviewsImage(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.ViewReviewsImage,
      from: EFrom.Product_Geme,
      payload,
    })
  },
  clickNextReviews(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.ClickNextReviews,
      from: EFrom.Product_Geme,
      payload,
    })
  },
  postReview(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.PostReview,
      from: EFrom.Product_Geme,
      payload,
    })
  },
  writeReview(payload) {
    mixpanelTrack({
      eventName: EMixpanelEvent.WriteReview,
      from: EFrom.Product_Geme,
      payload,
    })
  },
}
