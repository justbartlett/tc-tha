import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const incidents = [
      {
        'id': 0,
        'industry': 'Professional',
        'large': '158',
        'small': '59',
        'unknown': '323',
        'total': '540',
        'label': 'A'
      },
      {
        'id': 1,
        'industry': 'Public',
        'large': '22429',
        'small': '51',
        'unknown': '308',
        'total': '22788',
        'label': 'B'
      },
      {
        'id': 2,
        'industry': 'Real Estate',
        'large': '2',
        'small': '5',
        'unknown': '24',
        'total': '31',
        'label': 'C'
      },
      {
        'id': 3,
        'industry': 'Retail',
        'large': '56',
        'small': '111',
        'unknown': '150',
        'total': '317',
        'label': 'D'
      },
      {
        'id': 4,
        'industry': 'Trade',
        'large': '13',
        'small': '5',
        'unknown': '13',
        'total': '31',
        'label': 'E'
      },
      {
        'id': 5,
        'industry': 'Transportation',
        'large': '15',
        'small': '9',
        'unknown': '35',
        'total': '59',
        'label': 'F'
      },
      {
        'id': 6,
        'industry': 'Utilities',
        'large': '14',
        'small': '8',
        'unknown': '24',
        'total': '46',
        'label': 'G'
      },
      {
        'id': 7,
        'industry': 'unknown',
        'large': '1043',
        'small': '9',
        'unknown': '17521',
        'total': '18573',
        'label': 'H'
      },
      {
        'id': 8,
        'industry': 'total',
        'large': '24505',
        'small': '961',
        'unknown': '27842',
        'total': '53808',
        'label': 'I'
      }
    ];
    return {incidents};
  }
}