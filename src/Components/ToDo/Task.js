import React from 'react';

class Task extends React.Component {
  state = {
    editing: false,
  };
  handleEdit = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      this.setState({ editing: false });
    }
  };
  render() {
    const {
      task: { completed, title, id },
      handleUpdate,
    } = this.props;
    return (
      <li>
        {(this.state.editing === false && this.props.task.title)  ? ( 
          <div onDoubleClick={this.handleEdit} className="textInput">
            {title}
          </div>
        ) : (
          <input type="text" className="textInput" value={title} onChange={(e) => handleUpdate(id, e.target.value)} onKeyDown={(e)=>this.handleUpdatedDone(e)} />
        )}
      </li>
    );
  }
}

export default Task;
