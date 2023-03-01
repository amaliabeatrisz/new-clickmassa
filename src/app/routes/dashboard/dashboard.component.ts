import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { SettingsService } from '@core';
import { Subscription } from 'rxjs';

import { DashboardService } from './dashboard.service';

import { TranslateService } from '@ngx-translate/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MtxGridColumn } from '@ng-matero/extensions/grid';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardService],
})
export class DashboardComponent implements OnInit {
  dataSource = this.dashboardSrv.getData();
  stats = this.dashboardSrv.getStats();

  columns: MtxGridColumn[] = [
    {
      header: this.translate.stream('Data'),
      field: 'data',
      sortable: true,
      disabled: true,
      minWidth: 100,
      width: '100px',
    },
    {
      header: this.translate.stream('ID'),
      field: 'ID',
      minWidth: 100,
    },
    {
      header: this.translate.stream('Nome'),
      field: 'nome',
      minWidth: 100,
    },
    {
      header: this.translate.stream('Status'),
      field: 'status',
      minWidth: 100,
    },
    {
      header: this.translate.stream('Ações'),
      field: 'operation',
      minWidth: 230,
      width: '230px',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          color: 'accent',
          type: 'icon',
          icon: 'print',
          tooltip: this.translate.stream('table_kitchen_sink.edit'),
          // click: record => this.edit(record),
        },
        {
          type: 'icon',
          icon: 'visibility',
          tooltip: this.translate.stream('table_kitchen_sink.edit'),
          // click: record => this.edit(record),
        },
        {
          color: 'warn',
          type: 'icon',
          icon: 'file_copy',
          tooltip: this.translate.stream('table_kitchen_sink.edit'),
          // click: record => this.edit(record),
        },
        {
          color: 'warn',
          icon: 'delete',
          text: this.translate.stream('Desconectar'),
          tooltip: this.translate.stream('table_kitchen_sink.delete'),
          pop: {
            title: this.translate.stream('table_kitchen_sink.confirm_delete'),
            closeText: this.translate.stream('table_kitchen_sink.close'),
            okText: this.translate.stream('table_kitchen_sink.ok'),
          },
          // click: record => this.delete(record),
        },
      ],
    },
  ];
  list: any[] = [];
  isLoading = true;

  multiSelectable = false;
  rowSelectable = false;
  hideRowSelectionCheckbox = false;
  showToolbar = true;
  columnHideable = true;
  columnSortable = true;
  columnPinnable = true;
  rowHover = true;
  rowStriped = false;
  showPaginator = true;
  expandable = false;
  columnResizable = false;

  constructor(
    private translate: TranslateService,
    private dashboardSrv: DashboardService,
    private dataSrv: DashboardService,
    public dialog: MtxDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.list = this.dataSrv.getData();
    this.isLoading = false;
  }

  edit(value: any) {
    const dialogRef = this.dialog.originalOpen(DashboardComponent, {
      width: '600px',
      data: { record: value },
    });

    dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
  }

  delete(value: any) {
    this.dialog.alert(`You have deleted ${value.position}!`);
  }

  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }

  enableRowExpandable() {
    this.columns[0].showExpand = this.expandable;
  }

  updateCell() {
    this.list = this.list.map(item => {
      item.weight = Math.round(Math.random() * 1000) / 100;
      return item;
    });
  }

  updateList() {
    this.list = this.list.splice(-1).concat(this.list);
  }
}
