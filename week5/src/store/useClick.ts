import { create } from 'zustand';

interface ClickState {
    clicked: boolean;
    setClicked: (value: boolean) => void;
}

export const useClickStore = create<ClickState>((set) => ({
    clicked: false,
    setClicked: (value) => set(() => ({clicked : value}))
}));