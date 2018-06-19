import Onitama from "./onitama/App";
import TheMind from "./themind/App";

const routes = [
  {
    path: "/onitama",
    text: "Onitama",
    color: "#ebd695",
    component: Onitama
  },
  {
    path: "/themind",
    text: "The Mind",
    color: "#1d3d6b",
    component: TheMind
  }
];

export default routes;
