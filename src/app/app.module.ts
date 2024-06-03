import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HeroesComponent
    ],
    declarations: [
        AppComponent,
        //HeroesComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }