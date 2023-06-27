import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item!: Item
  @Output() emitindoItemParaEditar = new EventEmitter()
  @Output() emitindoIdParaDeletar = new EventEmitter()
  faPen = faPen
  faTrash = faTrash

  constructor(
    private listaDeCompraService : ListaDeCompraService
  ) {}

  ngOnChanges(): void {
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log("Item deletado: " +  JSON.stringify(this.item));
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item)
  }

  toogleComprado() {
    this
      .listaDeCompraService
      .toogleComprado(this.item)
  }

  deletarItem() {
    this.emitindoIdParaDeletar.emit(this.item.id)
  }

  generateNameClass(): string {
    return this.item.comprado ? "description comprado" : "description"
  }

}
