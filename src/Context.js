// Context.js
import React, { createContext, useState } from 'react';

export const AidContext = createContext();

export const AidProvider = ({ children }) => {
    const [aids, setAids] = useState([]);

    const addAid = (newAid) => {
        setAids([...aids, newAid]);
    };

    const deleteAid = (id) => {
        const updatedAids = aids.filter(aid => aid.id !== id);
        setAids(updatedAids);
    };

    return (
        <AidContext.Provider value={{ aids, addAid, deleteAid }}>
            {children}
        </AidContext.Provider>
    );
};
