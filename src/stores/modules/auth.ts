import type { Module } from 'vuex'

import type { RootState } from '..'
import type { AuthState } from '@/types'
import getData from '@/common/fake-api'

const authModule: Module<AuthState, RootState> = {
    namespaced: true,
    state: {
        is_authenticated: false,
        access_token: null,
        user: null,
    },
    actions: {
        async login({ commit }, credentials) {
            console.log(credentials)
            commit('setUserData', await getData('userLogin'))
        },
        logout({ commit }) {
            commit('removeUserData')
        },
    },
    mutations: {
        setUserData(state, payload) {
            state.user = payload.user
            state.is_authenticated = true
            state.access_token = payload.access_token
        },
        removeUserData(state) {
            state.user = null
            state.is_authenticated = false
            state.access_token = null
        },
    },
}

export default authModule
