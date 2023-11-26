import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
const Navbars = () => {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <div className='flex flex-col items-center'>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Study<span className='text-yellow-400'>Sync</span></span>
                    <span className='text-xs'>Study Online</span>
                </div>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://i.ibb.co/9vVRxhh/user2.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className='text-4xl'>
                <Navbar.Link>
                    <NavLink to='/'>Home</NavLink>
                </Navbar.Link>

                <Navbar.Link>
                    <NavLink to='/contact'>Contact</NavLink>
                </Navbar.Link>

                <Navbar.Link>
                    <NavLink to='/dashbord'>Dashbord</NavLink>
                </Navbar.Link>

                <Navbar.Link>
                    <NavLink to='/about'>About Us</NavLink>
                </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbars;