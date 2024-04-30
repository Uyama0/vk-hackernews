import { FC } from "react";

import { Banner, Div, Link } from "@vkontakte/vkui";

import { TNewsArticle } from "../model/types";
import { shortUrl } from "shared/lib/shortUrl";
import { convertDate } from "shared/lib/coverDate";

export const ArticleInfo: FC<TNewsArticle> = ({
  by,
  title,
  url,
  score,
  time,
}) => {
  const validDate = convertDate(time);
  return (
    <Banner
      header={
        <Div>
          <span>{title}</span>
          <Link href={url}>{shortUrl(url)}</Link>
        </Div>
      }
      subheader={
        <Div>
          <span>{validDate}</span> | <span>{by}</span> | <span>{score}</span>
        </Div>
      }
    ></Banner>
  );
};
