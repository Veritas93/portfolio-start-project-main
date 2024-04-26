import IconSprite from "./../../assets/images/code-svg.svg";

type iconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  vieBox?: string;
};

export const Icon = (props: iconPropsType) => {
  return (
    <svg
      width={props.width || "120"}
      height={props.height || "120"}
      viewBox={props.vieBox || "0 0 120 120"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${IconSprite}#${props.iconId}`} />
    </svg>
  );
};
