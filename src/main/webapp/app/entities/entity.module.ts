import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: () => import('./region/region.module').then(m => m.MojeRegionModule)
      },
      {
        path: 'country',
        loadChildren: () => import('./country/country.module').then(m => m.MojeCountryModule)
      },
      {
        path: 'location',
        loadChildren: () => import('./location/location.module').then(m => m.MojeLocationModule)
      },
      {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.MojeDepartmentModule)
      },
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then(m => m.MojeTaskModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./employee/employee.module').then(m => m.MojeEmployeeModule)
      },
      {
        path: 'job',
        loadChildren: () => import('./job/job.module').then(m => m.MojeJobModule)
      },
      {
        path: 'job-history',
        loadChildren: () => import('./job-history/job-history.module').then(m => m.MojeJobHistoryModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class MojeEntityModule {}
