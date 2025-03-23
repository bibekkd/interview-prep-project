import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, FieldValues, Control, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    description?: string;
    type?: "text" | "password" | "email" | "number" | "file";
}

export const FormField = ({ name, control, label, placeholder, description, type = "text"} : FormFieldProps<T>) => (
    <Controller 
        name={name} 
        control = {control} 
        render = {({ field }) => (
            <FormItem>
            <FormLabel className="label">{label}</FormLabel>
            <FormControl>
                <Input 
                    className="input" 
                    placeholder={placeholder} 
                    type={type}
                    {...field} 
                />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
    />
)

