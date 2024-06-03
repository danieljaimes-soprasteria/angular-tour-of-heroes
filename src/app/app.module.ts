import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HeroesComponent,
        
    ],
    declarations: [
        AppComponent,
        //HeroesComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }