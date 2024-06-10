import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "../hero.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Hero } from "../hero";

describe("HeroDetailComponent", () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  const fakeActivatedRoute = {} as ActivatedRoute;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeroDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(): string {
                  return "10";
                },
              },
            },
          },
        },
      ],
    });

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;

    TestBed.inject(HeroService);
    //fixture.detectChanges();
  });

  it("Must create the HeroDetailComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should have ngOnInit function", () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it("should have getHero function", () => {
    expect(component.getHero).toBeTruthy();
  });

  it("should have goBack function", () => {
    expect(component.goBack).toBeTruthy();
  });

  it("should have save function", () => {
    expect(component.save).toBeTruthy();
  });
});
