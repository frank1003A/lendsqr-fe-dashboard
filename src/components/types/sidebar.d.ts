/**
 * This file allows me to reuse type declaration
 * that are needed in more than one component.
 */
export interface SideBarData {
    title: string;
    path: string;
    subNav: Array<subNav>;
}

export interface Image {
    src: string
}

export interface subNav extends Omit<SideBarData, 'subNav'> {
    icon?: Image["src"];
}