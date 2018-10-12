const Rental = require('./models/rental');

class FakeDb {

  constructor(){
    this.rentals = [{
      id:'1',
      title:"Luxury Apartment",
      category:"Apartment",
      city:'Turin',
      shared:true,
      street:'via garibaldi 30',
      image:'http://via.placeholder.com/350x250',
      bedroom:3,
      description:"Feel the luxury taste of your life",
      dailyRate:35

    },
    {
      id:'2',
      title:"Cosy and relaxing Apartment",
      city:'Turin',
        shared:false,
      category:"Condo",
      street:'via brescia 30',
      image:'http://via.placeholder.com/350x250',
      bedroom:3,
      description:"Stay with style in this apartment",
      dailyRate:35

    },
    {
      id:'3',
      title:"Luxury Apartment 2",
      category:"Room",
        shared:true,
      city:'Turin',
      street:'via genoa 30',
      image:'http://via.placeholder.com/350x250',
      bedroom:3,
      description:"Feel the luxury",
      dailyRate:35

    },
    {
      id:'4',
      title:"Luxury Apartment 3",
        shared:false,
      category:"House",
      city:'Turin',
      street:'via genoa 30',
      image:'http://via.placeholder.com/350x250',
      bedroom:3,
      description:"Feel the luxury",
      dailyRate:35


    }]

  }
async  cleanDb() {
  await  Rental.deleteMany({})
  }
  pushRentalsToDb() {
    this.rentals.forEach((rental)=>{
      const newRental = new Rental(rental);
      newRental.save();
    })
  }
  seedDb() {
    this.cleanDb();
    this.pushRentalsToDb();
  }
}

module.exports = FakeDb;
