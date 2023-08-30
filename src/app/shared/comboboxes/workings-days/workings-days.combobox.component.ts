import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Catalog } from 'src/app/models/catalog.interface';
import { Param } from 'src/app/models/param.interface';
import { CatalogsService } from 'src/app/services/catalogs.service';

@Component({
  selector: 'combobox-workings-days',
  templateUrl: './workings-days.combobox.component.html',
})
export class WorkingsDaysComboboxComponent {
  workings_days: Catalog[] = [];
  @Output() selected = new EventEmitter<Param>();

  constructor(private catalogsService: CatalogsService) {}

  ngOnInit() {
    this.getWorkingsDays();
  }

  getWorkingsDays() {
    return this.catalogsService
      .getCatalogsByType('working_day_id')
      .subscribe((workings_days) => (this.workings_days = workings_days));
  }

  select(working_day: Catalog) {
    const workingDayParam: Param = {
      type: 'working_day_id',
      term: working_day.id.toString(),
    };
    this.selected.emit(workingDayParam);
  }
}
