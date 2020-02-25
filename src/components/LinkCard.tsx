import React from 'react';
import {Link} from "../interfaces";

interface LinkCard {
  link: Link | null;
}

const LinkCard: React.FC<LinkCard> = ({link}) => {
  return (
    <>
      {link ? (
      <div className="col s8 m7">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <div style={{display: 'flex', justifyContent: "space-between"}}>
                <span>Дата:</span><p>{new Date(link.date).toLocaleDateString()}</p>
              </div>
              <div style={{display: 'flex', justifyContent: "space-between"}}>
                <span>Источник:</span>
                <a
                  href={link.from}
                  rel="noopener noreferrer"
                  target="_blank"
                >{link.from}
                </a>
              </div>
              <div style={{display: 'flex', justifyContent: "space-between"}}>
                <span>Количество кликов:</span>
                <span>{link.clicks}</span>
              </div>
            </div>
            <div className="card-action">
              <a
                rel="noopener noreferrer"
                href={link.to}
                target="_blank">{link.to}
              </a>
            </div>
          </div>
        </div>
      </div>
      ): (null)}
    </>
  );
};

export default LinkCard;
