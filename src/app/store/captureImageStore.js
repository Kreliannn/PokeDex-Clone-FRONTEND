import { create } from "zustand";

let useCaptureImageStore = create((set) => ({
    img : null,
    setImg : (data) => set({img : data})
}))

export default useCaptureImageStore