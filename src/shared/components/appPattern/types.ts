import {FC} from "react";

interface AppContainerType {
    self: FC<{
        children: React.ReactNode[] | React.ReactNode
    }>,
    LeftSidebar: FC<{
        style?: React.CSSProperties,
        children?: React.ReactNode[] | React.ReactNode
    }>,
    MainWindow: FC<{
        style?: React.CSSProperties,
        children?: React.ReactNode[] | React.ReactNode
    }>,
    AdditionalWindow: FC<{
        style?: React.CSSProperties,
        children?: React.ReactNode[] | React.ReactNode
    }>,
}

export {
    AppContainerType
};