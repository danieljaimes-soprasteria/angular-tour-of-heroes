import { TestBed, getTestBed } from "@angular/core/testing";
import { MessageService } from "./message.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

describe("MessageService", () => {
  let injector: TestBed;
  let service: MessageService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MessageService],
    });

    injector = getTestBed();
    service = injector.inject(MessageService);
    httpMock = injector.inject(HttpTestingController);
  });

  it("Must create the MessageService", () => {
    expect(service).toBeTruthy();
  });

  it("add should add message in array of messages", () => {
    const testMessage: string = "Hello World";
    expect(service.add).toBeDefined();
    service.add(testMessage);
    expect(service.messages).toContain(testMessage);
  });

  it("clear should remove items in array of messages", () => {
    expect(service.clear).toBeDefined();
    service.clear();
    expect(service.messages.length).toHaveSize(0);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
