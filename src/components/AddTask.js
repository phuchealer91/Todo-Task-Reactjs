import React from 'react';
class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTask: false,
            name: ''
        }
    }
    onBack = () =>{
        this.props.closeForm();
    }
    getValue = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    onAddTask = () =>{
        this.props.addTask(this.state.name);
        this.onBack();
    }
    render() {
        return (
            <div className="container">
                <h2>Add new Task</h2>
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" name="" id="" className="form-control" placeholder="" onChange={this.getValue} />
                </div>
                <button type="button" className="btn btn-primary" onClick={this.onAddTask}>Add</button>
                <button type="button" className="btn btn-primary ml-2" onClick={this.onBack}>Back</button>
            </div>
        );
    }
}

export default AddTask;
