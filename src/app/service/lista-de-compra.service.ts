import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = []

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]')
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string) : Item {
    const id = this.listaDeCompra.length + 1
    const item : Item = {
      id,
      nome: nomeDoItem,
      data: new Date().toLocaleDateString('pt-Br'),
      comprado: false
    }
    return item
  }

  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem)
    this.listaDeCompra.push(item)
    // this.atualizarLocalStorage()
  }

  editarItemNaLista (item: Item, nomeEditadoDoItem: string) {
    const itemEditado : Item = {
      id: item.id,
      comprado: item.comprado,
      data: item.data,
      nome: nomeEditadoDoItem
    }
    const id = Number(item.id)
    this.listaDeCompra.splice(id-1, 1, itemEditado)
    // this.atualizarLocalStorage()
  }

  toogleComprado (item: Item) {
    const itemEditado : Item = {
      id: item.id,
      comprado: !item.comprado,
      data: item.data,
      nome: item.nome
    }
    const id = Number(item.id)
    this.listaDeCompra.splice(id-1, 1, itemEditado)

    this.atualizarLocalStorage()
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra))
  }
}
