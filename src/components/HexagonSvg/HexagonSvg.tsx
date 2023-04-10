import variables from "./style.module.scss";
const HexagonSvg = (props: { [k in string]: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={variables.svgWidth}
    height={variables.svgHeight}
    {...props}
  >
    <path
      d="M0 0h304v352H0z"
      style={{
        fill: "none",
      }}
    />
    <path
      d="M2 88.603 152 2l150 86.603v173.215L152 350.41 2 261.808z"
      style={{
        strokeWidth: 3,
        strokeLinejoin: "round",
      }}
    />
  </svg>
);
export default HexagonSvg;
