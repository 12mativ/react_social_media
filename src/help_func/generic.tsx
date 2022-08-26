// export {}
//
// type UserType = {
//     firstName: string
//     lastName: string
//     age: number
// }
//
// type PhotoType = {
//     large: string
//     small: string
// }
//
// type HipHop<T> = T extends 'user' ? UserType : PhotoType
//
// let a: HipHop<'user'> = {
//     firstName: 'Ivan',
//     lastName: 'Matukhin',
//     age: 18
// }
//
// let b: HipHop<'photo'> = {
//     large: 'large.png',
//     small: 'small.png'
// }
//
// const obj = {
//     a: {name: 'Ivan'},
//     b: {age: 18},
//     c: { site: {title: 'heyhey.com'} }
// }
//
// type SomeType<T> = T extends {[key: string]: infer U} ? U : never
//
// let hipHop: SomeType<typeof obj> = {name: 'qwe'}

import {compose} from "redux";
import React from "react";
import {connect} from "react-redux";
import withRouter from "./withRouter";

function HipHopHOC<WP extends {hiphop: number}>(WrappedComponent: React.ComponentType<WP>) {
    const ContainerComponent: React.FC<Omit<WP, 'hiphop'>> = (props) => {
        return <div><WrappedComponent {...props as WP} hiphop={10} /></div>
    }

    return ContainerComponent
}

function DanceHOC<WP extends {dance: number}>(WrappedComponent: React.ComponentType<WP>) {
    const ContainerComponent: React.FC<Omit<WP, 'dance'>> = (props) => {
        return <div><WrappedComponent  {...props as WP} dance={10}/></div>
    }

    return ContainerComponent
}

type C1PropsType = {
    title: string
    hiphop: number
    dance: number
    router: any
}

const C1: React.FC<C1PropsType> = (props) => {
    return <div>{props.title}</div>
}

// const C1Container = HipHopHOC(C1)
// const C1Container2 = DanceHOC(C1Container)

type FromHipHopHOCPropsType = Omit<C1PropsType, 'hiphop'>
type FromHipHopHOCType = React.ComponentType<FromHipHopHOCPropsType>
type FromDanceHOCType = React.ComponentType<Omit<FromHipHopHOCPropsType, 'dance'>>

const SuperHOC = compose<FromHipHopHOCType, React.ComponentType<C1PropsType>, FromDanceHOCType>(
    DanceHOC,
    HipHopHOC
)

const C1Container2 = SuperHOC(C1)

const mstp = (state:any) => {
    return {
        dance: 13,
        hiphop: 122
    }
}
const C1connect = connect(mstp)(C1)
const ConnectedWithRouterC1 = withRouter(C1connect)

const App = () => {
    return <>
        {/*<ConnectedWithRouterC1 title={'HeyHey'}/>*/}
        <ConnectedWithRouterC1 title={'HeyHey'}/>
    </>
}


// const App = () => {
//     return <C1Container2 title={'HeyHey'}/>
// }
// const f1 = (a: number) => 12
// const f2 = (a: number) => 100
//
// compose(f2,
//     f1)(18)
//hello