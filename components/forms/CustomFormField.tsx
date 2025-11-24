import {
    FormField,
    FormItem,
    FormControl,
    FormMessage,
    FormLabel,
    Form
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Control } from 'react-hook-form';
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select';

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    SELECT = 'select',
}

interface CustomInputProps {
    control: Control<any>;
    name: string;
    fieldType: FormFieldType;
    label?: string;
    placeholder?: string;
    options?: { value: string; label: string }[];
     disabled?: boolean; 
    children?: React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomInputProps }) => {
    switch (props.fieldType) {
        case FormFieldType.INPUT:
            return(
                <FormControl>
                    <Input 
                    {...field}
                    placeholder={props.placeholder}
                    className='shad-input'
                    />
                </FormControl>
            );
        case FormFieldType.TEXTAREA:
            return(
                <FormControl>
                    <Textarea 
                    {...field}
                    placeholder={props.placeholder}
                    className='shad-textarea'
                    />
                </FormControl>
            );
        case FormFieldType.SELECT:
            return (
                 <FormControl>
                     <Select onValueChange={field.onChange} defaultValue={field.value} disabled={props.disabled}>
                         <SelectTrigger className="shad-select w-full ">
                             <SelectValue placeholder={props.placeholder} />
                         </SelectTrigger>
                         <SelectContent className="shad-content bg-dark-200 text-white">
                             {props.options?.map((option) => (
                                 <SelectItem key={option.value} value={option.value}>
                                     {option.label}
                                 </SelectItem>
                             ))}
                         </SelectContent>
                     </Select>
                 </FormControl>
             );
        default:
            return null;
    }
}

export function CustomFormField(props: CustomInputProps) {
    const { control, name, label } = props;
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                {label && <FormLabel className="shad-input-label">{label}</FormLabel>}
                <RenderField field={field} props={props} />
                <FormMessage className="text-red-500" />
                </FormItem>
            )}
        />
    );
}

export default CustomFormField