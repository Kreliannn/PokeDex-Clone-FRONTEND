import { create } from "zustand";

let useFormData = create((set) => ({
    formData : null,
    setFormData : (data) => set({img : data})
}))

export default useCaptureImageStore