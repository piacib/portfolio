import * as React from "react";
import { SVGProps } from "react";

interface Props {
  props?: SVGProps<SVGSVGElement>;
}
const CssSvg: React.FC<Props> = ({ props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={386.916}
    height={546.133}
    viewBox="0 0 362.734 512"
    {...props}
  >
    <path
      style={{
        fill: "#264de4",
      }}
      d="m437.367 100.62-33.046 370.199L255.778 512l-148.134-41.123L74.633 100.62z"
      transform="translate(-74.633)"
    />
    <path
      style={{
        fill: "#2965f1",
      }}
      d="m376.03 447.246 28.24-316.352H256v349.629z"
      transform="translate(-74.633)"
    />
    <path
      style={{
        fill: "#ebebeb",
      }}
      d="m150.31 268.217 4.07 45.41H256v-45.41zM256 176.305H142.132l4.128 45.411H256zM256 433.399v-47.246l-.199.053-50.574-13.656-3.233-36.217h-45.585l6.362 71.301 93.02 25.823z"
      transform="translate(-74.633)"
    />
    <path d="M85.367 0h55v23h-32v23h32v23h-55zM151.367 0h55v20h-32v4h32v46h-55V49h32v-4h-32zM217.367 0h55v20h-32v4h32v46h-55V49h32v-4h-32z" />
    <path
      style={{
        fill: "#fff",
      }}
      d="m311.761 313.627-5.271 58.894-50.647 13.67v47.244l93.094-25.801.683-7.672 10.671-119.551 1.108-12.194 8.198-91.912H255.843v45.411h63.988l-4.132 46.501h-59.856v45.41z"
      transform="translate(-74.633)"
    />
  </svg>
);

export default CssSvg;
