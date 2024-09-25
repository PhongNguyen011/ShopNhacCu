import React, { createContext } from "react";
import { DataMainProvider } from "../type/type";
import { listProducts } from "../constants/constants";
import { useGetUser} from "../hooks/user"

export const MainContext = createContext({} as { data?: DataMainProvider });

export const MainProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const {users} = useGetUser();

    const data: DataMainProvider = {
        products: listProducts,
        users,
    }
    return (
        <MainContext.Provider value={{ data }}>{children}</MainContext.Provider>
    );
};