import { WrapperStatistic } from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
  return (
      <WrapperStatistic>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total()}</p>
          <p>Positive feedback: {positivePercentage()}%</p>
      </WrapperStatistic>
  );
};