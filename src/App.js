import './App.css';
import { Component } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Accordion name="Jonas" icon="plus" title="section 1" ></Accordion>
    </div>
  );
}

export default App;

class Accordion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      disabled: props.disabled,
      visible: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log(this.state.visible);
    if (!this.state.disabled) {
      this.setState({
        visible: !this.visible,
      });
      this.visible = !this.visible;
      this.icon = this.visible ? 'minus' : 'plus';
    }
  }

  render() {
    return <div className={this.class}>
      Hello, {this.props.name}
      <button className="accordion" onClick={this.toggle}>
        {this.props.title}
        <div className="icon {this.props.icon}"></div>
      </button>
      {this.state.visible &&
        <div className="panel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
        </div>
      }
    </div>;
  }

  class() {
    let variantClass = `accordion-item-${this.variant}`;
    let returnValue = `accordion-item ${(this.variant) ? variantClass : ''} ${this.disabled ? 'disabled' : ''}`;
    if (this.iconLeft) {
      returnValue += ` icon-left`;
    }

    return 'accordion-item';
    return returnValue.trim();
  }
}