import React, { Component } from 'react'


class TodoModel extends Component {
  constructor() {
    super();
    this.state = {
      inputItem: [],
      showItems: []
    };
  }

  updateDate(newData) {
    if(!newData || newData.trim() === '') return;
    let array = this.state.inputItem;
    array.push({
      name: newData,
      type: false
    });
    this.setState({inputItem:array});
  }
  deleteDate(date) {
    let { inputItem } = this.state;
    this.setState({
      inputItem: inputItem.filter((e) => e !== date)
    });
  }
  changeType(val) {
    let {inputItem} = this.state;
    inputItem.forEach((e, i) => {
      if(e === val) {
        e.type = !e.type;
      }
    });
    this.setState({
      inputItem: inputItem,
    });
  }
  clearItems() {
    this.setState({inputItem:[]});
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default  TodoModel;

