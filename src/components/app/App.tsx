import { CSSProperties, useState } from 'react';

import styles from '../../styles/index.module.scss';
import { OptionType, defaultArticleState } from 'src/constants/articleProps';
import { ArticleParamsForm } from '../article-params-form';
import { Article } from '../article';

export const App = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [font, setFont] = useState(defaultArticleState.fontFamilyOption.value);
	const [fontSize, setFontSize] = useState(
		defaultArticleState.fontSizeOption.value
	);
	const [fontColor, setFontColor] = useState(
		defaultArticleState.fontColor.value
	);
	const [backgroundColor, setBackgroundColor] = useState(
		defaultArticleState.backgroundColor.value
	);
	const [contentWidth, setContentWidth] = useState(
		defaultArticleState.contentWidth.value
	);

	const applyPageChanges = (pageParams: Record<string, OptionType>) => {
		setFont(pageParams.font.value);
		setFontSize(pageParams.fontSize.value);
		setFontColor(pageParams.fontColor.value);
		setBackgroundColor(pageParams.backgroundColor.value);
		setContentWidth(pageParams.contentWidth.value);
	};

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': font,
					'--font-size': fontSize,
					'--font-color': fontColor,
					'--container-width': contentWidth,
					'--bg-color': backgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm
				isFormOpen={isFormOpen}
				setIsFormOpen={setIsFormOpen}
				applyPageChanges={applyPageChanges}
			/>
			<Article isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
		</main>
	);
};
