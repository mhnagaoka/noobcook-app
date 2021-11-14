import {
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Display } from "./Display";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PauseIcon from "@mui/icons-material/Pause";
import { useTimer } from "react-timer-hook";
import { useState } from "react";

function format(value) {
  return value < 10 ? `0${value}` : value;
}

export function Timer({ totalTime, simple = true }) {
  const [totalSeconds, setTotalSeconds] = useState(totalTime * 60);
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: Date.now() + totalSeconds * 1000,
    autoStart: false,
    onExpire: () => console.warn("onExpire called"),
  });
  const remainingTime = days * 86400 + hours * 3600 + minutes * 60 + seconds;
  // console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
          size="small"
        >
          <Button
            onClick={() => {
              const time = new Date();
              const newRemainingTime = remainingTime - 3600;
              time.setSeconds(time.getSeconds() + newRemainingTime);
              setTotalSeconds(newRemainingTime);
              restart(time, isRunning);
            }}
            disabled={
              days === 0 && hours * 3600 + minutes * 60 + seconds < 3601
            }
          >
            -60m
          </Button>
          <Button
            onClick={() => {
              const time = new Date();
              const newRemainingTime = remainingTime - 600;
              time.setSeconds(time.getSeconds() + newRemainingTime);
              setTotalSeconds(newRemainingTime);
              restart(time, isRunning);
            }}
            disabled={days * 24 + hours === 0 && minutes * 60 + seconds < 601}
          >
            -10m
          </Button>
          <Button
            onClick={() => {
              const time = new Date();
              const newRemainingTime = remainingTime - 60;
              time.setSeconds(time.getSeconds() + newRemainingTime);
              setTotalSeconds(newRemainingTime);
              restart(time, isRunning);
            }}
            disabled={days * 24 + hours === 0 && minutes * 60 + seconds < 61}
          >
            -1m
          </Button>
          <Button
            onClick={() => {
              const time = new Date();
              const newRemainingTime = remainingTime + 60;
              time.setSeconds(time.getSeconds() + newRemainingTime);
              setTotalSeconds(newRemainingTime);
              restart(time, isRunning);
            }}
            disabled={days * 24 + hours > 98 && minutes >= 59}
          >
            +1m
          </Button>
          <Button
            onClick={() => {
              const time = new Date();
              const newRemainingTime = remainingTime + 600;
              time.setSeconds(time.getSeconds() + newRemainingTime);
              setTotalSeconds(newRemainingTime);
              restart(time, isRunning);
            }}
            disabled={days * 24 + hours > 98 && minutes >= 50}
          >
            +10m
          </Button>
          <Button
            onClick={() => {
              const time = new Date();
              const newRemainingTime = remainingTime + 3600;
              time.setSeconds(time.getSeconds() + newRemainingTime);
              setTotalSeconds(newRemainingTime);
              restart(time, isRunning);
            }}
            disabled={days * 24 + hours > 98}
          >
            +60m
          </Button>
        </ButtonGroup>
      </Grid>
      {!simple && (
        <Grid item xs={12} textAlign="center">
          <Box
            sx={{
              position: "relative",
              top: 105,
              right: 0,
              left: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: 4,
            }}
          >
            <Typography variant="h4">
              {days > 0 || hours > 0
                ? `${format(days * 24 + hours)}:${format(minutes)}:${format(
                    seconds
                  )}`
                : `${format(minutes)}:${format(seconds)}`}
            </Typography>
          </Box>
          <CircularProgress
            size={200}
            variant="determinate"
            value={Math.min(100, (remainingTime * 100) / totalSeconds)}
          />
        </Grid>
      )}
      {simple && (
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            {days > 0 || hours > 0
              ? `${format(days * 24 + hours)}:${format(minutes)}:${format(
                  seconds
                )}`
              : `${format(minutes)}:${format(seconds)}`}
          </Typography>
        </Grid>
      )}
      <Grid item>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
          size="small"
        >
          <Button
            onClick={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + totalTime * 60);
              setTotalSeconds(totalTime * 60);
              restart(time, false);
            }}
          >
            <SettingsBackupRestoreIcon />
          </Button>
          {isRunning ? (
            <Button onClick={pause} disabled={remainingTime <= 0}>
              <PauseIcon />
            </Button>
          ) : (
            <Button onClick={resume} disabled={remainingTime <= 0}>
              <PlayArrowIcon />
            </Button>
          )}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
