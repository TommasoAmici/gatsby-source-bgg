type BuildPowersOf2LengthArrays<N extends number, R extends never[][]> = R[0][N] extends never
  ? R
  : BuildPowersOf2LengthArrays<N, [[...R[0], ...R[0]], ...R]>;

type ConcatLargestUntilDone<N extends number, R extends never[][], B extends never[]> =
  B["length"] extends N
    ? B
    : [...R[0], ...B][N] extends never
    ? ConcatLargestUntilDone<
        N,
        R extends [R[0], ...infer U] ? (U extends never[][] ? U : never) : never,
        B
      >
    : ConcatLargestUntilDone<
        N,
        R extends [R[0], ...infer U] ? (U extends never[][] ? U : never) : never,
        [...R[0], ...B]
      >;

type Replace<R extends any[], T> = { [K in keyof R]: T };

type TupleOf<T, N extends number> = number extends N
  ? T[]
  : {
      [K in N]: BuildPowersOf2LengthArrays<K, [[never]]> extends infer U
        ? U extends never[][]
          ? Replace<ConcatLargestUntilDone<K, U, []>, T>
          : never
        : never;
    }[N];

type RangeOf<N extends number> = Partial<TupleOf<unknown, N>>["length"];

type RangeOf2<From extends number, To extends number> = Exclude<RangeOf<To>, RangeOf<From>> | From;

interface IAPICollection {
  objecttype: string;
  objectid: number;
  subtype: SubType;
  collid: number;
  name: { text: string; sortindex: string };
  yearpublished: number;
  image: string;
  thumbnail: string;
  status: {
    own: BoolOption;
    prevowned: BoolOption;
    fortrade: BoolOption;
    want: BoolOption;
    wanttoplay: BoolOption;
    wanttobuy: BoolOption;
    wishlist: BoolOption;
    preordered: BoolOption;
    lastmodified: string; //'2020-12-25 13:49:34'
  };
  numplays: number;
}

interface IThingParams {
  // Specifies the id of the thing(s) to retrieve. To request multiple things with a single query, NNN can specify a comma-delimited list of ids.
  id: number | number[];
  // Specifies that, regardless of the type of thing asked for by id, the results are filtered by the THINGTYPE(s) specified. Multiple THINGTYPEs can be specified in a comma-delimited list.
  type?: SubType;
  // Returns version info for the item.
  versions?: BoolOption;
  // Returns videos for the item.
  videos?: BoolOption;
  // Returns ranking and rating stats for the item.
  stats?: BoolOption;
  // Not currently supported. Returns historical data over time. See page parameter.
  historical?: BoolOption;
  // Returns marketplace data.
  marketplace?: BoolOption;
  // Returns all comments about the item. Also includes ratings when commented. See page parameter.
  comments?: BoolOption;
  // Returns all ratings for the item. Also includes comments when rated. See page parameter. The ratingcomments and comments parameters cannot be used together, as the output always appears in the <comments> node of the XML; comments parameter takes precedence if both are specified. Ratings are sorted in descending rating value, based on the highest rating they have assigned to that item (each item in the collection can have a different rating).
  ratingcomments?: BoolOption;
  // Defaults to 1, controls the page of data to see for historical info, comments, and ratings data.
  page?: number;
  // Set the number of records to return in paging. Minimum is 10, maximum is 100.
  pagesize?: RangeOf2<10, 100>;
  // Not currently supported.
  from?: string;
  // Not currently supported.
  to?: string;
  [key: string]: any;
}

interface IAPIPoll {
  name: "suggested_numplayers" | "suggested_playerage" | "language_dependence" | string;
  title: string;
  totalvotes: number;
}

interface IAPIPollResults {
  value: number | string;
  numvotes: number;
}

interface IPollNumPlayers extends IAPIPoll {
  name: "suggested_numplayers";
  results: { numplayers: number | string; result: IAPIPollResults[] }[];
}

interface IPollPlayerAge extends IAPIPoll {
  name: "suggested_playerage";
  results: { result: IAPIPollResults[] };
}

interface IPollLanguageDependence extends IAPIPoll {
  name: "language_dependence";
  results: {
    result: {
      value: number | string;
      numvotes: number;
      level: number;
    }[];
  };
}

type TThingLink = {
  type:
    | "boardgamecategory"
    | "boardgamemechanic"
    | "boardgamefamily"
    | "boardgameexpansion"
    | "boardgameimplementation"
    | "boardgamedesigner"
    | "boardgameartist"
    | "boardgamepublisher";
  id: number;
  value: string;
};

interface IAPIThing {
  type: SubType;
  id: number;
  thumbnail: string;
  image: string;
  name: { type: "primary" | "alternate"; sortindex: number; value: string }[];
  description: string;
  yearpublished: { value: number };
  minplayers: { value: number };
  maxplayers: { value: number };
  poll: (IPollNumPlayers | IPollPlayerAge | IPollLanguageDependence)[];
  playingtime: { value: number };
  minplaytime: { value: number };
  maxplaytime: { value: number };
  minage: { value: number };
  link: TThingLink[];
}

type TSuggestedAgePoll = {
  [key in 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 21]: number;
} & {
  [key: number]: number;
};

type TLanguageDependencePoll = {
  [key in 1 | 2 | 3 | 4 | 5]: { helpText: string; votes: number };
} & {
  1: { helpText: "No necessary in-game text"; votes: number };
  2: { helpText: "Some necessary text - easily memorized or small crib sheet"; votes: number };
  3: { helpText: "Moderate in-game text - needs crib sheet or paste ups"; votes: number };
  4: {
    helpText: "Extensive use of text - massive conversion needed to be playable";
    votes: number;
  };
  5: { helpText: "Unplayable in another language"; votes: number };
};

// Clean interface after processing IAPICollection
interface ICollection {
  objectID: number;
  objectType: string;
  subType: SubType;
  collID: number;
  description?: string;
  minPlayers?: number;
  maxPlayers?: number;
  PlayingTime?: number;
  minpPlayTime?: number;
  maxpPlayTime?: number;
  minAge?: number;
  links?: TThingLink[];
  name: string;
  yearPublished: number;
  image: string;
  status: {
    own: boolean;
    prevOwned: boolean;
    forTrade: boolean;
    want: boolean;
    wantToPlay: boolean;
    wantToBuy: boolean;
    wishlist: boolean;
    preOrdered: boolean;
    lastModified: Date;
  };
  numPlays: number;
  suggestedNumPlayers?: {
    numPlayers: string;
    best: number;
    recommended: number;
    notRecommended: number;
  }[];
  suggestedPlayerAge?: TSuggestedAgePoll;
  languageDependence?: TLanguageDependencePoll;
}
