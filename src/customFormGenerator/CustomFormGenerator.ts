import {AddProductList, CustomFieldValidator, CustomFormField, QrCodeDetailModel, QrDetailModel} from '@/model';
import {
  CustomFieldValidatorDto,
  CustomFormFieldDto,
  CustomFormFieldType,
} from '@/dtos';
import {CustomFormFieldList} from '@/model/CustomFormFieldList';

export enum LoginFormIDs {
  userId = 'userId',
  password = 'password',
}
export enum RejectNotesIDs{
  notes = 'remark'
}
export enum InspectionIDs{
  remark = 'remark',
  reason = 'reason',
  item = 'item',
}
export enum ProductIDs{
  ItemName = 'ItemName',
  ItemCode = 'ItemCode',
  Category = 'Category',
}

class CustomFormGenerator {
  private generateField(
    customFormFieldDto: CustomFormFieldDto,
  ): CustomFormField {
    return new CustomFormField(customFormFieldDto);
  }

  private generateValidator(
    customFileValidator: CustomFieldValidatorDto,
  ): CustomFieldValidator {
    return new CustomFieldValidator(customFileValidator);
  }

  generateLoginForm(): CustomFormFieldList {
    const fields: CustomFormFieldList = new CustomFormFieldList([]);
    fields.addItem(
      this.generateField({
        id: LoginFormIDs.userId,
        type: CustomFormFieldType.textInput,
        label: 'User ID',
        validator: this.generateValidator({
          required: true,
        }),
        textInputProps: {
          keyboardType: 'default',
          autoCapitalize: 'none',
        },
      }),
    );
    fields.addItem(
      this.generateField({
        id: LoginFormIDs.password,
        type: CustomFormFieldType.password,
        label: 'Password',
        validator: this.generateValidator({
          required: true,
        }),
        textInputProps: {
          secureTextEntry: true,
          autoCapitalize: 'none',
        },
      }),
    );
    return fields;
  }


  generateRejectNotesForm(): CustomFormFieldList {
    const fields: CustomFormFieldList = new CustomFormFieldList([]);
    fields.addItem(this.generateField({
      id: RejectNotesIDs.notes,
      type: CustomFormFieldType.textArea,
      label: "Notes",
      validator: this.generateValidator({
        required: true,
      }),
      textInputProps: {
        keyboardType: 'default',
        autoCapitalize: 'none',
      },
    }));
    return fields
  }

  generateInspectionForm(option:QrCodeDetailModel): CustomFormFieldList {
    const fields: CustomFormFieldList = new CustomFormFieldList([]);
    fields.addItem(this.generateField({
      id: InspectionIDs.item,
      type: CustomFormFieldType.dropdown,
      label: "Item",
      options:option.itemList.getLabelValuePair(),
      validator: this.generateValidator({
        required: true,
      }),
      textInputProps: {
        keyboardType: 'default',
        autoCapitalize: 'none',
      },
    }));
    fields.addItem(this.generateField({
      id: InspectionIDs.reason,
      type: CustomFormFieldType.dropdown,
      label: "Reason",
      options:option.reasonList.getLabelValuePair(),
      validator: this.generateValidator({
        required: true,
      }),
      textInputProps: {
        keyboardType: 'default',
        autoCapitalize: 'none',
      },
    }));
    fields.addItem(this.generateField({
      id: InspectionIDs.remark,
      type: CustomFormFieldType.textArea,
      label: "Remark",
      validator: this.generateValidator({
        required: false,
      }),
      textInputProps: {
        keyboardType: 'default',
        autoCapitalize: 'none',
      },
    }));
    return fields
  }

  generateProductForm(option:AddProductList): CustomFormFieldList {
    const fields: CustomFormFieldList = new CustomFormFieldList([]);
    fields.addItem(this.generateField({
      id: ProductIDs.ItemName,
      type: CustomFormFieldType.textInput,
      label: "Item Name",
      validator: this.generateValidator({
        required: true,
      }),
      textInputProps: {
        keyboardType: 'default',
        autoCapitalize: 'none',
      },
    }));
    fields.addItem(this.generateField({
      id: ProductIDs.ItemCode,
      type: CustomFormFieldType.textInput,
      label: "Item Code",
      validator: this.generateValidator({
        required: true,
      }),
      textInputProps: {
        keyboardType: 'default',
        autoCapitalize: 'none',
      },
    }));
    fields.addItem(this.generateField({
      id: ProductIDs.Category,
      type: CustomFormFieldType.dropdown,
      label: "Category",
      options:option.getLabelValuePair(),
      validator: this.generateValidator({
        required: true,
      }),
      textInputProps: {
        keyboardType: 'default',
        autoCapitalize: 'none',
      },
    }));
    return fields
  }

}

export const customFormGenerator = new CustomFormGenerator();
