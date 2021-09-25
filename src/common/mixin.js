export function debounce(func, delay) {
  let timer = null;
  return function () {
    let context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(context, arguments)
    }, delay);
  }
}