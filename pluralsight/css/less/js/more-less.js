registerPlugin({
  install: function(less, pluginManager, functions) {
    functions.add("ten", function () {
      return 10;
    });

    functions.add("avg", function () {
      let total = 0;
      for (let x = 0; x < arguments.length; ++x) {
        total += arguments[x].value;
      }
      return total/arguments.length;
    })
  }
});

