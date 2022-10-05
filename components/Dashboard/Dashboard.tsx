import { Tabs, Divider, Avatar, TextInput, Radio } from "@mantine/core";
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
import SearchIcon from "components/icons/SearchIcon";
import { IconPlus, IconPoint } from "@tabler/icons";
import { useGetCarBrandsQuery } from "store/carapi.slice";
import { CarBrand } from "shared/types";
import Image from "next/image";
import dayjs from "dayjs";
import { useDashboardState } from "store/store";
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

const CarBrandInfo: React.FC<{ brand: CarBrand }> = ({ brand }) => {
    const { viewCarBrandOption } = useDashboardState()
    const activeColor = React.useMemo(() => {
        return brand.isActive ? '#1F7B4D' : '#5F5F5F'
    }, [brand.isActive])
    return (
        <div className="flex px-6 py-[30px] items-center flex-wrap">
            <div className="flex items-center min-w-[600px] max-w-[600px]">
                <Radio value={brand.name} />

                <div className="mx-10 relative w-[64px] h-[64px]">
                    <Image alt="logo" layout="fill" src={brand.logoURL} />
                </div>

                <Divider orientation="vertical" size="sm" color={brand.isActive ? "green" : "gray"} />

                <div className="ml-10">
                    <span className="text-[20px] leading-[30px] font-medium text-primary-dark-1">{brand.name}</span>
                    <div className="flex gap-4 mt-1 items-center">
                        <span className="max-w-[200px] text-ellipsis overflow-hidden whitespace-nowrap ">
                            {brand.description}
                        </span>
                        <Divider orientation="vertical" />
                        <span className="text-sm leading-[22px] text-secondary-main font-bold">
                            {brand.numberOfModels} {brand.numberOfModels === 1 ? 'Model' : 'Models'}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-center grow">
                <div>
                    <div className=" text-primary-dark-1 text-sm leading-[22px] font-bold mb-3">
                        Last Update
                    </div>
                    <div className="text-neutral-6 text-sm leading-[22px] font-normal">
                        {dayjs(brand.lastUpdate).format('DD/MM/YYYY')}
                    </div>
                </div>
                <div className="flex gap-2 py-2 px-5 ml-16 bg-neutral-2">
                    <IconPoint width={24} height={24}
                        fill={activeColor}
                        color={activeColor} />
                    <span className="text-base font-bold" style={{
                        color: activeColor,
                    }}>{brand.isActive ? 'Active' : 'Inactive'}</span>
                </div>

                <UnstyledButton className="bg-white 
                ml-auto
                rounded-[4px]
                !border-solid border border-neutral-5
                py-[9px] px-4 
                text-sm 
                leading-[22px] 
                font-semibold">View Details</UnstyledButton>
            </div>

        </div>
    )
}

const CarBrandSection: React.FC = () => {
    const { data: carBrands } = useGetCarBrandsQuery()

    if (!carBrands) {
        return null
    }

    return (
        <div className="py-[30px] px-[42px] font-['Poppins']">
            <div id="car-brand-list-header" className="flex items-center flex-wrap">
                <div className="flex py-1 gap-2 items-center">
                    <span className="text-primary-dark-1 text-[24px] leading-[32px] font-semibold">CAR BRANDS LIST</span>
                    <div className="flex items-center cursor-pointer py-[10px] px-4 gap-3">
                        <ChevronDown />
                        <span className="text-sm leading-[22px] text-neutral-8 font-medium">View All</span>
                    </div>

                </div>
                <TextInput icon={<SearchIcon fill="#5F5F5F" />} classNames={{
                    root: "ml-[56px] basis-[240px]",
                    input: "rounded-full pl-[40px] py-2 h-[40px] bg-neutral-3 placeholder-neutral-6",
                    icon: "ml-2 "
                }} placeholder="Search car brand" />

                <UnstyledButton className="bg-secondary-main ml-auto items-center py-[10px] px-4 flex gap-4 rounded-md basis-[140px]">
                    <IconPlus width={20} height={20} color="white" /> <span className="font-normal text-sm  text-white">Add Brand</span>
                </UnstyledButton>
            </div>

            <div id="car-brand-list-content">
                {carBrands.map((brand, idx) => <CarBrandInfo key={brand.name + idx} brand={brand} />)}
            </div>
        </div>
    )
}

type TabsType = 'car-brand' | 'folder' | 'tasks' | 'modules' | 'notification' | 'setting'
const Dashboard: React.FC = () => {
    const [currentTab, setCurrentTab] = React.useState<TabsType>('car-brand')

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
            <div className="grow max-h-screen overflow-y-auto">
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
                        <CarBrandSection />
                    </Tabs.Panel>

                    <Tabs.Panel value="folder" >
                        folder
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