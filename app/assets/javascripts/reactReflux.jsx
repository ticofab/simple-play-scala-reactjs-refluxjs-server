var Info = React.createClass({
  getInitialState: function() {
    return { lastClicked : -1}
  },
  render: function() {
    return (
      <h3>Last button clicked: {this.state.lastClicked}</h3>
    );
  }
});

var Button = React.createClass({
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
