import React from 'react'
import "./CategoryPage.css"

// const categories = [
//     { name: "Restaurants", img: "/images/restaurant.png" },
//     { name: "Hotels", img: "/images/hotel.png" },
//     { name: "Beauty Spa", img: "/images/beauty-spa.png" },
//     { name: "Home Decor", img: "/images/home-decor.png" },
//     { name: "Wedding Planning", img: "/images/wedding.png" },
//     { name: "Education", img: "/images/education.png" },
//     { name: "Rent & Hire", img: "/images/rent-hire.png" },
//     { name: "Hospitals", img: "/images/hospital.png" },
//     { name: "Contractors", img: "/images/contractors.png" },
//     { name: "Pet Shops", img: "/images/pet-shop.png" },
//     { name: "PG/Hostels", img: "/images/pg-hostel.png" },
//     { name: "Estate Agent", img: "/images/estate-agent.png" },
//     { name: "Dentists", img: "/images/dentist.png" },
//     { name: "Gym", img: "/images/gym.png" },
//     { name: "Loans", img: "/images/loans.png" },
//     { name: "Event Organisers", img: "/images/event.png" },
//     { name: "Driving Schools", img: "/images/driving-school.png" },
//     { name: "Packers & Movers", img: "/images/packers-movers.png" },
//     { name: "Courier Service", img: "/images/courier.png" },
//     { name: "Popular Categories", img: "/images/popular.png", special: true },
//   ];
  
//   const CategoryPage = () => {
//     return (
//       <div className="category-container">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className={`category ${category.special ? "special-category" : ""}`}
//           >
//             <img src={category.img} alt={category.name} className="category-img" />
//             <p>{category.name}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };

return (
    <div>
      <h1>Categories</h1>
      <div className="category-container">
        <div className="category"><img src="/images/restaurant.png" alt="Restaurants"/><p>Restaurants</p></div>
        <div className="category"><img src="/images/hotel.png" alt="Hotels"/><p>Hotels</p></div>
        <div className="category"><img src="/images/beauty-spa.png" alt="Beauty Spa"/><p>Beauty Spa</p></div>
        <div className="category"><img src="/images/home-decor.png" alt="Home Decor"/><p>Home Decor</p></div>
        <div className="category"><img src="/images/wedding.png" alt="Wedding Planning"/><p>Wedding Planning</p></div>
        <div className="category"><img src="/images/education.png" alt="Education"/><p>Education</p></div>
        <div className="category"><img src="/images/rent-hire.png" alt="Rent & Hire"/><p>Rent & Hire</p></div>
        <div className="category"><img src="/images/hospital.png" alt="Hospitals"/><p>Hospitals</p></div>
        <div className="category"><img src="/images/contractors.png" alt="Contractors"/><p>Contractors</p></div>
        <div className="category"><img src="/images/pet-shop.png" alt="Pet Shops"/><p>Pet Shops</p></div>
        <div className="category"><img src="/images/pg-hostel.png" alt="PG/Hostels"/><p>PG/Hostels</p></div>
        <div className="category"><img src="/images/estate-agent.png" alt="Estate Agent"/><p>Estate Agent</p></div>
        <div className="category"><img src="/images/dentist.png" alt="Dentists"/><p>Dentists</p></div>
        <div className="category"><img src="/images/gym.png" alt="Gym"/><p>Gym</p></div>
        <div className="category"><img src="/images/loans.png" alt="Loans"/><p>Loans</p></div>
        <div className="category"><img src="/images/event.png" alt="Event Organisers"/><p>Event Organisers</p></div>
        <div className="category"><img src="/images/driving-school.png" alt="Driving Schools"/><p>Driving Schools</p></div>
        <div className="category"><img src="/images/packers-movers.png" alt="Packers & Movers"/><p>Packers & Movers</p></div>
        <div className="category"><img src="/images/courier.png" alt="Courier Service"/><p>Courier Service</p></div>
        <div className="category special-category"><img src="/images/popular.png" alt="Popular Categories"/><p>Popular Categories</p></div>
      </div>
    </div>
  );


export default CategoryPage