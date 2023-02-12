import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import LoginFormNxenesi from '../Nxenesit/form/LoginFormNxenesi';
import LoginFormStafi from '../StafiAkademik/form/LoginFormStafi';



export default observer(function HomePage() {
    const { StafiAkademikStore, modalStore,nxenesiStore } = useStore();
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    e-Shkollori
                </Header>
                {StafiAkademikStore.isLoggedIn ? (
                    <>
                        <Header as='h2' inverted content='Welcome to e-Shkollori' />
                        <Button as={Link} to='/Stafi' size='huge' inverted>
                            Go to e-Shkollori!
                        </Button>
                     
                    </>

                ) : (
                    <>
                        <Button onClick={() => modalStore.openModal(<LoginFormStafi />)} size='huge' inverted>
                            Login as an Staf!
                        </Button>
                        <br></br><br />


                    </>

                )}

                {nxenesiStore.isLoggedIn ? (
                    <>
                        <Header as='h2' inverted content='Welcome to e-Shkollori' />
                        <Button as={Link} to='/nxenesi' size='huge' inverted>
                            Go to e-Shkollori!
                        </Button>
                     
                    </>

                ) : (
                    <>
                     <Button  onClick={() => modalStore.openModal(<LoginFormNxenesi />)} size='huge' inverted>Login as Student!</Button>
               
                    </>

                )}

                
      

            </Container>
        </Segment>
    )
})
