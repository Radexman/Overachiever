const Guide = () => {
  return (
    <div className="w-full space-y-3 pb-16 lg:w-1/2">
      <h1 className="text-3xl font-bold">App Guide</h1>
      <p>
        Maximize your use of the Overachiever app with this step-by-step guide.
        Completing this brief tutorial ensures you're on the right track
      </p>
      <ul className="steps steps-vertical">
        <li className="step step-info">Customize your profile</li>
        <li className="step step-info">Add a couple tasks</li>
        <li className="step step-info">Complete tasks throughout the day</li>
        <li className="step step-info">Track your daily progress</li>
        <li className="step step-info">Finish the day and get report</li>
      </ul>
    </div>
  );
};

export default Guide;
