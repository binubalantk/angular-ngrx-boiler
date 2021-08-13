import { TabModel } from '../../shareable/models/tab.model';

export interface OmniTabModel extends TabModel {
  tiles: {
    tileId: string;
  };
}
