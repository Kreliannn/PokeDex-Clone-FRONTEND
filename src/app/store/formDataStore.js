import { create } from "zustand";

let useFormData = create((set) => ({
    formData : null,
    setFormData : (data) => set({formData : data})
}))

export default useFormData