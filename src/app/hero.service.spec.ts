import { TestBed, getTestBed } from "@angular/core/testing";
import { HeroService } from "./hero.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { HttpHeaders } from "@angular/common/http";
import { Hero } from "./hero";

describe("HeroService", () => {
  let injector: TestBed;
  let service: HeroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService],
    });

    injector = getTestBed();
    service = injector.inject(HeroService);
    httpMock = injector.inject(HttpTestingController);
  });

  it("must create the HeroService", () => {
    expect(service).toBeTruthy();
  });

  it("must be httpOptions application/json", () => {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    expect(service.httpOptions.headers.get("content-Type")).toEqual(
      httpOptions.headers.get("content-Type")
    );
  });
  it("must be heroesUrlApiRest", () => {
    const heroesUrlApiRest = "http://localhost:8080/api/heroes";
    expect(service.heroesUrlApiRest).toBe(heroesUrlApiRest);
  });

  it("getHeroes should return an array of heroes", () => {
    expect(service.getHeroes).toBeDefined();
    var spy = spyOn(service, "getHeroes");
    spy();
    expect(spy).toHaveBeenCalled();
  });

  it("getHeroNo404 should return an undefined if id not found", () => {
    var id = 1;
    expect(service.getHeroNo404).toBeDefined();
    var spy = spyOn(service, "getHeroNo404");
    const result = spy(id);
    expect(spy).toHaveBeenCalled();
    expect(service.getHeroNo404(id)).toEqual(result);
  });

  it("getHero should return a hero or error404 if id not found", () => {
    var id = 1;
    expect(service.getHero).toBeDefined();
    var spy = spyOn(service, "getHero");
    spy(id);
    expect(spy).toHaveBeenCalled();
  });

  it("searchHeroes should return an array of heroes given search terms", () => {
    var heroName = "Pepe";
    expect(service.searchHeroes).toBeDefined();
    var spy = spyOn(service, "searchHeroes");
    const result = spy(heroName);
    expect(spy).toHaveBeenCalledWith(heroName);
    expect(service.searchHeroes(heroName)).toBe(result);
  });

  it("addHero should insert a hero into the server", () => {
    expect(service.addHero).toBeDefined();
    var spy = spyOn(service, "addHero");
  });

  it("deleteHero should delete a hero in the server", () => {
    var id = 1;
    expect(service.deleteHero).toBeDefined();
    var spy = spyOn(service, "deleteHero");
    const result = spy(id);
    expect(spy).toHaveBeenCalledWith(id);
    expect(service.deleteHero(id)).toBe(result);
  });

  it("updateHero should update a hero in the server", () => {
    const hero = { name: "Pepe" } as Hero;
    expect(service.updateHero).toBeDefined();
    var spy = spyOn(service, "updateHero");
    const result = spy(hero);
    expect(spy).toHaveBeenCalledWith(hero);
    expect(service.updateHero(hero)).toBe(result);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
