
import * as Styled from './styles'; 
import { useRouter } from 'next/router'

export default function GoBackButton() {
  const router = useRouter()

  return <Styled.StyledGoBackButton onClick={() => router.back()}
  > <img src="../images/icons/back.svg" alt=""/>
    Regresa</Styled.StyledGoBackButton>
   
} 