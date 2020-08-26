export const header = [{

  name: 'Version',
  prop: 'Version',
},
{
  name: 'Status',
  prop: 'Status',
},
{
  name: 'Progress',
  prop: 'Progress',
},
{
  name: 'Start Date',
  prop: 'startDate',
},
{
  name: 'Release Date',
  prop: 'releaseDate',
},
{
  name: 'Description',
  prop: 'Description',
},
{
  name: 'Actions',
  prop: 'Actions',
}];

export const data = [{

  Version: 'Version 4.0',
  Status: 'IN PROGRESS',
  Progress: '0',
  startDate: '01/06/17',
  releaseDate: '',
  Description: 'Awesome data',
}, {
  Version: 'Version 3.0',
  Status: 'UNRELEASED',
  Progress: '25',
  startDate: '11/06/16',
  releaseDate: '',
  Description: 'Website to',
}, {
  Version: 'Version 2.0',
  Status: 'UNRELEASED',
  Progress: '35',
  startDate: '08/22/16',
  releaseDate: '',
  Description: '--',
}, {
  Version: 'Version 1.8',
  Status: 'RELEASED',
  Progress: '100',
  startDate: '07/05/16',
  releaseDate: '09/28/17',
  Description: 'Version 1.8',
}, {
  Version: 'Version 1.5',
  Status: 'RELEASED',
  Progress: '100',
  startDate: '06/20/16',
  releaseDate: '09/01/16',
  Description: 'Version 1.5',
}, {
  Version: 'Version 1.3',
  Status: 'RELEASED',
  Progress: '100',
  startDate: '06/12/16',
  releaseDate: '09/28/17',
  Description: 'Version 1.3',
}, {
  Version: 'Version 1.2',
  Status: 'RELEASED',
  Progress: '100',
  startDate: '06/12/16',
  releaseDate: '09/12/17',
  Description: 'Version 1.2',
}, {
  Version: 'Version 1.0',
  Status: 'RELEASED',
  Progress: '100',
  startDate: '05/20/16',
  releaseDate: '09/12/17',
  Description: 'Version 1.0',
}
]

export const status = [{

  name: 'IN PROGRESS',
  prop: 'inProgress',
  variant: 'primary',
},
{
  name: 'UNRELEASED',
  prop: 'unreleased',
  variant: 'warning',
},
{
  name: 'RELEASED',
  prop: 'released',
  variant: 'success',
}
]