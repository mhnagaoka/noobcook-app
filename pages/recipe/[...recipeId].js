import { useRouter } from "next/router";
import { useEffect } from "react";
import { Loader } from "../../src/app/Loader";

const RecipeIdPage = () => {
  const router = useRouter();
  const { recipeId } = router.query;
  useEffect(() => {
    if (recipeId && recipeId.length === 1) {
      router.push(`/recipe/${recipeId[0]}/1`);
    }
  }, [recipeId, router]);
  return recipeId && recipeId.length > 1 ? (
    <Loader url={`https://opensheet.vercel.app/${recipeId.join("/")}`} />
  ) : null;
};

export default RecipeIdPage;
