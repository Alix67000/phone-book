import React, { Component } from "react";

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.firstname,
      familyName: props.familyname,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      firstName: newProps.firstname,
      familyName: newProps.familyname,
    });
  }

  render() {
    return (
      <div className="profil">
        <div className="profil-content">
          <img src="../media/ali.jpg" alt="profil-pic" />
          <div className="profil-info">
            <h1>{this.state.firstName + " " + this.state.familyName}</h1>
            <h2>Web développeur</h2>
          </div>
          <div className="action">
            <button>Edit</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profil;
