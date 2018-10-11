import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import {RentalService} from './shared/rental.service';

const routes: Routes = [
  {path: 'rentals', component: RentalComponent,
  children:[
      {path: '', component: RentalListComponent},
      {path:':rentalId', component:RentalDetailComponent}
  ]},

]

@NgModule({
  declarations: [
    RentalListComponent,
    RentalListItemComponent,
    RentalComponent,
    RentalDetailComponent
  ],
  imports: [CommonModule,
RouterModule.forChild(routes)
  ],

  providers:[RentalService]
})

export class RentalModule {

}
