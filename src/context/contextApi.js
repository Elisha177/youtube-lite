import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api"

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectCategories, setSelectCategories] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);


    useEffect(() => {
        fetchSelectedCategoryData(selectCategories)
    }, [selectCategories]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        setTimeout(() => {
            fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
                console.log(contents);
                setSearchResults(contents);
                setLoading(false);
            });
        }, 1000);
    }

    return (

        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                selectCategories,
                setSelectCategories,
                mobileMenu,
                setMobileMenu
            }}
        >
            {props.children}
        </Context.Provider>
    )
}