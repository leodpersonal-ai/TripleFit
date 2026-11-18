import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore: Landing page component is in JSX.
import ClinPharm from "../App.jsx";
export const Route = createFileRoute("/")({head:()=>({meta:[{title:"ClinPharm Guide | Atlas Visual de Farmacología"},{name:"description",content:"200 fichas visuales de medicamentos y 3 guías complementarias para estudiar farmacología en español."}]}),component:ClinPharm});
