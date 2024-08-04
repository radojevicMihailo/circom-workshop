const { readFileSync } = require("fs");
const { plonk } = require("snarkjs");

async function proving() {
	let inputs = JSON.parse(readFileSync("input4.json"));

    const { proof, publicSignals } = await plonk.fullProve(inputs, "kolo4.wasm", "kolo4_final.zkey");

    const vKey = JSON.parse(readFileSync("verification_key4.json"));

    let res = await plonk.verify(vKey, publicSignals, proof);

    if (res === true) {
        console.log("Verification OK");
    } else {
        console.log("Invalid proof");
    }
}

proving().then(() => {
    process.exit(0);
});