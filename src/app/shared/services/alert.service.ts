import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()
export class AlertService {

    public successAlert(text: string, title?: string) {
        return Swal.fire({
            icon: 'success',
            title: title || 'Exíto al realizar la operación',
            text: text,
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#4b4140'
        });
    }

    public errorAlert(text: string, title?: string) {
        return Swal.fire({
            icon: 'error',
            title: title || 'Oops...',
            text: text,
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#4b4140'
        });
    }

    public infoAlert(text: string, title?: string) {
      return Swal.fire({
          icon: 'info',
          title: title || 'Info',
          text: text,
          confirmButtonText: 'Cerrar',
          confirmButtonColor: '#4b4140'
      });
  }

}
