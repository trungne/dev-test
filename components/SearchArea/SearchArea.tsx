import React from "react"
import { Paper, Radio, NumberInput, Checkbox, Divider } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';
import styles from './styles.module.css'
import { Popover } from '@mantine/core';
import DollarSign from "components/icons/DollarSign";
import UnstyledButton from "components/Common/UnstyledButton";

const CarStateData: Record<string, string> = {
    ['new-authorised']: "New Car (Authorised Dealer)",
    ['new-parallel']: "New Car (Parallel Importer)",
    ['used']: "Used Cars"
}


const MAX_PRICE = 100000000
type Props = {
    vehicleTypes: Record<string, string>
}

type CarStateInputProps = {
    carState: string,
    setCarState: (state: string) => void
}

const CarStateInput: React.FC<CarStateInputProps> = ({ carState, setCarState }) => {

    return (
        <Paper className="lg:w-[200px] xl:w-[290px]" shadow="xs">
            <Popover classNames={{
                dropdown: 'w-3/4 md:w-[330px]'
            }} position="bottom" shadow="md">
                <Popover.Target>
                    <div className={styles['popover-target']}>
                        <div className={styles['popover-target-title']}>New/Used</div>
                        <div className={styles['popover-target-value']}>
                            {CarStateData[carState]}<IconChevronDown size={14} />
                        </div>
                    </div>
                </Popover.Target>
                <Popover.Dropdown>
                    <Radio.Group
                        onChange={setCarState}
                        value={carState}
                    >
                        {Object.keys(CarStateData).map((key) => <Radio key={key} value={key} label={CarStateData[key]} />)}
                    </Radio.Group>
                </Popover.Dropdown>
            </Popover>
        </Paper>
    )
}

type PriceRangeInputProps = {
    priceRange: { min: number, max: number },
    setPriceRange: React.Dispatch<React.SetStateAction<{ min: number, max: number }>>
}

