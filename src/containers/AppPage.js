import React from "react";
import { Pagination } from "@mui/material";

const AppPage = ({setPage, page}) => {

    const handleChange = (page) =>{
    setPage(page)
    window.scroll(0,0)
}

    return (
        <Pagination count={25} shape="rounded" 
            onChange={e => handleChange(e.target.textContent)}
        />
        
    )
};

export default AppPage;