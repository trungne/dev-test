import { Tabs, Divider, Avatar, Accordion } from "@mantine/core";
import UnstyledButton from "components/Common/UnstyledButton";
import Calendar from "components/icons/Calendar";
import Car from "components/icons/Car";
import MenuIcon from "components/icons/MenuIcon";
import Setting from "components/icons/Setting";
import UCarIcon from "components/icons/UCarIcon";
import React from "react";
import cx from "classnames"
import Info from "components/icons/Info";
import Bell from "components/icons/Bell";
import ChevronDown from "components/icons/ChevronDown";
import CarBrandTab from "./CarBrandTab";
import Link from "next/link";
import { IconType } from "shared/types";

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

type Menu = {
    name: string,
    value: string,
    subMenu?: Omit<Menu, 'Icon' | 'subMenu'>[], // only allow one level of sub menus
    Icon: IconType
}
const MENU_LIST: Menu[] = [
    { name: 'Car Brand', value: 'car-brand', Icon: Car },
    {
        name: 'Folder',
        value: 'folder',
        subMenu: [
            { name: 'Menu Item', value: 'menuitem-1' },
            { name: 'Menu Item', value: 'menuitem-2' },
            { name: 'Menu Item', value: 'menuitem-3' },
            { name: 'Menu Item', value: 'menuitem-4' },

        ],
        Icon: Calendar
    },
    { name: 'Tasks', value: 'tasks', Icon: Calendar },
    { name: 'Modules', value: 'modules', Icon: Calendar },
    { name: 'Notification', value: 'notification', Icon: Calendar },
]

const SETTING_MENU: Menu = { name: 'Setting', value: 'setting', Icon: Setting }
const Dashboard: React.FC = () => {
    const [currentTab, setCurrentTab] = React.useState<Menu['value']>('car-brand')

    return (
        <div className="flex">
            <nav className="bg-[#323435] font-['Source_Sans_Pro'] min-h-screen flex-1 min-w-[240px] max-w-[240px] px-4 py-6 flex flex-col">
                <div className="flex items-center justify-between">
                    <Link href="/" passHref>
                        <a>
                            <UCarIcon className="cursor-pointer" width={102.91} height={28.07} />
                        </a>
                    </Link>
                    <MenuIcon className="cursor-pointer" />
                </div>
                <div className="flex flex-col grow overflow-y-scroll scrollbar-hide mt-11">
                    {MENU_LIST.map(menu => {
                        if (menu.subMenu) {
                            return <MenuButtonGroup
                                key={menu.value}
                                label={menu.name}
                                active={menu.value === currentTab || menu.subMenu.findIndex(item => item.value === currentTab) !== -1}
                                onClick={() => setCurrentTab(menu.value)}
                                onSetTab={(tab) => {
                                    setCurrentTab(tab)
                                }}
                                Icon={menu.Icon}
                                subMenus={menu.subMenu}
                            />
                        }

                        return <MenuButton
                            key={menu.value}
                            active={menu.value === currentTab}
                            label={menu.name}
                            Icon={menu.Icon}
                            onClick={() => setCurrentTab(menu.value)} />
                    })}
                </div>
                <Divider />
                <MenuButton key={'setting menu'} label={SETTING_MENU.name} Icon={SETTING_MENU.Icon} onClick={() => { setCurrentTab(SETTING_MENU.value) }} active={currentTab === SETTING_MENU.value} />
            </nav>
            <div className="grow max-h-screen overflow-y-auto scrollbar-hide">
                <div className="flex items-center justify-end py-4 px-6 gap-4">
                    <Info />
                    <Bell />
                    <div className="flex items-center">
                        <Avatar radius="xl" classNames={{ root: "h-[32px] w-[32px] aspect-square" }} className="mr-2" />
                        <span className="mr-3">Admin</span>
                        <ChevronDown />
                    </div>
                </div>
                <Divider />
                <Tabs value={currentTab}>
                    <Tabs.Panel value="car-brand" >
                        <CarBrandTab />
                    </Tabs.Panel>

                    <Tabs.Panel value="folder" >
                        folder
                    </Tabs.Panel>
                    <Tabs.Panel value="menuitem-1" >
                        menuitem-1
                    </Tabs.Panel>
                    <Tabs.Panel value="menuitem-2" >
                        menuitem-2
                    </Tabs.Panel>
                    <Tabs.Panel value="menuitem-3" >
                        menuitem-3
                    </Tabs.Panel>
                    <Tabs.Panel value="menuitem-4" >
                        menuitem-4
                    </Tabs.Panel>

                    <Tabs.Panel value="tasks" >
                        tasks
                    </Tabs.Panel>

                    <Tabs.Panel value="modules">
                        modules
                    </Tabs.Panel>

                    <Tabs.Panel value="notification">
                        notification
                    </Tabs.Panel>

                    <Tabs.Panel value="setting">
                        setting
                    </Tabs.Panel>
                </Tabs>
            </div>


        </div>
    )
}

export default Dashboard