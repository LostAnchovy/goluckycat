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
import { DashboardComponent } from './dashboard/dashboard.component'
import { RoleguardService as RoleGuard } from './roleguard.service';
import { AuthService as AuthGuard } from './auth.service';
import { UserComponent } from './user/user.component'
import { ResetComponent} from './reset/reset.component'


const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[RoleGuard] },
  { path: 'profile/:userId', component: UserComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'reset/:token', component: ResetComponent},
  { path: 'listings', component: ListingsComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
