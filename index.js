class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      hasBeenClicked: true,
    });
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? 'not' : null} been clicked yet!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
