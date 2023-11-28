import { Component } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { SectionFeedback } from './Feedback/Feedback.styled';
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
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = countTotalFeedback
      ? Math.round((good / countTotalFeedback) * 100)
      : 0;

    return (
      <SectionFeedback>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedbackButton}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </SectionFeedback>
    );
  }
}
