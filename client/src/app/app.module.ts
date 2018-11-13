import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ListingsComponent } from './listings/listings.component';
import { MaterialModule} from './material';
import { NgxPaginationModule} from 'ngx-pagination';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskslistComponent } from './taskslist/taskslist.component'
import { DataService } from './data.service';
import { UserslistComponent } from './userslist/userslist.component';
import { RoleguardService} from './roleguard.service';
import { UserComponent } from './user/user.component';
import { ResetComponent} from './reset/reset.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    FooterComponent,
    NavComponent,
    SignupComponent,
    NotfoundComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    ListingsComponent,
    DashboardComponent,
    TaskslistComponent,
    UserslistComponent,
    UserComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule,
    MaterialModule,
    NgxPaginationModule
  ],
  providers: [DataService, RoleguardService,{provide: HTTP_INTERCEPTORS,useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
