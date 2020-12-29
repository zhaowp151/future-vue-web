
const state = {
    token: null,
    pageInfo: null,
    userInfo: null,
    operations: null,
}

const getters = {
    getToken(state) {
        return state.token
    },

    getPageInfo(state) {
        return state.pageInfo
    },

    getUserInfo(state) {
        return state.userInfo
    },

    getOperations(state) {
        return state.operations
    }
}

const mutations = {
    setToken(state, token) {
        state.token = token
        sessionStorage.setItem('token', token)
    },

    logout(state) {
        state.token = null
        sessionStorage.clear()
    },

    setPageInfo(state, pageInfo) {
        state.pageInfo = pageInfo && [...pageInfo]
        sessionStorage.setItem('pageInfo', JSON.stringify(pageInfo))
    },

    setUserInfo(state, userInfo) {
        state.userInfo = userInfo
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
    },

    // 存入用户的操作权限id
    setOperations(state, operations) {
        state.operations = operations
        sessionStorage.setItem('operations', JSON.stringify(operations))
    }



    // logisticsUser (state, {evtpRole, operation}) {
    //   sessionStorage.setItem('evtpRole', JSON.stringify(evtpRole))
    //   sessionStorage.setItem('operation', JSON.stringify(operation))
    // },
    // userReg (state, token) {
    //   sessionStorage.setItem('token', JSON.stringify(token))
    //   state.token = token
    // }
}

export default {
    state,
    getters,
    mutations
}
