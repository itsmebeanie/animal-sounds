var Title = React.createClass({displayName: 'Title',
  render: function() {
    return (
      React.createElement('div', {className: "intro"},
        "Felix's Farm"
      )
    );
  }
});

ReactDOM.render(
  React.createElement(Title, null),
  document.getElementById('content')
);
