function deepcopy(source,hash = new WeakMap())
{
    if(!isObject(source)) return source;
    if(hash.has(source)) return hash.get(source);

    let target = Array.isArray(source) ? [] : {} ;
    hash.set(source,target);
    for(let key in source )
        {
            if(Object.prototype.hasOwnProperty.call(source,key))
                {
                    if(isObject(source[key]))
                        {
                            target[key] = deepcopy(source[key],hash)
                        }
                        else
                        {
                            target[key] = source[key]
                        }
                }
        }
        return target;
}