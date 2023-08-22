import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

  export class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }

    onLeaveFeedback = (option) => {
        this.setState((prevState) => {
          return {
            [option]: prevState[option] + 1,
          };
      });
    }


  countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      const total = good + neutral + bad
      return total;
    };

  countPositiveFeedbackPercentage = () => {
      const { good } = this.state;
      const totalFeedback = this.countTotalFeedback();
      return totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;
  };
    
  render() {
    const options = Object.keys(this.state);
    const {good, neutral, bad} = this.state;
        return(
          <div>
            <Section title="Please leave feedback">
              <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
            </Section>

            <Section title="Statistics">
              <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>
            </Section>
      </div>
    );
    }

  };
