import styled, { keyframes, css } from 'styled-components'

const slideInFromBottom = keyframes`
  0% {
    transform: translate(-50%, 100%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
`

const slideOutToBottom = keyframes`
  0% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 100%);
    opacity: 0;
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
  }
`

type OverlayStyledProps = { $isClosing?: boolean }

export const OverlayStyled = styled.div<OverlayStyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0;
  z-index: 999;
  animation: ${({ $isClosing }) =>
    $isClosing
      ? css`
          ${fadeOut} 0.5s ease-in-out forwards
        `
      : css`
          ${fadeIn} 0.5s ease-in-out forwards
        `};
`

export const BannerWrapperTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 100%;
  color: #222;
  text-align: left;

  h2 {
    font-size: 1.3rem;
    margin-bottom: 8px;
    color: #1976d2;
    text-align: left;
  }

  div {
    font-size: 0.98rem;
    color: #333;
    line-height: 1.6;
    text-align: left;
    margin-bottom: 6px;
    word-break: break-word;
  }

  a {
    color: #1976d2;
    text-decoration: underline;
    transition: color 0.2s;
    &:hover {
      color: #0d47a1;
    }
  }

  @media (min-width: 601px) {
    max-width: 80%;
    h2 {
      font-size: 1.6rem;
      margin-bottom: 14px;
    }
    div {
      font-size: 1.05rem;
      margin-bottom: 8px;
    }
  }
`

export const BannerWrapperTextSiteStyled = styled.div`
  width: 100%;
  text-align: left;
`
export const BannerWrapperTextH2Styled = styled.h2`
  text-align: left;
`
export const BannerWrapperAcceptButtonStyled = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 12px;

  &:hover {
    background-color: #1976d2;
  }

  &:active {
    background-color: #0d47a1;
  }
`

export const BannerWrapperTextBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: max-content;
  margin: 0 auto;
  padding: 12px 8px;

  @media (min-width: 601px) {
    gap: 32px;
    padding: 0;
  }
`

type PoliciesBannerStyledProps = { $isClosing?: boolean }

export const PoliciesBannerStyled = styled.div<PoliciesBannerStyledProps>`
  background: #fff;
  border: 1px solid #2196f3;
  color: #222;
  border-radius: 8px;
  padding: 6px;

  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.08);
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: calc(100vw - 48px);
  max-width: 600px;

  animation: ${({ $isClosing }) =>
    $isClosing
      ? css`
          ${slideOutToBottom} 0.5s ease-in-out forwards
        `
      : css`
          ${slideInFromBottom} 0.5s ease-in-out forwards
        `};

  @media (min-width: 601px) {
    padding: 16px;
    bottom: 60px;
  }
`
