import React from 'react'

const PlaceTree = ({ place }) => {
    const childPlaces = place.childPlaces;
    console.log(childPlaces)
    return (

        <li>
            {place.title}
            {childPlaces.length > 0 && (
                <ol>
                    {childPlaces.map((place) => <PlaceTree key={place.id} place={place} />)}
                </ol>
            )}
        </li>

    )
}

export default PlaceTree