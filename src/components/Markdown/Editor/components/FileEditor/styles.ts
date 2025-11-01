import styled from 'styled-components'

export const FileUploadButton = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  input {
    display: none;
  }
`

export const FilePreviewContainer = styled.div`
  margin-top: 0.5rem;
`

export const FileEditorToolbarStyled = styled.div``

export const FileEditorStyled = styled.div`
  display: block;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px dashed #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  position: relative;

  ${FileEditorToolbarStyled} {
    padding: 10px 0;
  }
`
