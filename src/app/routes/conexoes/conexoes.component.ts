import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { ConexoesService } from './conexoes.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-conexoes',
  templateUrl: './conexoes.component.html',
  styleUrls: ['./conexoes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConexoesService],
})
export class ConexoesComponent implements OnInit {

  columns: MtxGridColumn[] = [
    {
      header: 'STATUS',
      pinned: 'right',
      field: 'archived',
      type: 'tag',
      tag: {
        true: { text: 'Conectado', color: 'green-100' },
        false: { text: 'Desconectado', color: 'red-100' },
      },
    },
    { header: 'ID', pinned: 'right', field: 'forks_count', type: 'number' },
    { header: 'PERFIL',
      pinned: 'right',
      field: 'owner.avatar_url',
      type: 'image',
      buttons: [
      {
        class: 'bg-green-500 text-white',
        type: 'icon',
        icon: 'tap_and_play',
        tooltip: this.translate.stream('Conectar'),
        pop: {
          title: this.translate.stream('CÓDIGO QRCODE'),
          closeText: this.translate.stream('table_kitchen_sink.close'),
          okText: this.translate.stream('table_kitchen_sink.ok'),
        },
        // click: record => this.edit(record),
      },
    ],
  },
    {
      header: 'NOME',
      pinned: 'right',
      field: 'name',
      formatter: (data: any) => `<a target="_blank">${data.name}</a>`,
    },
    {
      header: this.translate.stream('AÇÕES'),
      field: 'operation',
      minWidth: 160,
      width: '160px',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          class: 'bg-green-500 text-white',
          type: 'icon',
          icon: 'tap_and_play',
          tooltip: this.translate.stream('Conectar'),
          pop: {
            title: this.translate.stream('CÓDIGO QRCODE'),
            closeText: this.translate.stream('table_kitchen_sink.close'),
            okText: this.translate.stream('table_kitchen_sink.ok'),
          },
          // click: record => this.edit(record),
        },
        {
          class: 'bg-red-500 text-white',
          icon: 'mobile_off',
          text: this.translate.stream('table_kitchen_sink.delete'),
          tooltip: this.translate.stream('Desconectar'),
          pop: {
            title: this.translate.stream('table_kitchen_sink.confirm_desconnect'),
            closeText: this.translate.stream('table_kitchen_sink.close'),
            okText: this.translate.stream('table_kitchen_sink.ok'),
          },
          // click: record => this.delete(record),
        },
      ],
    },
    // { header: 'Created Date', field: 'created_at' },
  ];
  list: any[] = [];
  total = 0;
  isLoading = true;

  query = {
    q: 'user:nzbin',
    sort: 'stars',
    order: 'desc',
    page: 0,
    per_page: 10,
  };

  get params() {
    const p = Object.assign({}, this.query);
    p.page += 1;
    return p;
  }

  constructor(
    public dialog: MtxDialog,
    private translate: TranslateService,
    private remoteSrv: ConexoesService,
    private cdr: ChangeDetectorRef
    ) {}

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.isLoading = true;

    this.remoteSrv.getList(this.params).subscribe(
      res => {
        this.list = res.items;
        this.total = res.total_count;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    );
  }

  getNextPage(e: PageEvent) {
    this.query.page = e.pageIndex;
    this.query.per_page = e.pageSize;
    this.getList();
  }

  search() {
    this.query.page = 0;
    this.getList();
  }

  reset() {
    this.query.page = 0;
    this.query.per_page = 10;
    this.getList();
  }
}
