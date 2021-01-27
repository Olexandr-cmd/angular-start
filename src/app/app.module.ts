import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {PostResolveService} from './components/services/post-resolve.service';
import {FullPostComponent} from './components/full-post/full-post.component';

const routes: Routes = [
  {
    path: 'post', component: PostsComponent, resolve: {postsData: PostResolveService}, children: [{
      path: ':id', component: FullPostComponent
    }]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    FullPostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
