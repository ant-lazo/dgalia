import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppNotificationsService {

  constructor(
    private _toast: ToastrService
  ) { }

  public errorNotification(title?: string, message?: string): void {
    this._toast.error(message || 'Error en solicitud', title || 'Error');
  }

  public invalidFormMessage(title?: string, body?: string): void {
    this._toast.error(body || 'Datos de formulario ingresados de manera incorrecta, valide los datos e intente nuevamente', title || 'Formulario no válido')
  }

  public registerSuccess(title?: string, body?: string): void {
    this._toast.success(body || 'Se ha hecho el registro de manera exitosa', title || 'Registro exitoso')
  }

  public editSuccess(title?: string, body?: string): void {
    this._toast.success(body || 'Se ha hecho la actualización del registro de manera exitosa', title || 'Actualización exitoso')
  }


  public deleteSuccess(title?: string, body?: string): void {
    this._toast.success(body || 'Se ha eliminado el registro correctamente', title || 'Eliminación exitosa')
  }
}
