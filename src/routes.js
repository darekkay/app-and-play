import Onitama from "./onitama/App";
import Tapple from "./tapple/App";
import TheMind from "./themind/App";
import Words from "./words/App";

const routes = [
  {
    path: "/onitama",
    text: "Onitama",
    component: Onitama
  },
  {
    path: "/tapple",
    text: "Tapple",
    component: Tapple
  },
  {
    path: "/themind",
    text: "The Mind",
    component: TheMind
  },
  {
    path: "/words",
    text: "Words",
    component: Words
  }
];

export default routes;
