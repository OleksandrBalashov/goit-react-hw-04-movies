import React from 'react';
import PropTypes from 'prop-types';
import './CastList.scss';

const CastList = ({ cast, base_url, logo_sizes }) => (
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

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    }),
  ),
  base_url: PropTypes.string.isRequired,
  logo_sizes: PropTypes.string.isRequired,
};

export default CastList;
