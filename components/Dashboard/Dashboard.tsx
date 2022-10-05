import { Tabs, Divider, Avatar } from "@mantine/core";
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
type MenuButtonProps = {
    label: string,
    active: boolean,
    onClick: () => void,
    Icon: React.NamedExoticComponent<React.SVGProps<SVGSVGElement> & {
        width?: number,
        height?: number,
        fill?: string
    }>
}
const MenuButton: React.FC<MenuButtonProps> = ({ label, active, onClick, Icon }) => {
    return <UnstyledButton onClick={onClick} className={cx("flex items-center rounded-md py-[14px] px-[22px]", active ? "bg-secondary-main" : "bg-transparent")} >
        <>
            <Icon fill={active ? "white" : "#8C8C8C"} /><span className={cx("ml-4 text-lg leading-6", active ? "text-white" : "text-neutral-6")}>{label}</span>
        </>
    </UnstyledButton>
}

const CarBrandSection: React.FC = () => {
    return <div>

    </div>
}

type TabsType = 'car-brand' | 'folder' | 'tasks' | 'modules' | 'notification' | 'setting'
const Dashboard: React.FC = () => {
    const [currentTab, setCurrentTab] = React.useState<TabsType>('car-brand')
    console.log('currentTab', currentTab)
    return (
        <div className="flex">
            <nav className="bg-[#323435] min-h-screen flex-1 max-w-[240px] px-4 py-6 flex flex-col">
                <div className="flex items-center justify-between">
                    <UCarIcon width={102.91} height={28.07} />
                    <MenuIcon />
                </div>
                <div className="flex flex-col grow overflow-y-scroll scrollbar-hide mt-11">
                    <MenuButton label="Car Brand" Icon={Car} onClick={() => { setCurrentTab('car-brand') }} active={currentTab === 'car-brand'} />
                    <MenuButton label="Folder" Icon={Calendar} onClick={() => { setCurrentTab('folder') }} active={currentTab === 'folder'} />
                    <MenuButton label="Tasks" Icon={Calendar} onClick={() => { setCurrentTab('tasks') }} active={currentTab === 'tasks'} />
                    <MenuButton label="Modules" Icon={Calendar} onClick={() => { setCurrentTab('modules') }} active={currentTab === 'modules'} />
                    <MenuButton label="Notification" Icon={Calendar} onClick={() => { setCurrentTab('notification') }} active={currentTab === 'notification'} />
                </div>
                <Divider />
                <MenuButton label="Setting" Icon={Setting} onClick={() => { setCurrentTab('setting') }} active={currentTab === 'setting'} />
            </nav>
            <div className="grow">
                <div className="flex items-center justify-end py-4 px-6 gap-4">
                    <Info />
                    <Bell />
                    <div className="flex items-center">
                        <Avatar radius="xl" classNames={{ root: "h-[36px] w-[36px]" }} size="md" className="mr-2" />
                        <span className="mr-3">Admin</span>
                        <ChevronDown />
                    </div>
                </div>
                <Divider />
                <Tabs value={currentTab}>
                    <Tabs.Panel value="car-brand" pt="xs">
                        car-brand
                    </Tabs.Panel>

                    <Tabs.Panel value="folder" pt="xs">
                        folder
                    </Tabs.Panel>

                    <Tabs.Panel value="tasks" pt="xs">
                        tasks
                    </Tabs.Panel>

                    <Tabs.Panel value="modules" pt="xs">
                        modules
                    </Tabs.Panel>

                    <Tabs.Panel value="notification" pt="xs">
                        notification
                    </Tabs.Panel>

                    <Tabs.Panel value="setting" pt="xs">
                        setting
                    </Tabs.Panel>
                </Tabs>
            </div>


        </div>
    )
}

export default Dashboard