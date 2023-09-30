/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Close from '../assets/close.svg'

const PortfolioItem = ({img, title, details}) => {

    
  const [model, setModel] = useState(false);

  const toggleModel = () => {
    setModel(!model);
  }

  return (
    <div className="portfolio_item">
        <img src={img} alt="" className="portfolio_img" />

        <div className="portfolio_hover" onClick={toggleModel}>
            <h3 className="portfolio_title">{title}</h3>
        </div>

        {model && <div className="portfolio_model">
            <div className="portfolio_model-content">
                <img src={Close} alt="" className="close_model" onClick={toggleModel} />
                <h3 className="model_title">{title}</h3>

                <ul className="model_list grid">
                    {details.map(({icon, title, desc}, index ) => {
                        return (
                            <li className="model_item" key={index}>
                                <span className="item_icon">{icon}</span>

                                <div>
                                    <span className="item_title">{title}</span>
                                    <span className="item_details">{desc}</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>

                <img src={img} alt="" className="model_img" />
            </div>
        </div>}
    </div>
  )
}

export default PortfolioItem