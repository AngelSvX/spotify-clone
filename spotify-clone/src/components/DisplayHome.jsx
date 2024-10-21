import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import NavBar from "./NavBar";
import SongItem from "./SongItem";

function DisplayHome() {
  return (
    <>
      <NavBar />
      <div className="my-5 font-bold text-2xl">
        <h1>Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => {
            return (
              <AlbumItem
                key={index}
                name={item.name}
                desc={item.desc}
                image={item.image}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
      <div className="my-5 font-bold text-2xl">
        <h1>Todays biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => {
            return (
              <SongItem
                key={index}
                image={item.image}
                name={item.name}
                desc={item.desc}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
