import { useState } from 'react';
import { clsx } from 'clsx';

import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { Text } from '../text';
import { Select } from '../select';
import {
	fontColors as fontColorsOptions,
	backgroundColors as backgroundColorsOptions,
	fontFamilyOptions,
	fontSizeOptions,
	contentWidthArr,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

type Props = {
	applyPageChanges: (pageParams: Record<string, OptionType>) => void;
};

export const ArticleParamsForm = ({ applyPageChanges }: Props) => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [isBtnReversed, setIsBtnReversed] = useState(false);
	const [font, setFont] = useState(fontFamilyOptions[0]);
	const [fontSize, setFontSize] = useState(fontSizeOptions[0]);
	const [fontColor, setFontColor] = useState(fontColorsOptions[0]);
	const [backgroundColor, setBackgroundColor] = useState(
		backgroundColorsOptions[0]
	);
	const [contentWidth, setContentWidth] = useState(contentWidthArr[0]);

	const reset = () => {
		setFont(fontFamilyOptions[0]);
		setFontSize(fontSizeOptions[0]);
		setFontColor(fontColorsOptions[0]);
		setBackgroundColor(backgroundColorsOptions[0]);
		setContentWidth(contentWidthArr[0]);
	};

	const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		applyPageChanges({
			font,
			fontSize,
			fontColor,
			backgroundColor,
			contentWidth,
		});
		setIsBtnReversed(!isBtnReversed);
		setIsFormOpen(false);
	};
	return (
		<>
			<ArrowButton
				handleBtnClick={() => setIsFormOpen(!isFormOpen)}
				isReversed={isFormOpen}
			/>
			<aside
				className={
					`${styles.container} ` + `${isFormOpen && styles.container_open}`
				}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase family='open-sans'>
						Задайте параметры
					</Text>
					<div className={styles.space}>
						<Select
							options={fontFamilyOptions}
							selected={font}
							onChange={(font) => setFont(font)}
							title='Шрифт'
						/>
					</div>
					<div className={styles.space}>
						<RadioGroup
							name='fontSize'
							options={fontSizeOptions}
							selected={fontSize}
							onChange={(size) => setFontSize(size)}
							title='Размер шрифта'
						/>
						<div className={styles.space}>
							<Select
								options={fontColorsOptions}
								selected={fontColor}
								onChange={(color) => setFontColor(color)}
								title='Цвет шрифта'
							/>
						</div>
						<div className={styles.space}>
							<Separator />
						</div>
						<div className={styles.space}>
							<Select
								options={backgroundColorsOptions}
								selected={backgroundColor}
								onChange={(color) => setBackgroundColor(color)}
								title='Цвет фона'
							/>
						</div>
						<div className={styles.space}>
							<Select
								options={contentWidthArr}
								selected={contentWidth}
								onChange={(width) => setContentWidth(width)}
								title='Ширина контента'
							/>
						</div>
					</div>
					<div className={clsx(styles.bottomContainer, styles.space)}>
						<Button title='Сбросить' type='reset' onClick={reset} />
						<Button
							title='Применить'
							type='submit'
							onClick={(e) => submit(e)}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
