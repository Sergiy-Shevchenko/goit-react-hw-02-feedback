import React from "react";
import  './statistics.css';


class TaskOne extends React.Component {
   
   state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
   
   
    handleGoodClick = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            }
        })
    }
    
    handleNeurtalsClick = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            }
        })
    }

    handleBadClick = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            }
        })
    }     

    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state;
        const total = good + neutral + bad;
        return total;   
    };


    countPositiveFeedbackPercentage =() => {
        const {good} = this.state;
        const total = this.countTotalFeedback();
        const result = good / total * 100;
        return Math.round(result);
    };


    render () {
        const {good, neutral, bad} = this.state;
        const totalFeetback = this.countTotalFeedback();
        const positiveFeetback = this.countPositiveFeedbackPercentage();

        return (
            <div className="container">
                <h1 className="title">Please leave feedback</h1>
                <div className="section">
                <button type="button" className="button" 
                onClick={this.handleGoodClick}>Good</button>
                <button type="button" className="button" 
                onClick={this.handleNeurtalsClick}>Neutral</button>
                <button type="button" className="button" 
                onClick={this.handleBadClick}>Bad</button>
                </div>
                <h2 className="title">Statistics</h2>
                <div className="section">
                    <span className="item">Good:<p className="rating">{good}</p></span>
                    <span className="item">Neutral:<p className="rating">{neutral}</p></span>
                    <span className="item">Bad:<p className="rating">{bad}</p></span>
                    <span className="item">Total:<p className="rating">{totalFeetback}</p></span>
                    <span className="item">Positive feetback:<p className="rating">{positiveFeetback}%</p></span>

                </div>
            </div>
        );
    }
}

export default TaskOne;