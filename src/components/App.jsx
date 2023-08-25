import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Layout } from "./Layout";
import { Notification } from "./Notification/Notification";
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
      return good + neutral + bad;
    };

  countPositiveFeedbackPercentage = () => {
      const { good } = this.state;
      const totalFeedback = this.countTotalFeedback();
      return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };
    
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    
    return (
          <Layout>
            <Section title="Please leave feedback">
              <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
            </Section>

            <Section title="Statistics">
              {this.countTotalFeedback() ?
                <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />
                :
                <Notification message="There is no feedback" />
                
              }
            </Section>
     </Layout>
    ); 
    }
  };
