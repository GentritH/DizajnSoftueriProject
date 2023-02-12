import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Menu, Dropdown, Image } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default observer(function NavBarNxenesi() {
    const { nxenesiStore: { nxenesit, logout } } = useStore();

    return (
        <>
           <Menu className='navbar'style={{ width: '18%' }}  inverted  fixed='top'>
            <Container className='container-nav'>
                <Menu.Item className='logonav' style={{ marginRight: '5px' }} as={NavLink} exact to='/' header>
                    <img className='logonav' src='/assets/logo.png' alt='logo' style={{ marginRight: '5px' }} />
                    e-Shkollori
                </Menu.Item>

              
                <Menu.Item className='navli'  as={NavLink} to='/Nxenesi/raportet' name='Raportet' />
                <Menu.Item className='navli'  as={NavLink} to='/Nxenesi/Nxenesit' name='Nxenesit' />
                <Menu.Item className='navli'  as={NavLink} to='/Nxenesi/Njesite' name='Njesite' />
                <Menu.Item className='navli'  as={NavLink} to='/Nxenesi/Oret' name='Oret mesimore' />
                <Menu.Item className='navli'  as={NavLink} to='/Nxenesi/Oraret' name='Oraret' />
                <Menu.Item className='navli'  as={NavLink} to='/Nxenesi/Mungesat' name='Mungesat' />
           
           
        
           
            </Container>
        </Menu>

        <Menu  className='stafiuser' >
        <Menu.Item style={{ marginRight: '15px' }} inverted position='right'>
                    <Image src={'/assets/user.png'} avatar spaced='right' />
                    <Dropdown pointing='top left' text={nxenesit?.emri}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profile/${nxenesit?.emri}`} 
                                text='My Profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item> 

        </Menu>
        </>
    )
})