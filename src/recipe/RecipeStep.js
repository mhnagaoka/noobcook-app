import Slide from "@mui/material/Slide";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  AppBar,
  Button,
  ButtonGroup,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { Timer } from "../timer/Timer";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useState } from "react";

export function RecipeStep({
  title,
  description,
  image,
  remainingTime,
  totalTime,
  simple = true,
  stepNumber = 1,
  stepCount = 1,
  enableFirst = false,
  enableBack = false,
  enableForward = false,
  enableLast = false,
  onFirst = () => {},
  onBack,
  onForward,
  onLast = () => {},
}) {
  return (
    <Dialog fullScreen open={true}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            beginner.recipes
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <DialogContent>
        {image && <CardMedia component="img" height="140" image={image} />}
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {totalTime != null && (
          <Timer
            remainingTime={remainingTime}
            totalTime={totalTime}
            simple={simple}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Grid container justifyContent="space-around">
          <Grid item>
            <ButtonGroup variant="text">
              <Button size="large" disabled={!enableFirst} onClick={onFirst}>
                <FirstPageIcon />
              </Button>
              <Button size="large" disabled={!enableBack} onClick={onBack}>
                <NavigateBeforeIcon />
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <Typography>
              {stepNumber}/{stepCount}
            </Typography>
          </Grid>
          <Grid item>
            <ButtonGroup variant="text">
              <Button
                size="large"
                disabled={!enableForward}
                onClick={onForward}
              >
                <NavigateNextIcon />
              </Button>
              <Button size="large" disabled={!enableLast} onClick={onLast}>
                <LastPageIcon />
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
