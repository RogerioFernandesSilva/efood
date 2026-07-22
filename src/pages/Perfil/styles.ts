import styled from 'styled-components'

import lixeira from '../../assets/removeIcon.png'

import { ButtonContainer } from '../../components/Button/styles'
import { colors } from '../../styles'

type MaxWidthProps = {
  maxWidth?: string
}

export const PriceContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.darkBeige};
  padding-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 0;
  position: relative;
  margin-bottom: 16px;
  background-color: ${colors.darkBeige};

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 0 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    color: ${colors.pink};
    padding-bottom: 16px;
  }

  p {
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
export const CartContent = styled.div`
  color: ${colors.darkBeige};

  > div {
    margin-bottom: 24px;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    padding-bottom: 8px;
  }

  ${ButtonContainer} {
    margin-bottom: 8px;
    max-width: 100%;
    width: 100%;
  }
`

export const InputGroup = styled.div<MaxWidthProps>`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    padding: 8px 0;
    font-size: 14px;
    font-weight: 700;
  }

  input {
    padding: 8px;
    border: none;
    font-size: 16px;
    color: ${colors.gray};
    background-color: ${colors.darkBeige};
    width: 100%;
    height: 32px;

    &.error {
      border: 1px solid red;
    }
  }
`
export const RowInput = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 34px;
`
export const OrderContent = styled.div`
  color: ${colors.darkBeige};
  margin-bottom: 24px;

  h3 {
    font-size: 16px;
    font-weight: 700;

  }

  p {
    margin-top: 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
`
