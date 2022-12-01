import { useState, createContext } from 'react'

export const observerContext = createContext();

const ObserverProvider = ({ children }) => {

    const [observeAbout, setObserveAbout] = useState(false);
    const [observeSkills, setObserveSkills] = useState(false);
    const [observeProjects, setObserveProjects] = useState(false);

    const observerA = (validate) => {
        setObserveAbout(validate);
    }

    const observerS = (validate) => {
        setObserveSkills(validate);
    }

    // console.log(observeSkills)

    const observerP = (validate) => {
        setObserveProjects(validate);
    }

    return (
        <observerContext.Provider value={{observerA, observerS, observerP, observeAbout, observeSkills, observeProjects}}>
            {children}
        </observerContext.Provider>
    )
}

export default ObserverProvider