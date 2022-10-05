import { Popover, UnstyledButton, TextInput, Divider, Radio } from "@mantine/core";
import { IconPlus, IconPoint } from "@tabler/icons";
import ChevronDown from "components/icons/ChevronDown";
import SearchIcon from "components/icons/SearchIcon";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import { CarBrand } from "shared/types";
import { useGetCarBrandsQuery } from "store/carapi.slice";
import { setViewOption } from "store/dashboard.slice";
import { useAppDispatch, useDashboardState } from "store/store";
import styles from './style.module.css'

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
                    {(viewCarBrandOption === 'all' || viewCarBrandOption === 'brand-name') &&
                        <span className="text-[20px] leading-[30px] font-medium text-primary-dark-1">{brand.name}</span>
                    }
                    <div className="flex gap-4 mt-1 items-center">
                        {(viewCarBrandOption === 'all' || viewCarBrandOption === 'brand-name') &&
                            <span className="max-w-[200px] text-ellipsis overflow-hidden whitespace-nowrap ">
                                {brand.description}
                            </span>
                        }

                        {(viewCarBrandOption === 'all' || viewCarBrandOption === 'number-of-models') &&
                            <>
                                {viewCarBrandOption === 'all' && <Divider orientation="vertical" />}
                                <span className="text-sm leading-[22px] text-secondary-main font-bold">
                                    {brand.numberOfModels} {brand.numberOfModels === 1 ? 'Model' : 'Models'}
                                </span>
                            </>

                        }
                    </div>
                </div>
            </div>

            <div className="flex items-center grow">
                {(viewCarBrandOption === 'all' || viewCarBrandOption === 'last-updated') && <div>
                    <div className=" text-primary-dark-1 text-sm leading-[22px] font-bold mb-3">
                        Last Update
                    </div>
                    <div className="text-neutral-6 text-sm leading-[22px] font-normal">
                        {dayjs(brand.lastUpdate).format('DD/MM/YYYY')}
                    </div>
                </div>}
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

const getViewOptionLabel = (viewOption: Parameters<typeof setViewOption>['0']) => {
    switch (viewOption) {
        case 'all':
            return "View All"
        case 'brand-name':
            return "View Brand Name"
        case 'last-updated':
            return 'View Last Updated'
        case 'number-of-models':
            return 'View Number Of Models'
        default: return ""
    }

}

const CarBrandTab: React.FC = () => {
    const { data: carBrands } = useGetCarBrandsQuery()
    const dispatch = useAppDispatch()
    const { viewCarBrandOption } = useDashboardState()
    const [opened, setOpened] = React.useState(false)

    const [searchText, setSearchText] = React.useState<string>()

    const changeViewOptions = React.useCallback((viewOptions: Parameters<typeof setViewOption>['0']) => {
        dispatch(setViewOption(viewOptions))
        setOpened(false)
    }, [dispatch])

    if (!carBrands) {
        return null
    }

    return (
        <div className="py-[30px] px-[42px] font-['Poppins']">
            <div id="car-brand-list-header" className="flex items-center flex-wrap">
                <div className="flex py-1 gap-2 items-center">
                    <span className="text-primary-dark-1 text-[24px] leading-[32px] font-semibold">CAR BRANDS LIST</span>

                    <Popover opened={opened} onChange={setOpened}>
                        <Popover.Target>
                            <div onClick={() => setOpened(o => !o)} className="flex items-center cursor-pointer py-[10px] px-4 gap-3">
                                <ChevronDown />
                                <span className="text-sm leading-[22px] text-neutral-8 font-medium">{getViewOptionLabel(viewCarBrandOption)}</span>
                            </div>
                        </Popover.Target>
                        <Popover.Dropdown>
                            <div className="flex flex-col justify-center">
                                <UnstyledButton
                                    onClick={() => changeViewOptions('all')}
                                    className={styles['view-option-button']}>All</UnstyledButton>
                                <UnstyledButton
                                    onClick={() => changeViewOptions('last-updated')}
                                    className={styles['view-option-button']}>Last Updated</UnstyledButton>
                                <UnstyledButton
                                    onClick={() => changeViewOptions('brand-name')}
                                    className={styles['view-option-button']}>Brand Name</UnstyledButton>
                                <UnstyledButton
                                    onClick={() => changeViewOptions('number-of-models')}
                                    className={styles['view-option-button']}>Number of Models</UnstyledButton>
                            </div>
                        </Popover.Dropdown>
                    </Popover>
                </div>
                <TextInput
                    value={searchText}
                    onChange={(e) => setSearchText(e.currentTarget.value)}
                    icon={<SearchIcon fill="#5F5F5F" />} classNames={{
                        root: "ml-[56px] basis-[240px]",
                        input: "rounded-full pl-[40px] py-2 h-[40px] bg-neutral-3 placeholder-neutral-6",
                        icon: "ml-2 "
                    }} placeholder="Search car brand" />

                <UnstyledButton className="bg-secondary-main ml-auto items-center py-[10px] px-4 flex gap-4 rounded-md basis-[140px]">
                    <IconPlus width={20} height={20} color="white" /> <span className="font-normal text-sm  text-white">Add Brand</span>
                </UnstyledButton>
            </div>

            <div id="car-brand-list-content">
                {carBrands.filter(brand => {
                    if (!searchText) {
                        return brand
                    }

                    return brand.name.toLowerCase().includes(searchText.toLowerCase())
                }).map((brand, idx) => <CarBrandInfo key={brand.name + idx} brand={brand} />)}
            </div>
        </div>
    )
}


export default React.memo(CarBrandTab)