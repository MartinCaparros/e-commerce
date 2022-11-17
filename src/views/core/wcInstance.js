import axios from "axios";
import Oauth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";

const baseUrl = 'https://hipno.com.ar/wp-json/wc/v3';

function getOauth() {
    return Oauth({
        consumer: {
            key: process.env.REACT_APP_CLIENT_KEY_TEST,
            secret: process.env.REACT_APP_CLIENT_PASS_TEST
            },
        signature_method: "HMAC-SHA1",
        hash_function: function(base_string, key) {
            return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
        }
    });
}
  

const makeRequest = (endpoint, method) => {
    const oauth = getOauth();

    const requestData = {
        url: baseUrl + endpoint,
        method
    };

    const requestHTTP = requestData.url + (requestData.url.includes('?') ? '&' : '?') + jQuery.param(oauth.authorize(requestData));

    return axios.get(requestHTTP);
}

export default makeRequest;

//consumerPROD: ck_4399bc03f325c9b414ea1666142c8f2b1762d044
//secretProd: cs_c251a7eb6d18875a4019d511408e11ca56a4d872