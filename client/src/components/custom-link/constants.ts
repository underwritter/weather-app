import { Path } from "../../constants/path";
import {TLink} from "./types";

export const linkStyle: Record<number, TLink> = {
  1: "link activelink",
  0: "link",
};

export const INITIAL_STATE = {
  [Path.Home]: 0,
  [Path.Weather]: 0,
  [Path.Funny]: 0,
  [Path.Auth]: 0,
};
