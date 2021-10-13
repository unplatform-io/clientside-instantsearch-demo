import type { NextPage } from 'next'
import { RefinementList, Menu } from 'react-instantsearch-dom';

const Sidebar: NextPage = () => {
    return (
        <div className="left-column">
            <h5>Category</h5>
            <RefinementList attribute="categories"/>
            <br />
            <h5>Brand</h5>
            <RefinementList searchable={true} attribute="brand"/>
            <h5>Type</h5>
            <Menu attribute="type" />
        </div>
    );
}

export default Sidebar
