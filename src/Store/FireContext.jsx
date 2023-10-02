import { createContext ,useState} from "react";

export const FireContext=createContext(null)

function Fire ({children}){
    const [fire,setFire]=useState()
  return(
    <FireContext.Provider value={{fire,setFire}}>
        {children}
    </FireContext.Provider>
  )
}
export default Fire
