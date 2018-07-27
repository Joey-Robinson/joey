import React, { Component } from 'react';
import Options from './TodoOptions/TodoOptions';
import AddOption from './AddOption/AddOption';
import Header from './TodoHeader/TodoHeader';
import Button from './TodoButton/TodoButton';

class IndecisionApp extends Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const storageOptions = JSON.parse(json);
      if(storageOptions) {
        this.setState({options: storageOptions});
      }
    } catch(error) {
      
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  handleDeleteOptions = () => {
    this.setState({options: []});
  }
  handlePickHandler = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    this.setState({selectedOption: option});
  }
  handleAddOption = (option) => {
    if(!option) {
      return 'Enter Something';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option is there dummy';
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  removeSingleItem = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }
  render() {
    const title = 'Hi'
    return (
      <div className="Todo">
        <Header title={title}/>
        <Button
          className="Todo-Button-Three"
          handlePick={this.handlePickHandler}
          handleDelete={this.handleDeleteOptions} 
          hasOptions={this.state.options.length > 0}
        />
        <div>
        <AddOption 
          addOption={this.handleAddOption} 
        />
        <Options
          options={this.state.options}
          removeSingleItem={this.removeSingleItem}
        />
        </div>
      </div>
    );
  }
}

export default IndecisionApp;