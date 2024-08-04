const { readFileSync } = require("fs");
const { groth16 } = require("snarkjs");

async function proving() {
	let inputs = JSON.parse(readFileSync("input3.json"));

	const { proof, publicSignals } = await groth16.fullProve(inputs, "kolo3.wasm", "kolo3_final.zkey");

    const vKey = JSON.parse(readFileSync("verification_key3.json"));

    let res = await groth16.verify(vKey, publicSignals, proof);

    if (res === true) {
        console.log("Verification OK");
    } else {
        console.log("Invalid proof");
    }
}

proving().then(() => {
    process.exit(0);
});