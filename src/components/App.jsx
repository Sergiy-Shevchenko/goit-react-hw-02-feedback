import React, {Component} from "react";
import css from './FeatbackForm/statistics.css';
import Statistics from "./FeatbackForm/Statistics";
import FeedbackOptions from "./FeatbackForm/FeetbackOptions";



class App extends Component {
   
   state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
   
    // onLeaveFeedback = () => {
    //   const options = ['bad', 'neutral', 'good'];
    //   options.map(btn=> <button key={btn} 
    //   onClick={()=>this.onleLeaveFeedback(btn)}>{btn}</button>)
    // }



    handleClickGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            }
        })
    }
    
    handleClickNeurtals = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            }
        })
    }

    handleClickBad = () => {
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
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <div className="container">
                <h1 className="title">Please leave feedback</h1>
                {/* <div className="section">
                <button type="button" className="button" 
                onClick={this.handleGoodClick}>Good</button>
                <button type="button" className="button" 
                onClick={this.handleNeurtalsClick}>Neutral</button>
                <button type="button" className="button" 
                onClick={this.handleBadClick}>Bad</button>
                </div> */}
                <FeedbackOptions
                onClickGood={this.handleClickGood}
                onClickNeutral={this.handleClickNeurtals}
                onClickBad={this.handleClickBad}

                // options={this.options}
                // onLeaveFeedback={this.onLeaveFeedback}


                 />
                <h2 className="title">Statistics</h2>
                <Statistics 
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}                
                />
            </div>
        );
    }
}

export default App;