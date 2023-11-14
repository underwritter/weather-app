import {TLink} from "./types";

export const linkStyle: Record<number, TLink> = {
  1: "link activelink",
  0: "link",
};

export const INITIAL_STATE = {
  "/": 0,
  "/weather": 0,
  "/funny": 0,
  "/auth": 0,
};
