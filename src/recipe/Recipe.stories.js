import { Box } from "@mui/system";
import { Recipe } from "./Recipe";

export default {
  title: "recipe/Recipe",
  component: Recipe,
  argTypes: {
    steps: {
      control: {
        type: "array",
      },
    },
  },
};

const RecipeTemplate = (args) => {
  return (
    <Box>
      <Recipe {...args} />
    </Box>
  );
};

export const BreadRecipe = RecipeTemplate.bind({});
BreadRecipe.args = {
  steps: [
    {
      title: "Passo 1",
      description:
        "Misture todos os ingredientes num bowl: 300 g de farinha de trigo, 9 g de sal, 3 g de fermento biológico seco.",
    },
    { title: "Passo 2", description: "Adicione a água (180 ml)." },
    {
      title: "Passo 3",
      description:
        "Misture tudo com uma espátula ou colher de pau até que tudo seja incorporado e não haja mais ingredientes secos no bowl. Se necessário, adicione água aos poucos (uma colher de sopa por vez) e vá misturando.",
    },
    {
      title: "Passo 4",
      description: "Cubra com plástico filme e coloque na geladeira.",
    },
    {
      title: "Passo 5",
      description: "Aguarde 15 minutos.",
      image: "",
      totalTime: "15",
    },
    {
      title: "Passo 6",
      description:
        "Retire o bowl da geladeira e coloque a massa sobre uma superfície lisa.",
    },
    {
      title: "Passo 7",
      description: "Sove por 10 minutos.",
      image: "",
      totalTime: "10",
    },
    {
      title: "Passo 8",
      description:
        "Coloque a massa num recipiente tampado e aguarde até dobrar de tamanho (a 24°C demora cerca de 1 hora).",
      image: "https://media.giphy.com/media/M6qXhksKxDfry/giphy.gif",
      totalTime: "60",
    },
    {
      title: "Passo 9",
      description: "Retire do recipiente, faça uma bola e cubra.",
    },
    {
      title: "Passo 10",
      description: "Aguarde 15 minutos.",
      image: "",
      totalTime: "16",
    },
    {
      title: "Passo 11",
      description: "Abra a massa sem pressionar muito e modele.",
    },
    {
      title: "Passo 12",
      description:
        "Aguarde até aumentar uns 50% (tipicamente 30 minutos a 24°C). Quando faltar uns 15 minutos, ligue o forno na temperatura máxima com a panela de ferro fundido dentro.",
      image: "",
      totalTime: "30",
    },
    {
      title: "Passo 13",
      description:
        "Retire a panela, coloque a massa dentro, tampe e coloque-a de volta ao forno.",
    },
    { title: "Passo 14", description: "Reduza a temperatura para 230°C." },
    {
      title: "Passo 15",
      description: "Asse por 15 minutos.",
      image: "",
      totalTime: "15",
    },
    { title: "Passo 16", description: "Destampe a panela mantendo-a no forno" },
    {
      title: "Passo 17",
      description:
        "Asse por mais 20 minutos ou até dourar de acordo com sua preferência.",
      image: "",
      totalTime: "20",
    },
    {
      title: "Passo 18",
      description:
        "Desligue o forno, retire o pão da panela e coloque sobre uma grade de resfriamento.",
    },
    {
      title: "Passo 19",
      description: "Aguarde cerca de 1 ou 2 horas ou até resfriar.",
      image: "",
      totalTime: "90",
    },
    {
        title: "Passo 20",
        description: "Aproveite!",
      },
    ],
};
