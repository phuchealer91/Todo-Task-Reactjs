import React from 'react';

class Todolist extends React.Component {
    render() {
        return (
                <tr>
                    <td>{this.props.name}</td>
                </tr>
        );
    }

}

export default Todolist;
