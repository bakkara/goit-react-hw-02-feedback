import { Button, WrapperButton } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <WrapperButton>
          {options.map(option => (
              <Button key={option} onClick={() => onLeaveFeedback(option)}> {option} </Button>
          ))}
    </WrapperButton>  
  );
};