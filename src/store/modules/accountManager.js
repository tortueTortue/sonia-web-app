import axios from "axios";

const be_api_url = "http://localhost:8000";

const state = {
    name,
    username,
    isConnected
}

const mutations = {
    accountConnectionAttempt(state, username, password) {
        axios
            .post(be_api_url + "/api/connection/" + username + "/" + password

            )
            .then(response => {
                console.log("Response : " + response.data);
                if (response.data.isWrong) {
                    console.log("Unable to connect the user : " + username + ". Wrong password or username.");
                    return false;
                }
                console.log("Here are the modules to be loaded : " + response.data);
                state.name = response.data.name
                state.username = response.data.username
                console.log("The user : " + name + " has been connected");
                loadPreferences(state.username)
            })
            .catch(function(error) {
                console.log("There was an connecting the user : " + error);
            });

    }
}

export default {
    state,
    mutations
}