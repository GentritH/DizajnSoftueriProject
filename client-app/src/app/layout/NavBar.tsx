import { observer } from 'mobx-react-lite';
import { Link, NavLink } from 'react-router-dom';
import { Container, Menu, Dropdown,Image } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default observer(function NavBar() {
    const { StafiAkademikStore: { stafi, logout } } = useStore();
    // const { nxenesiStore: {Nxenesi, logout1}} = useStore();
    return (
        <>
           <Menu className='navbar'style={{ width: '15%' }}  inverted  fixed='top'>
            <Container className='container-nav'>
                <Menu.Item className='logonav' style={{ marginRight: '6px' }} as={NavLink} exact to='/' header>
                    <img className='logonav' src='/assets/logo.png' alt='logo' style={{ marginRight: '1px' }} />
                    e-Shkollori
                </Menu.Item>

                <Menu.Item className='navli'  as={NavLink} to='/Stafi/StafiAkademik'>Stafi</Menu.Item>
                <Menu.Item className='navli'  as={NavLink} to='/Stafi/Lendet' name='Lendet' />
                <Menu.Item className='navli'  as={NavLink} to='/Stafi/klasatF' name='Klasat' />
                <Menu.Item className='navli'  as={NavLink} to='/Stafi/Planifikimet' name='Planifikimet' />
                <Menu.Item className='navli'  as={NavLink} to='/Stafi/raportet' name='Raportet' />
                <Menu.Item className='navli'  as={NavLink} to='/Stafi/Nxenesit' name='Nxenesit' />
                <Menu.Item className='navli'  as={NavLink} to='/Stafi/Njesite' name='Njesite' />
                <Menu.Item className='navli'  as={NavLink} to='/Stafi/Oret' name='Oret mesimore' />
                <Menu.Item className='navli'  as={NavLink} to='/Stafi/Oraret' name='Oraret' />
                <Menu.Item className='navli'  as={NavLink} to='/Stafi/Mungesat' name='Mungesat' />
           
           
        
           
            </Container>
        </Menu>

        <Menu  className='stafiuser' >
        <Menu.Item style={{ marginRight: '15px' }} inverted position='right'>
                    <Image src={'/assets/user.png'} avatar spaced='right' />
                    <Dropdown pointing='top left' text={stafi?.emri}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profile/${stafi?.emri}`} 
                                text='My Profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item> 

        </Menu>
        </>
    )
})