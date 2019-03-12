import { Component, OnInit } from '@angular/core';
import { NivelModel } from '../model/nivel-model';
import { DesarrolladorModel } from '../model/desarrolador-model';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { DesarrolladoresService } from '../services/desarrolladores.service';

@Component({
  selector: 'app-alta-personas',
  templateUrl: './alta-personas.component.html',
  styleUrls: ['./alta-personas.component.css']
})
export class AltaPersonasComponent implements OnInit {

  niveles: NivelModel[];
  idNivel: number;
  desarrollador: DesarrolladorModel;

  constructor(private formBuilder: FormBuilder, private dataService: DataService,
    private desarrolladoresService: DesarrolladoresService) {
      this.niveles=[
        {id: 1, name:'Senior'},
        {id: 2, name:'Middle'},
        {id: 3, name:'Junior'}
      ];
   }

   registroForm = this.formBuilder.group({
     id: [0],
     nombre: ['', Validators.required],
     apPaterno: ['', Validators.required],
     apMaterno: ['', Validators.required],
     idNivel: ['', Validators.required]
   });

  ngOnInit() {
  }

  algo(){
    console.log(this.registroForm.valid);
    console.log(this.registroForm.value.id);

  }

  submit(){    

    if(this.registroForm.valid && this.registroForm.value.idNivel>=0){
      

      let desarrollador= new DesarrolladorModel();
      this.desarrollador.nombre= this.registroForm.value.nombre;
      this.desarrollador.apPaterno= this.registroForm.value.apPaterno;
      this.desarrollador.apMaterno= this.registroForm.value.apMaterno;
      this.desarrollador.nivel= this.registroForm.value.idNivel;

      this.dataService.setIsLoadingEvent(true);

      this.desarrolladoresService.save(this.desarrollador).subscribe(result =>{
        this.dataService.setIsLoadingEvent(false);
        if (result){
          this.dataService.setGeneralNotificationMessage('Registro guardado');
        }else {
          this.dataService.setGeneralNotificationMessage('Entró al servicio pero no guardo');
        }
      }, error => {
        console.error(error);
        this.dataService.setIsLoadingEvent(false);
        this.dataService.setGeneralNotificationMessage('Error al guardar los datos');
      });
    }else{
      this.dataService.setGeneralNotificationMessage("Error en la captura de datos");
    }

  }

}
