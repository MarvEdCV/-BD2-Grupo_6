import { Component, OnInit } from '@angular/core';
import swal from'sweetalert2';

@Component({
  selector: 'app-registro-log',
  templateUrl: './registro-log.component.html',
  styleUrls: ['./registro-log.component.scss']
})
export class RegistroLogComponent implements OnInit {
  descripcion: string="";
  paciente: string="";
  habitacion: string="";
  tipolog: string="";
  base:string="";
  constructor() { }

  ngOnInit(): void {
  }

  registrarlog(){
    if(this.base == "1" && this.tipolog =="1"){
      this.registrarlogActividadMongo();
      swal.fire('Hi', ' Log registrado con Exito!', 'success')
    }else if(this.base == "1" && this.tipolog == "2"){
     this.registrarlogHabitacionMongo()
    }else if(this.base == "2" && this.tipolog =="1"){
     this.registrarlogActividadCassandra();
    }else if(this.base == "2" && this.tipolog =="2"){
     this.registrarlogHabitacionCassandra()
    }else if(this.base == "3" && this.tipolog =="1"){
      this.registrarlogActividadMysql();
     }else if(this.base == "3" && this.tipolog =="2"){
      this.registrarlogHabitacionMysql()
     }
  }

  registrarlogHabitacionMongo(){
    console.log("Habitacion MongoDB")

  }

  registrarlogActividadMongo(){
    console.log("Actividad MongoDB")
    
  }

  registrarlogHabitacionCassandra(){
    console.log("Habitacion cassandra")

  }

  registrarlogActividadCassandra(){
    console.log("actividad cassandra")
    
  }

  registrarlogHabitacionMysql(){
    console.log("Habitacion mysql")

  }

  registrarlogActividadMysql(){
    console.log("actividad mysql")
    
  }



}
