import React, {Component} from "react";
import {Route} from "react-router-dom";
import AdminLayout from "../../layouts/Admin";
import AuthLayout from "../../layouts/Auth";
import {withDataService} from "../hoc";
import {connect} from "react-redux";
import {setKinds} from "../../actions/kinds";
import {setLocalities, setSubcategories} from "../../actions";

class App extends Component {
    componentDidMount() {
        this.getKindsPooling();
        this.getSubcategoriesPooling();
        this.getLocalitiesPooling();
    }

    getKindsPooling = () => {
        const { getKinds, setKinds } = this.props;

        getKinds()
            .then( (data) => setKinds(data))
            .catch( () => setTimeout(() => this.getKindsPooling(), 3000));
    };

    getSubcategoriesPooling = () => {
        const { getSubcategories, setSubcategories } = this.props;

        getSubcategories()
            .then( (data) => setSubcategories(data))
            .catch( () => setTimeout(() => this.getSubcategoriesPooling(), 3000));
    };

    getLocalitiesPooling = () => {
        const { getLocalities, setLocalities } = this.props;

        getLocalities()
            .then( (data) => setLocalities(data))
            .catch( () => setTimeout(() => this.getLocalitiesPooling(), 3000));
    };

    render() {
        return (
            <React.Fragment>
                <Route path="/admin" render={props => <AdminLayout {...props} />} />
                <Route path="/auth" render={props => <AuthLayout {...props} />} />
            </React.Fragment>
        );
    }
}

const mapMethodsToProps = ({getKinds, getSubcategories, getLocalities}) => ({
    getKinds,
    getSubcategories,
    getLocalities
});

export default connect(null, {setKinds, setSubcategories, setLocalities})(withDataService(App, mapMethodsToProps));