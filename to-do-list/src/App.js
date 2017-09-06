import React, { Component } from 'react';
import Task from './Task'
import logo from './logo.svg';
import axios from 'axios';
import cors from 'cors';
import './App.css';

const toggle=(index)=>{
let tag = document.querySelectorAll('.done')
let task = document.querySelectorAll('.task')
console.log(task[index.index])
tag[index.index].textContent=""
task[index.index].setAttribute("style","text-decoration:line-through; text-decoration-color: red;")
}

class App extends Component {
constructor(){
  super();
  this.state=({
    tasks:null,
    newtask:null
  })
}
///////////////////////////////////////////
// toggle(index){
// let tag = document.querySelectorAll('.done')
// let task = document.querySelectorAll('.task')
// console.log(task[index.index])
// tag[index.index].textContent=""
// task[index.index].setAttribute("style","text-decoration:line-through; text-decoration-color: red;")
// }
///////////////////////////////////////////
clearTask(){
this.state.newtask=""
}
///////////////////////////////////////////
newState(data){
this.setState({
  tasks:data,
})
}
///////////////////////////////////////////
newTask(data){
this.setState({
newtask:data.target.value
})
}
///////////////////////////////////////////
componentDidMount(){
axios.get('https://todo-1list.herokuapp.com/api/task')
.then((data)=>{
  this.newState(data)
})
.catch((error)=>{
  console.log(error)
})
}
/////////////////////////////////////////////
commentCreate(data){
data.preventDefault()
axios.post('https://todo-1list.herokuapp.com/api/task/create', {'data':this.state.newtask})
.then((data)=>{
    this.refs.task.value = null
    this.componentDidMount()
})
.catch((error)=>{
  console.log(error)
})
}
/////////////////////////////////////////////////
commentDelete(data,index){
toggle(index)
setTimeout(()=>{
axios.delete('https://todo-1list.herokuapp.com/api/task/delete',{params: {'data':data}})
    .then((data)=>{

    this.componentDidMount()
    })
    .catch((error)=>{
      console.log(error)
    })
},2000)

}
////////////////////////////////////////////////
  render() {
    let data=null
    this.state.tasks ===null ?  data=null : data=this.state.tasks
    return (
      <div className="App">
      <form onSubmit={this.commentCreate.bind(this)}>
        <input ref='task' type="text" onChange={(e)=>{this.newTask(e)}}/>
        <input type="submit"/>
      </form>
          <Task   value={data} deleteFunc={this.commentDelete.bind(this)}  />
      </div>
    );
  }
}

export default App;
