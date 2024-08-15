import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const onLogoutButtonClicked = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-3'>
            <Link 
                className='navbar-brand' 
                to='/'
            >
                Asociaciones
            </Link>

            <div className='navbar-collapse'>
                <div className='navbar-nav'>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                        to='/marvel'
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                        to='/dc'
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
                <ul className='navbar-nav ml-auto'>
                    <span className='nav-item nav-link text-primary'>
                        mgarciareimers
                    </span>

                    <button 
                        className='nav-item nav-link btn btn'
                        onClick={ onLogoutButtonClicked }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;