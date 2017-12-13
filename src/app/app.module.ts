import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  // MatCoreModule,
  MatTableModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  // MatStyleModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
// import {a} from '@angular/animations'

import {ContactFormService} from './contact-form.service';
import {TextReaderService} from './text-reader.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { AboveThefoldComponent } from './pages/above-thefold/above-thefold.component';
import { CoreOfferingsComponent } from './pages/core-offerings/core-offerings.component';
import { WhyUsComponent } from './pages/why-us/why-us.component';
import { IntegrationComponent } from './pages/integration/integration.component';
import { CuratedResultsComponent } from './pages/curated-results/curated-results.component';
import { AutomatedProcessComponent } from './pages/automated-process/automated-process.component';
import { ExtraFeaturesComponent } from './pages/extra-features/extra-features.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MapComponent } from './pages/map/map.component';
import { ListOfCitiesComponent } from './shared/list-of-cities/list-of-cities.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboveThefoldComponent,
    CoreOfferingsComponent,
    WhyUsComponent,
    IntegrationComponent,
    CuratedResultsComponent,
    AutomatedProcessComponent,
    ExtraFeaturesComponent,
    FooterComponent,
    ContactUsComponent,
    MapComponent,
    ListOfCitiesComponent
  ],
  entryComponents: [ListOfCitiesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    // MatCoreModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    // StyleModule,
    CdkTableModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    // MatCoreModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    // StyleModule,
    CdkTableModule,
    BrowserAnimationsModule
  ],
  providers: [ContactFormService, TextReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
