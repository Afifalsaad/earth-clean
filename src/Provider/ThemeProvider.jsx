import React, { useEffect } from 'react';
import { themeChange } from 'theme-change';

const ThemeProvider = ({children}) => {

    useEffect(() => {
        themeChange(false)
      }, [])
    return children
};

export default ThemeProvider;