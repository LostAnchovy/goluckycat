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
import { NewtaskComponent } from './newtask/newtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { ProviderProfileComponent } from './provider-profile/provider-profile.component';
import { BarchartComponent} from './barchart/barchart.component'
import { EditbioComponent } from './editbio/editbio.component';
import { FaqComponent} from  './faq/faq.component'
import { ProvidersComponent} from  './providers/providers.component'



const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[RoleGuard] },
  { path: 'profile/:userId', component: UserComponent, canActivate:[AuthGuard]},
  { path: 'provider/:providerId', component: ProviderProfileComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'reset/:token', component: ResetComponent},
  { path: 'newtask', component: NewtaskComponent},
  { path: 'editbio/:userId', component: EditbioComponent},
  { path: 'edittask/:taskId', component: EdittaskComponent},
  { path: 'listings', component: ListingsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'barchart', component: BarchartComponent },
  { path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
