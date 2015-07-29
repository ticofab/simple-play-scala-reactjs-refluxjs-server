var Info = React.createClass({
  mixins: [Reflux.connect(ClickedStore, 'clickedStoreHappening')],
  render: function() {
    return (
      <h3>Last button clicked: {this.state.clickedStoreHappening}</h3>
    );
  }
});

var Button = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    ClickedAction.clicked(this.state.number);
  },
  getInitialState: function() {
    // initialising state via props is ok, according to facebook: https://goo.gl/bT4yVg
    return {number: this.props.number};
  },
  render: function() {
    return (
      <form className="clickForm" onSubmit={this.handleSubmit}>
        <input type="submit" value={"Click " + this.props.number} />
      </form>
    );
  }
});

var ButtonPage = React.createClass({
  render: function() {
    return (
      <div className="buttons">
        <Button number={1} />
        <Button number={2} />
        <Info />
      </div>
    );
  }
});

React.render(<ButtonPage />,
             document.getElementById('content'));
