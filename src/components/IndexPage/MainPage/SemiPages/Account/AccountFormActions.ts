
// User Form State

export const userTgId = (tgId: string) => {
    return {
        type: "tg_id",
        payload: tgId
    }
}

export const userAlias = (alias: string) => {
    return {
        type: "alias",
        payload: alias
    }
}

export const userTvToken = (token: string) => {
    return {
        type: "tv_access_token",
        payload: token
    }
}

export const userUpdate = (data: any) => {
    return {
        type: "update",
        payload: data
    }
}

// Exchange Form State

export const exchangeUpdate = (data: any) => {
    return {
        type: "update",
        payload: data
    }
}

export const exchangeName = (name: string) => {
    return {
        type: "exchange_name",
        payload: name
    }
}

export const exchangePublicKey = (key: string) => {
    return {
        type: "api_key",
        payload: key
    }
}

export const exchangeSecretKey = (key: string) => {
    return {
        type: "api_secret",
        payload: key
    }
}

export const exchangeEnabled = (data: boolean) => {
    return {
        type: "enabled",
        payload: data
    }
}

//  Update Password State

export const passwordOld = (password: string) => {
    return {
        type: "old_password",
        payload: password
    }
}

export const passwordNew = (password: string) => {
    return {
        type: "new_password",
        payload: password
    }
}

export const passwordConfirm = (password: string) => {
    return {
        type: "confirm_password",
        payload: password
    }
}

export const passwordReset = () => {
    return {
        type: "reset"
    }
}

export const passwordRequest = () =>  {
    return {
        type: "request"
    }
}

export const passwordSuccess = () => {
    return {
        type: "success"
    }
}

export const passwordFailed = (error: any) => {
    return {
        type: "failed",
        payload: error
    }
}