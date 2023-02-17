import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { ConexoesService } from './conexoes.service';

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
      header: 'Name',
      field: 'name',
      formatter: (data: any) => `<a href="${data.html_url}" target="_blank">${data.name}</a>`,
    },
    { header: 'Owner', field: 'owner.login' },
    { header: 'Owner Avatar', field: 'owner.avatar_url', type: 'image' },
    {
      header: 'Status',
      field: 'archived',
      type: 'tag',
      tag: {
        true: { text: 'Yes', color: 'green-100' },
        false: { text: 'No', color: 'red-100' },
      },
    },
    { header: 'Stars', field: 'stargazers_count', type: 'number' },
    { header: 'Forks', field: 'forks_count', type: 'number' },
    { header: 'Language', field: 'language' },
    { header: 'License', field: 'license.name' },
    { header: 'Is forked', field: 'fork', type: 'boolean' },
    { header: 'Created Date', field: 'created_at' },
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

  constructor(private remoteSrv: ConexoesService, private cdr: ChangeDetectorRef) {}

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
