import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Location: "",
    };
    this.handleCheckInChange = this.handleCheckInChange.bind(this);
    this.handleCheckOutChange = this.handleCheckOutChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  handleCheckInChange(date){
    this.props.handleCheckInChange(date);
  }
  handleCheckOutChange(date){
    this.props.handleCheckOutChange(date);
  }

  checkAnswer(e){
    e.preventDefault();
    if (this.state.Location=="" && this.props.checkInDay=="" && this.props.checkOutDay=="") {
      alert("どちらかは入力してください");
    }else if(this.state.Location!="" && this.props.checkInDay!="" && this.props.checkOutDay!=""){
      console.log("OK");
      console.log(this.state.Location);
      console.log(this.props.checkInDay);
      console.log(this.props.checkOutDay);
    }
  }
  setLocation(e){
    this.state.Location = e.target.value;
  }
  render() {
    return(
      <div>
        <h1>検索フォーム</h1>
        <form method="post" action="">
        <input type="text" placeholder="地名" onChange={this.setLocation}/><br/>
        チェックイン日
        <DatePicker
          selected={this.props.checkInDay}
          onChange={this.handleCheckInChange}
          />
        チェックアウト日
        <DatePicker
          selected={this.props.checkOutDay}
          onChange={this.handleCheckOutChange}
          /><br/>
        <input type="submit" onClick={this.checkAnswer} value="検索"/>
        </form>
      </div>
    );
  }
}

export default SearchForm;
