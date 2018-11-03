import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent} from './reset-password/reset-password.component'
import { ListingsComponent } from './listings/listings.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'provider-registration', component: RegistrationComponent },
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'listings', component: ListingsComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
