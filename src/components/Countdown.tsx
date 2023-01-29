import { useEffect, useState } from "react";

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const targetTime = new Date(targetDate).getTime();
      const timeLeft = targetTime - currentTime;

      if (timeLeft < 0) {
        clearInterval(intervalId);
      } else {
        setTimeLeft({
          days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const clockClassName =
    "rounded-box flex flex-col bg-base-100 p-2 text-base-content shadow-md";

  const wordClassName = "text-xs";

  return (
    <div className="mx-auto flex gap-2 pt-2 text-center sm:mx-0">
      <div className={clockClassName}>
        <span className="countdown font-mono text-4xl">
          <span
            style={
              {
                "--value": timeLeft.days >= 100 ? 99 : timeLeft.days,
              } as React.CSSProperties
            }
          />
        </span>
        <span className={wordClassName}>days</span>
      </div>
      <div className={clockClassName}>
        <span className="countdown font-mono text-4xl">
          <span
            style={
              {
                "--value": timeLeft.hours,
              } as React.CSSProperties
            }
          />
        </span>
        <span className={wordClassName}>hours</span>
      </div>
      <div className={clockClassName}>
        <span className="countdown font-mono text-4xl">
          <span
            style={
              {
                "--value": timeLeft.minutes,
              } as React.CSSProperties
            }
          />
        </span>
        <span className={wordClassName}>minutes</span>
      </div>
      <div className={clockClassName}>
        <span className="countdown font-mono text-4xl">
          <span
            style={
              {
                "--value": timeLeft.seconds,
              } as React.CSSProperties
            }
          />
        </span>
        <span className={wordClassName}>seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
