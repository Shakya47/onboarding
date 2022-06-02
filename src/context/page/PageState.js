import React, { useReducer } from "react";
import PageContext from "./PageContext";

const PageState = (props) => {
    
    const [page, setPage] = useReducer(updatePage, 0);

    
    function updatePage(state){
        return state + 1;
    }
   
    return (
        <PageContext.Provider value={{page, setPage}}>
            {props.children}
        </PageContext.Provider>
    )
}

export default PageState;