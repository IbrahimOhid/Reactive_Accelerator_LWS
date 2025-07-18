import React, { useState } from 'react'
import initialTravelPlan from '../data/places'
import PlaceTree from './PlaceTree';

const TravelPlan = () => {
    const [plan, setPlan] = useState(initialTravelPlan);
    const planets = plan.childPlaces;
  return (
    <>
        <h1 className='font-bold text-3xl mb-3'>Places to visit</h1>
        <ol>
            {planets.map((place)=> 
            <PlaceTree key={place.id} place={place}/>
            )}
        </ol>
    </>
  )
}

export default TravelPlan