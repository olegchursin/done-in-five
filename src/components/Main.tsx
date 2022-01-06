import React from 'react';

import GoalSteps from './GoalSteps';
import GoalTitle from './GoalTitle';

const Main: React.FunctionComponent = () => {
  return (
    <main>
      <GoalTitle />
      <GoalSteps />
    </main>
  );
};

export default Main;
