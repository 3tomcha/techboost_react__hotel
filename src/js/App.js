import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date){
    setState({
      startDate: date
    });
  }

  render() {
    return(
      <div>
      <h1>検索フォーム</h1>
      <input type="text" placeholder="地名"/><br/>
      <input type="text" placeholder="チェックイン日"/><br/>
      <input type="text" placeholder="チェックアウト日"/><br/>
      <DatePicker
      selected={this.state.startDate}
      onChange={this.handleChange}
      />
      <input type="submit" />
      </div>
    );
  }
}

export default App;
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
