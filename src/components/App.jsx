import React, {Component} from "react";
import css from './FeatbackForm/statistics.css';
import Section from "./FeatbackForm/Section";
import Notification from "./FeatbackForm/Notification";
import Statistics from "./FeatbackForm/Statistics";
import FeedbackOptions from "./FeatbackForm/FeetbackOptions";

class App extends Component {
   
   state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
   
    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state;
        const total = good + neutral + bad;
        return total;   
    };

    countPositiveFeedbackPercentage =() => {
        const {good} = this.state;
        const total = this.countTotalFeedback();
        const result = good / total * 100 || 0;
        return Math.round(result);
    };

    onLeaveFeedback = option => {       
        this.setState(state => {           
            return {
                [option]: state[option] + 1,
            }
        })
    };

    render () {
        const {good, neutral, bad} = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <div className="container">

                <Section 
                title={'Please leave feedback'}
                children={
                    <FeedbackOptions 
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.onLeaveFeedback}>
                    </FeedbackOptions>}>                   
                </Section>
                    {total === 0 ? (<Notification message={'There is no feedback'}>
               </Notification>) : (<Section
                title={'Statistics'}                
                children={
                    <Statistics 
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={positivePercentage}>
                    </Statistics>}>                    
                 </Section>)
    }               
            </div>
        );
    }
}

export default App;