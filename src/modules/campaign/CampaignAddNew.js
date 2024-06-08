import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import FormRow from "../../components/common/FormRow";
import FormGroup from "../../components/common/FormGroup";
import { Label } from "../../components/label";
import Input from "../../components/input/Input";
import Dropdown from "../../components/dropdown/Dropdown";
import Select from "../../components/dropdown/index";
import { Textarea } from "../../components/input";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
import Button from "../../components/button/Button";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
	const { handleSubmit, control } = useForm();
	const [content, setContent] = useState("");

	const modules = useMemo(
		() => ({
			toolbar: [
				["bold", "italic", "underline", "strike"],
				["blockquote"],
				[{ header: 1 }, { header: 2 }], // custom button values
				[{ list: "ordered" }, { list: "bullet" }],
				[{ header: [1, 2, 3, 4, 5, 6, false] }],
				["link", "image"],
			],
			imageUploader: {
				// imgbbAPI
				// upload: async (file) => {
				//   const bodyFormData = new FormData();
				//   bodyFormData.append("image", file);
				//   const response = await axios({
				//     method: "post",
				//     url: imgbbAPI,
				//     data: bodyFormData,
				//     headers: {
				//       "Content-Type": "multipart/form-data",
				//     },
				//   });
				//   return response.data.data.url;
				// },
			},
		}),
		[],
	);

	const handleAddNewCampaign = (values) => {
		console.log("values: ", values);
	};
	return (
		<div className="bg-white rounded-xl py-10 px-[66px]">
			<div className="text-center">
				<h1 className="mb-10 py-4 px-14 bg-text4 rounded-xl font-bold text-[25px] inline-block bg-opacity-5">
					Start a Campaign 🚀
				</h1>
			</div>
			<form onSubmit={handleSubmit(handleAddNewCampaign)}>
				<FormRow>
					<FormGroup>
						<Label>Campaign Title *</Label>
						<Input
							control={control}
							name="title"
							placeholder="Write a title"
						></Input>
					</FormGroup>
					<FormGroup>
						<Label>Select a category *</Label>
						<Dropdown>
							<Dropdown.Select placeholder="Select the category"></Dropdown.Select>
							<Dropdown.List>
								<Dropdown.Option>Architecture</Dropdown.Option>
								<Dropdown.Option>Architecture</Dropdown.Option>
							</Dropdown.List>
						</Dropdown>
					</FormGroup>
				</FormRow>
				<FormGroup>
					<Label>Short Description *</Label>
					<Textarea
						name="Short_des"
						control={control}
						placeholder="Write a short description..."
					></Textarea>
				</FormGroup>
				<FormGroup>
					<Label>Story *</Label>
					<ReactQuill
						placeholder="Write your story..."
						modules={modules}
						theme="snow"
						value={content}
						onChange={setContent}
					></ReactQuill>
				</FormGroup>
				<FormRow>
					<FormGroup>
						<Label>Goal *</Label>
						<Input
							name="Goal"
							control={control}
							placeholder="$0.00 USD"
						></Input>
					</FormGroup>
					<FormGroup>
						<Label>Raised Amount *</Label>
						<Input
							name="Goal"
							control={control}
							placeholder="$0.00 USD"
						></Input>
					</FormGroup>
				</FormRow>
				<FormRow>
					<FormGroup>
						<Label>Amount Prefilled *</Label>
						<Input
							name="frefilled"
							control={control}
							placeholder="Amount Prefilled"
						></Input>
						<p className="text-sm text-left text-text3">
							It will help fill amount box by click, place each amount by comma,
							ex: 10, 20, 30
						</p>
					</FormGroup>
					<FormGroup>
						<Label>Video *</Label>
						<Input name="Video" control={control} placeholder="Video"></Input>
						<p className="text-sm text-left text-text3">
							Play Youtube or Video url
						</p>
					</FormGroup>
				</FormRow>
				<FormRow>
					<FormGroup>
						<Label>Campaign End Method *</Label>
						<Dropdown>
							<Dropdown.Select placeholder="Select one"></Dropdown.Select>
							<Dropdown.List>
								<Dropdown.Option>Architecture</Dropdown.Option>
								<Dropdown.Option>Architecture</Dropdown.Option>
							</Dropdown.List>
						</Dropdown>
					</FormGroup>
					<FormGroup>
						<Label>Country *</Label>
						<Dropdown>
							<Dropdown.Select placeholder="Select a country "></Dropdown.Select>
							<Dropdown.List>
								<Dropdown.Option>Architecture</Dropdown.Option>
								<Dropdown.Option>Architecture</Dropdown.Option>
							</Dropdown.List>
						</Dropdown>
					</FormGroup>
				</FormRow>
				<FormRow>
					<FormGroup>
						<Label>Start Date</Label>
						<Input
							name="start_date"
							control={control}
							placeholder="Start day"
						></Input>
					</FormGroup>

					<FormGroup>
						<Label>End Date</Label>
						<Input
							name="end_date"
							control={control}
							placeholder="End day"
						></Input>
					</FormGroup>
				</FormRow>
				<div className="mt-10 text-center">
					<Button className="px-10 mx-auto text-white bg-primary">
						Submit new campaign {""}
					</Button>
				</div>
			</form>
		</div>
	);
};

export default CampaignAddNew;
