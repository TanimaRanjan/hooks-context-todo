import { useReducer, useEffect } from 'react'
import { red } from '@material-ui/core/colors'

const useLocalStorageReducer = (key, reducer, defaultValue) => {

    const [state, dispatch] = useReducer(reducer, defaultValue, () => {

        let value
        try {
            value = JSON.parse(localStorage.getItem(key) || String(defaultValue))
        } catch(e) {
            value = defaultValue
        }
        return value
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
      }, [key, state]);
    
      return [state, dispatch];
}


export default useLocalStorageReducer