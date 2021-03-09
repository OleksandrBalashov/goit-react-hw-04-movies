import React from 'react';

const CastListItem = ({
  options: { profile_path, name, character, base_url, logo_sizes },
}) => {
  const url = `${base_url}${logo_sizes}${profile_path}`;

  return (
    <li className="CastActorsItem">
      <div className="CastActorWrapImg">
        <img
          src={
            profile_path
              ? url
              : 'https://stavik.ru/sites/default/files/styles/personal/public/personal_photo/default_man_photo.jpg'
          }
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
};

export default CastListItem;
