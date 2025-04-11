import { FC, SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> { }

const CloseIcon: FC<IProps> = (props) => {
    return (
        <svg
            {...props}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    );
};
export default CloseIcon;
