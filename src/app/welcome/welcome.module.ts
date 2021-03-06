import { NgForm } from '@angular/forms/src/directives';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    WelcomeRoutingModule,
    MyMaterialModule,
  ],
  declarations: [
    WelcomeScreenComponent,
    GettingStartedComponent,
    CardComponent
  ]
})
export class WelcomeModule { }
