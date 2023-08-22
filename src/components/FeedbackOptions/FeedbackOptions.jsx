import { Button, WrapperButton } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
     const FirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return (
    <WrapperButton>
          {options.map(option => (
              <Button key={option} onClick={() => onLeaveFeedback(option)}> {FirstLetter(option)} </Button>
          ))}
    </WrapperButton>  
  );
};