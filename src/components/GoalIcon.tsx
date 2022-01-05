import React, { MouseEventHandler } from 'react';

interface IGoalIcon {
  readonly index: number;
  readonly isComplete?: boolean;
  readonly markComplete: (index: number) => MouseEventHandler;
}

const GoalIcon: React.FunctionComponent<IGoalIcon> = ({
  index,
  isComplete = false,
  markComplete
}) => {
  const color = isComplete ? 'green' : 'grey';

  const handleClick = () => {
    markComplete(index);
  };

  return (
    <div style={{ color }} onClick={handleClick}>
      ICON
    </div>
  );
};

export default GoalIcon;
