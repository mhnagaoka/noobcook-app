import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Timer } from "../timer/Timer";

export function RecipeStep({
  title,
  description,
  image,
  remainingTime,
  totalTime,
  simple = true,
  stepNumber = 1,
  stepCount = 1,
  enableBack = true,
  enableForward = true,
  onBack,
  onForward,
}) {
  return (
    <Card>
      {image && <CardMedia component="img" height="140" image={image} />}
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {totalTime != null && (
        <CardContent>
          <Timer
            remainingTime={remainingTime}
            totalTime={totalTime}
            simple={simple}
          />
        </CardContent>
      )}
      <CardActions>
        <Grid container justifyContent="space-around">
          <Grid item>
            <Button size="small" disabled={!enableBack} onClick={onBack}>
              <ArrowBackIcon />
            </Button>
          </Grid>
          <Grid item>
            <Typography>
              {stepNumber}/{stepCount}
            </Typography>
          </Grid>
          <Grid item>
            <Button size="small" disabled={!enableForward} onClick={onForward}>
              <ArrowForwardIcon />
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
