import { Component } from '@angular/core';
import { EntidadesService } from 'src/app/servicios/entidades.service';
import { GeneralesService } from 'src/app/servicios/generales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public entidades = [];
  public dataAux = [];
  public data = [];

  public settings = {

    // hideSubHeader: true,

    //Customizo acciones que tendra la tabla
    actions: {
      custom: [
        {
          name: 'yourAction',
          title: '<i class="ion-document" title="YourAction"></i>'
        },
        {
          name: 'editAction',
          title: '<i class="ion-edit" title="Editar">  </i>'
        },
        {
          name: 'deleteAction',
          title: '<i class="far fa-trash-alt" title="Eliminar" (click)="EliminarEntidad($event)"> Eliminar  </i>'
        }
      ],
      add: false,
      edit: true,
      delete: false
    },

    //Armo estructura con las configuraciones de cada columna que tendrá tabla 
    columns: {
      entityId: {
        title: 'Id',
        filter: true,
        sortDirection: 'asc'      
      },
      name: {
        title: 'Nombre',
        filter: true
      },
      identificationNumber: {
        title: 'Num. Identificacion',
        filter: true
      },
      expirationDate: {
        title: 'Fecha expiracion',
        filter: true
      },
      contactName: {
        title: 'Nombre Contacto',
        filter: true
      },
      contactMail: {
        title: 'Mail Contacto',
        filter: true,
      },
      ipAddress: {
        title: 'Direccion IP',
        filter: true,
      },
      logo: {
          title: 'Imagen',
          type: 'html',
          filter: false,
          valuePrepareFunction: (images) => {
            return `<img style="width: auto; height: 50px" src="${images}"/>`
        },
      }
    }

  };

  
  constructor(private servicioEntidades: EntidadesService,
              private servicioGenerales: GeneralesService) {
    
    //Llamo a funcion que me trae las Entidades
    this.traerEntidades();

  }

  private traerEntidades(){    
    let i: number;
    for (i = 1; i < 11 ; i++) {
      //Consumo API mediante servicio y si la misma me devuelve Datos la inserto en el array Entidades.
      this.servicioEntidades.traerEntidad(i).subscribe(
        res => {                
          if(res["message"] == "Data found") {
            this.entidades.push({ 
              "entityId"                : res["data"].entityId,
              "name"                    : res["data"].name,
              "identificationNumber"    : res["data"].identificationNumber,
              "expirationDate"          : res["data"].expirationDate,
              "contactName"             : res["data"].contactName,
              "contactMail"             : res["data"].contactMail,
              "ipAddress"               : res["data"].ipAddress,
              "logo"                    : res["data"].logo
            });
          } 
          //Si no me devuelve datos indico el Error por pantalla
          else {
            this.servicioGenerales.showWarning('Atención', res["message"]);
          }     
        }
      );   
    }
  }

  
  public AgregarEntidad(entityId,name,identificationNumber,expirationDate,contactName,contactMail,ipAddress,logo	){

    //Verifico si la Entidad a agregar ya se agregó previamente
    let existe = 0;
    this.data.forEach(item => {
      if(item.entityId == entityId){
        existe = 1;
      }
    })

    //Si no se agregó la agrego
    if (existe == 0){
      this.dataAux.push( 
        {
          "entityId"                : entityId,
          "name"                    : name,
          "identificationNumber"    : identificationNumber,
          "expirationDate"          : expirationDate,
          "contactName"             : contactName,
          "contactMail"             : contactMail,
          "ipAddress"               : ipAddress,
          "logo"                    : logo
        })
      
        this.data = this.dataAux;

        this.servicioGenerales.showSuccess('Agregada', "Entidad agregada a su lista");

        this.settings = Object.assign({}, this.settings);        
    }
    //En caso de que se haya agregado muestro mensaje por pantalla que la misma no va a agregarse
    else{
      this.servicioGenerales.showWarning('Atención', "La entidad ya existe, no se agregó");
    }

  }

  public EliminarEntidad(e){
    let contador = 0;

    //recorro Array donde guardo las entidades seleccionadas y elimino la de mismo ID que tiene la entidad de la fila que se presionó Eliminar.
    this.data.forEach(item => {      
      if(item.entityId == e["data"].entityId){
        this.data.splice(contador, 1);
        this.servicioGenerales.showSuccess('Eliminada', "Entidad eliminada de su lista");
        this.settings = Object.assign({}, this.settings);
      }
      contador ++;
    })
  }


}
