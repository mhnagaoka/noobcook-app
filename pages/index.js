import { Loader } from "../src/app/Loader";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/recipe/1bYA5NIfIFGe9cu6SDX9hucmnpip7AnyVkBdzmJwK_FM/1");
  });
  return null;
};

export default Home;
