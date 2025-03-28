function throttle(func, wait, options) {
  let timeout, context, args, result;
  let previous = 0;
  if (!options) {
    options = {};
  }

  const later = function () {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  const throttled = function () {
    const now = Date.now();
    if (!previous && options.leading === false) {
      previous = now;
    }
    const remain = wait - (now - previous);
    context = this;
    args = arguments;
    if (remain <= 0 || remain > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remain);
    }
    return result;
  };
  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };
  return throttled;
}
