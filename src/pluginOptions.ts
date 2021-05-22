type SubType =
  | "boardgame"
  | "boardgameexpansion"
  | "boardgameaccessory"
  | "rpgitem"
  | "rpgissue"
  | "videogame";

type BoolOption = 0 | 1;

interface ICollectionParams {
  // Name of the user to request the collection for.
  username: string;
  // Specifies which collection you want to retrieve.
  subtype?: SubType;
  // Specifies which subtype you want to exclude from the results.
  excludesubtype?: SubType;
  // Filter collection to specifically listed item(s). NNN may be a comma-delimited list of item ids.
  id?: number | number[];
  // Returns more abbreviated results.
  brief?: BoolOption;
  // Returns expanded rating/ranking info for the collection.
  stats?: BoolOption;
  // Filter for owned games. Set to 0 to exclude these items so marked. Set to 1 for returning owned games and 0 for non-owned games.
  own?: BoolOption;
  // Filter for whether an item has been rated. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
  rated?: BoolOption;
  // Filter for whether an item has been played. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
  played?: BoolOption;
  // Filter for items that have been commented. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
  comment?: BoolOption;
  // Filter for items marked for trade. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
  trade?: BoolOption;
  // Filter for items wanted in trade. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
  want?: BoolOption;
  // Filter for items on the wishlist. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
  wishlist?: BoolOption;
  // Filter for wishlist priority. Returns only items of the specified priority.
  wishlistpriority?: RangeOf2<1, 5>;
  // Filter for pre-ordered games Returns only items of the specified priority. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
  preordered?: BoolOption;
  // Filter for items marked as wanting to play. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
  wanttoplay?: BoolOption;
  // Filter for ownership flag. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
  wanttobuy?: BoolOption;
  // Filter for games marked previously owned. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
  prevowned?: BoolOption;
  // Filter on whether there is a comment in the Has Parts field of the item. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
  hasparts?: BoolOption;
  // Filter on whether there is a comment in the Wants Parts field of the item. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
  wantparts?: BoolOption;
  // Filter on minimum personal rating assigned for that item in the collection.
  minrating?: RangeOf2<1, 10>;
  // Filter on maximum personal rating assigned for that item in the collection. [Note: Although you'd expect it to be maxrating, it's rating.]
  rating?: RangeOf2<1, 10>;
  // Filter on minimum BGG rating for that item in the collection. Note: 0 is ignored... you can use -1 though, for example min -1 and max 1 to get items w/no bgg rating.
  minbggrating?: -1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  // Filter on maximum BGG rating for that item in the collection. [Note: Although you'd expect it to be maxbggrating, it's bggrating.]
  bggrating?: RangeOf2<1, 10>;
  // Filter by minimum number of recorded plays.
  minplays?: number;
  // Filter by maximum number of recorded plays. [Note: Although the two maxima parameters above lack the max part, this one really is maxplays.]
  maxplays?: number;
  // Restrict the collection results to the single specified collection id.Collid is returned in the results of normal queries as well.
  collid?: number;
  // Restricts the collection results to only those whose status (own, want, fortrade, etc.) has changed or been added since the date specified (does not return results for deletions). Time may be added as well: modifiedsince=YY-MM-DD%20HH:MM:SS
  // YY-MM-DD or YY-MM-DD%20HH:MM:SS
  modifiedsince?: string;
  [key: string]: any;
}
