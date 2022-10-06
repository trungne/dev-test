import { Popover, UnstyledButton, TextInput, Divider, Radio as MantineRadio, Textarea, Modal, FileInput } from "@mantine/core";
import { IconPlus, IconPoint, IconChevronLeft, IconChevronDown, IconX } from "@tabler/icons";
import ChevronDown from "components/icons/ChevronDown";
import Radio from "components/icons/Radio";
import SearchIcon from "components/icons/SearchIcon";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import { CarBrand } from "shared/types";
import { useCreateCarBrandsMutation, useGetCarBrandsQuery, useUpdateCarBrandsMutation } from "store/carapi.slice";
import { setViewOption } from "store/dashboard.slice";
import { useAppDispatch, useDashboardState } from "store/store";
import styles from './style.module.css'

const AddCarBrandModal: React.FC<{ opened: boolean, onClose: () => void }> = ({ opened, onClose }) => {
    return (
        <Modal centered={true} classNames={{
            modal: "m-0",
            body: "scrollbar-hide min-h-[684px] max-w-[600px] min-w-[600px]",
            inner: 'p-0'
        }} overflow="inside" padding={0} size="auto" withCloseButton={false} onClose={onClose} opened={opened}>
            <div id="add-car-brand-header" className="flex bg-neutral-2 items-center justify-between px-6 py-4 font-['Poppins']">
                <div className="max-w-[260px] min-w-[260px]">
                    <div className="text-neutral-8 text-base font-bold">Add Car Brand</div>
                    <div className="text-neutral-7 text-sm leading-[22px] mt-1 font-normal"></div>
                </div>

                <IconX className="cursor-pointer" onClick={onClose} width={32} height={32} color="#232323" fill="#E3E3E3" />
            </div>
            <Divider />
            <div className="p-6">
                <CommonBrandDetail mode='create' onCreate={onClose} onClose={onClose} />


            </div>
        </Modal>
    )
}

type Mode = 'edit' | 'create' | 'read'

