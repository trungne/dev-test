import { Popover, UnstyledButton, TextInput, Divider, Textarea } from "@mantine/core";
import { IconPlus, IconChevronDown } from "@tabler/icons";
import Radio from "components/icons/Radio";
import Image from "next/image";
import React from "react";
import { CarBrand } from "shared/types";
import { useCreateCarBrandsMutation, useUpdateCarBrandsMutation } from "store/carapi.slice";

export type Mode = 'edit' | 'create' | 'read'

type CommonBrandDetailProps = {
    brand?: CarBrand
    mode: Mode
    onClose?: () => void
    onClickCreate?: () => void
    onClickEditInformation?: () => void
    onClickSaveChanges?: () => void
}
const CommonBrandDetail: React.FC<CommonBrandDetailProps> = ({ brand, mode, onClose, onClickCreate, onClickEditInformation, onClickSaveChanges }) => {
    const [openedEditStatusPopover, setOpenedEditStatusPopover] = React.useState(false)

    const [update] = useUpdateCarBrandsMutation()
    const [create] = useCreateCarBrandsMutation()

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

    const updateCarBrand = React.useCallback(async () => {
        let canEdit = true
        Object.keys(newCarBrand).forEach(key => {
            if (newCarBrand[key as keyof CarBrand] === undefined) {
                canEdit = false
            }
        })

        if (canEdit) {
            // @ts-ignore
            await update(newCarBrand)
        }

        onClickSaveChanges?.()
    }, [onClickSaveChanges, update, newCarBrand])

    const createCarBrand = React.useCallback(async () => {
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
        await create(newBrand)
        onClickCreate?.()

    }, [create, newCarBrand, onClickCreate])
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
                    <Popover opened={openedEditStatusPopover} onChange={setOpenedEditStatusPopover}>
                        <Popover.Target>
                            <div
                                onClick={() => {
                                    if (mode === 'read') {
                                        return
                                    }

                                    setOpenedEditStatusPopover(o => !o)
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
                                        setOpenedEditStatusPopover(o => !o)
                                    }}
                                    className="cursor-pointer py-[5px] px-3 flex items-center gap-2 rounded-full text-base font-semibold text-primary-dark-3 bg-primary-light-1">
                                    <Radio fill="#1F7B4D" />
                                    Active
                                </div>

                                <div
                                    onClick={() => {
                                        setNewCarBrand(prev => { return { ...prev, isActive: false } })
                                        setOpenedEditStatusPopover(o => !o)
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
                <UnstyledButton onClick={createCarBrand} className="rounded-[4px] py-[9px] px-4 bg-secondary-main 
                text-white text-sm leading-[22px] font-medium">Create Brand</UnstyledButton>
            </div>}

            {mode === 'edit' && <UnstyledButton onClick={updateCarBrand} className="bg-secondary-main py-[9px] px-4 text-white rounded-[4px] mt-6 text-sm leading-[22px] font-semibold">Save Changes</UnstyledButton>}
            {mode === 'read' && <UnstyledButton onClick={onClickEditInformation} className="bg-secondary-main py-[9px] px-4 text-white rounded-[4px] mt-6 text-sm leading-[22px] font-semibold">Edit Informaiton</UnstyledButton>}
        </>
    )
}

export default CommonBrandDetail