import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";

describe("HeroesComponent", () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeroesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    TestBed.inject(HeroService);
    fixture.detectChanges();
  });

  it("Must create the HeroSearchComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should be heroes object instance of Array<Hero>", () => {
    expect(component.heroes).toBeDefined();
    expect(component.heroes).toBeInstanceOf(Array<Hero>);
  });

  it("should add Hero when the button is clicked", () => {
    expect(component.add).toBeDefined();
    const addSpy = spyOn(component, "add");
    let addBtn =
      fixture.debugElement.nativeElement.querySelector(".add-button");
    const hero =
      fixture.debugElement.nativeElement.querySelector("#new-hero").value;
    addBtn.click();
    fixture.whenStable().then(() => {
      expect(addSpy).toHaveBeenCalledWith(hero);
    });
  });

  it("should ngOnInit function works", () => {
    expect(component.ngOnInit).toBeDefined();
    var spyNgOnInit = spyOn(component, "ngOnInit");
    component.ngOnInit();
    expect(spyNgOnInit).toHaveBeenCalled();
  });

  it("should getHeroes function work", () => {
    expect(component.getHeroes).toBeDefined();
    var spy = spyOn(component, "getHeroes");
    component.getHeroes();
    expect(spy).toHaveBeenCalled();
  });

  it("should delete function work", () => {
    expect(component.delete).toBeDefined();
  });
});
