import {Path} from "../../constants/path";

export type TLink = "link activelink" | "link";

export type TActiveLink = Record<string, number>;

export interface ICustomLinkProps {
  title: string;
  path: Path;
  linkObj: TActiveLink;
  setLinkObj: React.Dispatch<React.SetStateAction<TActiveLink>>;
  className?: string;
}
