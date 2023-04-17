import _ from "lodash";

export function paginate(items, pageNumber, maxItemsInOnePage) {
  const startIndex = (pageNumber - 1) * maxItemsInOnePage;
  return _(items).slice(startIndex).take(maxItemsInOnePage).value();
}
