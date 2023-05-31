import { createContext } from 'react';
import { useState, useContext } from '../config/import.config.js'

const observerContext = createContext();

export const useObserver = () => useContext(observerContext)

const ObserverProvider = ({ children }) => {

    const [observeAbout, setObserveAbout] = useState(false);
    const [observeSkills, setObserveSkills] = useState(false);
    const [observeProjects, setObserveProjects] = useState(false);

    const observerA = (isWatching) => {
        setObserveAbout(isWatching);
    }

    const observerS = (isWatching) => {
        setObserveSkills(isWatching);
    }

    const observerP = (isWatching) => {
        setObserveProjects(isWatching);
    }

    return (
        <observerContext.Provider value={{ observerA, observerS, observerP, observeAbout, observeSkills, observeProjects }}>
            {children}
        </observerContext.Provider>
    )
}

export default ObserverProvider