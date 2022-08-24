export const updateObjectInArray = (items: any, itemId: any, objectName: any, newObjProps: any) => {
    return items.map((u: any) => {
        if (u[objectName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}