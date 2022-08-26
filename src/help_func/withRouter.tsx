import {
    NavigateFunction,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import React from "react";
import {Params} from "react-router/lib/router";

type WithRouterProps = {
    router: {
        location: Location
        navigate: NavigateFunction
        params: Params
    }
}

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter<WCP extends WithRouterProps>(WrappedComponent: React.ComponentType<WCP>) {
    const ComponentWithRouterProp: React.FC<Omit<WCP, 'router'>> = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <WrappedComponent
                {...props as WCP}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default withRouter;