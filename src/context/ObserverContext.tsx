import { createContext } from 'react';
import { useState, useContext } from '../config/import.config.js'


interface ObserverContext {
    observerA: (isWatching: boolean) => void,
    observerS: (isWatching: boolean) => void,
    observerP: (isWatching: boolean) => void,
    observeAbout: boolean,
    observeSkills: boolean,
    observeProjects: boolean
}

const observerContext = createContext<ObserverContext>({
    observerA: () => { },
    observerS: () => { },
    observerP: () => { },
    observeAbout: false,
    observeSkills: false,
    observeProjects: false
});

export const useObserver = () => useContext(observerContext)

const ObserverProvider = ({ children }: { children: React.ReactNode }) => {

    const [observeAbout, setObserveAbout] = useState(false);
    const [observeSkills, setObserveSkills] = useState(false);
    const [observeProjects, setObserveProjects] = useState(false);

    const observerA = (isWatching: boolean) => {
        setObserveAbout(isWatching);
    }

    const observerS = (isWatching: boolean) => {
        setObserveSkills(isWatching);
    }

    const observerP = (isWatching: boolean) => {
        setObserveProjects(isWatching);
    }

    return (
        <observerContext.Provider value={{ observerA, observerS, observerP, observeAbout, observeSkills, observeProjects }}>
            {children}
        </observerContext.Provider>
    )
}

export default ObserverProvider