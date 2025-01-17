import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FilterUnitsService } from './services/filter-units.service';

import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsComponent } from './components/forms/forms.component';
import { HeaderComponent } from './components/header/header.component';
import { LegendComponent } from './components/legend/legend.component';
import { GetUnitsServiceMock } from './mocks/get-units.servoce.mock';
import { locationMock } from './mocks/location.mock';
import { GetUnitsService } from './services/get-units.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let getUnitService: GetUnitsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FormsComponent,
        CardsListComponent,
        CardComponent,
        LegendComponent,
        FooterComponent
      ],
      providers: [
        FilterUnitsService,
        {
          provide: GetUnitsService,
          useValue: GetUnitsServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    getUnitService = TestBed.inject(GetUnitsService);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set unitLists onSubmit', () => {
    component.onSubmit();

    expect(getUnitService.getFilteredUnits).toHaveBeenCalled();
    expect(component.unitsList).toEqual([locationMock]);
  });
});
