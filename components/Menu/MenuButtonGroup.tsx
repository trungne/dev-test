import { Divider, Accordion } from "@mantine/core";
import React from "react";
import cx from "classnames"
import { Menu } from "./type";
import MenuButton from "./MenuButton";

type MenuButtonGroupProps = {
    label: string,
    active: boolean,
    onClick: () => void,
    onSetTab: (tab: string) => void,
    Icon: React.NamedExoticComponent<React.SVGProps<SVGSVGElement> & {
        width?: number,
        height?: number,
        fill?: string
    }>,
    subMenus: Menu['subMenu']
}
const MenuButtonGroup: React.FC<MenuButtonGroupProps> = ({ label, active, onSetTab, Icon, subMenus, onClick }) => {
    const [currentSubMenu, setCurrentSubMenu] = React.useState<Menu['value'] | null>(null)
    const [value, setValue] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (!active) {
            setCurrentSubMenu(null)
            setValue(null)
        }

    }, [active])

    return (
        <Accordion transitionDuration={300} value={value} onChange={setValue} classNames={{
            control: cx('p-0 rounded-md', active ? "bg-secondary-main hover:bg-secondary-main" : "bg-transparent hover:bg-transparent"),
            item: 'border-b-0',
            chevron: 'fill-neutral-6',
            content: 'px-1 py-0'
        }}>
            <Accordion.Item value="item-1">
                <Accordion.Control onClick={onClick}>
                    <div className={cx("rounded-md  py-[14px] px-[22px] flex items-center", active ? "bg-secondary-main" : "bg-transparent")}>
                        <Icon fill={active ? "white" : "#8C8C8C"} />
                        <span className={cx("ml-4 bg-transparent text-lg leading-6", active ? "text-white" : "text-neutral-6")}>{label}</span>
                    </div>
                </Accordion.Control>
                <div className="relative flex">
                    <Divider style={{
                        top: '50%',
                        transform: 'translate(0%, -50%)'
                    }} size="xs" className="absolute left-0 h-3/4 ml-4  border-l-neutral-6" orientation="vertical" />
                    <div>
                        {subMenus?.map((menu, idx) => {
                            return (
                                <Accordion.Panel key={menu.value + idx}>
                                    <MenuButton
                                        className="!bg-transparent"
                                        active={menu.value === currentSubMenu}
                                        label={menu.name}
                                        onClick={() => {
                                            setCurrentSubMenu(menu.value)
                                            onSetTab(menu.value)
                                        }} />
                                </Accordion.Panel>
                            )
                        })}
                    </div>
                </div>
            </Accordion.Item>
        </Accordion>
    )
}

export default MenuButtonGroup