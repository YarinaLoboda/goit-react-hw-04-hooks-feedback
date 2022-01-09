import { useState } from 'react';
import './App.css';
import Section from './components/FeedBack/Section/Section';
import FeedbackOptions from './components/FeedBack/FeedbackOptions/FeedbackOptions';
import Statistics from './components/FeedBack/Statistics/Statistics';
import Notification from './components/FeedBack/Notification/Notification';

export default function App() {
  const OPTIONS = ['good', 'neutral', 'bad'];

  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const handleFeedback = evt => {
    switch (evt.target.name) {
      case 'good':
        setGoodFeedback(state => state + 1);
        break;
      case 'neutral':
        setNeutralFeedback(state => state + 1);
        break;
      case 'bad':
        setBadFeedback(state => state + 1);
        break;
      default:
        alert('Incorrect options detected!');
        break;
    }
  };

  const countTotalFeedback = () => {
    return goodFeedback + neutralFeedback + badFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (total > 0) {
      return Math.round((goodFeedback / total) * 100);
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={OPTIONS} onLeaveFeedback={handleFeedback} />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}
