import React, { Component } from "react";

class ContentAddContact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contentAddContact">
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => this.props.nameOnChange(e)}
              id="name"
              type="text"
            />
          </li>
          <li>
            <label htmlFor="surename">Surename</label>
            <input
              onChange={(e) => this.props.lastnameOnChange(e)}
              id="surename"
              type="text"
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" />
          </li>
          <li>
            <label htmlFor="adresse">Adresse</label>
            <textarea name="" id="adresse" cols="30" rows="10"></textarea>
          </li>
          <li>
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="text" />
          </li>
          <li>
            <label htmlFor="City">City</label>
            <input id="City" type="text" />
          </li>
          <li>
            <label htmlFor="state">State</label>
            <input id="state" type="text" />
          </li>
          <li>
            <label htmlFor="Zip">Zip</label>
            <input id="Zip" type="text" />
          </li>
        </ul>
      </div>
    );
  }
}

export default ContentAddContact;
