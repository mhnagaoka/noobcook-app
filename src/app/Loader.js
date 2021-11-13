import { useEffect, useState } from "react";
import { Recipe } from "../recipe/Recipe";
import { ErrorMessage } from "./ErrorMessage";
import { LoadingMessage } from "./LoadingMessage";

export function Loader({ url }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [steps, setSteps] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setSteps(json);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return loading ? (
    <LoadingMessage />
  ) : error ? (
    <ErrorMessage />
  ) : (
    <Recipe steps={steps} />
  );
}
