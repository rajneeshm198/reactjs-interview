import React, { useState } from 'react';
import Employee from '../container/Employee/Employee';

import './Home.css';

const Home = () => {

    const [displayedPage, setDisplayedPage] = useState(null);

    const showEmployeeList = (page = 'show') => {
        setDisplayedPage(page);
    }

    return (
        <>
            <h1 className="text-center">Employee Directory</h1>
            <div className="ButtonContainer">
                <button onClick={() => setDisplayedPage('show')}>Show Employees</button>
                <button onClick={() => setDisplayedPage('add')}>Add Employee</button>
            </div>
            {displayedPage && <Employee displayedPage={displayedPage} showEmployeeList={showEmployeeList} />}
        </>
    );
}

export default Home;