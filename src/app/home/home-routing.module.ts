import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent } from './components';
import { HomeGrandComponent } from './components/home-grand/home-grand.component';
import { ParentComponent } from './components/parent/parent.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        path: ':tabLink', // 大写
        component: HomeDetailComponent,
        children: [
          {
            path: 'grand',
            component: HomeGrandComponent
          },
          {
            path: 'grand2',
            component: HomeDetailComponent
          }
        ]
      }
    ]
  },
  {
    path: 'parent',
    pathMatch: 'full',
    component: ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }



// {
//   path: 'home',
//   component: HomeContainerComponent,
//   children: [
//     {
//       path: '',
//       redirectTo: '/hot',
//       pathMatch: 'full'
//     },
//     {
//       path: ':tabLink', // 大写
//       component: HomeDetailComponent,
//       children: [
//         {
//           path: 'grand',
//           component: HomeGrandComponent
//         }
//       ]
//     }
//   ]
// }
