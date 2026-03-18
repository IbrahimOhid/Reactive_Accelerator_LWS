import React from "react";
import { usePhotoData } from "../hook/usePhotoData";
import { AutoSizer, List } from "react-virtualized";

const PhotoList = () => {
  const { photos } = usePhotoData();

  const rowHeight = 80;

  const renderRow = ({ index, key, style }) => {
    if (!photos || !photos[index]) return null;

    const photo = photos[index];

    return (
      <div
        key={key}
        style={style}
        className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col h-20"
      >
        <div className="flex-grow text-center">
          <p className="leading-relaxed text-base">
            {photo.title}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-4 mx-auto w-full">
          <div className="p-4 w-full h-[500px]">
            <AutoSizer>
              {({ width, height }) => (
                <List
                  height={height}
                  width={width}
                  rowHeight={rowHeight}
                  rowCount={photos?.length || 0}
                  rowRenderer={renderRow}
                />
              )}
            </AutoSizer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoList;