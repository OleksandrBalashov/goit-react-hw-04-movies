import React from 'react';
import './CastList.scss';

interface PropTypes {
  options: {
    cast: any[];
    base_url: string;
    logo_sizes: string;
  };
}

const CastList = ({ options: { cast, base_url, logo_sizes } }: PropTypes) => (
  <ul className="CastActorsList">
    {cast.map(({ id, profile_path, name, character }) => {
      const src = `${base_url}${logo_sizes}${profile_path}`;

      const defaultSrc =
        'https://stavik.ru/sites/default/files/styles/personal/public/personal_photo/default_man_photo.jpg';

      return (
        <li className="CastActorsItem" key={id}>
          <div className="CastActorWrapImg">
            <img
              src={profile_path ? src : defaultSrc}
              alt={name}
              className="CastActorsImg"
            />
          </div>

          <div className="ActorNameWrap">
            <p className="ActorName">{name}</p>
            <div>
              <div className="ActorCharacterTitle">Character:</div>
              <p className="ActorCharacter">{character}</p>
            </div>
          </div>
        </li>
      );
    })}
  </ul>
);

export default CastList;
