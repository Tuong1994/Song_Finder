import React from "react";
import { ISong } from "../../common/interface/Song";
import { Langs } from "../../common/lang";
import Card from "../../components/Card";
import InfoRow from "../../components/InfoRow";
import Divider from "../../components/Divider";

interface SongCardProps {
  langs: Langs;
  song: ISong;
}

const SongCard: React.FC<SongCardProps> = ({ song, langs }) => {
  return (
    <Card className="list-card">
      <div className="card-image">
        <img
          className="image-view"
          src={song.artworkUrl100}
          alt={song.artistName}
        />
      </div>

      <Divider />

      <div className="card-info">
        {song.collectionName && (
          <InfoRow
            title={langs?.home.song.collectionName}
            content={song.collectionName}
          />
        )}
        {song.artistName && (
          <InfoRow
            title={langs?.home.song.artistName}
            content={song.artistName}
          />
        )}
        {song.trackName && (
          <InfoRow
            title={langs?.home.song.trackName}
            content={song.trackName}
          />
        )}
        {song.trackPrice && (
          <InfoRow
            title={langs?.home.song.trackPrice}
            content={String(song.trackPrice)}
          />
        )}
        {song.trackExplicitness && (
          <InfoRow
            title={langs?.home.song.trackExplicit}
            content={song.trackExplicitness}
          />
        )}
      </div>
    </Card>
  );
};

export default SongCard;
