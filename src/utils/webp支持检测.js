/**
 * Created by ErgoSphere on 2021/8/30
 **/

export const webpSupport = () => {
  let elem = document.createElement('canvas')
  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0
  } else {
    // very old browser like IE 8, canvas not supported
    return false
  }
}