import React, { useState } from 'react';

import GoalIcon from './GoalIcon';

const NUMBER_OF_STEPS = 5;

const icons = new Array(NUMBER_OF_STEPS).fill({}).map((e, i) => {
  return { id: i };
});

const GoalSteps: React.FunctionComponent = () => {
  const [completeCount, setCompleteCount] = useState<number>(0);

  const handleMarkComplete: any = (idx: number) => {
    setCompleteCount(idx + 1);
  };

  const handleReset = () => {
    setCompleteCount(0);
  };

  return (
    <>
      <div className="icons">
        {icons.map((icon, idx) => {
          const isComplete = idx < completeCount;
          const isDisabled = idx !== 0 && idx - completeCount >= 1;

          return (
            <GoalIcon
              key={icon.id}
              index={idx}
              isComplete={isComplete}
              isDisabled={isDisabled}
              markComplete={idx => handleMarkComplete(idx)}
            ></GoalIcon>
          );
        })}
      </div>

      <div className="controls">
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default GoalSteps;
