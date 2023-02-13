import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save(props) {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps} className="test">
			<RichText.Content
				tagName="p"
				className="content"
				value={props.attributes.content}
			/>
			{props.attributes.pictureID && (
				<p {...blockProps}>
					<img
						src={props.attributes.pictureURL}
						alt={props.attributes.pictureAlt}
					/>
				</p>
			)}
		</div>
	);
}
