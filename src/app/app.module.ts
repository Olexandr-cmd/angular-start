import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'posts', loadChildren: () => import('./post/post.module').then(m => m.PostModule)
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
