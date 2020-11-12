import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './home';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home/hot',
        pathMatch: 'full'
    }, // path: 'home',
    {
        path: 'home', // path: 'home',
        component: HomeContainerComponent
    }
    // { path: 'path', component: FeatureComponent },
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    /**
     * 跟路由使用 `RouterModule.forRoot(rootes)` 形式。
     * 而功能模块中的路由由模块使用 `outerModule.forChild(routes)` 形式。
     * 启用路由的 debug 跟踪模式，需要字根模块中设置 `enableTracing:true`
     */
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

// {
//     path: '',
//     component: HomeContainerComponent
// }
