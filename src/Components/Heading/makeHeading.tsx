import React from 'react';
import classNames from 'classnames';
const styles = require('./Heading.css');

interface makeHeadingProps {
	size?: '1' | '2' | '3' | '4' | '5' | '6';
	children: any;
	className?: string;
	propsCN?: string;
	bold?: boolean;
}

export function makeHeading(h:number) {
	const defaultSizeStyle = styles[`like-h${h}`];
	return ({ size, children, className: propsCN, bold }: makeHeadingProps) => {
		const sizeStyle = size ? styles[size] : defaultSizeStyle;
		const className = classNames(styles.heading, propsCN, sizeStyle, {
			[styles.bold]: bold,
		});
		return React.createElement(`h${h}`, { className }, children);
	};
}
