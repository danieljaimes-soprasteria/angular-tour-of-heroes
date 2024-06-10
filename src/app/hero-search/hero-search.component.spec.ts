import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroSearchComponent } from "./hero-search.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HeroService } from "../hero.service";
import { Subject } from "rxjs";

describe("HeroSearchComponent", () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [HeroSearchComponent],
    });

    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    TestBed.inject(HeroService);

    //fixture.detectChanges();
  });

  it("Must create the HeroSearchComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should be searchTerms object instance of Subject<String>", () => {
    expect(component.searchTerms).toBeInstanceOf(Subject<string>);
  });

  it("should have search function", () => {
    expect(component.search).toBeTruthy();
  });

  it("should have ngOnInit function", () => {
    expect(component.ngOnInit).toBeTruthy();
  });
});
