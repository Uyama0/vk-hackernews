import { Group, SimpleCell } from "@vkontakte/vkui";
import { FeedUpdateButton } from "features/feedUpdateButton";

export const FeedHeader = () => {
  return (
    <Group>
      <SimpleCell after={<FeedUpdateButton />}>Список новостей</SimpleCell>
    </Group>
  );
};
