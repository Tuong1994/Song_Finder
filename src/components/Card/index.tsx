import React from "react";

interface CardProps {
  header?: string | React.ReactNode;
  children?: string | React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ header, children, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
