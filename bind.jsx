Function.prototype.mybind = function (context) {
  if (typeof this !== "function") {
    throw new TypeError(
      "Function.prototype.mybind - what is trying to be bound is not callable"
    );
  }

  let args = [...arguments].slice(1);
  let fn = this;

  return function Fn() {
    return fn.apply(
      this instanceof Fn ? new fn(...arguments) : context,
      args.concat(...arguments)
    );
  };
};

Function.prototype.mybind2 = function (context) {
  if (typeof this !== "function") {
    throw new TypeError(
      "Function.prototype.mybind - what is trying to be bound is not callable"
    );
  }
  let args = [...arguments].slice(1);
  let self = this;
  let FONP = function () {};
  let fBound = function () {
    let bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(
      this instanceof fBound ? this : context,
      args.concat(bindArgs)
    );
  };

  FONP.prototype = this.prototype;
  fBound.prototype = new FONP();
  return fBound;
};
