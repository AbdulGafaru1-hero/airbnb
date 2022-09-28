import { Button } from '@mui/material'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'


function SearchPage() {
  return (
    <div className='searchPage'>
        
        <div className="searchPage__info">  
        <p> 62 stays. 26 August to 30 August . 2 guest</p>
        <h1> Stays Nearby</h1>

<Button variant='outlined'> Cancellation Flexibility</Button>
<Button variant='outlined'> Type of Place</Button>
<Button variant='outlined'> Price</Button>
<Button variant='outlined'> Rooms and Beds</Button>
<Button variant='outlined'> More Filters</Button>

        </div>
        <SearchResult 
        img="https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=600"
        location="koforidua Technical University"
        title="Lincoln Luxurios Apartment"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
        star={4.73}
        price="$30/night"
        total="$117 total"
        
        />
          <SearchResult 
        img="https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=600"
        location="Yapei"
        title="Hero Residential Flat"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
        star={4.5}
        price="$30/night"
        total="$117 total"
        
        />

        <SearchResult 
        img="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600"
        location="Damongo, Central Gonja"
        title="Afrika Luxurious Apartment"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
        star={4.73}
        price="$30/night"
        total="$117 total"
        
        />

      <SearchResult 
        img="https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=600"
        location="Accra Ghana"
        title="Ghana Modern Duplex"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
        star={4.73}
        price="$30/night"
        total="$117 total"
        
        />



    </div>
  )
}

export default SearchPage  