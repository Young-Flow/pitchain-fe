import Clickable from '@components/Clickable/Clickable';
import Icon from '@components/Icon';
import { Link } from 'react-router';
import { SOCIAL_LOGIN_ARRAY } from '@constants/Sign';
import { For } from 'utilinent';

export default function SocialLogin() {
  return (
    <div className="flex flex-col gap-24">
      <For each={SOCIAL_LOGIN_ARRAY}>
        {({ type, text, url }) => (
          <Clickable
            key={type}
            shape="square"
            color={type}
            className="flex justify-between after:w-24 after:content-['']"
            Component={Link}
            to={url}
          >
            <Icon type={type} size={24} />
            {text}
          </Clickable>
        )}
      </For>
    </div>
  );
}
