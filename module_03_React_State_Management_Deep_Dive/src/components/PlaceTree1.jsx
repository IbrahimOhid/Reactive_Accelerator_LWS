import React from 'react'

const PlaceTree1 = ({ id, placesById }) => {
    const place = placesById[id];
    const childIds = place.childIds;

    return (
        <li>
            {place.title}
            {childIds.length > 0 && (
                <ol>
                    {
                        childIds.map((placeId) => <PlaceTree1 key={placeId} id={placeId} placesById={placesById} />)
                    }
                </ol>
            )}
        </li>
    )
}

export default PlaceTree1