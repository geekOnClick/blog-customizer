import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { OptionType, defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
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
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': font,
					'--font-size': fontSize,
					'--font-color': fontColor,
					'--container-width': contentWidth,
					'--bg-color': backgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm applyPageChanges={applyPageChanges} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
