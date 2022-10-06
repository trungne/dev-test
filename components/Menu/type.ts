import { IconType } from "shared/types"

export type Menu = {
    name: string,
    value: string,
    subMenu?: Omit<Menu, 'Icon' | 'subMenu'>[], // only allow one level of sub menus
    Icon: IconType
}