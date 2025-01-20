import React from 'react';
import { Card } from 'react-bootstrap';

interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <Card
      className="shadow rounded-5 p-4 d-flex align-items-center justify-content-center"
      style={{
        maxWidth: '800px',
        minWidth: '350px',
        width: '90%',
        margin: '20px auto',
      }}
    >
      {children}
    </Card>
  );
};
