import { Component, OnInit } from '@angular/core';
import { EditarItemService } from 'src/app/services/editar-item/editar-item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-item',
  templateUrl: './editar-item.component.html',
  styleUrls: ['./editar-item.component.scss']
})
export class EditarItemComponent implements OnInit {

  constructor(private readonly _editarItemService: EditarItemService, private _activatedRoute: ActivatedRoute) { }

  

  ngOnInit() {

    

  }

}
