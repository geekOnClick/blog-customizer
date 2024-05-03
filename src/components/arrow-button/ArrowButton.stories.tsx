import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
	argTypes: {
		handleBtnClick: { action: 'clicked' },
		isReversed: { defaultValue: false },
	},
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const ArrowButtonStory: Story = {
	render: () => {
		return (
			<>
				<ArrowButton
					isReversed={false}
					handleBtnClick={() => console.log('Button clicked')}
				/>
			</>
		);
	},
};