type CommonBrandDetailProps = {
    brand?: CarBrand
    mode: Mode
    onClose?: () => void
    onEdit?: () => void
    onCreate?: () => void
}
const CommonBrandDetail: React.FC<CommonBrandDetailProps> = ({ brand, mode, onClose, onCreate, onEdit }) => {
    const [opened, setOpened] = React.useState(false)


    const [updateCarBrand] = useUpdateCarBrandsMutation()
    const [createCarBrand] = useCreateCarBrandsMutation()

    // assume active
    const [newCarBrand, setNewCarBrand] = React.useState<Partial<CarBrand>>(mode === 'create' ? { ...brand, isActive: true } : { ...brand })

    const activeColor = React.useMemo(() => {
        return newCarBrand.isActive ? { background: '#CEF7E2', text: '#1F7B4D' } : { background: '#FAFAFA', text: '#5F5F5F' }
    }, [newCarBrand.isActive])
    const inputLogo = React.useCallback((e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setNewCarBrand(prev => {
            return {
                ...prev,
                logoURL: 'https://d234qyqqy4qdru.cloudfront.net/car_brand_toyota.png' // assume logo
            }
        })
    }, [])
    return (
        <>
            <div className="py-3 text-sm leading-6 text-neutral-8 font-bold">
                Brand Logo
            </div>

            <Divider />

            <div className="mt-4 relative w-[120px] h-[120px]">
                {mode === 'edit' && newCarBrand && <div
                    className="absolute cursor-pointer px-4 flex items-center justify-center rounded-full
                    w-full h-full left-0 top-0 bg-neutral-8 opacity-0 hover:opacity-80 z-10
                    text-base text-white text-center
                    ">
                    CHANGE LOGO
                    <input type="file" onInput={inputLogo} accept="image/png, image/jpeg" name="file" className="cursor-pointer absolute w-full h-full opacity-0" />

                </div>}
                {mode === 'create' && !newCarBrand.logoURL &&
                    <div className="flex flex-col cursor-pointer rounded-full items-center justify-center w-full h-full outline-dashed outline-neutral-4 bg-neutral-2">

                        <IconPlus width={32} height={32} color="#232323" />
                        <div className="mt-1 text-neutral-6 text-xs leading-5 font-bold">Brand Logo</div>
                        <input type="file" onInput={inputLogo} accept="image/png, image/jpeg" name="file" className="cursor-pointer absolute w-full h-full opacity-0" />
                    </div>}

                {newCarBrand.logoURL && <Image src={newCarBrand.logoURL} alt="brand logo" layout="fill" />}
            </div>


            <div className="mt-6 py-4 text-sm leading-6 text-neutral-8 font-bold">
                Brand Details
            </div>
            <Divider />
            <div className="flex flex-wrap">
                <div className='mr-0 md:mr-8 basis-60 mt-4'>
                    <div className="text-neutral-6 text-sm leading-[22px] font-normal">
                        Brand Name
                    </div>
                    <div className="text-neutral-8 mt-1 text-sm leading-[22px] font-bold">
                        {mode !== 'read' ? <TextInput
                            onChange={(e) => { setNewCarBrand(prev => { return { ...prev, name: e.currentTarget.value } }) }}
                            classNames={{
                                input: "py-[9px] px-[14px] text-sm leading-[22px] font-semibold h-[40px]"
                            }} value={newCarBrand?.name} placeholder="Input Content" /> :
                            <div className="py-[9px]">
                                {newCarBrand?.name}
                            </div>}
                    </div>
                </div>

                <div className='basis-29 mt-4'>
                    <div className="text-neutral-6 text-sm leading-[22px] font-normal">
                        Brand Status
                    </div>
                    <Popover opened={opened} onChange={setOpened}>
                        <Popover.Target>
                            <div
                                onClick={() => {
                                    if (mode === 'read') {
                                        return
                                    }

                                    setOpened(o => !o)
                                }}
                                style={{
                                    backgroundColor: activeColor.background,
                                    color: activeColor.text,
                                    cursor: mode !== 'read' ? 'pointer' : undefined
                                }} className="flex items-center gap-2 rounded-full py-[5px] px-3 text-base font-semibold mt-[10px]">
                                <Radio fill={activeColor.text} />
                                {newCarBrand.isActive === undefined ? 'Active' : newCarBrand.isActive ? 'Active' : 'Inactive'}
                                {mode !== 'read' && <IconChevronDown width={24} height={24} color="#232323" />}
                            </div>
                        </Popover.Target>
                        <Popover.Dropdown p="xs">
                            <div className="flex flex-col justify-center gap-3">
                                <div
                                    onClick={() => {
                                        setNewCarBrand(prev => { return { ...prev, isActive: true } })
                                        setOpened(o => !o)
                                    }}
                                    className="cursor-pointer py-[5px] px-3 flex items-center gap-2 rounded-full text-base font-semibold text-primary-dark-3 bg-primary-light-1">
                                    <Radio fill="#1F7B4D" />
                                    Active
                                </div>

                                <div
                                    onClick={() => {
                                        setNewCarBrand(prev => { return { ...prev, isActive: false } })
                                        setOpened(o => !o)
                                    }}
                                    className="cursor-pointer py-[5px] px-3 flex items-center gap-2 rounded-full text-base font-semibold text-neutral-7 bg-neutral-2">
                                    <Radio fill="#5F5F5F" />
                                    Inactive
                                </div>
                            </div>
                        </Popover.Dropdown>
                    </Popover>

                </div>

                <div className="basis-full mt-4">
                    <div className="text-neutral-6 text-sm leading-[22px] font-normal">
                        Brand Description
                    </div>
                    <div className="text-neutral-8 mt-1 text-sm leading-[22px] font-bold h-[100px]">
                        {mode !== 'read' ? <Textarea

                            onChange={(e) => { setNewCarBrand(prev => { return { ...prev, description: e.currentTarget.value } }) }}
                            classNames={{
                                input: "py-[9px] px-[14px] text-sm leading-[22px] font-semibold h-[100px]"
                            }} value={newCarBrand?.description} placeholder="Input Content" /> : <div className="py-[9px]">
                            {newCarBrand?.description}
                        </div>}

                    </div>
                </div>
            </div>

            {mode === 'create' && <div id="add-car-brand-control-buttons" className="flex justify-end items-end gap-4 mt-[34px]">
                <UnstyledButton
                    onClick={onClose}
                    className="
                rounded-[4px] py-[9px] px-4 
                bg-transparent 
                outline outline-1 outline-neutral-5 
                text-neutral-8 text-sm leading-[22px] font-medium">Cancel</UnstyledButton>
                <UnstyledButton onClick={() => {
                    onCreate?.()
                    const { name, description, isActive, logoURL } = newCarBrand
                    if (name === undefined || description === undefined || isActive === undefined || logoURL === undefined) {
                        console.error('cannot create new brand!')
                        return
                    }
                    const newBrand: Omit<CarBrand, 'id'> = {
                        name: name,
                        description: description,
                        isActive: isActive,
                        logoURL: logoURL,
                        numberOfModels: 0,
                        lastUpdate: new Date().getTime() // now
                    }
                    createCarBrand(newBrand)
                }} className="rounded-[4px] py-[9px] px-4 bg-secondary-main 
                text-white text-sm leading-[22px] font-medium">Create Brand</UnstyledButton>
            </div>}

            {mode !== 'create' && <UnstyledButton onClick={() => {
                if (mode === 'edit') {
                    onEdit?.()
                    let canEdit = true
                    Object.keys(newCarBrand).forEach(key => {
                        if (newCarBrand[key as keyof CarBrand] === undefined) {
                            canEdit = false
                        }
                    })

                    if (canEdit) {
                        // @ts-ignore
                        updateCarBrand(newCarBrand)
                    }
                }
                else {
                    onClose?.()
                }
            }} className="bg-secondary-main py-[9px] px-4 text-white rounded-[4px] mt-6 text-sm leading-[22px] font-semibold">{mode === 'edit' ? 'Save Changes' : 'Edit Information'}</UnstyledButton>}
        </>
    )
}

