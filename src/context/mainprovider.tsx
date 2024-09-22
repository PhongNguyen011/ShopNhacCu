import React, { createContext } from "react";
import { DataMainProvider } from "../type/type";
import { listProducts } from "../constants/constants";

export const MainContext = createContext({} as { data?: DataMainProvider });

export const MainProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    const data: DataMainProvider = {
        products: listProducts
    }
    return (
        <MainContext.Provider value={{ data }}>{children}</MainContext.Provider>
    );
};