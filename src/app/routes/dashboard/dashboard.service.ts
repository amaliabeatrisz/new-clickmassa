import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  gender?: string;
  mobile?: string;
  tele?: string;
  city?: string;
  address?: string;
  birthday?: string;
  website?: string;
  company?: string;
  email?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    gender: 'male',
    mobile: '13198765432',
    tele: '010-12345678',
    city: 'New York',
    address: '555 Lexington Avenue',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Hydrogen@gmail.com',
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    gender: 'male',
    mobile: '13034676675',
    tele: '010-23456781',
    city: 'Shanghai',
    address: '88 Songshan Road',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Helium@gmail.com',
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    gender: 'male',
    mobile: '15376892233',
    tele: '010-34567812',
    city: 'Los Angeles',
    address: '48400 Seminole Dr.,Cabazon',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Lithium@gmail.com',
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    gender: 'male',
    mobile: '13765443298',
    tele: '010-45678123',
    city: 'Beijing',
    address: 'chaoyang',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Beryllium@gmail.com',
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    gender: 'male',
    mobile: '13198765432',
    tele: '010-56781234',
    city: 'Berlin',
    address: 'Bernauer Str.111,13355',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Boron@gmail.com',
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    gender: 'male',
    mobile: '13166665432',
    tele: '010-67812345',
    city: 'Madrid',
    address: 'Madrid International Exhibition Center',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Carbon@gmail.com',
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    gender: 'male',
    mobile: '15811112222',
    tele: '010-78123456',
    city: 'Sydney',
    address: 'Circular Quay, Sydney NSW 2000',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Nitrogen@gmail.com',
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    gender: 'male',
    mobile: '15044558899',
    tele: '010-81234567',
    city: 'Washington',
    address: 'University of Washington',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Oxygen@gmail.com',
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    gender: 'male',
    mobile: '13198666677',
    tele: '010-12345678',
    city: 'London',
    address: 'unkown',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Fluorine@gmail.com',
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    gender: 'male',
    mobile: '17098765432',
    tele: '010-12345678',
    city: 'Paris',
    address: 'Rue Croix des Petits Champs',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Neon@gmail.com',
  },
  {
    position: 11,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    gender: 'male',
    mobile: '13166665432',
    tele: '010-23456781',
    city: 'Madrid',
    address: 'Madrid International Exhibition Center',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Carbon@gmail.com',
  },
  {
    position: 12,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    gender: 'male',
    mobile: '15811112222',
    tele: '010-34567812',
    city: 'Sydney',
    address: 'Circular Quay, Sydney NSW 2000',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Nitrogen@gmail.com',
  },
  {
    position: 13,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    gender: 'male',
    mobile: '15044558899',
    tele: '010-45678123',
    city: 'Washington',
    address: 'University of Washington',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Oxygen@gmail.com',
  },
  {
    position: 14,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    gender: 'male',
    mobile: '13198666677',
    tele: '010-56781234',
    city: 'London',
    address: 'unkown',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Fluorine@gmail.com',
  },
  {
    position: 15,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    gender: 'male',
    mobile: '17098765432',
    tele: '010-67812345',
    city: 'Paris',
    address: 'Rue Croix des Petits Champs',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Neon@gmail.com',
  },
  {
    position: 16,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    gender: 'male',
    mobile: '13198765432',
    tele: '010-78123456',
    city: 'New York',
    address: '555 Lexington Avenue',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Hydrogen@gmail.com',
  },
  {
    position: 17,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    gender: 'male',
    mobile: '13034676675',
    tele: '010-81234567',
    city: 'Shanghai',
    address: '88 Songshan Road',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Helium@gmail.com',
  },
  {
    position: 18,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    gender: 'male',
    mobile: '15376892233',
    tele: '010-12345678',
    city: 'Los Angeles',
    address: '48400 Seminole Dr.,Cabazon',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Lithium@gmail.com',
  },
  {
    position: 19,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    gender: 'male',
    mobile: '13765443298',
    tele: '010-12345678',
    city: 'Beijing',
    address: 'chaoyang',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Beryllium@gmail.com',
  },
  {
    position: 20,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    gender: 'male',
    mobile: '13198765432',
    tele: '010-23456781',
    city: 'Berlin',
    address: 'Bernauer Str.111,13355',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Boron@gmail.com',
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
