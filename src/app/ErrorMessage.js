import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export function ErrorMessage() {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://media.giphy.com/media/fAaBpMgGuyf96/giphy.gif"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Ops!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Não foi possível abrir sua receita. Por favor confirme se a URL está
          correta ou tente novamente mais tarde.
        </Typography>
      </CardContent>
    </Card>
  );
}
