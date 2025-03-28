function debounce(func,wait,immediate){
    let timeout,result
    const debounced = function(){
        const context = this
        const args = arguments

        if(timeout) clearTimeout(timeout)
        if(immediate){
            const callnow = !timeout
            timeout = setTimeout(function(){
                timeout = null
            },wait)
            if(callnow) result = func.apply(context,args)
        }else{
            timeout = setTimeout(function(){
                result = func.apply(context,args)
            },wait)
        }
        return result  
    }

    debounced.cancel = function () {
        clearTimeout(timeout)
        timeout = null
      }
    
      return debounced
}