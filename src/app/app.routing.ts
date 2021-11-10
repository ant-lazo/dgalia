import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';


// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

    // Redirect signed in user to the '/example'
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'dashboard' },

    // Auth routes (guest)
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule) },
            { path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule) },
            { path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule) },
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule) },
            { path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule) }
        ]
    },

    // Auth routes (logged in)
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule) },
            { path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule) }
        ]
    },
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'dashboard', loadChildren: () => import('app/modules/dashboard/dashboard.module').then(d => d.DashboardModule) },
            { path: 'unidades-de-medida', loadChildren: () => import('app/modules/measured-units/measured-units.module').then(m => m.MeasuredUnitsModule) },
            { path: 'insumos', loadChildren: () => import('app/modules/supply/soupply.module').then(s => s.SoupplyModule) },
            { path: 'recetas', loadChildren: () => import('app/modules/recipes/recipes.module').then(r => r.RecipesModule) },
            { path: 'sub-recetas', loadChildren: () => import('app/modules/sub-recipes/sub-recipes.module').then(r => r.SubRecipesModule) },
            { path: 'programacion', loadChildren: () => import('app/modules/programation/programation.module').then(p => p.ProgramationModule) },
            { path: 'cursos', loadChildren: () => import('app/modules/course/course.module').then(p => p.CourseModule) },
            { path: 'ciclos', loadChildren: () => import('app/modules/term/term.module').then(r => r.TermModule) },
            { path: 'sedes', loadChildren: () => import('app/modules/headquarter/headquarter.module').then(r => r.HeadquarterModule) },
            { path: 'almacenes', loadChildren: () => import('./modules/warehouse/warehouse.module').then(a => a.WarehouseModule) },
            { path: 'productos', loadChildren: () => import('./modules/product/product.module').then(p => p.ProductModule) },
            { path: 'hojas-de-demanda', loadChildren: () => import('./modules/demand-sheets/demand-sheets.module').then(d => d.DemandSheetsModule) },
            { path: 'orden-de-compra', loadChildren: () => import('./modules/purchase-order/purchase-order.module').then(p => p.PurchaseOrderModule) },
            { path: 'proveedores', loadChildren: () => import('./modules/provider/provider.module').then(p => p.ProviderModule) },
            { path: 'inventario', loadChildren: () => import('./modules/inventory/inventory.module').then(i => i.InventoryModule) },
            { path: 'reportes', loadChildren: () => import('./modules/reports/reports.module').then(r => r.ReportsModule) },
            { path: 'mantenimiento', loadChildren: () => import('./modules/customer/customer.module').then(c => c.CustomerModule) }

        ]
    }


];
