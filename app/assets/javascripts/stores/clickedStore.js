var ClickedStore = Reflux.createStore({
    listenables: [ClickedAction],

    lastClicked: -1,

    clicked: function(n) {
      this.lastClicked = n;
      this.trigger(this.lastClicked);
    }
});
