import { Header } from "../../../components/Header";
import { Nav, Left, Center, Right } from "../../../components/Nav";
import { Icon } from "../../../elements/Icon";
import { goBack, state } from "../state";

export const DemoHeader = (props: { title: string; showBack?: boolean }) => {
  const canBack = props.showBack !== false && state.step > 1;
  return (
    <Header transparent class="!text-neutral-900">
      <Nav>
        <Left>
          {canBack && (
            <button
              class="row aic gap-1 text-violet-600 px-2 py-1 font-medium"
              onClick={goBack}
            >
              <Icon id="chevron-backward" size="4" class="text-violet-600" />
              <span>Back</span>
            </button>
          )}
        </Left>
        <Center>
          <span class="font-semibold text-base text-neutral-900">
            {props.title}
          </span>
        </Center>
        <Right />
      </Nav>
    </Header>
  );
};
