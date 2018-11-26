import { Selects } from './selects.model';

export const GROUPS: Selects = [
  {
    groupName: 'address',
    members: [
      {
        memberName: 'zipCode',
        choices: [
          {
            id: 1,
            display: '50048-1215'
          },
          {
            id: 2,
            display: '50015-3548'
          },
          {
            id: 3,
            display: '84268-6804'
          }
        ]
      },
      {
        memberName: 'city',
        choices: [
          {
            id: 1,
            display: 'West Stanfordfurt'
          },
          {
            id: 2,
            display: 'Hectorchester'
          },
          {
            id: 3,
            display: 'East Joeburgh'
          },
          {
            id: 4,
            display: 'Lindview'
          }
        ]
      },
      {
        memberName: 'cityPrefix',
        choices: [
          {
            id: 1,
            display: 'Port'
          },
          {
            id: 2,
            display: 'Lake'
          },
          {
            id: 3,
            display: 'Port'
          }
        ]
      },
      {
        memberName: 'citySuffix',
        choices: [
          {
            id: 1,
            display: 'borough'
          },
          {
            id: 2,
            display: 'ville'
          },
          {
            id: 3,
            display: 'town'
          },
          {
            id: 4,
            display: 'stad'
          },
          {
            id: 5,
            display: 'town'
          }
        ]
      },
      {
        memberName: 'streetName',
        choices: [
          {
            id: 1,
            display: 'Malinda Shore'
          },
          {
            id: 2,
            display: 'Waelchi Mountain'
          },
          {
            id: 3,
            display: 'Harber Harbor'
          },
          {
            id: 4,
            display: 'Hickle Club'
          },
          {
            id: 5,
            display: 'Weissnat Camp'
          },
          {
            id: 6,
            display: 'Lauryn Island'
          },
          {
            id: 7,
            display: 'Olson Loop'
          }
        ]
      },
      {
        memberName: 'streetAddress',
        choices: [
          {
            id: 1,
            display: '62399 Kuhlman Station'
          },
          {
            id: 2,
            display: '5223 Asha Plaza'
          },
          {
            id: 3,
            display: '76819 Melyssa Junctions'
          },
          {
            id: 4,
            display: '0878 Reginald Union'
          },
          {
            id: 5,
            display: '7976 Tiffany Highway'
          },
          {
            id: 6,
            display: "74611 O'Keefe Common"
          },
          {
            id: 7,
            display: '278 Bailey Burg'
          }
        ]
      },
      {
        memberName: 'streetSuffix',
        choices: [
          {
            id: 1,
            display: 'Ferry'
          },
          {
            id: 2,
            display: 'Haven'
          },
          {
            id: 3,
            display: 'Knoll'
          },
          {
            id: 4,
            display: 'Freeway'
          }
        ]
      },
      {
        memberName: 'streetPrefix',
        choices: [
          {
            id: 1,
            display: 'b'
          },
          {
            id: 2,
            display: 'b'
          },
          {
            id: 3,
            display: 'c'
          }
        ]
      },
      {
        memberName: 'secondaryAddress',
        choices: [
          {
            id: 1,
            display: 'Apt. 097'
          },
          {
            id: 2,
            display: 'Suite 606'
          },
          {
            id: 3,
            display: 'Suite 021'
          },
          {
            id: 4,
            display: 'Apt. 044'
          },
          {
            id: 5,
            display: 'Apt. 811'
          },
          {
            id: 6,
            display: 'Apt. 572'
          },
          {
            id: 7,
            display: 'Apt. 705'
          }
        ]
      },
      {
        memberName: 'county',
        choices: [
          {
            id: 1,
            display: 'Borders'
          },
          {
            id: 2,
            display: 'Cambridgeshire'
          },
          {
            id: 3,
            display: 'Avon'
          },
          {
            id: 4,
            display: 'Bedfordshire'
          }
        ]
      }
    ]
  }
];
