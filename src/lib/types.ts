// import { Icons } from 'src/components/icons';
import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

export interface NavItem {
    title: string
    href?: string
    disabled?: boolean
    external?: boolean
    // icon?: keyof typeof Icons
    label?: string
}

export interface NavItemWithChildren extends NavItem {
    items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem { }

export interface SidebarNavItem extends NavItemWithChildren { }