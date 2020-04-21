import React from "react";
import "./styles.css";
import { connect } from "react-redux";

class App extends React.Component {
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   text: ""
  //   // };
  // }

  // onAgeUp = () => {
  //   this.setState({
  //     ...this.state.age,
  //     age: ++this.state.age
  //   });
  // };

  handleChange = e => this.setState({ text: e.target.value });

  render() {
    console.log(this.props.onAddText);
    return (
      <div>
        <input type="text" onChange={e => this.props.onAddText(e)} />
        <hr />
        <input type="text" disabled value={this.props.text} />
        <div>
          Age:<span>{this.props.age}</span>
          <button onClick={this.props.onAgeUp}>AGE_UP</button>
          <button onClick={this.props.onAgeDOWN}>AGE_DOWN</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { age: state.age, text: state.text };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP" }),
    onAgeDOWN: () => dispatch({ type: "AGE_DOWN" }),
    onAddText: e => dispatch({ type: "ADD_TEXT", text: e.target.value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
