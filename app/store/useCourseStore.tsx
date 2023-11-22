import { create } from 'zustand'

export interface Course {
  id: string,
  title: string,
  description: string,
  thumbnail: string,
  video: string,
}

interface courseStore {
  courses: Course[],
  addCourse: (course: Course) => void;
  courseDataFetched: boolean;
  setCourseDataFetched: (value: boolean) => void;
}

const useCourseStore = create<courseStore>((set) => ({
 courses: [],
 addCourse: (job) => set((state) => ({courses : [...state.courses, job]})),
 courseDataFetched: false,
 setCourseDataFetched: (value) => set({ courseDataFetched: value }),
}))

export default useCourseStore;