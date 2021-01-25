import * as Styled from './styles';

export default function TeamCard({ photo, name, role }) {
  return (
    <div>
      <div>
        <Styled.Photo
          src={photo}
          alt={`${name}-photo`}
          width={80}
          height={80}
        />
      </div>
      <Styled.Name>{name}</Styled.Name>
      <Styled.Role>{role}</Styled.Role>
    </div>
  );
}
