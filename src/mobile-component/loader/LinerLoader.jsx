import * as React from "react";

import LinearProgress from "@mui/material/LinearProgress";
import "./linearloader.scss";

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="linearLoader">
      <div className="w-100">
        <div className="slogan">Professional approach</div>
        <LinearProgress variant="determinate" value={progress} />
      </div>
    </div>
  );
}
