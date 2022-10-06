import UnstyledButton from "components/Common/UnstyledButton";
import React from "react";
import cx from "classnames"
import { Menu } from "./type";

type MenuButtonProps = {
    label: Menu['name'],
    active: boolean,
    onClick: () => void,
    Icon?: React.NamedExoticComponent<React.SVGProps<SVGSVGElement> & {
        width?: number,
        height?: number,
        fill?: string
    }>
    className?: string,

}
const MenuButton: React.FC<MenuButtonProps> = ({ label, active, onClick, Icon, className }) => {
    return <UnstyledButton onClick={onClick} className={cx("flex items-center rounded-md py-[14px] px-[22px]",
        active ? "bg-secondary-main" : "bg-transparent", className)}
    >
        <>
            {Icon && <Icon fill={active ? "white" : "#8C8C8C"} />}<span className={cx("ml-4 text-lg leading-6", active ? "text-white" : "text-neutral-6")}>{label}</span>
        </>
    </UnstyledButton>
}


export default MenuButton