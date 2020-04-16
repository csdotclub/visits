import React from 'react';
import cx from 'classnames';

import Visit from './components/Visits';
import VisitStyles from './components/Visits.module.css';
import MainStyles from './Main.module.css';

const Main = () => (
    <div className={cx(VisitStyles.bgGray100, MainStyles.hScreen)}>
        <Visit heading={"Corestormy Visit Count (non-algorithmic)"} url={"https://vc-prod-ms.corestormy.club"} />
        <Visit heading={"Corestormy Visit Count (algorithmic)"} url={"https://vc-prod-ms.corestormy.club/salg"} />
        <a href="https://reactjs.org/">
            <p className={cx(VisitStyles.textCenter, VisitStyles.fontBold, MainStyles.marginBottom2)}>Powered by Facebook's React.js.</p>
        </a>
        <a href="https://corestormy.club/newalg.html">
            <p className={cx(VisitStyles.textCenter, VisitStyles.fontBold)}>What is the "algorithmic" count?</p>
        </a>
    </div>
);

export default Main;