 import React,{useState} from "react";
import Context from "../useContext/Store";

const Wrapper = ({children}) =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggleFilterDropdown = () => {
        setIsOpen(!isOpen);
    };

    return(
        <Context.Provider value={{toggleFilterDropdown,isOpen}}>
            {children}
        </Context.Provider>
    )
}

export default Wrapper