import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppNotificationsService {

  constructor(
    private _toast: ToastrService
  ) { }

  public error(title?: string, message?: string): void {
    this._toast.error(message ?? 'Verifica que pudo haber pasado 🙏', title || 'Algo salió mal 🤔');
  }

  public invalidFormMessage(title?: string, body?: string): void {
    this._toast.error(body || 'Datos de formulario ingresados de manera incorrecta, valide los datos e intente nuevamente', title || 'Formulario no válido')
  }

  public registerSuccess(title?: string, body?: string): void {
    this._toast.success(body ?? 'Registro exitoso', title ?? '👏 Excelente!')
  }

  public editSuccess(title?: string, body?: string): void {
    this._toast.success(body || 'Se ha hecho la actualización del registro de manera exitosa', title || 'Todo salió bien 😉')
  }

  public deleteSuccess(title?: string, body?: string): void {
    this._toast.success(body || 'Se ha eliminado el registro correctamente', title || 'Sabemos que hiciste lo correcto 👏')
  }

  public sendSuccess(title?: string, body?: string): void {
    this._toast.success(body || 'Se ha hecho el envío de email de manera exitosa', title || 'Todo salió bien 😉')
  }

  public downloadSuccess(title?: string, body?: string): void {
    this._toast.success(body || 'Se ha hecho la descarga de manera exitosa', title || 'Todo salió bien 😉')
  }

  public removeMerchandiseSuccess(title?: string, body?: string): void {
    this._toast.success(body ?? 'Retiro exitoso', title ?? '👏 Excelente!')
  }

}
