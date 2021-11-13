import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export function LoadingMessage() {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image="https://media.giphy.com/media/ieaUdBJJC19uw/giphy.gif"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Aguarde...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Estamos carregando sua receita.
        </Typography>
      </CardContent>
    </Card>
  );
}
