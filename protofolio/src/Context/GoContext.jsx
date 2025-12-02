import { createContext, useContext, useRef } from "react";
export  const Cont=createContext();
export default function Go({children}){
    let Home=useRef(); 
    let Project=useRef();
    let Skill=useRef();
      let Contact=useRef();
    return (
        <Cont.Provider value={{Home,Project,Skill,Contact}}>
            {children}
        </Cont.Provider>
    );

}
export function UseGoes(){
    let context=useContext(Cont)
    if(!context){
        throw new Error("error")
    }
    return context;
}