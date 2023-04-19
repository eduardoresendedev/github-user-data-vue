import { defineStore } from "pinia";

export const useSearchHistoryStore = defineStore('searchHistory', {
    state: () => {
        return {
            users: []
        }
    },
    actions: {
        pushToHistory(username) {
            this.users.unshift(username)
        }
    }
})