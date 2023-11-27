import { Component } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification.jsx';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackButton = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'bad', 'neutral']}
            onLeaveFeedback={this.handleFeedbackButton}
          />
        </Section>

        <Section title="Statistics">
          <Statistics>
            good={good}
            bad={bad}
            neutral={neutral}
            total={}
            positivePercentage={}
          </Statistics>

          <Notification message="There is no feedback" />
        </Section>
      </div>
    );
  }
}
