import {Path} from "../../constants/path";

export type Link = "link activelink" | "link";

export type ActiveLink = Record<string, number>;

export interface CustomLinkProps {
  title: string;
  path: Path;
  linkObj: ActiveLink;
  setLinkObj: React.Dispatch<React.SetStateAction<ActiveLink>>;
  className?: string;
}
