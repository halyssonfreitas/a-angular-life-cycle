import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemQueVaiSerEditado! : Item
  editando = false
  textoBtn = 'Salvar item'
  public valorItem!: string;

  constructor(
    private listaService: ListaDeCompraService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('itemQueVaiSerEditado (firstChange) :', changes['itemQueVaiSerEditado'].firstChange);
    console.log('itemQueVaiSerEditado (isFirstChange()) :', changes['itemQueVaiSerEditado'].isFirstChange());
    console.log('itemQueVaiSerEditado (currentValue) :', changes['itemQueVaiSerEditado'].currentValue);
    console.log('itemQueVaiSerEditado (previousValue) :', changes['itemQueVaiSerEditado'].previousValue);
    if(!changes['itemQueVaiSerEditado'].firstChange) {
      this.editando = true
      this.textoBtn = 'Editar item'
      this.valorItem = this.itemQueVaiSerEditado?.nome
    }
  }

  ngOnInit(): void { }

  adicionarItem(){
    this.listaService.adicionarItemNaLista(this.valorItem)
    this.limparCampo()
  }

  editarItem () {
    this.listaService.editarItemNaLista(this.itemQueVaiSerEditado, this.valorItem)
    this.limparCampo()
    this.editando = false
    this.textoBtn = 'Salvar item'
  }

  limparCampo() {
    this.valorItem = ''
  }
}
