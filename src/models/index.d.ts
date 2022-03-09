import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Home {
  readonly id: string;
  readonly adress?: string;
  readonly price?: number;
  readonly img_url?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}