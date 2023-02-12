
import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer } from 'react-toastify';
import { useStore } from '../stores/store';
import LoadingComponent from './LoadingComponent';
import ModalContainer from '../common/modals/ModalContainer';
import StafiDashboard from '../../features/StafiAkademik/dashboard/StafiDashboard';
import RegisterFormStafi from '../../features/StafiAkademik/form/RegisterFormStafi';
import LendaDashboard from '../../features/Lendet/dashboard/LendaDashboard';
import LendaDetails from '../../features/Lendet/dashboard/LendaDetails';
import LendaForm from '../../features/Lendet/form/LendaForm';
import KlasatDashboard from '../../features/Klasat/dashboard/KlasatDashboard';
import KlasatDetails from '../../features/Klasat/dashboard/KlasatDetails';
import KlasatForm from '../../features/Klasat/form/KlasatForm';
import PlanifikimetForm from '../../features/PlanifikimetShkollore/Form/PlanifikimetForm';
import PlanifikimetDashboard from '../../features/PlanifikimetShkollore/Dashboard/PlanifikimetDashboard';
// import OrariDashboardNxenesi from '../../features/Oraret/dashboard/OrariDashboardNxenesi';
import PlanifikimetDetails from '../../features/PlanifikimetShkollore/Dashboard/PlanifikimetDetails';

import LoginForm from '../../features/Nxenesit/form/LoginFormNxenesi';
import NxenesiDashboard from '../../features/Nxenesit/dashboard/NxenesiDashboard';
import RegisterFormNxenesi from '../../features/Nxenesit/form/RegisterFormNxenesi';
import NjesiaDashboard from '../../features/Njesite/dashboard/NjesiaDashboard';
import NjesiaDetails from '../../features/Njesite/dashboard/NjesiaDetails';
import NjesiaForm from '../../features/Njesite/form/NjesiaForm';
import OraDashboard from '../../features/Oret/dashboard/OraDashboard';
import OraDetails from '../../features/Oret/dashboard/OraDetails';
import OraForm from '../../features/Oret/form/OraForm';
import NxenesiForm from '../../features/Nxenesit/form/NxenesiForm';
import OrariDashboard from '../../features/Oraret/dashboard/OrariDashboard';
import OrariForm from '../../features/Oraret/form/OrariForm';
import NavNxenesi from './NavNxenesi';
import NxenesiPage from './NxenesiPage';
import StafiForm from '../../features/StafiAkademik/form/StafiForm';
import OrariDetails from '../../features/Oraret/dashboard/OrariDetails';
import RaportetForm from '../../features/Raportet/Form/RaportetForm';
import RaportetDashboard from '../../features/Raportet/Dashboard/RaportetDashboard';
import MungesaForm from '../../features/Mungesat/form/MungesaForm';
import MungesaDetails from '../../features/Mungesat/dashboard/MungesaDetails';
import MungesaDashboard from '../../features/Mungesat/dashboard/MungesaDashboard';
import StafiPage from './StafiPage';
import NavBar from './NavBar';
import RaportetDashboardNxenesi from '../../features/Raportet/Dashboard/RaportetDashboardNxenesi';





function App() {
  const location = useLocation();
  const { commonStore, StafiAkademikStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      StafiAkademikStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, StafiAkademikStore])


  if (!commonStore.appLoaded) return <LoadingComponent content='Loading app...' />

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar />
      <ModalContainer />
      <Route exact path='/' component={HomePage} />


      <Route path="/Nxenesi" component={NxenesiPage} />
      <Route
        path={"/Nxenesi/(.+)"}
        render={() => (
          <>
            <NavNxenesi />

            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route
                  exact
                  path="/Nxenesi/Profili/"
                  component={NxenesiDashboard}
                />
                 <Route  path='/Nxenesi/Raportet' component={RaportetDashboardNxenesi} />
                 <Route  path='/Nxenesi/Oraret' component={OrariDashboard} />
                 <Route  path='/Nxenesi/njesite' component={NjesiaDashboard} />
                 <Route  path='/Nxenesi/oret' component={OraDashboard} />
                 <Route  path='/Nxenesi/mungesat/:id' component={MungesaDetails} />
                 {/* <Route  path='/Nxenesi/njesite' component={NjesiaDashboard} /> */}
            
              </Switch>
            </Container>
          </>
        )}
      />


    <Route path="/Stafi" component={StafiPage} />
      <Route
        path={"/Stafi/(.+)"}
        render={() => (
          <>
            <NavBar />

            <Container style={{ marginTop: "7em" }}>
              <Switch>
                  <Route exact path='/Stafi/StafiAkademik' component={StafiDashboard} />  
                <Route exact path='/Stafi/Nxenesit' component={NxenesiDashboard} />  
                <Route exact path='/Stafi/login' component={LoginForm} />
                <Route exact path='/Stafi/raportet' component={RaportetDashboard} />
                <Route  path='/Stafi/lendet' component={LendaDashboard} />
                <Route  path='/Stafi/klasatF' component={KlasatDashboard} />
                <Route  path='/Stafi/Oraret' component={OrariDashboard} />
                <Route  path='/Stafi/Planifikimet' component={PlanifikimetDashboard} />
                <Route  path='/Stafi/oret' component={OraDashboard} />
                <Route  path='/Stafi/mungesat' component={MungesaDashboard} />
                <Route  path='/Stafi/njesite' component={NjesiaDashboard} />
                <Route  path='/Stafi/Planifikimet/:id' component={PlanifikimetDetails} />
                <Route path='/Stafi/lendet/:id' component={LendaDetails} />
                <Route path='/Stafi/klasatF/:id' component={KlasatDetails} />
                <Route path='/Stafi/Nxenesit/:id' component={NxenesiForm} />
                <Route path='/Stafi/njesite/:id' component={NjesiaDetails} />
                <Route path='/Stafi/Oraret/:id' component={OrariDetails} />
                <Route  path='/Stafi/oret/:id' component={OraDetails} />
                <Route  path='/Stafi/mungesat/:id' component={MungesaDetails} />
                <Route path='/Stafi/registerstafi' component={RegisterFormStafi} />
                <Route path='/Stafi/registerNxenesi' component={RegisterFormNxenesi} />
                <Route key={location.key} path={['/Stafi/createKlasat', '/Stafi/manage/:id']} component={KlasatForm} />
                <Route key={location.key} path={['/Stafi/createLenda', '/Stafi/manage1/:id']} component={LendaForm} />
                <Route key={location.key} path={['/Stafi/createOrari', '/Stafi/manageOraret/:id']} component={OrariForm} />
                <Route key={location.key} path={['/Stafi/createNjesia', '/Stafi/manage6/:id']} component={NjesiaForm} />
                <Route key={location.key} path={['/Stafi/Raportet', '/Stafi/manageRaportet/:id']} component={RaportetForm} />
                <Route key={location.key} path={['/Stafi/stafiAkademik', '/Stafi/manage4/:id']} component={StafiForm} />
                <Route key={location.key} path={['/Stafi/Planifikimet', '/Stafi/manage5/:id']} component={PlanifikimetForm} />
                <Route key={location.key} path={['/Stafi/Raportet', '/Stafi/manageRaportet/:id']} component={RaportetForm} />
                <Route key={location.key} path={['/Stafi/createOra', '/Stafi/manage7/:id']} component={OraForm} />
                <Route  key={location.key}  path={['/Stafi/createMungesa', '/Stafi/manage8/:id']} component={MungesaForm} />
            
              </Switch>
            </Container>
          </>
        )}
      />
      
    </>
  );
}

export default observer(App);
