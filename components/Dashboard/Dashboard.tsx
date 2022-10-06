import { Tabs, Divider, Avatar } from "@mantine/core";
import Calendar from "components/icons/Calendar";
import Car from "components/icons/Car";
import MenuIcon from "components/icons/MenuIcon";
import Setting from "components/icons/Setting";
import UCarIcon from "components/icons/UCarIcon";
import React from "react";
import Info from "components/icons/Info";
import Bell from "components/icons/Bell";
import ChevronDown from "components/icons/ChevronDown";
import CarBrandTab from "./CarBrandTab";
import Link from "next/link";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Menu } from "components/Menu/type";
import MenuButtonGroup from "components/Menu/MenuButtonGroup";
import MenuButton from "components/Menu/MenuButton";
import CommonTab from "./CommonTab";


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
    const [hideMenu, setHideMenu] = React.useState(false)
    const [parent] = useAutoAnimate<HTMLElement>()

    return (
        <div className="flex">
            <nav ref={parent} style={{
                width: hideMenu ? 50 : 240,
                minWidth: hideMenu ? 50 : 240
            }} id='dashboard-menu' className=" bg-[#323435] font-['Source_Sans_Pro'] min-h-screen max-w-[240px] px-4 py-6 flex flex-col">
                <div className="flex items-center justify-between min-h-[40px]">
                    {!hideMenu && <Link href="/" passHref>
                        <a>
                            <UCarIcon className="cursor-pointer" width={102.91} height={28.07} />
                        </a>
                    </Link>}
                    <MenuIcon style={{
                        ...(hideMenu && { margin: '0px auto' })
                    }} onClick={() => {
                        setHideMenu(prev => !prev)
                    }} className="cursor-pointer" />
                </div>
                {!hideMenu &&
                    <>
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
                    </>
                }


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
                <Tabs classNames={{
                    panel: 'h-full',
                    root: 'h-full'
                }} value={currentTab}>
                    <Tabs.Panel value="car-brand" >
                        <CarBrandTab />
                    </Tabs.Panel>

                    <Tabs.Panel value="folder" >
                        <CommonTab className="font-medium text-2xl bg-slate-600 grid place-content-center min-h-full">
                            Folder Menu Not Yet Implemented
                        </CommonTab>
                    </Tabs.Panel>
                    <Tabs.Panel value="menuitem-1" >
                        <CommonTab className="font-medium text-2xl bg-slate-600 grid place-content-center min-h-full">
                            Menu Item 1 Not Yet Implemented
                        </CommonTab>
                    </Tabs.Panel>
                    <Tabs.Panel value="menuitem-2" >
                        <CommonTab className="font-medium text-2xl bg-slate-600 grid place-content-center min-h-full">
                            Menu Item 2 Not Yet Implemented
                        </CommonTab>
                    </Tabs.Panel>
                    <Tabs.Panel value="menuitem-3" >
                        <CommonTab className="font-medium text-2xl bg-slate-600 grid place-content-center min-h-full">
                            Menu Item 3 Not Yet Implemented
                        </CommonTab>
                    </Tabs.Panel>
                    <Tabs.Panel value="menuitem-4" >
                        <CommonTab className="font-medium text-2xl bg-slate-600 grid place-content-center min-h-full">
                            Menu Item 4 Not Yet Implemented
                        </CommonTab>
                    </Tabs.Panel>

                    <Tabs.Panel value="tasks" >
                        <CommonTab className="font-medium text-2xl bg-slate-600 grid place-content-center min-h-full">
                            Task Menu Not Yet Implemented
                        </CommonTab>
                    </Tabs.Panel>

                    <Tabs.Panel value="modules">
                        <CommonTab className="font-medium text-2xl bg-slate-600 grid place-content-center min-h-full">
                            Modules Menu Not Yet Implemented
                        </CommonTab>
                    </Tabs.Panel>

                    <Tabs.Panel value="notification">
                        <CommonTab className="font-medium text-2xl bg-slate-600 grid place-content-center min-h-full">
                            Notification Menu Not Yet Implemented
                        </CommonTab>
                    </Tabs.Panel>

                    <Tabs.Panel value="setting">
                        <CommonTab className="font-medium text-2xl bg-slate-600 grid place-content-center min-h-full">
                            Setting Menu Not Yet Implemented
                        </CommonTab>
                    </Tabs.Panel>
                </Tabs>
            </div>


        </div>
    )
}

export default Dashboard