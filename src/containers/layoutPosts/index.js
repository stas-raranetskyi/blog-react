import React from 'react';
import Search from "../search";

const Layout = ({children}) => (
    <div className="layout-posts">
        <div className="layout-posts-left">
            <Search />
        </div>
        <div className="layout-posts-right">
            {children}
        </div>
    </div>
)

export default Layout
