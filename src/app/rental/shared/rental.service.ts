import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rental} from './rental.model'

@Injectable()
export class RentalService {

  private rentals: Rental[] = [{
    id:'1',
    title:"Luxury Apartment",
    city:'Turin',
    street:'via garibaldi 30',
    image:'http://via.placeholder.com/350x250',
    bedroom:3,
    description:"Feel the luxury taste of your life",
    dailyRate:35,
    shared: false,
    createdAt:'11/10/2018'
  },
  {
    id:'2',
    title:"Cosy and relaxing Apartment",
    city:'Turin',
    street:'via brescia 30',
    image:'http://via.placeholder.com/350x250',
    bedroom:3,
    description:"Stay with style in this apartment",
    dailyRate:35,
    shared: false,
    createdAt:'12/10/2018'
  },
  {
    id:'3',
    title:"Luxury Apartment 2",
    city:'Turin',
    street:'via genoa 30',
    image:'http://via.placeholder.com/350x250',
    bedroom:3,
    description:"Feel the luxury",
    dailyRate:35,
    shared: false,
    createdAt:'13/10/2018'
  },
  {
    id:'4',
    title:"Luxury Apartment 3",
    city:'Turin',
    street:'via genoa 30',
    image:'http://via.placeholder.com/350x250',
    bedroom:3,
    description:"Feel the luxury",
    dailyRate:35,
    shared: false,
    createdAt:'13/10/2018'
  }
  ]

public getRentalById(rentalId:string): Observable<Rental> {
  return new Observable<Rental>((observer)=>{
    setTimeout(()=>{
      const foundRental = this.rentals.find((rental)=>rental.id==rentalId)
      observer.next(foundRental)
    },500)
  })
}

  public getRentals(): Observable<Rental[]> {
    return new Observable<Rental[]>((observer)=>{
     setTimeout(()=>{
       observer.next(this.rentals)
     },1000);
     
    })

  }

}
