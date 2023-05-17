import React from "react";

interface InfoRowProps {
  title?: string;
  content?: string;
}

const InfoRow: React.FC<InfoRowProps> = ({
  title = "Title",
  content = "Content",
}) => {
  return (
    <div className="info-row">
      <div className="row-title">{title}</div>
      <div className="row-content">{content}</div>
    </div>
  );
};

export default InfoRow;
