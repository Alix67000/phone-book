import React, { Component } from "react";
import ContentAddContact from "./ContentAddContact";
import Footer from "./Footer";
import Profil from "./Profil";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lastname: "",
    };
    this.changeName = this.nameOnChange.bind(this);
    this.lastchangeName = this.lastnameOnChange.bind(this);
  }

  nameOnChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  lastnameOnChange = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };

  render() {
    return (
      <div className="addContact">
        <Profil firstname={this.state.name} familyname={this.state.lastname} />
        <ContentAddContact
          nameOnChange={this.changeName}
          lastnameOnChange={this.lastchangeName}
        />
        <Footer />
      </div>
    );
  }
}

export default AddContact;
