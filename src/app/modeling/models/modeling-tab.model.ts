import { TabModel } from '../../shareable/models/tab.model';

export interface ModelingTabModel extends TabModel {
  tiles: {
    tileId: string;
  };
}
