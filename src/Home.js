import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className='home'>
        <Banner />

        <div className='home__section'>
          <Card
          src="https://images.pexels.com/photos/4033684/pexels-photo-4033684.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Online Experience"
          description="Unique activities we can do together, led by a world of hosts."
          /> 

          <Card
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Entire Homes"
          description= "Comfortable private places with room friends as family"
          /> 

          <Card
          src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Unique Stays"
          description="Spaces that are More than just a place to sleep."
          />                                        
           </div>

           <div className='home__banner'>
            <h1>Experience Home away from Home</h1>
           </div>
 
           <div className='home__feature'>
           <h2>Feature Listings</h2>
           </div>

          <div className='home__section'>
          <Card
          src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="3 Bedroom Apartment, Accra"
          description="Spaces that are More than just a place to sleep."
          price="$100/night"
          /> 
           <Card
          src="https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Hero House in Tamale"
          description="Enjoy the amazing sight of Northern Ghana Tamale."
          price="$12/night"
          /> 
           <Card
          src="https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Hostel Apartment for Students"
          description="A perfect serene envirnment for students."
          price="$15/night"
          />                                                 
           </div>
      
           <div className='home__section'>
          <Card
          src="https://images.pexels.com/photos/1776574/pexels-photo-1776574.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="1 Bedroom Apartment"
          description="Spaces that are More than just a place to sleep."
          price="$100/night"
          /> 
           <Card
          src="https://images.pexels.com/photos/565324/pexels-photo-565324.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="House in Tamale"
          description="Enjoy the amazing sight of Northern Ghana Tamale."
          price="$120/night"
          /> 
           <Card
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Students Hostel Apartment"
          description="A perfect serene envirnment for students."
          price="$15/night"
          />           
                                                
           </div>

        </div>
  )
}

export default Home