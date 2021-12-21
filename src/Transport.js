import React from 'react'
import { FaCarSide, FaCarAlt, IoCarSharp } from 'react-icons/fa'

const Transport = () => {

    return (
        <div className="transport-container">
            <div className="sedan">
                <FaCarSide className="object" />
                <h4>sedan</h4>
                <p>choose a sedan for its affordability
                    and excellent fuel economy.Ideal for cruising in the city
                    or on next road trip</p>
                <button type="button" className="btn">learn more</button>
            </div>
            <div className="suvs">
                <FaCarAlt className="object" />
                <h4>suvs</h4>
                <p>Take and SUV for its spacious
                    interior, power and versatility. Perfect for your next
                    family vacation and off-road adventures</p>
                <button type="button" className="btn">learn more</button>
            </div>
            <div className="luxury">
                <FaCarAlt className="" />
                <h4>luxury</h4>
                <p>Cruise in the best cars brands without bloated
                    prices. Enjoy the enhanced comfort of a luxury rental and arrive in style</p>
                <button type="button" className="btn">learn more</button>
            </div>

        </div>
    )
};

export default Transport;