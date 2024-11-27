import { Meta, StoryObj } from '@storybook/react';
import StickyFooter from '../common/components/StickyFooter';
import ActionBar from '../common/components/ActionBar';
import MainButton from '../common/components/MainButton';
import Flex from '../common/components/Flex';
import { css } from '@emotion/react';
import theme from '../theme';
import { Typography } from '../common/components';
import ViewportContainer from '../common/components/ViewportContainer';

const meta = {
  title: 'common/StickyFooter',
  component: StickyFooter,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  decorators: (Story) => (
    <ViewportContainer>
      <Typography variant="body3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nullam non nisi est sit amet facilisis magna etiam
        tempor. Sit amet luctus venenatis lectus magna fringilla urna. Nunc
        congue nisi vitae suscipit tellus mauris. Amet consectetur adipiscing
        elit pellentesque habitant morbi tristique senectus et. Ultrices gravida
        dictum fusce ut placerat orci nulla pellentesque dignissim. Velit
        dignissim sodales ut eu sem integer vitae justo. Proin fermentum leo vel
        orci porta non. In hac habitasse platea dictumst vestibulum rhoncus est
        pellentesque. Mi tempus imperdiet nulla malesuada pellentesque elit eget
        gravida cum. Ultrices mi tempus imperdiet nulla malesuada pellentesque
        elit eget gravida. At imperdiet dui accumsan sit amet nulla facilisi
        morbi tempus. Tortor at risus viverra adipiscing at in tellus integer
        feugiat. In eu mi bibendum neque egestas congue quisque egestas diam.
        Auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet.
        Tellus pellentesque eu tincidunt tortor aliquam nulla. Semper viverra
        nam libero justo laoreet sit amet cursus sit. Orci ac auctor augue
        mauris augue neque gravida. Tempor commodo ullamcorper a lacus
        vestibulum sed arcu. Id neque aliquam vestibulum morbi blandit cursus
        risus at. Mauris a diam maecenas sed enim ut sem viverra aliquet.
        Pretium fusce id velit ut tortor pretium viverra. Donec ultrices
        tincidunt arcu non sodales neque sodales ut etiam. Enim facilisis
        gravida neque convallis a cras semper auctor. Massa tincidunt dui ut
        ornare lectus sit amet est. Posuere ac ut consequat semper viverra nam
        libero justo laoreet. Sed id semper risus in hendrerit gravida rutrum
        quisque. Pellentesque elit eget gravida cum sociis natoque penatibus.
        Nibh praesent tristique magna sit amet purus gravida quis blandit. Non
        pulvinar neque laoreet suspendisse interdum consectetur libero id
        faucibus.Nisi est sit amet facilisis magna etiam tempor orci. Ultricies
        lacus sed turpis tincidunt id aliquet risus. Ut tortor pretium viverra
        suspendisse potenti nullam ac tortor. Eget dolor morbi non arcu risus
        quis varius quam. Tellus integer feugiat scelerisque varius morbi enim
        nunc faucibus a. Enim nec dui nunc mattis enim ut tellus elementum
        sagittis. Volutpat lacus laoreet non curabitur gravida arcu ac tortor
        dignissim. Purus faucibus ornare suspendisse sed nisi lacus sed viverra
        tellus. Ipsum dolor sit amet consectetur adipiscing elit duis tristique
        sollicitudin. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper
        malesuada proin. Aliquam sem et tortor consequat id porta nibh venenatis
        cras. Ultrices tincidunt arcu non sodales neque sodales ut etiam.
        Malesuada bibendum arcu vitae elementum curabitur vitae nunc.
        Suspendisse sed nisi lacus sed viverra tellus. Ut placerat orci nulla
        pellentesque dignissim enim sit amet venenatis. Sed lectus vestibulum
        mattis ullamcorper velit sed ullamcorper morbi tincidunt.s
      </Typography>
      <Story />
    </ViewportContainer>
  ),
  args: {
    as: 'section',
    children: (
      <ActionBar
        actionSlot={
          <MainButton>
            <Flex gap="20px">
              <span>30,200원 결제하기</span>
              <Flex
                cx={css({
                  borderRadius: theme.radii.circle,
                  width: '27px',
                  height: '27px',
                  backgroundColor: theme.colors.gray.white,
                  color: theme.colors.gray.black,
                })}
              >
                <Typography variant="body3">3</Typography>
              </Flex>
            </Flex>
          </MainButton>
        }
      />
    ),
  },
};
