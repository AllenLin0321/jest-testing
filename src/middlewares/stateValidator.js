import stateSchema from "./stateSchema";
import tv4 from "tv4";

export default ({ getState }) => next => action => {
  next(action);
  var valid = tv4.validate(getState(), stateSchema);

  if (!valid) {
    console.warn("Invalid state schema detected");
  }
};
