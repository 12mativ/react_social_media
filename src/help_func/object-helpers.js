export const updateObjectInArray = (items, itemId, objectName, newObjProps) => {
    return items.map(u => {
        if (u[objectName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}