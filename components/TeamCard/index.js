import * as Styled from './styles';
import Link from 'next/link';

export default function TeamCard({ photo, name, role, socialNetwork }) {
  return (
    <Link href={socialNetwork}>
      <div style={{ cursor: 'pointer' }}>
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
    </Link>
  );
}
