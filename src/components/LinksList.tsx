import React from 'react';
import LinkCard from "./LinkCard";
import {Link} from "../interfaces";

interface LinksList {
  links: Link[] | null;
}

const LinksList: React.FC<LinksList> = ({links}) => {
  if ( links && !links.length) {
    return <p className="center"> Ссылки отсутствуют} </p>
  }
  return (
    <>
      {
        links && links.map(link => <LinkCard key={link._id} link={link}/>)
      }
    </>
  );
};

export default LinksList;
