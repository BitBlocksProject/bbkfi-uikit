import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";
export interface Config {
    title: string;
    icon: FC<SvgProps>;
    link: string;
}