const CarBrandDetail: React.FC<{ brand?: CarBrand, back: () => void }> = ({ brand, back }) => {
    const [mode, setMode] = React.useState<Mode>('read')

    return (
        <div className="max-w-[600px]">
            <div className="flex items-center gap-2 ">
                <IconChevronLeft onClick={back} className="cursor-pointer" color="#232323" width={24} height={24} />
                <span className="text-primary-dark-1 text-[24px] leading-[32px] font-bold">Brand Details</span>
            </div>
            <div className="mt-4">
                <CommonBrandDetail brand={brand} mode={mode}
                    onClose={() => setMode('edit')}
                    onEdit={() => setMode('read')}
                />
            </div>


        </div>
    )
}

const CarBrandInfo: React.FC<{ brand: CarBrand, viewCarBrand: () => void }> = ({ brand, viewCarBrand }) => {
    const { viewCarBrandOption } = useDashboardState()
    const activeColor = React.useMemo(() => {
        return brand.isActive ? '#1F7B4D' : '#5F5F5F'
    }, [brand.isActive])
    return (
        <div className="flex px-6 py-[30px] items-center flex-wrap">
            <div className="flex items-center min-w-[600px] max-w-[600px]">
                <MantineRadio value={brand.name} />

                <div className="mx-10 relative w-[64px] h-[64px]">
                    <Image alt="logo" layout="fill" src={brand.logoURL} />
                </div>

                <Divider orientation="vertical" size="sm" color={brand.isActive ? "green" : "gray"} />

                <div className="ml-10">
                    {(viewCarBrandOption === 'all' || viewCarBrandOption === 'brand-name') &&
                        <span className="text-[20px] leading-[30px] font-bold text-primary-dark-1">{brand.name}</span>
                    }
                    <div className="flex gap-4 mt-1 items-center">
                        {(viewCarBrandOption === 'all' || viewCarBrandOption === 'brand-name') &&
                            <span className="max-w-[200px] text-neutral-6 font-normal text-ellipsis overflow-hidden whitespace-nowrap ">
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
                    <div className=" text-primary-dark-1 text-sm leading-[22px] font-semibold mb-3">
                        Last Update
                    </div>
                    <div className="text-neutral-6 text-sm leading-[22px] font-medium">
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

                <UnstyledButton
                    onClick={viewCarBrand}
                    className="bg-white 
                ml-auto
                rounded-[4px]
                outline outline-1 outline-neutral-5
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


const CarBrandList: React.FC<{ viewCarBrand: (carBrand: CarBrand) => void }> = ({ viewCarBrand }) => {
    const { data: carBrands } = useGetCarBrandsQuery()
    const dispatch = useAppDispatch()
    const { viewCarBrandOption } = useDashboardState()
    const [opened, setOpened] = React.useState(false)

    const [searchText, setSearchText] = React.useState<string>()

    const [modalOpened, setModalOpened] = React.useState(false)

    const changeViewOptions = React.useCallback((viewOptions: Parameters<typeof setViewOption>['0']) => {
        dispatch(setViewOption(viewOptions))
        setOpened(false)
    }, [dispatch])

    if (!carBrands) {
        return null
    }

    return (
        <>
            <div id="car-brand-list-header" className="flex items-center flex-wrap">
                <div className="flex py-1 gap-2 items-center">
                    <span className="text-primary-dark-1 text-[24px] leading-[32px] font-semibold">CAR BRANDS LIST</span>

                    <Popover opened={opened} onChange={setOpened}>
                        <Popover.Target>
                            <div onClick={() => setOpened(o => !o)} className="flex items-center cursor-pointer py-[10px] px-4 gap-3">
                                <ChevronDown />
                                <span className="text-sm leading-[22px] text-neutral-8 font-semibold">{getViewOptionLabel(viewCarBrandOption)}</span>
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

                <UnstyledButton
                    onClick={() => { setModalOpened(true) }}
                    className="bg-secondary-main ml-auto items-center py-[10px] px-4 flex gap-4 rounded-md basis-[140px]">
                    <IconPlus width={20} height={20} color="white" /> <span className="font-normal text-sm  text-white">Add Brand</span>
                </UnstyledButton>
            </div>

            <div id="car-brand-list-content">
                {carBrands.filter(brand => {
                    if (!searchText) {
                        return brand
                    }

                    return brand.name.toLowerCase().includes(searchText.toLowerCase())
                }).map((brand, idx) => <CarBrandInfo key={brand.name + idx} brand={brand} viewCarBrand={() => viewCarBrand(brand)} />)}
            </div>

            <AddCarBrandModal opened={modalOpened} onClose={() => { setModalOpened(false) }} />
        </>
    )
}

const CarBrandTab: React.FC = () => {
    const [selectedCarBrand, setSelectedCarBrand] = React.useState<CarBrand>()
    return (
        <div className="py-[30px] px-[42px] font-['Poppins']">
            {selectedCarBrand ? <CarBrandDetail back={() => setSelectedCarBrand(undefined)} brand={selectedCarBrand} /> :
                <CarBrandList viewCarBrand={(brand) => setSelectedCarBrand(brand)} />
            }
        </div>
    )
}


export default React.memo(CarBrandTab)