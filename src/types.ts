export type Hrefs = {
  repoHref: `https://${string}` | "";
  demoHref: `https://${string}` | "";
  imageSrc: string;
  imageAlt: string;
  backgroundColor?: string;
};

export interface WheelData extends Hrefs {
  text: string;
  href: string;
  onClick?: () => void;
  skills?: string[];
}
export interface ProjectType extends WheelData {
  skills: string[];
}
