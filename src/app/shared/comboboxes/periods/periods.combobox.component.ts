import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Catalog } from 'src/app/models/catalog.interface';
import { Param } from 'src/app/models/param.interface';
import { CatalogsService } from 'src/app/services/catalogs.service';

@Component({
  selector: 'combobox-periods',
  templateUrl: './periods.combobox.component.html',
})
export class PeriodsComboboxComponent {
  periods: Catalog[] = [];
  @Output() selected = new EventEmitter<Param>();

  constructor(private catalogsService: CatalogsService) {}

  ngOnInit() {
    this.getPeriods();
  }

  getPeriods() {
    return this.catalogsService
      .getCatalogsByType('period_id')
      .subscribe((periods) => (this.periods = periods));
  }

  select(period: Catalog) {
    const periodParam: Param = {
      type: 'period_id',
      term: period.id.toString(),
    };
    this.selected.emit(periodParam);
  }
}
