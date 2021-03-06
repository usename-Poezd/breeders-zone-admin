import React, {Component} from "react";
import ErrorIndicator from "../ErrorIndicator";

class ErrorBoundary extends Component{
    state = {
        hasError: false
    };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if(this.state.hasError){
            return <ErrorIndicator header={this.props.header}/>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;