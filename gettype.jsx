function getType(data)
{
    let originType = Object.prototype.toString.call(data)
    let index = type.indexOf(' ')
    let type =  originType.slice(index + 1, -1)
    return type.toLowerCase()
}