import React, { use, useState } from 'react'
import initialTravelPlan from '../data/places1'
import PlaceTree1 from './PlaceTree1'

const TravelPlan1 = () => {
    const [plan, setPlan] = useState(initialTravelPlan)
    const root = plan[0]
    const planetsIds = root.childIds;
    
  return (
    <div>
        <h1>Places to visit</h1>
        <ol>
            {
                planetsIds.map((placeId)=> <PlaceTree1 key={placeId} id={placeId} placesById = {plan} />)
            }
        </ol>
    </div>
  )
}

export default TravelPlan1