const PriceRangeInput: React.FC<PriceRangeInputProps> = ({ priceRange, setPriceRange }) => {
    const [opened, setOpened] = React.useState(false)
    return (
        <Paper className="lg:w-[310px] xl:w-[410px]" shadow="xs">
            <Popover opened={opened} onChange={setOpened} classNames={{
                dropdown: 'w-full md:w-[400px]'
            }} position="bottom" shadow="md">
                <Popover.Target>
                    <div onClick={() => setOpened(o => !o)} className={styles['popover-target']}>
                        <div className={styles['popover-target-title']}>Price Range</div>
                        <div className={styles['popover-target-value']}>
                            <div className="flex gap-4 items-center">
                                <div className="text-neutral-7 text-sm leading-[15px] flex items-center gap-2">
                                    <DollarSign /> <span>${priceRange.min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                                </div>
                                <div className="w-4 border-[0.5px] border-solid border-neutral-7"></div>
                                <div className="text-neutral-7 text-sm leading-[15px] flex items-center gap-2">
                                    <DollarSign /> <span>${priceRange.max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                                </div>
                            </div>

                            <IconChevronDown size={14} />
                        </div>
                    </div>
                </Popover.Target>
                <Popover.Dropdown>
                    <div className="rounded-md p-2">
                        <div className={styles['popover-target-title']}>Price Range</div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="border border-solid border-neutral-4 py-2 px-4 rounded">
                                <div className={styles['number-input-label']}>Min</div>
                                <div className={styles['number-input-value-wrapper']}>
                                    {/* <span className={styles['number-input-value-currency']}>S$&nbsp;</span> */}
                                    <NumberInput
                                        classNames={{
                                            input: styles['number-input-value']
                                        }}
                                        defaultValue={priceRange.min}
                                        hideControls
                                        max={MAX_PRICE}
                                        min={0}
                                        value={priceRange.min}
                                        onChange={(val) => setPriceRange(prev => {
                                            return {
                                                ...prev,
                                                min: val ?? 0
                                            }
                                        })}
                                        parser={(value) => value?.replace(/S\$\s?|(,*)/g, '')}
                                        formatter={(value) =>
                                            !Number.isNaN(parseFloat(value ?? "a"))
                                                ? `S$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                                : 'S$ '
                                        }
                                    />

                                </div>
                            </div>
                            <div className="w-2 border-solid border-[0.4px] border-neutral-8"></div>
                            <div className="border border-solid border-neutral-4 py-2 px-4 rounded">
                                <div className={styles['number-input-label']}>Max</div>
                                <div className={styles['number-input-value-wrapper']}>
                                    <NumberInput
                                        defaultValue={priceRange.max} classNames={{
                                            input: styles['number-input-value']
                                        }} hideControls
                                        max={MAX_PRICE}
                                        min={0}
                                        value={priceRange.max}
                                        onChange={(val) => setPriceRange(prev => {
                                            return {
                                                ...prev,
                                                max: val ?? 0
                                            }
                                        })}
                                        parser={(value) => value?.replace(/S\$\s?|(,*)/g, '')}
                                        formatter={(value) =>
                                            !Number.isNaN(parseFloat(value ?? "a"))
                                                ? `S$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                                : 'S$ '
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="flex justify-between mt-6">
                            <UnstyledButton onClick={() => {
                                setPriceRange({ min: 0, max: 0 })
                                setOpened(false)
                            }} className={styles['clear-button']}>Clear</UnstyledButton>
                            <UnstyledButton onClick={() => { setOpened(false) }} className={styles['save-button']}>Save</UnstyledButton>
                        </div>
                    </div>
                </Popover.Dropdown>
            </Popover>
        </Paper>
    )
}


type VehicleTypeInputProps = {
    vehicleTypes: Record<string, string>
    selectedVehicleTypes: string[],
    setSelectedVehicleTypes: (types: string[]) => void
}
const VehicleTypeInput: React.FC<VehicleTypeInputProps> = ({ vehicleTypes, selectedVehicleTypes, setSelectedVehicleTypes }) => {
    const [opened, setOpened] = React.useState(false)

    return (
        <Paper className="lg:w-[200px] xl:w-[290px]" shadow="xs">
            <Popover opened={opened} onChange={setOpened} classNames={{
                dropdown: 'w-full md:w-[475px]'
            }} position="bottom" shadow="md">
                <Popover.Target>
                    <div onClick={() => { setOpened(o => !o) }} className={styles['popover-target']}>
                        <div className={styles['popover-target-title']}>Vehicle Type</div>
                        <div className={styles['popover-target-value'] + " min-h-[16px]"}>
                            <div>
                                {selectedVehicleTypes.length > 3 ?
                                    <div className="text-neutral-7 text-sm">+{selectedVehicleTypes.length} more</div> :
                                    selectedVehicleTypes.map((key, idx, arr) => {
                                        if (idx === arr.length - 1) {
                                            return <span key={key}>{vehicleTypes[key]}</span>
                                        }
                                        else {
                                            return <span key={key}>{vehicleTypes[key]}, </span>
                                        }
                                    })}

                            </div>
                            <IconChevronDown size={14} />
                        </div>
                    </div>
                </Popover.Target>
                <Popover.Dropdown>
                    <div className="rounded-md p-2">
                        <div className={styles['popover-target-title']}>Vehicle Type</div>
                        <Checkbox.Group
                            defaultValue={['react']}
                            classNames={{ root: 'flex mb-6 w-full' }}
                            value={selectedVehicleTypes}
                            onChange={setSelectedVehicleTypes}
                        >
                            <div className="w-full grid grid-cols-3 grid-flow-row">
                                {Object.keys(vehicleTypes).sort().map((key) => <Checkbox key={key} value={key} label={vehicleTypes[key]} />
                                )}
                            </div>
                        </Checkbox.Group>

                        <Divider />
                        <div className="flex justify-between mt-6">
                            <UnstyledButton onClick={() => {
                                setSelectedVehicleTypes([])
                                setOpened(false)
                            }} className={styles['clear-button']}>Clear</UnstyledButton>
                            <UnstyledButton onClick={() => {
                                setOpened(false)
                            }} className={styles['save-button']}>Save</UnstyledButton>
                        </div>


                    </div>
                </Popover.Dropdown>
            </Popover>
        </Paper>
    )
}

const SearchArea: React.FC<Props> = ({ vehicleTypes }) => {
    const [carState, setCarState] = React.useState('used')
    const [priceRange, setPriceRange] = React.useState<{ min: number, max: number }>({ min: 10000, max: 100000 })
    const [selectedVehicleTypes, setSelectedVehicleTypes] = React.useState<string[]>([])

    return (
        <div className="md:relative md:flex md:justify-center">
            <div className="
                m-auto
                md:absolute
                md:top-[-30px] lg:top-[-50px]
                mx-3 md:mx-0
                mt-6 md:mt-0
                block md:flex
                sm:grow
                sm:max-w-2xl md:max-w-4xl lg:max-w-6xl
                p-2 md:p-0 md:pr-10
                border-[1px] border-neutral-3 border-solid
                rounded-[6px]
                bg-white
    ">
                <CarStateInput carState={carState} setCarState={setCarState} />
                <PriceRangeInput priceRange={priceRange} setPriceRange={setPriceRange} />
                <VehicleTypeInput vehicleTypes={vehicleTypes} selectedVehicleTypes={selectedVehicleTypes} setSelectedVehicleTypes={setSelectedVehicleTypes} />
                <UnstyledButton onClick={() => {
                    console.log('New/Used: ', carState)
                    console.log(`Price Range: ${priceRange.min} - ${priceRange.max}`)
                    console.log(`Vehicle Type: ${selectedVehicleTypes}`)

                }} className="bg-carbuyer-primary text-white text-base leading-5 
            w-full md:w-auto
            py-5 
            md:self-center
            md:px-8 lg:px-11
            md:ml-10 lg:ml-20 xl:ml-24
            rounded-md font-bold">Search</UnstyledButton>
            </div>
        </div>

    )
}

export default React.memo(SearchArea)