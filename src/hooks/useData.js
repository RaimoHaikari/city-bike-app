import {useState, useEffect} from 'react';
import { csv } from 'd3';

/* 
 * Homman nimi on: Named export!
 */ 
export const useData = (csvUrl) => {

    const [data, setData] = useState(null);

    useEffect(() => {

        const row = d => {
            d.Population = parseFloat(d['2020']) * 1000;
            return d;
        }

        csv(csvUrl, row).then(data => {
            setData(data.slice(0, 10));
        });

    }, []); 

    return {
        data
    };

};