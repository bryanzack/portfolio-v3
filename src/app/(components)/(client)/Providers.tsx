'use client'
import store from '../../../store';
import { Provider } from "react-redux";
import {ReactNode} from "react";

const Providers = ({ children }: {children: ReactNode}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
export default Providers;