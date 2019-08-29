import React from 'react';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoItems: ['item 1','Item 2'],
      showAddForm: false
    }
  }
  closeForm = () =>{
    this.setState({
      showAddForm: false
    })
  }
  setStatus = () =>{
    this.setState({
      showAddForm: true
    })
  }
  addTask = (item)=>{
    this.state.TodoItems.push(item);
  }
  
  render() {
    if(this.state.showAddForm === true){
      return <AddTask 
        setStatus={this.setStatus}
        closeForm={this.closeForm}
        addTask={this.addTask}
      />
    }
    return (
      <div className="container mt-5">
        <h2>Add Task</h2>
        <button type="button" className="btn btn-primary" onClick={this.setStatus}>Add new Task</button>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Task List</th>
            </tr>
          </thead>
          <tbody>
            {this.state.TodoItems.map((item,index)=>{
              return <TodoList 
                    key={index}
                    name={item}
              />
            })}
          </tbody>
        </table>
      </div>
    );
  }

}

export default App;
