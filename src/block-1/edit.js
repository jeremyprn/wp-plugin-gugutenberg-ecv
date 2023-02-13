import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { Placeholder, Button } from "@wordpress/components";

import "./editor.scss";

export default function Edit(props) {
	const blockProps = useBlockProps();

	const onChangeContent = (event) => {
		props.setAttributes({ content: event });
	};

	const onSelectImage = (picture) => {
		props.setAttributes({
			pictureID: picture.id,
			pictureURL: picture.url,
			pictureAlt: picture.alt,
		});
	};

	const onRemoveImage = () => {
		props.setAttributes({
			pictureID: null,
			pictureURL: null,
			pictureAlt: null,
		});
	};

	return (
		<div {...blockProps} className="block-container">
			<div className="img-container">
				{!props.attributes.pictureID ? (
					<MediaUploadCheck className="image-wrapper">
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes={["image"]}
							value={props.attributes.pictureID}
							render={({ open }) => (
								<Placeholder
									icon="images-alt"
									label={__("Image", "capitainewp-gut-bases")}
								>
									<Button isLarge onClick={open} icon="upload">
										{__("Importer une image", "capitainewp-gut-bases")}
									</Button>
								</Placeholder>
							)}
						/>
					</MediaUploadCheck>
				) : (
					<span className="image-wrapper">
						<img
							src={props.attributes.pictureURL}
							alt={props.attributes.pictureAlt}
						/>
					</span>
				)}
				{props.isSelected && props.attributes.pictureID && (
					<Button
						className="remove-image"
						onClick={onRemoveImage}
						icon="dismiss"
					>
						{__("Supprimer l'image", "capitainewp-gut-bases")}
					</Button>
				)}
			</div>
			<div className="legend">
				<RichText
					tagName="p"
					placeholder={__(
						"Écrivez la légende de l'image...",
						"capitainewp-gut-bases"
					)}
					value={props.attributes.content}
					className="content"
					onChange={onChangeContent}
				/>
			</div>
		</div>
	);
}
