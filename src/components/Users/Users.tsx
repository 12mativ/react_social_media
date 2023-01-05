import React, {useEffect} from "react";
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";
import {UsersSearch} from "./UsersSearch";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/users/users-selectors";
import {actions, follow, requestUsers, unfollow} from "../../redux/users/users-reducer";
import {BooleanParam, NumberParam, StringParam, useQueryParams,} from 'use-query-params';

export const Users = () => {
    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const followingInProgress = useSelector(getFollowingInProgress)
    const filter = useSelector(getUsersFilter)

    const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const location = useLocation()
    // const [searchParams] = useSearchParams(location.search)
    // const parsed = Object.fromEntries(searchParams)

    const [query, setQuery] = useQueryParams({
        term: StringParam,
        friend: BooleanParam,
        page: NumberParam
    });
    const { term, friend, page } = query;

    useEffect(() => {
        let actualPage = currentPage
        let actualFilter = filter
        if (page) {
            actualPage = Number(page)
        }

        if (term) {
            actualFilter = {...actualFilter, term: term}
        }

        if (friend) {
            actualFilter = {...actualFilter, friendsOnly: String(friend) === 'true'}
        }

        dispatch(requestUsers(pageSize, actualFilter.term, actualFilter.friendsOnly, actualPage))
        dispatch(actions.setCurrentPage(actualPage))
    }, [])

    useEffect(() => {
        setQuery({term: filter.term !== '' ? filter.term : undefined,
            friend: filter.friendsOnly ? filter.friendsOnly : undefined,
            page: currentPage !== 1 ? currentPage : undefined})
        /*navigate({
            pathname: '/users',
            search: `?term=${filter.term}&friend=${filter.friendsOnly}&page=${currentPage}`
        })*/
    }, [filter, currentPage])

    const onPageChanged = (page: number) => {
        dispatch(requestUsers(pageSize, filter.term, filter.friendsOnly, page))
        dispatch(actions.setCurrentPage(page))
    }

    const onSearchHandler = (term: string, friend: boolean) => {
        dispatch(requestUsers(pageSize, term, friend, 1))
        if(page) {
            dispatch(actions.setCurrentPage(+page))
        } else {
            dispatch(actions.setCurrentPage(1))
        }
    }

    const followFunc = (userId: number) => {
        dispatch(follow(userId))
    }

    const unfollowFunc = (userId: number) => {
        dispatch(unfollow(userId))
    }

    const usersArray = users.map(user => <User key={user.id} photoURL={user.photos}
                                               userId={user.id}
                                               followed={user.followed}
                                               name={user.name}
                                               status={user.status}
                                               follow={followFunc}
                                               unfollow={unfollowFunc}
                                               followingInProgress={followingInProgress}

    />)

    return (
        <div>
            <UsersSearch onSearchHandler={onSearchHandler}/>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            {usersArray}
        </div>
    )
}