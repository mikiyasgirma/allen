import { create } from 'zustand'

export interface Job {
  id: string,
  title: string,
  description: string,
  recruiter: string,
  skills_required: string[],
}

interface JobStore {
  jobs: Job[],
  addJob: (job: Job) => void;
  dataFetched: boolean;
  setDataFetched: (value: boolean) => void;
}

const useJobStore = create<JobStore>((set) => ({
 jobs: [],
 addJob: (job) => set((state) => ({jobs : [...state.jobs, job]})),
 dataFetched: false,
 setDataFetched: (value) => set({ dataFetched: value }),
}))

export default useJobStore;