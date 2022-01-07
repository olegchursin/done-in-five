import React, { useEffect, useRef, useState } from 'react';

const GoalTitle: React.FunctionComponent = () => {
  const [goalTitle, setGoalTitle] = useState<string>('');

  const handleInput = ({ target: { value } }) => {
    setGoalTitle(value);
  };

  const filled = goalTitle.length ? 'filled' : '';

  return (
    <input
      type="text"
      className={filled}
      placeholder={'Your goal name'}
      value={goalTitle}
      onChange={handleInput}
    />
  );
};

export default GoalTitle;
