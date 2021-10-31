export interface Character {
  [comics: string]: any;
  description: string;
  events: object;
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  series: object;
  stories: object;
  thumbnail: {
    path: string;
    extension: string;
  };
  image: string;
}
