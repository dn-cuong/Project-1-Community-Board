import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
function App() {

    const foodTrucks = [
        {
          name: "Birria-Landia",
          cuisine: "Mexican",
          image: "https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg",
        },
        {
          name: "Mysttik Masala",
          cuisine: "Indian",
          image: "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42",
        },
        {
          name: "The Halal Guys",
          cuisine: "Middle Eastern",
          image: "https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024",
        },
        {
            name: "NY Dosas",
            cuisine: "Vegetarian",
            image: "https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg",
          },
          {
            name: "Jerk Pan",
            cuisine: "Jamaican",
            image: "https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg",
          },
          {
            name: "Tong",
            cuisine: "Bangladeshi",
            image: "https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg",
          },
          {
            name: "Ling's Sweet Mini Cakes",
            cuisine: "Chinese",
            image: "https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg",
          },
          {
            name: "King Souvlaki of Astoria",
            cuisine: "Greek",
            image: "https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg",
          },

      ];
return (
    <div className="App">
        <div className="header">
            <img src="src/assets/awning.png" alt="" />
            <h1>Food Truck Favorites</h1>
        </div>
        <div className="content">
        {foodTrucks.map((truck) => (
          <Card key={truck.name} name={truck.name} cuisine={truck.cuisine} image={truck.image} />
        ))}
        </div>
    </div>
)
}

export default App
