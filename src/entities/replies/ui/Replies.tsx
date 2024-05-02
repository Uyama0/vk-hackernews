import { FC } from "react";

import { TRepliesKids } from "../model/types";

import { useFetchReplies } from "../model/hooks";
import styles from "./styles.module.css";

export const Replies: FC<TRepliesKids> = ({ kids }) => {
  const { replies } = useFetchReplies(kids);

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
