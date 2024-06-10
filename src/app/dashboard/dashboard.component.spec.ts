import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DashboardComponent } from "./dashboard.component";
import { HeroService } from "../hero.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Hero } from "../hero";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardComponent],
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    TestBed.inject(HeroService);

    //fixture.detectChanges();
  });

  it("Must create the DashboardComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should be heroesList Array of Hero", () => {
    expect(component.heroes).toBeInstanceOf(Array<Hero>);
  });
  
  it("should have ngOnInit function", () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it("should have getHeroes function", () => {
    expect(component.getHeroes).toBeTruthy();
  });
});
