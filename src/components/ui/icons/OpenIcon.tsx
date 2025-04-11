import { FC, SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> { }

const OpenIcon: FC<IProps> = (props) => {
    return (
        <svg
            {...props}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>);
};
export default OpenIcon;
