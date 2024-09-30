export interface RouteType {
    path: string;
    isExact: boolean;
    isPrivate: boolean;
    component: React.FC;
}

export type RouteProps = {
    children: React.ReactNode
}