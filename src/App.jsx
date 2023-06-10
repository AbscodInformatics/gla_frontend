import './assets/css/bootstrap.min.css';
import './assets/css/icofont.min.css';
import './assets/css/animate.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css'
import './assets/css/style.css';
import './assets/css/responsive.css';

import React from 'react';
import AppRouter from './Routes';
import Preloader from './components/Shared/Preloader';
import HomeForm from './components/Common/HomeForm';

class App extends React.Component {
    state = {
        loading: true,
        homeForm:true
    };

    updateSponsorData = () => {
    this.setState({homeForm : false });
  };

    componentDidMount(){
        this.demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    demoAsyncCall = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 300));
    }

    render(){
        return (
            <React.Fragment>
                 {/* {this.state.homeForm &&
          < HomeForm updateData={this.updateSponsorData}  updateAward={this.updateAward} />}
                {this.state.loading ? <Preloader /> : ''} */}
                <AppRouter />
            </React.Fragment>
        );
    }
}

export default App;
