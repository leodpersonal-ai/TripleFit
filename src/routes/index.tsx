import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore: O MVP mantém o componente original em JSX.
import TripleFit from "../App.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TripleFit | Seu treino de academia" },
      { name: "description", content: "Monte sua rotina de musculação com o TripleFit." },
    ],
  }),
  component: TripleFit,
});
