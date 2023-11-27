import { ButtonSection, ButtonHandle } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonSection>
      {options.map(option => (
        <ButtonHandle key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </ButtonHandle>
      ))}
    </ButtonSection>
  );
};
