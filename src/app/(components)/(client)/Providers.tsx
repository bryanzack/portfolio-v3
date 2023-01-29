'use client'
import store from '../../../store';
import { Provider } from "react-redux";

type Props = {
    children: JSX.Element,
}
const Providers = ({ children }: Props) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
export default Providers;