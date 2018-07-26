import React, { Component } from 'react';
import Button from '../../../../Components/Button/Button';

class FilterableList extends Component {
  state = {
    visibility: false
  }
  handleToggleVisibility = () => {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <a href="https://github.com/elamahpla/FilterableList" target="_blank" rel="nofollow">
          <img
            src="https://i.imgur.com/NoWa4Rv.png" 
            alt=""
          />
        </a>
        <Button
          className="Portfolio-Button"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Thoughts:</p> : <p>Filterable List:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              Filterable contact list. Uses inline JS. No localStorage
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default FilterableList;