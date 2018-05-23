import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SettingComponent } from './components/setting/setting.component';
import { MenuComponent } from './components/menu/menu.component';
import { ApploginComponent } from './components/applogin/applogin.component';
import { AppdashboardComponent } from './components/appdashboard/appdashboard.component';
import { RouterModule, Routes }from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppreserveconComponent } from './components/appreservecon/appreservecon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from 'jquery';
import { AppuserdataComponent } from './components/appuserdata/appuserdata.component';
import { HttpClientModule } from '@angular/common/http';
import { ConnectApiService } from './services/connect-api.service';
import { AppcomdataComponent } from './components/appcomdata/appcomdata.component';
import { AppprintdataComponent } from './components/appprintdata/appprintdata.component';
import { DataprocessingService } from './services/dataprocessing.service';

const appRoutes: Routes = [

  //{path: '', redirectTo: '/login', pathMatch: 'full'},
  //{path: '**', redirectTo: '/login'},
  {path: 'login', component: ApploginComponent},
  {path: 'dashboard', component: AppdashboardComponent},
  {path: 'reserveconferrence', component: AppreserveconComponent},
  {path: 'userdata',component: AppuserdataComponent},
  {path: 'comdata',component: AppcomdataComponent},
  {path: 'printdata', component: AppprintdataComponent}


  
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SettingComponent,
    MenuComponent,
    ApploginComponent,
    AppdashboardComponent,
    AppreserveconComponent,
    AppuserdataComponent,
    AppcomdataComponent,
    AppprintdataComponent,
    
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule ,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ConnectApiService,DataprocessingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
