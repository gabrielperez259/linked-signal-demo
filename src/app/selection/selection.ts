import { Component, computed, linkedSignal, signal } from '@angular/core';
import { Product } from '../models/product';
import { CITY_DATA } from '../data/city-data';
import { City } from '../models/city';

@Component({
  imports: [],
  selector: 'app-selection',
  styleUrl: './selection.scss',
  templateUrl: './selection.html',
})
export class Selection {
  cities = signal<City[]>(CITY_DATA);

  // Cidade selecionada
  selectedCity = signal<City>(CITY_DATA[0]);

  // Produtos da cidade atual
  availableProducts = linkedSignal({
    source: this.selectedCity,
    computation: (city) => city.products,
  });

  // Segue o exemplo oficial da documentação do Angular:
  selectedOption = linkedSignal<Product[], Product | null>({
    source: this.availableProducts,
    computation: (newOptions, previous) => {
      // Se a nova lista contiver o produto selecionado anteriormente, preserva a seleção.
      // Caso contrário, retorna null (ou o padrão desejado).
      return newOptions.find((opt) => opt.id === previous?.value?.id) ?? null;
    },
  });

  onCityChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const city = this.cities().find((c) => c.id === Number(select.value));
    if (city) {
      this.selectedCity.set(city);
    }
  }

  onProductChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const productId = Number(select.value);

    // Atualiza a seleção exatamente como no método `changeShipping` da documentação
    const product = this.availableProducts().find((p) => p.id === productId);
    this.selectedOption.set(product ?? null);
  }
}
