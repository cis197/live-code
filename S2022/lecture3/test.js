var obj = {
  a : 'object???',
  foo : function() {
      return (() => {
          console.log(this.a)
      })();
  }
};

var a = 'global!!!';

obj.foo();