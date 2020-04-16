import React from 'react';
import cx from 'classnames';
import styles from './Visits.module.css';
import PropTypes from 'prop-types';
import axios from 'axios';

class Visits extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            // gibt an, ob die antwort einen fehler zurückgegeben hat
            fehlerhaft: false,
            // die zurückgekehrten besuche
            daten: null,
            // aktuelles datum abrufen
            lastUpdate: new Date().toLocaleString(),
        }

        this.fetchVisits = this.fetchVisits.bind(this);
    }

    fetchVisits = async url => {
        try {
            return await axios(url).then(res => res.data);
        } catch (fehlerhaft) {
            this.setState({
                fehlerhaft: true
            })
        }
    }

    async componentDidMount() {
        try {
            // grobe implementierung von live reloading =/
            const besuche = await this.fetchVisits(this.props.url);
    
            this.setState({
                daten: besuche,
                lastUpdate: new Date().toLocaleString()
            });

            setInterval(async () => {
                const besuche = await this.fetchVisits(this.props.url);
    
                this.setState({
                    daten: besuche,
                    lastUpdate: new Date().toLocaleString()
                });
            }, 2000);
        } catch (fehlerhaft) {
            this.setState({
                fehlerhaft: true
            });
        }
    }

    render() {
        return (
            <div className={cx(styles.padding4, styles.textCenter)}>
                <p className={styles.mediumText}>
                    {this.props.heading}
                </p>
                <p className={cx(styles.largeText, styles.fontBold)}>
                    {this.state.daten ?? "Loading..."}
                </p>
                <p>
                    Last updated: {this.state.lastUpdate}
                </p>
            </div>
        )
    }
};

Visits.propTypes = {
    heading: PropTypes.string,
    url: PropTypes.string,
};

export default Visits;