import { FC, useState, useEffect } from "react";

import { TRepliesKids } from "../model/types";
import { TReplies } from "../model/types";

import { getCommentReplies } from "../api/fetchers";

import styles from "./styles.module.css";
import { ContentCard, Div, SimpleCell } from "@vkontakte/vkui";

export const Replies: FC<TRepliesKids> = ({ kids }) => {
  const [replies, setReplies] = useState<TReplies[]>([]);

  useEffect(() => {
    const fetchReplies = async () => {
      const repliesData = await Promise.all(
        kids.map((kid) => getCommentReplies(kid))
      );
      setReplies(repliesData);
    };

    fetchReplies();
  }, [kids]);

  return (
    <>
      {replies.map((reply) => (
        <div key={reply.id} style={{ marginLeft: 30 }}>
          <div className={styles.reply_card}>
            <p>{reply.by}</p>
            <p>{reply.text}</p>
          </div>
          {reply.kids && reply.kids.length > 0 && <Replies kids={reply.kids} />}
        </div>
      ))}
    </>
  );
};
