import { useState } from "react";

import {
    Container
} from "./tabElements";

/*
 * Välilehtien toteuttamisessa käytettävä komponetti.
 */
const Tabs = ({name, config}) => {

    const [ active, setActive ] = useState(0);

    //const indicatoLeft = ((active / config.length) * 100).toFixed(0) + '%';
    const indicatoLeft = (active * (1/4) * 100) + '%';

    return (
        <Container>

            <div className="title">{name}</div>

            <div className="tab-header">
            {
                config.map((entry, index) => {
                    return (
                        <div
                            key = { `station-tabs-${index}` }
                            className = { index === active ? 'active' : null }
                            onClick = { () => setActive(index) }
                        >
                            {entry.header}
                        </div>
                    )
                })
            }
            </div>

            <div className="tab-indicator">
                <div style={{ left: indicatoLeft }}></div>
            </div>
            <div className="tab-body">

                {
                    config.map((entry,index) => {

                        return (
                            <div
                                key = { `station-content-${index}` }
                                className = { index === active ? 'active' : null}
                            >
                                {
                                    entry.component
                                }
                            </div>
                        )
                    })
                }
            </div>
        </Container>
    );
};

export default Tabs;