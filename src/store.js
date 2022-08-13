import { createStor } from "redux";
import reducers from "./reducers/index";

const store = createStor(reducers, {});

export default store;
