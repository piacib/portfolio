export type Hrefs = {
  repoHref: `https://${string}` | "";
  demoHref: `https://${string}` | "";
  imageSrc: string;
  imageAlt: string;
  backgroundColor?: string;
};

export interface Passengers extends Hrefs {
  text: string;
  onClick?: () => void;
}
