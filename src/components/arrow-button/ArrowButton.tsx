import { clsx } from 'clsx';

import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

interface ArrowButtonProps {
	handleBtnClick: OnClick;
	isReversed: boolean;
}

export const ArrowButton = ({
	handleBtnClick,
	isReversed,
}: ArrowButtonProps) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, {
				[styles.container_open]: isReversed,
			})}
			onClick={handleBtnClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: isReversed })}
			/>
		</div>
	);
};
