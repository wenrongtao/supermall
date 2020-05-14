export function debounce(func, delay) {
  let timer = null
  return funtion (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}
// 防抖函数
