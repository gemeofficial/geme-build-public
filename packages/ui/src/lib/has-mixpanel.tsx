export function hasMixpanel() {
  let isHas = false
  if (
    process.env.NEXT_PUBLIC_MIXPANEL_TOKEN &&
    process.env.NEXT_PUBLIC_MIXPANEL_TOKEN.length > 0
  ) {
    isHas = true
  }

  return isHas
}
