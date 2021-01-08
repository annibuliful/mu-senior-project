import listEnNews from "../../../locale/EN/news";
import listThNews from "../../../locale/TH/news";
import { pagination } from "../../../utils/filter";

export const getNewsInfoByQuery = ({ limit, offset }, language) => {
  let listNews = [];
  if (language === "en-US") {
    listNews = listEnNews;
  } else {
    listNews = listThNews;
  }

  const isPagination = limit !== undefined && offset !== undefined;
  if (isPagination) {
    listNews = listNews.filter(pagination(limit, offset));
  }

  return listNews;
};
