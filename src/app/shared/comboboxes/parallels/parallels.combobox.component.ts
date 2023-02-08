import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Catalog } from 'src/app/models/catalog.interface';
import { Param } from 'src/app/models/param.interface';
import { CatalogsService } from 'src/app/services/catalogs.service';

@Component({
  selector: 'combobox-parallels',
  templateUrl: './parallels.combobox.component.html',
})
export class ParallelsComboboxComponent {
  parallels: Catalog[] = [];
  @Output() selected = new EventEmitter<Param>();

  constructor(private catalogsService: CatalogsService) {}

  ngOnInit() {
    this.getParallels();
  }

  getParallels() {
    return this.catalogsService
      .getCatalogsByType('parallel_id')
      .subscribe((parallels) => (this.parallels = parallels));
  }

  select(parallel: Catalog) {
    const parallelParam: Param = {
      type: 'parallel_id',
      term: parallel.id.toString(),
    };
    this.selected.emit(parallelParam);
  }
}
