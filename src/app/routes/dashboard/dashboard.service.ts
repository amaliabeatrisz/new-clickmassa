import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  data: string;
  id: number;
  nome: string;
  status?: string;
  acoes?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    data: '20/01',
    id: 1,
  nome: 'amalia',
  status: 'rascunho',
  acoes: 'isso',

  },
  {
    data: '20/01',
    id: 1,
  nome: 'amalia',
  status: 'rascunho',
  acoes: 'isso',

  },
  {
    data: '20/01',
    id: 1,
  nome: 'amalia',
  status: 'rascunho',
  acoes: 'isso',

  },
  {
    data: '20/01',
    id: 1,
  nome: 'amalia',
  status: 'rascunho',
  acoes: 'isso',

  },
];

const MESSAGES = [
  {
    img: 'assets/images/avatars/avatar-1.jpg',
    subject: 'Hydrogen',
    content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
  },
  {
    img: 'assets/images/avatars/avatar-2.jpg',
    subject: 'Helium',
    content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
  },
  {
    img: 'assets/images/avatars/avatar-3.jpg',
    subject: 'Lithium',
    content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
  },
  {
    img: 'assets/images/avatars/avatar-4.jpg',
    subject: 'Beryllium',
    content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
  },
  {
    img: 'assets/images/avatars/avatar-6.jpg',
    subject: 'Boron',
    content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
  },
];

@Injectable()
export class DashboardService {
  stats = [
    {
      title: 'Contatos',
      icon: 'account_box',
      amount: '2000',
      progress: {
        value: 50,
      },
      color: 'bg-indigo-500',
    },
    {
      title: 'Mensagens Enviadas',
      icon: 'done_outline',
      amount: '20.000',
      progress: {
        value: 70,
      },
      color: 'bg-blue-500',
    },
    {
      title: 'Mensagens Lidas',
      icon: 'done_all',
      amount: '10.000',
      progress: {
        value: 5.000,
      },
      color: 'bg-green-500',
    },
    {
      title: 'Mensagens Respondidas',
      icon: 'reply',
      amount: '5.000',
      progress: {
        value: 5.000,
      },
      color: 'bg-teal-500',
    },
  ];

  charts = [
    // {
    //   chart: {
    //     height: 350,
    //     type: 'area',
    //     toolbar: false,
    //   },
    //   dataLabels: {
    //     enabled: false,
    //   },
    //   stroke: {
    //     curve: 'smooth',
    //   },
    //   series: [
    //     {
    //       name: 'Envios',
    //       data: [31, 40, 28, 51, 42, 109, 100],
    //     },
    //   ],
    //   xaxis: {
    //     type: 'datetime',
    //     categories: [
    //       '2019-11-24T00:00:00',
    //       '2019-11-24T01:30:00',
    //       '2019-11-24T02:30:00',
    //       '2019-11-24T03:30:00',
    //       '2019-11-24T04:30:00',
    //       '2019-11-24T05:30:00',
    //       '2019-11-24T06:30:00',
    //     ],
    //   },
    //   tooltip: {
    //     x: {
    //       format: 'dd/MM/yy HH:mm',
    //     },
    //   },
    //   legend: {
    //     position: 'top',
    //     horizontalAlign: 'right',
    //   },
    // },
  ];

  constructor(private http: HttpClient) {}

  getData() {
    return ELEMENT_DATA;
  }

  getMessages() {
    return MESSAGES;
  }

  getCharts() {
    return this.charts;
  }

  getStats() {
    return this.stats;
  }
}
