import { useEffect, useState } from "react"

export const useMatrix = (loans) => {

    const [names, setNames]  = useState([]);
    const [matrix, setMatrix] = useState([]);

    const getNames = () => {

        const uniqueNames = {};

        loans.forEach( l => {

            

            const depName = l['departureStationName'];
            const retName =  l['returnStationName'];

            if(depName in uniqueNames === false) uniqueNames[depName] = true
            
            if(retName in uniqueNames === false) uniqueNames[retName] = true

        });

        return Object.keys(uniqueNames);

    }

    const setupNamesAndMatrix = () => {

        let _names = getNames();

        
        const index = {};
        _names.forEach((name, i) => index[name] = i);

        const m = Object.keys(index).map(() => new Array(_names.length).fill(0));

        for(const {departureStationName, returnStationName, lkm} of loans)
            m[index[departureStationName]][index[returnStationName]] = lkm;

        setMatrix(m)
        setNames(_names)

    }

    useEffect(() => {

        setupNamesAndMatrix();

    }, [])

    return {
        names,
        matrix
    }
}