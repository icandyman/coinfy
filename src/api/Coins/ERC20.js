import { bigNumber } from '/api/numbers'
// import { padLeft } from '/api/strings'
// import JSONRpc from '/api/jsonrpc'
import {
    url,
    api_url,
    api_key,
    url_myetherapi,
    // removeHexPrefix
    fetchSummary,
    fetchTxs
} from '/api/Coins/ETH'
import { ERC20 } from '/const/coin_types'

export {
    ascii,
    format,
    encrypt,
    decrypt,
    urlInfoTx,
    fetchBalance,
    fetchSummary,
    fetchTxs
} from './ETH' // '/api/Coins/ETH' not working

export const type = ERC20

export function urlInfoRaw(address, handler) {
    return `${url}/token/${handler}?a=${address}`
}

// // https://tokenstandard.codetract.io/
// const instruction_getbalance = '0x70a08231'
// const instruction_transfer = '0xa9059cbb'

// function getBalance(address, contract_address) {
//     return JSONRpc(url_myetherapi, 'eth_call', [
//         {
//             to: contract_address,
//             data: `${instruction_transfer}${padLeft(
//                 removeHexPrefix(address),
//                 64
//             )}`
//         },
//         '0x00'
//     ])
//         .then(response => response.json())
//         .then(response => {
//             console.log(
//                 response,
//                 // bigNumber(response.result)
//                 //     .div(bigNumber(10).pow(18))
//                 //     .toString()
//             )
//         })
// }

// getBalance(
//     '0x6a4669e9cc75b1a1d53990f291c82ff45076310c',
//     '0x960b236a07cf122663c4303350609a66a7b288c0'
// )