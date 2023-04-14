import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { HeaderModule } from "@enigma/header";
import { FooterModule } from "@enigma/footer";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: "enabledBlocking" }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
