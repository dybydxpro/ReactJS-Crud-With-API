import React from 'react';
import logo from '../images/flower (1).png';

function Header(){
    return (
        <div>
            <div className="d-flex align-items-center p-3 text-black bg-warning">
            <img className="me-3" src={ logo } alt="" width="38" height="38" />
                <div className="lh-1">
                    <h1 className="h6 mb-0 text-black lh-1">Mega Employee</h1>
                    <small>Employee management system</small>
                </div>
            </div>
        </div>
    );
}

export default Header;