import React from "react";
import { useUiStore } from "../store/uiStore";
import styled from "styled-components";

const GlobalErrorMessage = () => {
  const { error, setError } = useUiStore();
  if (!error) return null;
  return (
    <Overlay>
      <Message>
        <p>{error}</p>
        <button onClick={() => setError(null)}>Close</button>
      </Message>
    </Overlay>
  );
};

export default GlobalErrorMessage;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const Message = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  p {
    margin-bottom: 20px;
    font-size: 16px;
    color: #333;
  }

  button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #2980b9;
    }
  }
`;
