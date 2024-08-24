import {useForm} from "react-hook-form";

export const useAppForm = () => {
    const {register,
        reset,
        handleSubmit,
        formState:{errors,isSubmitSuccessful}} =useForm();

    return{
        register,
        reset,
        handleSubmit,
        errors,
        isSubmitSuccessful
    }
}