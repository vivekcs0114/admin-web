import React, { Component } from 'react';
import './App.css';

class MyComponent extends Component {
  render() {
    return (
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Add Task..." />
      <span class="input-group-btn">
        <button class="btn btn-secondary" type="button">Add</button>
      </span>
    </div>
    );
  }
}

export default MyComponent;