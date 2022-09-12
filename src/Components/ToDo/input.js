import React from 'react';
import Submit from '../../assets/svg/submit.svg';

class TaskInput extends React.Component {
  state = {
    title: '',
  };
  hanldeSubmit = () => {
    this.props.hanldeAddTask(this.state.title);
    this.setState({
      title: '',
    });
  };
  render() {
    return (
      <div className="flex w-full justify-between">
        <input type="text" className=" outline-none" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} placeholder="Input a task" />
        <button className="w-8 h-8" onClick={this.hanldeSubmit}>
          <img className="w-full h-full" src={Submit} alt="Submit" />
        </button>
      </div>
    );
  }
}

export default TaskInput;
