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

export function Timer({
  totalTime,
  remainingTime,
  onPlusOne,
  onMinusOne,
  onReset,
  onStart,
  onPause,
  running,
  simple = true,
}) {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
          size="small"
        >
          <Button onClick={onMinusOne}>
            <RemoveIcon />
          </Button>
          <Button onClick={onPlusOne}>
            <AddIcon />
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
              <Display millis={remainingTime} />
            </Typography>
          </Box>
          <CircularProgress
            size={200}
            variant="determinate"
            value={Math.min(100, (100 * remainingTime) / totalTime)}
          />
        </Grid>
      )}
      {simple && (
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            <Display millis={remainingTime} />
          </Typography>
        </Grid>
      )}
      <Grid item>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
          size="small"
        >
          <Button onClick={onReset}>
            <SettingsBackupRestoreIcon />
          </Button>
          <Button>
            {running ? (
              <PauseIcon onClick={onPause} />
            ) : (
              <PlayArrowIcon onClick={onStart} />
            )}
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
