var ClickedStore = Reflux.createStore({
    listenables: [ClickedAction],
    clicked: function(n) {
      this.trigger(n);
    }
});
