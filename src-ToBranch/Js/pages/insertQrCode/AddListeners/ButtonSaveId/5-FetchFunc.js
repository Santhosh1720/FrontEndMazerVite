import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from '../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFactoryName = localStorage.getItem("FactoryName");

    let jVarLocalFetchUrl = `${ConfigJson.PostUrl}`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    let data = await response.json();

    return await data;
};

export { StartFunc };