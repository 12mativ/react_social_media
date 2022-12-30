import {useSelector} from "react-redux";
import React from "react";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getIsFetching} from "../../redux/users/users-selectors";

interface UsersPageProps {
    pageTitle: string
}

export const UsersPage: React.FC<UsersPageProps> = (props) => {
    const isFetching = useSelector(getIsFetching)

    return <>
        <h2>{props.pageTitle}</h2>
        {isFetching ? <Preloader /> : null}
        <Users/>
    </>
}


