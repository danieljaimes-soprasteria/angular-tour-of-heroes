import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";

describe("HeroesComponent", () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeroesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    TestBed.inject(HeroService);

    //fixture.detectChanges();
  });

  it("Must create the HeroSearchComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should be heroes object instance of Array<Hero>", () => {
    expect(component.heroes).toBeInstanceOf(Array<Hero>);
  });

  it("ngOnInit function", () => {
    var spy = spyOn(component, "ngOnInit");
    expect(component.ngOnInit).toBeDefined();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it("getHeroes function", () => {
    var spy = spyOn(component, "getHeroes");
    expect(component.getHeroes).toBeDefined();
    component.getHeroes();
    expect(spy).toHaveBeenCalled();
  });

  it("add function", () => {
    var spy = spyOn(component, "add");
    expect(component.add).toBeDefined();
    component.add("Pepe");
    expect(spy).toHaveBeenCalled();
  });

  it("delete function", () => {
    var spy = spyOn(component, "delete");
    expect(component.delete).toBeDefined();
    const hero: Hero = {id: 1, name: "Pepe"};
    component.delete(hero);
    expect(spy).toHaveBeenCalled();
  });
});
