import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  @Input() item!: Item
  @Output() emitindoItemParaEditar = new EventEmitter()
  faPen = faPen
  faTrash = faTrash

  constructor(
    private listaDeCompraService : ListaDeCompraService
  ) {}

  ngOnChanges(): void {
    console.log(1)
  }

  ngOnInit(): void {}

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item)
  }

  toogleComprado() {
    this
      .listaDeCompraService
      .toogleComprado(this.item)
  }

}
