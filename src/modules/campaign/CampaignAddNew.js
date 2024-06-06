import React from "react";
import { useForm } from "react-hook-form";
import FormRow from "../../components/common/FormRow";
import FormGroup from "../../components/common/FormGroup";
import { Label } from "../../components/label";
import Input from "../../components/input/Input";

const CampaignAddNew = () => {
  const { handlSubmit, control } = useForm();
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="mb-10 py-4 px-14 bg-text4 rounded-xl font-bold text-[25px] inline-block bg-opacity-5">
          Start a Campaign 🚀
        </h1>
        <form>
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
            </FormGroup>
          </FormRow>
        </form>
      </div>
    </div>
  );
};

export default CampaignAddNew;
