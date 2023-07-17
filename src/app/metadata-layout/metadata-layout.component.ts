import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metadata-layout',
  templateUrl: './metadata-layout.component.html',
  styleUrls: ['./metadata-layout.component.css'],
})
export class MetadataLayoutComponent implements OnInit {
  constructor() {}

  public metadata = {
    type: 'Volumes',
    supoortedFeatures: {
      pageFilters: {
        volumeDropdown: 'true',
        nodesDropdown: 'true',
        segmentedControl: ['warning', 'info'],
        timeDropdown: 'true',
        searchFilter: 'true',
      },
      graph: {
        type: 'barchart',
        grafanaMonitoring: 'true',
        header: 'State',
      },
      info: {
        header: 'Overview',
      },
      alerts: {
        header: 'Volumes alerts',
        button: 'Show More',
      },
      table: {
        filter: {
          dropDown: 'true',
          segmentControl: ['warning', 'danger'],
          formFilter: 'true',
        },
        collectDiagnostics: true,
        selectable: 'true',
        columns: {
          id: {
            name: 'id/Name',
            expandable: 'true',
            filterable: true,
            sortable: false,
          },
          namespace: {
            name: 'Namespace',
            expandable: 'true',
            filterable: true,
            sortable: false,
          },
          storage: {
            name: 'Storage',
            expandable: 'true',
            filterable: true,
            sortable: false,
          },
          state: {
            name: 'State',
            expandable: 'true',
            filterable: true,
            sortable: false,
          },
          io: {
            name: 'ioPriority',
            expandable: 'true',
            filterable: true,
            sortable: false,
          },
        },
      },
    },
  };

  ngOnInit() {}
}

export interface IColumns {
  id?: IColumn;
}

export interface IColumn {
  name: string;
  expandable: boolean;
  filterable: boolean;
  sortable: boolean;
}
