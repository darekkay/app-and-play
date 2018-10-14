import Onitama from "./onitama/App";
import TheMind from "./themind/App";
import Tapple from "./tapple/App";

const routes = [
  {
    path: "/onitama",
    text: "Onitama",
    component: Onitama
  },
  {
    path: "/themind",
    text: "The Mind",
    component: TheMind
  },
  {
    path: "/tapple",
    text: "Tapple",
    component: Tapple
  }
];

export default routes;
