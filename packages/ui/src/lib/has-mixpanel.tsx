import mixpanel from 'mixpanel-browser'

export function hasMixpanel() {
  let isHas = false
  if (
    mixpanel.hasOwnProperty('token') &&
    mixpanel.get_config() &&
    Object.keys(mixpanel.get_config()).length > 0
  ) {
    isHas = true
  }

  return isHas
}
