import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostGuardGuard } from './post-guard.guard';


const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: ":id", component: PostDetailsComponent, canActivate:[PostGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
