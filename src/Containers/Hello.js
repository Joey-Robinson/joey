import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import Header from '../Components/Header/Header';
import Body from '../Components/Body/Body';
import BodyTwo from '../Components/Body/BodyTwo/BodyTwo';


class Hello extends Component {
  render() {
    return (
      <div className="Hello">
        <Sidebar />
        <Header />
        <Body />
        <BodyTwo />
      </div>
    );
  }
};

export default Hello;