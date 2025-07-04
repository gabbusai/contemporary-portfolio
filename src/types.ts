export type cardType = {
    title: string;
    description: string;
}

export type tabType = {
    id: number;
    title: string;
    tabRef?: React.RefObject<HTMLDivElement> | null;
}