import thunk from "redux-thunk";
import logger from "./logger";
import { appyMiddleware } from "redux";

export default applyMiddleware(thunk, logger);
