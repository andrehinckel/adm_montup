import { Component, OnInit } from '@angular/core';
import { Montanha } from 'app/models/montanha';
import { MontanhaService } from 'app/services/montanha.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-montanhas',
  templateUrl: './montanhas.component.html',
  styleUrls: ['./montanhas.component.scss']
})
export class MontanhasComponent implements OnInit {

    montanha: Montanha;
    montanhas: Montanha[];

  constructor(private montanhaservice: MontanhaService) { }

  ngOnInit() {
      this.obterTodos();
  }

  obterTodos() {
    this.montanhaservice.obterTodosMontanha().subscribe((
        x: Montanha[]) => {
        this.montanhas = x;
    }, error => {
        console.log(error);
    });
}

}
