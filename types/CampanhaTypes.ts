import { ImageType } from "./Types";

export type Campanha = {
  id: string;
  name: string;
  description: string;
  avatar: ImageType;
  isMaster: boolean;
};
