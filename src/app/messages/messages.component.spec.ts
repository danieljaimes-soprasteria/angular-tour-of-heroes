import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MessagesComponent } from "./messages.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MessageService } from "../message.service";

describe("MessagesComponent", () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MessagesComponent],
    });

    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    TestBed.inject(MessageService);

    //fixture.detectChanges();
  });

  it("Must create the HeroSearchComponent", () => {
    expect(component).toBeTruthy();
  });
  
});
