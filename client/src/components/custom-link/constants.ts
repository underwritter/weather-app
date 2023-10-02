import {Link} from "./types";

export const linkStyle: Record<number, Link> = {
  1: "link activelink",
  0: "link",
};

export const INITIAL_STATE = {
  "/": 0,
  "/weather": 0,
  "/todo": 0,
  "/auth": 0,
};
