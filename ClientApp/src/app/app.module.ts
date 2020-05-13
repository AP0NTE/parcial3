import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AdminComponent } from './admin/admin.component';
import { EditarEComponent } from './editar-e/editar-e.component';
import { EditarDComponent } from './editar-d/editar-d.component';
import { EliminarEComponent } from './eliminar-e/eliminar-e.component';
import { EliminarDComponent } from './eliminar-d/eliminar-d.component';
import { DocenteComponent } from './docente/docente.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { AgregarNotasComponent } from './agregar-notas/agregar-notas.component';
import { VerNotasComponent } from './ver-notas/ver-notas.component';
import { LoginComponent } from './login/login.component';
import { TablaEComponent } from './tabla-e/tabla-e.component';
import { TablaDComponent } from './tabla-d/tabla-d.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrarDocenteComponent } from './registrar-docente/registrar-docente.component';
import { RegistrarEstudianteComponent } from './registrar-estudiante/registrar-estudiante.component';
import { PipefiltroPersonaPipe } from './pipefiltro-persona.pipe';
import { FiltroDocentePipe } from './tabla-d/filtro-docente.pipe';
import { FiltroEstudiantePipe } from './tabla-e/filtro-estudiante.pipe';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonaTablaComponent } from './persona-tabla/persona-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AdminComponent,
    EditarEComponent,
    EditarDComponent,
    EliminarEComponent,
    EliminarDComponent,
    DocenteComponent,
    EstudianteComponent,
    AgregarNotasComponent,
    VerNotasComponent,
    LoginComponent,
    TablaEComponent,
    TablaDComponent,
    RegistrarDocenteComponent,
    RegistrarEstudianteComponent,
    PipefiltroPersonaPipe,
    FiltroDocentePipe,
    FiltroEstudiantePipe,
    TaskEditComponent,
    PersonaComponent,
    PersonaTablaComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
