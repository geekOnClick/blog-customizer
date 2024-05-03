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
	defaultArticleState,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

type Props = {
	isFormOpen: boolean;
	setIsFormOpen: (isFormOpen: boolean) => void;
	applyPageChanges: (pageParams: Record<string, OptionType>) => void;
};

export const ArticleParamsForm = ({
	applyPageChanges,
	isFormOpen,
	setIsFormOpen,
}: Props) => {
	const [isBtnReversed, setIsBtnReversed] = useState(false);
	const [font, setFont] = useState(defaultArticleState.fontFamilyOption);
	const [fontSize, setFontSize] = useState(defaultArticleState.fontSizeOption);
	const [fontColor, setFontColor] = useState(defaultArticleState.fontColor);
	const [backgroundColor, setBackgroundColor] = useState(
		defaultArticleState.backgroundColor
	);
	const [contentWidth, setContentWidth] = useState(
		defaultArticleState.contentWidth
	);

	const reset = () => {
		setFont(defaultArticleState.fontFamilyOption);
		setFontSize(defaultArticleState.fontSizeOption);
		setFontColor(defaultArticleState.fontColor);
		setBackgroundColor(defaultArticleState.backgroundColor);
		setContentWidth(defaultArticleState.contentWidth);

		applyPageChanges({
			font: defaultArticleState.fontFamilyOption,
			fontSize: defaultArticleState.fontSizeOption,
			fontColor: defaultArticleState.fontColor,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidth: defaultArticleState.contentWidth,
		});
	};

	const submit = (e: React.FormEvent<HTMLFormElement>) => {
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
				className={clsx(styles.container, {
					[styles.container_open]: isFormOpen,
				})}>
				<form className={styles.form} onSubmit={(e) => submit(e)}>
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
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
