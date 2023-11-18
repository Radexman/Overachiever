const Guide = () => {
  return (
    <div className="w-full space-y-3 lg:w-1/2">
      <h1 className="text-3xl font-bold">App Guide</h1>
      <p>
        Follow these step by step guide to get the most out of Overachiever app.
        Finishing this small tutorial will make sure that you're on the right
        track
      </p>
      <ul className="steps steps-vertical font-semibold">
        <li className="step step-info">
          Customize your profile, set up username and avatar
        </li>
        <li className="step step-info">
          Add Tasks and customize them as you wish
        </li>
        <li className="step">Complete and add tasks throughout the day</li>
        <li className="step">Track your daily progress</li>
        <li className="step">Finish the day and get report</li>
      </ul>
    </div>
  );
};

export default Guide;
