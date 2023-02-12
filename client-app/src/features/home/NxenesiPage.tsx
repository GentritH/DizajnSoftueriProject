import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';



export default observer(function NxenesiPage() {
    const { nxenesiStore, modalStore } = useStore();
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    e-Shkollori
                </Header>
                {nxenesiStore.isLoggedIn ? (
                    <>
                        <Header as='h2' inverted content='Welcome to e-Shkollori' />
                        <Button as={Link} to='/NxenesiPage' size='huge' inverted>
                            Go to e-Shkollori!
                        </Button>
                       
                    </>

                ) : (
                    <>
                        {/* <Button onClick={() => modalStore.openModal(<LoginFormNxenesi />)} size='huge' inverted>
                            Login as Student!
                        </Button> */}

                    </>

                )}
            </Container>
        </Segment>
    )
})